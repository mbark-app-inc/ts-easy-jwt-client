import { AxiosResponse } from 'axios'
import { EasyJWTTokenManager } from '../../EasyJWTTokenManager'
import NetworkError from '../errors/NetworkError'

export function payloadHandler(response: AxiosResponse) {
  if (response.status === 200) {
    const { tokens, user } = response.data
    if (tokens) {
      const tokenManager = new EasyJWTTokenManager()
      if (tokens.access) {
        tokenManager.setAccessToken(tokens.access)
      }
      if (tokens.response) {
        tokenManager.setRefreshToken(tokens.response)
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
