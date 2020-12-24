import { RequestName } from '../types/ProcessFactory'
import { EasyJWTRequest } from '../../EasyJWTRequest'
import { EasyJWTNetworker } from '../../EasyJWTNetworker'
export declare type AuthState<UserType = any> = {
  user: UserType | null
  getAccessToken: () => string | null
  getRefreshToken: () => string | null
}
export declare type RootState = {
  [key: string]: any
  auth: AuthState
}
export declare type ProcessGroupFactoryOptions = {
  requests: {
    [name in RequestName]?: EasyJWTRequest
  }
  networker: EasyJWTNetworker
}
