import {
  ProcessGroupFactoryOptions,
  AuthState,
  RootState
} from '../types/ProcessGroupFactory'
import { ReduxProcessGroup } from 'ts-redux-process'
import { IReduxProcessClass } from 'ts-redux-process/dist/interfaces/IReduxProcess'
import { ProcessPayload } from '../types/ProcessFactory'

export interface IProcessGroupFactoryClass<
  GlobalState extends RootState = RootState
> {
  new (options: ProcessGroupFactoryOptions): IProcessGroupFactory<GlobalState>
}

export interface IProcessGroupFactory<
  GlobalState extends RootState = RootState
> {
  options: ProcessGroupFactoryOptions

  getProcessGroup(): ReduxProcessGroup<AuthState, GlobalState>

  getProcesses(): IReduxProcessClass<
    any,
    ProcessPayload | null,
    AuthState,
    GlobalState
  >[]
}
