import { RequestName } from '../types/ProcessFactory'
import { EasyJWTRequest } from '../../EasyJWTRequest'
import { EasyJWTNetworker } from '../../EasyJWTNetworker'

export type AuthState<UserType = any> = {
  user: UserType | null
  getAccessToken: () => string | null
  getRefreshToken: () => string | null
}

export type RootState = {
  [key: string]: any
  auth: AuthState
}

export type ProcessGroupFactoryOptions = {
  requests: {
    [name in RequestName]?: EasyJWTRequest
  }
  networker: EasyJWTNetworker
}
