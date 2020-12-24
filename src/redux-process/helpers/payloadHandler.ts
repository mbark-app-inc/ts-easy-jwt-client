import { AxiosResponse } from 'axios'
import { EasyJWTTokenManager } from '../../EasyJWTTokenManager'
import NetworkError from '../errors/NetworkError'
import { ProcessPayload } from '../types/ProcessFactory'

export class PayloadHandler {
  protected _tokenManager = new EasyJWTTokenManager()

  process(response: AxiosResponse): ProcessPayload | null {
    if (response.status === 200) {
      const { tokens, user } = response.data
      if (tokens) {
        if (tokens.access) {
          this._tokenManager.setAccessToken(tokens.access)
        }
        if (tokens.refresh) {
          this._tokenManager.setRefreshToken(tokens.refresh)
        }
      }

      if (user) {
        return {
          user
        }
      }

      return null
    } else {
      throw new NetworkError(response)
    }
  }
}
