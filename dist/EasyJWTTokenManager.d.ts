import { IEasyJWTTokenManager } from './interfaces/IEasyJWTTokenManager'
export declare class EasyJWTTokenManager implements IEasyJWTTokenManager {
  protected static ACCESS_TOKEN_KEY: string
  protected static REFRESH_TOKEN_KEY: string
  protected _getStorage(): Storage
  getAccessToken(): string
  setAccessToken(token: string): void
  removeAccessToken(): void
  getRefreshToken(): string
  setRefreshToken(token: string): void
  removeRefreshToken(): void
}
