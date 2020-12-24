import { EasyJWTNetworker } from '../../EasyJWTNetworker'
import { AuthState } from './ProcessGroupFactory'
export declare enum RequestName {
  REGISTER = 'Register',
  LOGIN = 'Login',
  LOGOUT = 'Logout',
  CURRENT_USER = 'CurrentUser',
  FORGOT_PASSWORD = 'ForgotPassword',
  UPDATE_FORGOT_PASSWORD = 'UpdateForgotPassword'
}
export declare type ProcessFactoryOptions = {
  networker: EasyJWTNetworker
}
export declare type ProcessPayload = Omit<
  AuthState,
  'getAccessToken' | 'getRefreshToken'
>
