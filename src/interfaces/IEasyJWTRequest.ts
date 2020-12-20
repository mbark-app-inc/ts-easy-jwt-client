import { EasyJWTRequestOptions } from '../types/EasyJWTRequest'
import { AxiosResponse } from 'axios'

export interface IEasyJWTRequestClass {
  new (options: EasyJWTRequestOptions): IEasyJWTRequest
}

export interface IEasyJWTRequest {
  options: EasyJWTRequestOptions

  send(data: Record<string, any>): Promise<AxiosResponse>
}
