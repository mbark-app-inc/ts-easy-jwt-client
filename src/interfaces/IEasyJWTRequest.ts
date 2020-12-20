import {
  EasyJWTRequestOptions
} from '../types/EasyJWTRequest'
import { AxiosPromise } from 'axios'

export interface IEasyJWTRequestClass {
  new (options: EasyJWTRequestOptions): IEasyJWTRequest
}

export interface IEasyJWTRequest {
  options: EasyJWTRequestOptions

  send(data: Record<string, any>): AxiosPromise
}
