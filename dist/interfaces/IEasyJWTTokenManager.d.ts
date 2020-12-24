export interface IEasyJWTTokenManagerClass {
  new (): IEasyJWTTokenManager
}
export interface IEasyJWTTokenManager {
  getAccessToken(): string
  setAccessToken(token: string): void
  removeAccessToken(): void
  getRefreshToken(): string
  setRefreshToken(token: string): void
  removeRefreshToken(): void
}
