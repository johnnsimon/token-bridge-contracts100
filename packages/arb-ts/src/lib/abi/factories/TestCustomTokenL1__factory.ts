/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { TestCustomTokenL1 } from '../TestCustomTokenL1'

export class TestCustomTokenL1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(_bridge: string, overrides?: Overrides): Promise<TestCustomTokenL1> {
    return super.deploy(_bridge, overrides || {}) as Promise<TestCustomTokenL1>
  }
  getDeployTransaction(
    _bridge: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bridge, overrides || {})
  }
  attach(address: string): TestCustomTokenL1 {
    return super.attach(address) as TestCustomTokenL1
  }
  connect(signer: Signer): TestCustomTokenL1__factory {
    return super.connect(signer) as TestCustomTokenL1__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCustomTokenL1 {
    return new Contract(address, _abi, signerOrProvider) as TestCustomTokenL1
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
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
    inputs: [],
    name: 'bridge',
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
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      {
        internalType: 'address',
        name: 'l2CustomTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
    ],
    name: 'registerTokenOnL2',
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
  '0x60806040523480156200001157600080fd5b506040516200230538038062002305833981810160405260208110156200003757600080fd5b505160cc80546001600160a01b0319166001600160a01b038316179055604080518082018252600f81526e2a32b9ba21bab9ba37b6aa37b5b2b760891b6020808301919091528251808401909352600483526321a0a92160e11b83820152620000ad9290601290620000b4811b62000a5817901c565b50620007a7565b600054610100900460ff1680620000d95750620000d96001600160e01b03620001a716565b80620000e8575060005460ff16155b620001255760405162461bcd60e51b815260040180806020018281038252602e815260200180620022d7602e913960400191505060405180910390fd5b600054610100900460ff1615801562000151576000805460ff1961ff0019909116610100171660011790555b62000165846001600160e01b03620001c616565b6200017a84846001600160e01b03620002cc16565b6200018e826001600160e01b03620003a916565b8015620001a1576000805461ff00191690555b50505050565b6000620001bf30620003bf60201b62000b191760201c565b1590505b90565b600054610100900460ff1680620001eb5750620001eb6001600160e01b03620001a716565b80620001fa575060005460ff16155b620002375760405162461bcd60e51b815260040180806020018281038252602e815260200180620022d7602e913960400191505060405180910390fd5b600054610100900460ff1615801562000263576000805460ff1961ff0019909116610100171660011790555b620002766001600160e01b03620003c516565b620002a182604051806040016040528060018152602001603160f81b8152506200047860201b60201c565b620002b5826001600160e01b036200054916565b8015620002c8576000805461ff00191690555b5050565b600054610100900460ff1680620002f15750620002f16001600160e01b03620001a716565b8062000300575060005460ff16155b6200033d5760405162461bcd60e51b815260040180806020018281038252602e815260200180620022d7602e913960400191505060405180910390fd5b600054610100900460ff1615801562000369576000805460ff1961ff0019909116610100171660011790555b6200037c6001600160e01b03620003c516565b6200039183836001600160e01b036200061816565b8015620003a4576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b3b151590565b600054610100900460ff1680620003ea5750620003ea6001600160e01b03620001a716565b80620003f9575060005460ff16155b620004365760405162461bcd60e51b815260040180806020018281038252602e815260200180620022d7602e913960400191505060405180910390fd5b600054610100900460ff1615801562000462576000805460ff1961ff0019909116610100171660011790555b801562000475576000805461ff00191690555b50565b600054610100900460ff16806200049d57506200049d6001600160e01b03620001a716565b80620004ac575060005460ff16155b620004e95760405162461bcd60e51b815260040180806020018281038252602e815260200180620022d7602e913960400191505060405180910390fd5b600054610100900460ff1615801562000515576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015620003a4576000805461ff0019169055505050565b600054610100900460ff16806200056e57506200056e6001600160e01b03620001a716565b806200057d575060005460ff16155b620005ba5760405162461bcd60e51b815260040180806020018281038252602e815260200180620022d7602e913960400191505060405180910390fd5b600054610100900460ff16158015620005e6576000805460ff1961ff0019909116610100171660011790555b604051806052620022858239604051908190036052019020609a55508015620002c8576000805461ff00191690555050565b600054610100900460ff16806200063d57506200063d6001600160e01b03620001a716565b806200064c575060005460ff16155b620006895760405162461bcd60e51b815260040180806020018281038252602e815260200180620022d7602e913960400191505060405180910390fd5b600054610100900460ff16158015620006b5576000805460ff1961ff0019909116610100171660011790555b8251620006ca90603690602086019062000705565b508151620006e090603790602085019062000705565b506038805460ff191660121790558015620003a4576000805461ff0019169055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200074857805160ff191683800117855562000778565b8280016001018555821562000778579182015b82811115620007785782518255916020019190600101906200075b565b50620007869291506200078a565b5090565b620001c391905b8082111562000786576000815560010162000791565b611ace80620007b76000396000f3fe608060405234801561001057600080fd5b50600436106100f65760003560e01c80634329c346116100925780634329c3461461031f57806370a08231146103575780637ecebe001461037d57806395d89b41146103a3578063a457c2d7146103ab578063a9059cbb146103d7578063d505accf14610403578063dd62ed3e14610454578063e78cea9214610482576100f6565b806306fdde03146100fb578063095ea7b3146101785780631249c58b146101b857806318160ddd146101c257806323b872dd146101dc578063313ce567146102125780633644e5151461023057806339509351146102385780634000aea014610264575b600080fd5b6101036104a6565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013d578181015183820152602001610125565b50505050905090810190601f16801561016a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a46004803603604081101561018e57600080fd5b506001600160a01b03813516906020013561053d565b604080519115158252519081900360200190f35b6101c061055a565b005b6101ca61056a565b60408051918252519081900360200190f35b6101a4600480360360608110156101f257600080fd5b506001600160a01b03813581169160208101359091169060400135610570565b61021a610585565b6040805160ff9092168252519081900360200190f35b6101ca61058e565b6101a46004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561059d565b6101a46004803603606081101561027a57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156102aa57600080fd5b8201836020820111156102bc57600080fd5b803590602001918460018302840111640100000000831117156102de57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105f6945050505050565b6101c06004803603608081101561033557600080fd5b506001600160a01b0381351690602081013590604081013590606001356106db565b6101ca6004803603602081101561036d57600080fd5b50356001600160a01b0316610771565b6101ca6004803603602081101561039357600080fd5b50356001600160a01b0316610782565b6101036107a3565b6101a4600480360360408110156103c157600080fd5b506001600160a01b038135169060200135610804565b6101a4600480360360408110156103ed57600080fd5b506001600160a01b038135169060200135610872565b6101c0600480360360e081101561041957600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610886565b6101ca6004803603604081101561046a57600080fd5b506001600160a01b0381358116916020013516610a1e565b61048a610a49565b604080516001600160a01b039092168252519081900360200190f35b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105325780601f1061050757610100808354040283529160200191610532565b820191906000526020600020905b81548152906001019060200180831161051557829003601f168201915b505050505090505b90565b600061055161054a610b1f565b8484610b23565b50600192915050565b610568336302faf080610c0f565b565b60355490565b600061057d848484610d0d565b949350505050565b60385460ff1690565b6000610598610d8b565b905090565b60006105516105aa610b1f565b846105f185603460006105bb610b1f565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610dbe16565b610b23565b60006106028484610872565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561067d578181015183820152602001610665565b50505050905090810190601f1680156106aa5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a36106c184610b19565b156106d1576106d1848484610e1f565b5060019392505050565b60cc546040805163f26bdead60e01b81526001600160a01b0387811660048301526024820186905260448201859052606482018790529151919092169163f26bdead9160848083019260209291908290030181600087803b15801561073f57600080fd5b505af1158015610753573d6000803e3d6000fd5b505050506040513d602081101561076957600080fd5b505050505050565b600061077c82610ef9565b92915050565b6001600160a01b038116600090815260996020526040812061077c90610f14565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105325780601f1061050757610100808354040283529160200191610532565b6000610551610811610b1f565b846105f185604051806060016040528060258152602001611a74602591396034600061083b610b1f565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610f1816565b600061055161087f610b1f565b8484610faf565b834211156108db576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a54888888610910609960008e6001600160a01b03166001600160a01b03168152602001908152602001600020610f14565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e090910190915280519101209050600061096e82611118565b9050600061097e82878787611164565b9050896001600160a01b0316816001600160a01b0316146109e6576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a166000908152609960205260409020610a07906112cf565b610a128a8a8a610b23565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60cc546001600160a01b031681565b600054610100900460ff1680610a715750610a716112d8565b80610a7f575060005460ff16155b610aba5760405162461bcd60e51b815260040180806020018281038252602e815260200180611961602e913960400191505060405180910390fd5b600054610100900460ff16158015610ae5576000805460ff1961ff0019909116610100171660011790555b610aee846112e9565b610af884846113c0565b610b0182611476565b8015610b13576000805461ff00191690555b50505050565b3b151590565b3390565b6001600160a01b038316610b685760405162461bcd60e51b8152600401808060200182810382526024815260200180611a506024913960400191505060405180910390fd5b6001600160a01b038216610bad5760405162461bcd60e51b81526004018080602001828103825260228152602001806118a56022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038216610c6a576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610c7660008383611471565b603554610c89908263ffffffff610dbe16565b6035556001600160a01b038216600090815260336020526040902054610cb5908263ffffffff610dbe16565b6001600160a01b03831660008181526033602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000610d1a848484610faf565b6106d184610d26610b1f565b6105f185604051806060016040528060288152602001611a03602891396001600160a01b038a16600090815260346020526040812090610d64610b1f565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610f1816565b600061059860405180806119b16052913960520190506040518091039020610db161148c565b610db9611492565b611498565b600082820183811015610e18576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b83811015610e8d578181015183820152602001610e75565b50505050905090810190601f168015610eba5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610edb57600080fd5b505af1158015610eef573d6000803e3d6000fd5b5050505050505050565b6001600160a01b031660009081526033602052604090205490565b5490565b60008184841115610fa75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f6c578181015183820152602001610f54565b50505050905090810190601f168015610f995780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038316610ff45760405162461bcd60e51b8152600401808060200182810382526025815260200180611a2b6025913960400191505060405180910390fd5b6001600160a01b0382166110395760405162461bcd60e51b81526004018080602001828103825260238152602001806118826023913960400191505060405180910390fd5b611044838383611471565b611087816040518060600160405280602681526020016118c7602691396001600160a01b038616600090815260336020526040902054919063ffffffff610f1816565b6001600160a01b0380851660009081526033602052604080822093909355908416815220546110bc908263ffffffff610dbe16565b6001600160a01b0380841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000611122610d8b565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156111bb5760405162461bcd60e51b81526004018080602001828103825260228152602001806118ed6022913960400191505060405180910390fd5b8360ff16601b14806111d057508360ff16601c145b61120b5760405162461bcd60e51b815260040180806020018281038252602281526020018061198f6022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015611263573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112c6576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b60006112e330610b19565b15905090565b600054610100900460ff168061130257506113026112d8565b80611310575060005460ff16155b61134b5760405162461bcd60e51b815260040180806020018281038252602e815260200180611961602e913960400191505060405180910390fd5b600054610100900460ff16158015611376576000805460ff1961ff0019909116610100171660011790555b61137e6114ee565b6113a182604051806040016040528060018152602001603160f81b815250611590565b6113aa82611650565b80156113bc576000805461ff00191690555b5050565b600054610100900460ff16806113d957506113d96112d8565b806113e7575060005460ff16155b6114225760405162461bcd60e51b815260040180806020018281038252602e815260200180611961602e913960400191505060405180910390fd5b600054610100900460ff1615801561144d576000805460ff1961ff0019909116610100171660011790555b6114556114ee565b61145f838361170d565b8015611471576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b60655490565b60665490565b60008383836114a56117e5565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b600054610100900460ff168061150757506115076112d8565b80611515575060005460ff16155b6115505760405162461bcd60e51b815260040180806020018281038252602e815260200180611961602e913960400191505060405180910390fd5b600054610100900460ff1615801561157b576000805460ff1961ff0019909116610100171660011790555b801561158d576000805461ff00191690555b50565b600054610100900460ff16806115a957506115a96112d8565b806115b7575060005460ff16155b6115f25760405162461bcd60e51b815260040180806020018281038252602e815260200180611961602e913960400191505060405180910390fd5b600054610100900460ff1615801561161d576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015611471576000805461ff0019169055505050565b600054610100900460ff168061166957506116696112d8565b80611677575060005460ff16155b6116b25760405162461bcd60e51b815260040180806020018281038252602e815260200180611961602e913960400191505060405180910390fd5b600054610100900460ff161580156116dd576000805460ff1961ff0019909116610100171660011790555b60405180605261190f8239604051908190036052019020609a555080156113bc576000805461ff00191690555050565b600054610100900460ff168061172657506117266112d8565b80611734575060005460ff16155b61176f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611961602e913960400191505060405180910390fd5b600054610100900460ff1615801561179a576000805460ff1961ff0019909116610100171660011790555b82516117ad9060369060208601906117e9565b5081516117c19060379060208501906117e9565b506038805460ff191660121790558015611471576000805461ff0019169055505050565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061182a57805160ff1916838001178555611857565b82800160010185558215611857579182015b8281111561185757825182559160200191906001019061183c565b50611863929150611867565b5090565b61053a91905b80821115611863576000815560010161186d56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207f2a2c02ae7163b8ca1ffcc8111ff0954b2b0809fb293050893ae8ec62ee1ec464736f6c634300060b00335065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564'
