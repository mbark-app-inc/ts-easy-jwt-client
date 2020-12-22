import { ReduxProcessGroup } from 'ts-redux-process'
import { EasyJWTTokenManager } from '../EasyJWTTokenManager'
import { IProcessGroupFactory } from './interfaces/IProcessGroupFactory'
import {
  ProcessGroupFactoryOptions,
  RootState,
  AuthState
} from './types/ProcessGroupFactory'
import { ProcessFactory } from './ProcessFactory'
import { RequestName } from './types/ProcessFactory'
import { IReduxProcessClass } from 'ts-redux-process/dist/interfaces/IReduxProcess'
import { ProcessPayload } from './types/ProcessFactory'

export class ProcessGroupFactory<GlobalState extends RootState = RootState>
  implements IProcessGroupFactory<GlobalState> {
  options: ProcessGroupFactoryOptions
  protected _tokenManager = new EasyJWTTokenManager()
  protected _processFactory: ProcessFactory<GlobalState>
  protected _processes?: IReduxProcessClass<
    any,
    ProcessPayload | null,
    AuthState,
    GlobalState
  >[]

  constructor(options: ProcessGroupFactoryOptions) {
    this.options = options
    this._processFactory = new ProcessFactory<GlobalState>({
      networker: options.networker
    })
  }

  getProcesses(): IReduxProcessClass<
    any,
    ProcessPayload | null,
    AuthState,
    GlobalState
  >[] {
    if (!this._processes) {
      this._processes = []
      for (const [key, value] of Object.entries(this.options.requests)) {
        if (value) {
          const process = this._processFactory.getProcess(
            key as RequestName,
            value
          )
          this._processes.push(process)
        }
      }
    }
    return this._processes
  }

  getProcessGroup(): ReduxProcessGroup<AuthState, GlobalState> {
    const processes = this.getProcesses()

    const authProcessGroup = new ReduxProcessGroup<AuthState, GlobalState>(
      'auth',
      {
        defaultState: this._getDefaultState(),
        processes
      }
    )

    return authProcessGroup
  }

  protected _getDefaultState(): AuthState {
    return {
      user: null,
      getAccessToken: () => {
        try {
          return this._tokenManager.getAccessToken()
        } catch (e) {
          return null
        }
      },
      getRefreshToken: () => {
        try {
          return this._tokenManager.getRefreshToken()
        } catch (e) {
          return null
        }
      }
    }
  }
}
