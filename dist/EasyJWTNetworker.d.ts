import { EasyJWTNetworkerOptions } from './types/EasyJWTNetworker'
import { IEasyJWTNetworker } from './interfaces/IEasyJWTNetworker'
import { IEasyJWTRequest } from './interfaces/IEasyJWTRequest'
import { EasyJWTTokenManager } from './EasyJWTTokenManager'
import { AxiosResponse } from 'axios'
export declare class EasyJWTNetworker implements IEasyJWTNetworker {
  options: EasyJWTNetworkerOptions
  protected _tokenManager: EasyJWTTokenManager
  constructor(options: EasyJWTNetworkerOptions)
  execute(
    request: IEasyJWTRequest,
    data?: Record<string, any>
  ): Promise<AxiosResponse>
  protected _refreshAccessToken(): Promise<boolean>
}
