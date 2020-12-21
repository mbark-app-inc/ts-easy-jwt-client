import { EasyJWTNetworker } from '../../EasyJWTNetworker'
import { AuthState } from './ProcessGroupFactory'

export enum RequestName {
  REGISTER = 'Register',
  LOGIN = 'Login',
  LOGOUT = 'Logout',
  CURRENT_USER = 'CurrentUser',
  FORGOT_PASSWORD = 'ForgotPassword',
  UPDATE_FORGOT_PASSWORD = 'UpdateForgotPassword'
}

export type ProcessFactoryOptions = {
  networker: EasyJWTNetworker
}

export type ProcessPayload = Omit<
  AuthState,
  'getAccessToken' | 'getRefreshToken'
>
