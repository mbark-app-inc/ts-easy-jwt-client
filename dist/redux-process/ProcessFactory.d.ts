import { IReduxProcessClass } from 'ts-redux-process/dist/interfaces/IReduxProcess'
import { IProcessFactory } from './interfaces/IProcessFactory'
import { RootState, AuthState } from './types/ProcessGroupFactory'
import {
  ProcessFactoryOptions,
  RequestName,
  ProcessPayload
} from './types/ProcessFactory'
import { EasyJWTRequest } from '../EasyJWTRequest'
import { EasyJWTTokenManager } from '../EasyJWTTokenManager'
export declare class ProcessFactory<GlobalState extends RootState = RootState>
  implements IProcessFactory<GlobalState> {
  options: ProcessFactoryOptions
  protected _tokenManager: EasyJWTTokenManager
  constructor(options: ProcessFactoryOptions)
  getProcess(
    name: RequestName,
    request: EasyJWTRequest
  ): IReduxProcessClass<any, ProcessPayload | null, AuthState, GlobalState>
}
