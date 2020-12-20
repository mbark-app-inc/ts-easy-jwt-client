import { IEasyJWTTokenManager } from './interfaces/IEasyJWTTokenManager'
import TokenNotFoundError from './errors/TokenNotFoundError'

export class EasyJWTTokenManager implements IEasyJWTTokenManager {
  protected static ACCESS_TOKEN_KEY = 'access_token'
  protected static REFRESH_TOKEN_KEY = 'refresh_token'

  protected _getStorage() {
    return localStorage
  }

  getAccessToken(): string {
    const token = this._getStorage().getItem(
      EasyJWTTokenManager.ACCESS_TOKEN_KEY
    )
    if (!token) {
      throw new TokenNotFoundError()
    }

    return token
  }

  setAccessToken(token: string) {
    this._getStorage().setItem(EasyJWTTokenManager.ACCESS_TOKEN_KEY, token)
  }

  removeAccessToken() {
    this._getStorage().removeItem(EasyJWTTokenManager.ACCESS_TOKEN_KEY)
  }

  getRefreshToken(): string {
    const token = this._getStorage().getItem(
      EasyJWTTokenManager.REFRESH_TOKEN_KEY
    )
    if (!token) {
      throw new TokenNotFoundError()
    }

    return token
  }

  setRefreshToken(token: string) {
    this._getStorage().setItem(EasyJWTTokenManager.REFRESH_TOKEN_KEY, token)
  }

  removeRefreshToken() {
    this._getStorage().removeItem(EasyJWTTokenManager.REFRESH_TOKEN_KEY)
  }
}
