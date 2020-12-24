import { EasyJWTRequestOptions } from './types/EasyJWTRequest'
import { IEasyJWTRequest } from './interfaces/IEasyJWTRequest'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { EasyJWTTokenManager } from './EasyJWTTokenManager'
export declare class EasyJWTRequest implements IEasyJWTRequest {
  options: EasyJWTRequestOptions
  protected _tokenManager: EasyJWTTokenManager
  constructor(options: EasyJWTRequestOptions)
  protected _getNetworker(): import('axios').AxiosStatic
  send(data?: Record<string, any>): Promise<AxiosResponse>
  protected _getRequest(data: Record<string, any>): AxiosRequestConfig
}
