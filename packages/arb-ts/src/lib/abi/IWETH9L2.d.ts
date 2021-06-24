/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IWETH9L2Interface extends ethers.utils.Interface {
  functions: {
    'allowance(address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'deposit()': FunctionFragment
    'totalSupply()': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'withdraw(uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'allowance', values: [string]): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'Deposit(address,uint256)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
    'Withdrawal(address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Withdrawal'): EventFragment
}

export class IWETH9L2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IWETH9L2Interface

  functions: {
    allowance(guy: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'allowance(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'approve(address,uint256)'(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    balanceOf(guy: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'balanceOf(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    deposit(overrides?: PayableOverrides): Promise<ContractTransaction>

    'deposit()'(overrides?: PayableOverrides): Promise<ContractTransaction>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>

    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'transfer(address,uint256)'(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'withdraw(uint256)'(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  allowance(guy: string, overrides?: CallOverrides): Promise<BigNumber>

  'allowance(address)'(
    guy: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  approve(
    guy: string,
    wad: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'approve(address,uint256)'(
    guy: string,
    wad: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  balanceOf(guy: string, overrides?: CallOverrides): Promise<BigNumber>

  'balanceOf(address)'(
    guy: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  deposit(overrides?: PayableOverrides): Promise<ContractTransaction>

  'deposit()'(overrides?: PayableOverrides): Promise<ContractTransaction>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    dst: string,
    wad: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'transfer(address,uint256)'(
    dst: string,
    wad: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  transferFrom(
    src: string,
    dst: string,
    wad: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'transferFrom(address,address,uint256)'(
    src: string,
    dst: string,
    wad: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'withdraw(uint256)'(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    allowance(guy: string, overrides?: CallOverrides): Promise<BigNumber>

    'allowance(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'approve(address,uint256)'(
      guy: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    balanceOf(guy: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    deposit(overrides?: CallOverrides): Promise<void>

    'deposit()'(overrides?: CallOverrides): Promise<void>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'transfer(address,uint256)'(
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'withdraw(uint256)'(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    Approval(src: string | null, guy: string | null, wad: null): EventFilter

    Deposit(dst: string | null, wad: null): EventFilter

    Transfer(src: string | null, dst: string | null, wad: null): EventFilter

    Withdrawal(src: string | null, wad: null): EventFilter
  }

  estimateGas: {
    allowance(guy: string, overrides?: CallOverrides): Promise<BigNumber>

    'allowance(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'approve(address,uint256)'(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    balanceOf(guy: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    deposit(overrides?: PayableOverrides): Promise<BigNumber>

    'deposit()'(overrides?: PayableOverrides): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'transfer(address,uint256)'(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    withdraw(_amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'withdraw(uint256)'(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    allowance(
      guy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'allowance(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'approve(address,uint256)'(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    balanceOf(
      guy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'balanceOf(address)'(
      guy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    deposit(overrides?: PayableOverrides): Promise<PopulatedTransaction>

    'deposit()'(overrides?: PayableOverrides): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'transfer(address,uint256)'(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'withdraw(uint256)'(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
