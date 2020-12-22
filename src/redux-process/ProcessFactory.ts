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
import { getLoginProcess } from './processes/LoginProcess'
import { getRegisterProcess } from './processes/RegisterProcess'
import { getCurrentUserProcess } from './processes/CurrentUserProcess'
import { getLogoutProcess } from './processes/LogoutProcess'
import { getForgotPasswordProcess } from './processes/ForgotPasswordProcess'
import { getUpdateForgotPasswordProcess } from './processes/UpdateForgotPasswordProcess'

export class ProcessFactory<GlobalState extends RootState = RootState>
  implements IProcessFactory<GlobalState> {
  options: ProcessFactoryOptions
  protected _tokenManager: EasyJWTTokenManager = new EasyJWTTokenManager()

  constructor(options: ProcessFactoryOptions) {
    this.options = options
  }

  getProcess(
    name: RequestName,
    request: EasyJWTRequest
  ): IReduxProcessClass<any, ProcessPayload | null, AuthState, GlobalState> {
    const processes: {
      [name in RequestName]: IReduxProcessClass<
        any,
        ProcessPayload | null,
        AuthState,
        GlobalState
      >
    } = {
      [RequestName.REGISTER]: getRegisterProcess(
        this.options.networker,
        request
      ),
      [RequestName.LOGIN]: getLoginProcess(this.options.networker, request),
      [RequestName.CURRENT_USER]: getCurrentUserProcess(
        this.options.networker,
        request
      ),
      [RequestName.LOGOUT]: getLogoutProcess(this.options.networker, request),
      [RequestName.FORGOT_PASSWORD]: getForgotPasswordProcess(
        this.options.networker,
        request
      ),
      [RequestName.UPDATE_FORGOT_PASSWORD]: getUpdateForgotPasswordProcess(
        this.options.networker,
        request
      )
    }

    return processes[name]
  }
}
