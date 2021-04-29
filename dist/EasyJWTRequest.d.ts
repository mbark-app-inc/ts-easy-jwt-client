import { EasyJWTRequestOptions } from './types/EasyJWTRequest'
import { IEasyJWTRequest } from './interfaces/IEasyJWTRequest'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { EasyJWTTokenManager } from './EasyJWTTokenManager'
export declare class EasyJWTRequest implements IEasyJWTRequest {
  options: EasyJWTRequestOptions
  protected _tokenManager: EasyJWTTokenManager
  constructor(options: EasyJWTRequestOptions)
  protected _getNetworker(): import('axios').AxiosStatic
  send(
    params?: Record<string, string>,
    data?: Record<string, any>
  ): Promise<AxiosResponse>
  protected _getRequest(
    params: Record<string, string>,
    data: Record<string, any>
  ): AxiosRequestConfig
  protected _getUrlWithParams(params: Record<string, string>): string
}
