import { AuthState, RootState } from '../types/ProcessGroupFactory'
import { ProcessFactoryOptions, ProcessPayload } from '../types/ProcessFactory'
import { IReduxProcessClass } from 'ts-redux-process/dist/interfaces/IReduxProcess'
import { EasyJWTRequest } from '../../EasyJWTRequest'

export interface IProcessFactoryClass<
  GlobalState extends RootState = RootState
> {
  new (options: ProcessFactoryOptions): IProcessFactory<GlobalState>
}

export interface IProcessFactory<GlobalState extends RootState = RootState> {
  options: ProcessFactoryOptions

  getProcess(
    name: String,
    request: EasyJWTRequest
  ): IReduxProcessClass<any, ProcessPayload | null, AuthState, GlobalState>
}
