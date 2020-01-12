/*
 * Copyright 2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ethbridge

import (
	"context"
	"math/big"
	"strings"

	errors2 "github.com/pkg/errors"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	ethcommon "github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/ethclient"

	"github.com/offchainlabs/arbitrum/packages/arb-util/common"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/arbbridge"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/ethbridge/pendingtopchallenge"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/structures"
)

var pendingTopBisectedID ethcommon.Hash
var pendingTopOneStepProofCompletedID ethcommon.Hash

func init() {
	parsed, err := abi.JSON(strings.NewReader(pendingtopchallenge.PendingTopChallengeABI))
	if err != nil {
		panic(err)
	}
	pendingTopBisectedID = parsed.Events["Bisected"].ID()
	pendingTopOneStepProofCompletedID = parsed.Events["OneStepProofCompleted"].ID()
}

type PendingTopChallenge struct {
	*BisectionChallenge
	Challenge *pendingtopchallenge.PendingTopChallenge
}

func NewPendingTopChallenge(address ethcommon.Address, client *ethclient.Client, auth *bind.TransactOpts) (*PendingTopChallenge, error) {
	bisectionChallenge, err := NewBisectionChallenge(address, client, auth)
	if err != nil {
		return nil, err
	}
	vm := &PendingTopChallenge{BisectionChallenge: bisectionChallenge}
	err = vm.setupContracts()
	return vm, err
}

func (c *PendingTopChallenge) setupContracts() error {
	challengeManagerContract, err := pendingtopchallenge.NewPendingTopChallenge(c.address, c.client)
	if err != nil {
		return errors2.Wrap(err, "Failed to connect to PendingTopChallenge")
	}

	c.Challenge = challengeManagerContract
	return nil
}

func (c *PendingTopChallenge) StartConnection(ctx context.Context, outChan chan arbbridge.Notification, errChan chan error) error {
	if err := c.BisectionChallenge.StartConnection(ctx, outChan, errChan); err != nil {
		return err
	}
	if err := c.setupContracts(); err != nil {
		return err
	}
	header, err := c.client.HeaderByNumber(ctx, nil)
	if err != nil {
		return err
	}

	filter := ethereum.FilterQuery{
		Addresses: []ethcommon.Address{c.address},
		Topics: [][]ethcommon.Hash{{
			pendingTopBisectedID,
			pendingTopOneStepProofCompletedID,
		}},
	}

	logs, err := c.client.FilterLogs(ctx, filter)
	if err != nil {
		return err
	}
	for _, log := range logs {
		if err := c.processEvents(ctx, log, outChan); err != nil {
			return err
		}
	}

	filter.FromBlock = header.Number
	logChan := make(chan types.Log)
	logSub, err := c.client.SubscribeFilterLogs(ctx, filter, logChan)
	if err != nil {
		return err
	}

	go func() {
		defer logSub.Unsubscribe()

		for {
			select {
			case <-ctx.Done():
				break
			case log := <-logChan:
				if err := c.processEvents(ctx, log, outChan); err != nil {
					errChan <- err
					return
				}
			case err := <-logSub.Err():
				errChan <- err
				return
			}
		}
	}()
	return nil
}

func (c *PendingTopChallenge) processEvents(ctx context.Context, log types.Log, outChan chan arbbridge.Notification) error {
	event, err := func() (arbbridge.Event, error) {
		if log.Topics[0] == pendingTopBisectedID {
			eventVal, err := c.Challenge.ParseBisected(log)
			if err != nil {
				return nil, err
			}
			return arbbridge.PendingTopBisectionEvent{
				ChainHashes: hashSliceToHashes(eventVal.ChainHashes),
				TotalLength: eventVal.TotalLength,
				Deadline:    common.TimeTicks{Val: eventVal.DeadlineTicks},
			}, nil
		} else if log.Topics[0] == pendingTopOneStepProofCompletedID {
			_, err := c.Challenge.ParseOneStepProofCompleted(log)
			if err != nil {
				return nil, err
			}
			return arbbridge.OneStepProofEvent{}, nil
		}
		return nil, errors2.New("unknown arbitrum event type")
	}()

	if err != nil {
		return err
	}

	header, err := c.client.HeaderByHash(ctx, log.BlockHash)
	if err != nil {
		return err
	}
	outChan <- arbbridge.Notification{
		BlockHeader: common.NewHashFromEth(header.Hash()),
		BlockHeight: header.Number,
		VMID:        common.NewAddressFromEth(c.address),
		Event:       event,
		TxHash:      log.TxHash,
	}
	return nil
}

func (c *PendingTopChallenge) Bisect(
	ctx context.Context,
	chainHashes []common.Hash,
	chainLength *big.Int,
) error {
	c.auth.Context = ctx
	tx, err := c.Challenge.Bisect(
		c.auth,
		hashSliceToRaw(chainHashes),
		chainLength,
	)
	if err != nil {
		return err
	}
	return c.waitForReceipt(ctx, tx, "Bisect")
}

func (c *PendingTopChallenge) OneStepProof(
	ctx context.Context,
	lowerHashA common.Hash,
	topHashA common.Hash,
	value common.Hash,
) error {
	c.auth.Context = ctx
	tx, err := c.Challenge.OneStepProof(
		c.auth,
		lowerHashA,
		topHashA,
		value,
	)
	if err != nil {
		return err
	}
	return c.waitForReceipt(ctx, tx, "OneStepProof")
}

func (c *PendingTopChallenge) ChooseSegment(
	ctx context.Context,
	assertionToChallenge uint16,
	chainHashes []common.Hash,
	chainLength uint32,
) error {
	bisectionCount := uint32(len(chainHashes) - 1)
	bisectionHashes := make([]common.Hash, 0, bisectionCount)
	for i := uint32(0); i < bisectionCount; i++ {
		stepCount := structures.CalculateBisectionStepCount(i, bisectionCount, chainLength)
		bisectionHashes = append(
			bisectionHashes,
			structures.PendingTopChallengeDataHash(
				chainHashes[i],
				chainHashes[i+1],
				new(big.Int).SetUint64(uint64(stepCount)),
			),
		)
	}
	return c.BisectionChallenge.chooseSegment(
		ctx,
		assertionToChallenge,
		bisectionHashes,
	)
}
