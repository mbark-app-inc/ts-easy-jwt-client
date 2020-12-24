import { ReduxProcessGroup } from 'ts-redux-process'
import { EasyJWTTokenManager } from '../EasyJWTTokenManager'
import { IProcessGroupFactory } from './interfaces/IProcessGroupFactory'
import {
  ProcessGroupFactoryOptions,
  RootState,
  AuthState
} from './types/ProcessGroupFactory'
import { ProcessFactory } from './ProcessFactory'
import { IReduxProcessClass } from 'ts-redux-process/dist/interfaces/IReduxProcess'
import { ProcessPayload } from './types/ProcessFactory'
export declare class ProcessGroupFactory<
  GlobalState extends RootState = RootState
> implements IProcessGroupFactory<GlobalState> {
  options: ProcessGroupFactoryOptions
  protected _tokenManager: EasyJWTTokenManager
  protected _processFactory: ProcessFactory<GlobalState>
  protected _processes?: IReduxProcessClass<
    any,
    ProcessPayload | null,
    AuthState,
    GlobalState
  >[]
  constructor(options: ProcessGroupFactoryOptions)
  getProcesses(): IReduxProcessClass<
    any,
    ProcessPayload | null,
    AuthState,
    GlobalState
  >[]
  getProcessGroup(): ReduxProcessGroup<AuthState, GlobalState>
  protected _getDefaultState(): AuthState
}
