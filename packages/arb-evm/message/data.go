/*
 * Copyright 2019, Offchain Labs, Inc.
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

package message

import (
	ethmath "github.com/ethereum/go-ethereum/common/math"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/rlp"
	"github.com/offchainlabs/arbitrum/packages/arb-util/hashing"
	"math/big"

	"github.com/offchainlabs/arbitrum/packages/arb-util/common"
)

func extractUInt256(data []byte) (*big.Int, []byte) {
	val := new(big.Int).SetBytes(data[:32])
	data = data[32:]
	return val, data
}

func extractAddress(data []byte) (common.Address, []byte) {
	data = data[12:] // Skip first 12 bytes of 32 byte address data
	var addr common.Address
	copy(addr[:], data[:])
	data = data[20:]
	return addr, data
}

func addressData(addr common.Address) []byte {
	ret := make([]byte, 0, 32)
	ret = append(ret, make([]byte, 12)...)
	ret = append(ret, addr[:]...)
	return ret
}

func marshaledBytesHash(data []byte) common.Hash {
	var ret common.Hash
	copy(ret[:], ethmath.U256Bytes(big.NewInt(int64(len(data)))))
	chunks := make([]common.Hash, 0)
	for len(data) > 0 {
		var nextVal common.Hash
		copy(nextVal[:], data[:])
		chunks = append(chunks, nextVal)
		if len(data) <= 32 {
			break
		}
		data = data[32:]
	}

	for i := range chunks {
		ret = hashing.SoliditySHA3(
			hashing.Bytes32(ret),
			hashing.Bytes32(chunks[len(chunks)-1-i]),
		)
	}
	return ret
}

func encodeAmount(amount *big.Int) ([]byte, error) {
	mod := big.NewInt(10)
	zero := big.NewInt(0)
	exp := byte(0)
	for amount.Cmp(zero) > 0 && new(big.Int).Mod(amount, mod).Cmp(zero) == 0 {
		amount = amount.Div(amount, mod)
		exp++
	}
	amountData, err := rlp.EncodeToBytes(amount)
	if err != nil {
		return nil, err
	}

	if amount.Cmp(zero) == 0 {
		return amountData, nil
	}
	return append(amountData, exp), nil
}

func encodeUnsignedTx(tx *types.Transaction) ([]byte, error) {
	nonceData, err := rlp.EncodeToBytes(tx.Nonce())
	if err != nil {
		return nil, err
	}
	gasPriceData, err := rlp.EncodeToBytes(tx.GasPrice())
	if err != nil {
		return nil, err
	}
	gasLimitData, err := rlp.EncodeToBytes(tx.Gas())
	if err != nil {
		return nil, err
	}
	paymentData, err := encodeAmount(tx.Value())
	if err != nil {
		return nil, err
	}

	data := []byte{}
	data = append(data, nonceData...)
	data = append(data, gasPriceData...)
	data = append(data, gasLimitData...)
	if tx.To() == nil {
		data = append(data, 0x80)
	} else {
		destData, err := rlp.EncodeToBytes(tx.To().Bytes())
		if err != nil {
			return nil, err
		}
		data = append(data, destData...)
	}
	data = append(data, paymentData...)
	data = append(data, tx.Data()...)
	return data, nil
}

func encodeECDSASig(v, r, s *big.Int) []byte {
	vBit := byte(v.Uint64() & 0xff)
	data := make([]byte, 0, 65)
	data = append(data, ethmath.U256Bytes(r)...)
	data = append(data, ethmath.U256Bytes(s)...)
	data = append(data, vBit)
	return data
}
