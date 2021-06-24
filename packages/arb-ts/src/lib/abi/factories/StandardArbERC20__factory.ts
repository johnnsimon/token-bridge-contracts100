/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { StandardArbERC20 } from '../StandardArbERC20'

export class StandardArbERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<StandardArbERC20> {
    return super.deploy(overrides || {}) as Promise<StandardArbERC20>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): StandardArbERC20 {
    return super.attach(address) as StandardArbERC20
  }
  connect(signer: Signer): StandardArbERC20__factory {
    return super.connect(signer) as StandardArbERC20__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardArbERC20 {
    return new Contract(address, _abi, signerOrProvider) as StandardArbERC20
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Address',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'bridgeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Gateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060cd805460ff60a01b1916600160a01b179055612360806100336000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b857806395d89b411161007c57806395d89b41146104da578063a457c2d7146104e2578063a9059cbb1461050e578063c2eeeebd1461053a578063d505accf14610542578063dd62ed3e1461059357610137565b806370a082311461041257806374f4f547146104385780637ecebe00146104645780638c2a993e1461048a5780638fa74a0e146104b657610137565b8063313ce567116100ff578063313ce567146102ff5780633644e5151461031d57806339509351146103255780634000aea0146103515780636f791d291461040a57610137565b806306fdde031461013c578063095ea7b3146101b957806318160ddd146101f9578063189db7d21461021357806323b872dd146102c9575b600080fd5b6101446105c1565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017e578181015183820152602001610166565b50505050905090810190601f1680156101ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e5600480360360408110156101cf57600080fd5b506001600160a01b038135169060200135610658565b604080519115158252519081900360200190f35b610201610676565b60408051918252519081900360200190f35b6102c76004803603604081101561022957600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561025357600080fd5b82018360208201111561026557600080fd5b803590602001918460018302840111600160201b8311171561028657600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061067c945050505050565b005b6101e5600480360360608110156102df57600080fd5b506001600160a01b038135811691602081013590911690604001356108ec565b610307610979565b6040805160ff9092168252519081900360200190f35b610201610982565b6101e56004803603604081101561033b57600080fd5b506001600160a01b038135169060200135610991565b6101e56004803603606081101561036757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561039657600080fd5b8201836020820111156103a857600080fd5b803590602001918460018302840111600160201b831117156103c957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109e5945050505050565b6101e5610ac0565b6102016004803603602081101561042857600080fd5b50356001600160a01b0316610ad0565b6102c76004803603604081101561044e57600080fd5b506001600160a01b038135169060200135610aef565b6102016004803603602081101561047a57600080fd5b50356001600160a01b0316610b4b565b6102c7600480360360408110156104a057600080fd5b506001600160a01b038135169060200135610b6c565b6104be610bc4565b604080516001600160a01b039092168252519081900360200190f35b610144610bd3565b6101e5600480360360408110156104f857600080fd5b506001600160a01b038135169060200135610c34565b6101e56004803603604081101561052457600080fd5b506001600160a01b038135169060200135610ca2565b6104be610cb6565b6102c7600480360360e081101561055857600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610cc5565b610201600480360360408110156105a957600080fd5b506001600160a01b0381358116916020013516610e5d565b60368054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561064d5780601f106106225761010080835404028352916020019161064d565b820191906000526020600020905b81548152906001019060200180831161063057829003601f168201915b505050505090505b90565b600061066c610665610e88565b8484610e8c565b5060015b92915050565b60355490565b606080606083806020019051606081101561069657600080fd5b8101908080516040519392919084600160201b8211156106b557600080fd5b9083019060208201858111156106ca57600080fd5b8251600160201b8111828201881017156106e357600080fd5b82525081516020918201929091019080838360005b838110156107105781810151838201526020016106f8565b50505050905090810190601f16801561073d5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b82111561075f57600080fd5b90830190602082018581111561077457600080fd5b8251600160201b81118282018810171561078d57600080fd5b82525081516020918201929091019080838360005b838110156107ba5781810151838201526020016107a2565b50505050905090810190601f1680156107e75780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b82111561080957600080fd5b90830190602082018581111561081e57600080fd5b8251600160201b81118282018810171561083757600080fd5b82525081516020918201929091019080838360005b8381101561086457818101518382015260200161084c565b50505050905090810190601f1680156108915780820380516001836020036101000a031916815260200191505b506040525050509250925092506108e56108ba8460405180602001604052806000815250610f78565b6108d38460405180602001604052806000815250610f78565b6108de84601261107f565b33896110b0565b5050505050565b60006108f9848484611185565b61096f84610905610e88565b61096a85604051806060016040528060288152602001612254602891396001600160a01b038a16600090815260346020526040812090610943610e88565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6112dc16565b610e8c565b5060019392505050565b60385460ff1690565b600061098c611373565b905090565b600061066c61099e610e88565b8461096a85603460006109af610e88565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6113a616565b60006109f18484610ca2565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a6c578181015183820152602001610a54565b50505050905090810190601f168015610a995780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3610ab084611407565b1561096f5761096f84848461140d565b60cd54600160a01b900460ff1690565b6001600160a01b0381166000908152603360205260409020545b919050565b60cc546001600160a01b03163314610b3d576040805162461bcd60e51b815260206004820152600c60248201526b4f4e4c595f4741544557415960a01b604482015290519081900360640190fd5b610b4782826114e7565b5050565b6001600160a01b0381166000908152609960205260408120610670906115dd565b60cc546001600160a01b03163314610bba576040805162461bcd60e51b815260206004820152600c60248201526b4f4e4c595f4741544557415960a01b604482015290519081900360640190fd5b610b4782826115e1565b60cc546001600160a01b031681565b60378054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561064d5780601f106106225761010080835404028352916020019161064d565b600061066c610c41610e88565b8461096a856040518060600160405280602581526020016123066025913960346000610c6b610e88565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6112dc16565b600061066c610caf610e88565b8484611185565b60cd546001600160a01b031681565b83421115610d1a576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a54888888610d4f609960008e6001600160a01b03166001600160a01b031681526020019081526020016000206115dd565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e0909101909152805191012090506000610dad826116cd565b90506000610dbd82878787611719565b9050896001600160a01b0316816001600160a01b031614610e25576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a166000908152609960205260409020610e4690611884565b610e518a8a8a610e8c565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3390565b6001600160a01b038316610ed15760405162461bcd60e51b81526004018080602001828103825260248152602001806122e26024913960400191505060405180910390fd5b6001600160a01b038216610f165760405162461bcd60e51b81526004018080602001828103825260228152602001806120f66022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6060825160001415610f8b575080610670565b825160201415610fb557610fae610fa984600063ffffffff61188d16565b6118e6565b9050610670565b828060200190516020811015610fca57600080fd5b8101908080516040519392919084600160201b821115610fe957600080fd5b908301906020820185811115610ffe57600080fd5b8251600160201b81118282018810171561101757600080fd5b82525081516020918201929091019080838360005b8381101561104457818101518382015260200161102c565b50505050905090810190601f1680156110715780820380516001836020036101000a031916815260200191505b506040525050509050610670565b6000825160001415611092575080610670565b8280602001905160208110156110a757600080fd5b50519050610670565b6001600160a01b0382166110fd576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4741544557415960881b604482015290519081900360640190fd5b60cc546001600160a01b03161561114a576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60cc80546001600160a01b038085166001600160a01b03199283161790925560cd8054928416929091169190911790556108e58585856119b5565b6001600160a01b0383166111ca5760405162461bcd60e51b81526004018080602001828103825260258152602001806122bd6025913960400191505060405180910390fd5b6001600160a01b03821661120f5760405162461bcd60e51b81526004018080602001828103825260238152602001806120b16023913960400191505060405180910390fd5b61121a838383611a76565b61125d81604051806060016040528060268152602001612118602691396001600160a01b038616600090815260336020526040902054919063ffffffff6112dc16565b6001600160a01b038085166000908152603360205260408082209390935590841681522054611292908263ffffffff6113a616565b6001600160a01b03808416600081815260336020908152604091829020949094558051858152905191939287169260008051602061227c83398151915292918290030190a3505050565b6000818484111561136b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611330578181015183820152602001611318565b50505050905090810190601f16801561135d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061098c60405180806122026052913960520190506040518091039020611399611a7b565b6113a1611a81565b611a87565b600082820183811015611400576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3b151590565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b8381101561147b578181015183820152602001611463565b50505050905090810190601f1680156114a85780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156114c957600080fd5b505af11580156114dd573d6000803e3d6000fd5b5050505050505050565b6001600160a01b03821661152c5760405162461bcd60e51b815260040180806020018281038252602181526020018061229c6021913960400191505060405180910390fd5b61153882600083611a76565b61157b816040518060600160405280602281526020016120d4602291396001600160a01b038516600090815260336020526040902054919063ffffffff6112dc16565b6001600160a01b0383166000908152603360205260409020556035546115a7908263ffffffff611add16565b6035556040805182815290516000916001600160a01b0385169160008051602061227c8339815191529181900360200190a35050565b5490565b6001600160a01b03821661163c576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61164860008383611a76565b60355461165b908263ffffffff6113a616565b6035556001600160a01b038216600090815260336020526040902054611687908263ffffffff6113a616565b6001600160a01b038316600081815260336020908152604080832094909455835185815293519293919260008051602061227c8339815191529281900390910190a35050565b60006116d7611373565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156117705760405162461bcd60e51b815260040180806020018281038252602281526020018061213e6022913960400191505060405180910390fd5b8360ff16601b148061178557508360ff16601c145b6117c05760405162461bcd60e51b81526004018080602001828103825260228152602001806121e06022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015611818573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661187b576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600081602001835110156118dd576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b50016020015190565b60408051818152606081810183529182919060208201818036833701905050905060005b60208110156119ae57600084826020811061192157fe5b1a60f881811b9250601080830480831b9360ff9091169091029003901b61194782611b3a565b85856002028151811061195657fe5b60200101906001600160f81b031916908160001a90535061197681611b3a565b85856002026001018151811061198857fe5b60200101906001600160f81b031916908160001a905350506001909201915061190a9050565b5092915050565b600054610100900460ff16806119ce57506119ce611b6b565b806119dc575060005460ff16155b611a175760405162461bcd60e51b815260040180806020018281038252602e8152602001806121b2602e913960400191505060405180910390fd5b600054610100900460ff16158015611a42576000805460ff1961ff0019909116610100171660011790555b611a4b84611b7c565b611a558484611c52565b611a5e82611d07565b8015611a70576000805461ff00191690555b50505050565b505050565b60655490565b60665490565b6000838383611a94611d1d565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b600082821115611b34576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000600a60f883901c1015611b5a578160f81c60300160f81b9050610aea565b8160f81c60570160f81b9050610aea565b6000611b7630611407565b15905090565b600054610100900460ff1680611b955750611b95611b6b565b80611ba3575060005460ff16155b611bde5760405162461bcd60e51b815260040180806020018281038252602e8152602001806121b2602e913960400191505060405180910390fd5b600054610100900460ff16158015611c09576000805460ff1961ff0019909116610100171660011790555b611c11611d21565b611c3482604051806040016040528060018152602001603160f81b815250611dc3565b611c3d82611e83565b8015610b47576000805461ff00191690555050565b600054610100900460ff1680611c6b5750611c6b611b6b565b80611c79575060005460ff16155b611cb45760405162461bcd60e51b815260040180806020018281038252602e8152602001806121b2602e913960400191505060405180910390fd5b600054610100900460ff16158015611cdf576000805460ff1961ff0019909116610100171660011790555b611ce7611d21565b611cf18383611f40565b8015611a76576000805461ff0019169055505050565b6038805460ff191660ff92909216919091179055565b4690565b600054610100900460ff1680611d3a5750611d3a611b6b565b80611d48575060005460ff16155b611d835760405162461bcd60e51b815260040180806020018281038252602e8152602001806121b2602e913960400191505060405180910390fd5b600054610100900460ff16158015611dae576000805460ff1961ff0019909116610100171660011790555b8015611dc0576000805461ff00191690555b50565b600054610100900460ff1680611ddc5750611ddc611b6b565b80611dea575060005460ff16155b611e255760405162461bcd60e51b815260040180806020018281038252602e8152602001806121b2602e913960400191505060405180910390fd5b600054610100900460ff16158015611e50576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015611a76576000805461ff0019169055505050565b600054610100900460ff1680611e9c5750611e9c611b6b565b80611eaa575060005460ff16155b611ee55760405162461bcd60e51b815260040180806020018281038252602e8152602001806121b2602e913960400191505060405180910390fd5b600054610100900460ff16158015611f10576000805460ff1961ff0019909116610100171660011790555b6040518060526121608239604051908190036052019020609a55508015610b47576000805461ff00191690555050565b600054610100900460ff1680611f595750611f59611b6b565b80611f67575060005460ff16155b611fa25760405162461bcd60e51b815260040180806020018281038252602e8152602001806121b2602e913960400191505060405180910390fd5b600054610100900460ff16158015611fcd576000805460ff1961ff0019909116610100171660011790555b8251611fe0906036906020860190612018565b508151611ff4906037906020850190612018565b506038805460ff191660121790558015611a76576000805461ff0019169055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061205957805160ff1916838001178555612086565b82800160010185558215612086579182015b8281111561208657825182559160200191906001019061206b565b50612092929150612096565b5090565b61065591905b80821115612092576000815560010161209c56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220476690449de970c5d1004e721f733a8f6c75e53a105d7a3be2d9b3c7cc14c5b564736f6c634300060b0033'
