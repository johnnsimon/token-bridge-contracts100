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

package structures

import (
	"github.com/offchainlabs/arbitrum/packages/arb-util/common"
	"github.com/offchainlabs/arbitrum/packages/arb-util/value"
)

type ConfirmValidOpportunity struct {
	DeadlineTicks    common.TimeTicks
	Messages         []value.Value
	LogsAcc          common.Hash
	VMProtoStateHash common.Hash
}

func (opp ConfirmValidOpportunity) BranchType() ChildType {
	return ValidChildType
}

func (opp ConfirmValidOpportunity) Deadline() common.TimeTicks {
	return opp.DeadlineTicks
}

func (opp ConfirmValidOpportunity) StateHash() common.Hash {
	return opp.VMProtoStateHash
}

type ConfirmInvalidOpportunity struct {
	DeadlineTicks     common.TimeTicks
	ChallengeNodeData common.Hash
	Branch            ChildType
	VMProtoStateHash  common.Hash
}

func (opp ConfirmInvalidOpportunity) BranchType() ChildType {
	return opp.Branch
}

func (opp ConfirmInvalidOpportunity) Deadline() common.TimeTicks {
	return opp.DeadlineTicks
}

func (opp ConfirmInvalidOpportunity) StateHash() common.Hash {
	return opp.VMProtoStateHash
}

type ConfirmNodeOpportunity interface {
	BranchType() ChildType
	Deadline() common.TimeTicks
	StateHash() common.Hash
}

type ConfirmOpportunity struct {
	Nodes                  []ConfirmNodeOpportunity
	CurrentLatestConfirmed common.Hash
	StakerAddresses        []common.Address
	StakerProofs           [][]common.Hash
}
