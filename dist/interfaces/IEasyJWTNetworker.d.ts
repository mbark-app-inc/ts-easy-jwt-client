import { EasyJWTNetworkerOptions } from '../types/EasyJWTNetworker'
import { IEasyJWTRequest } from './IEasyJWTRequest'
import { AxiosResponse } from 'axios'
export interface IEasyJWTNetworkerClass {
  new (options: EasyJWTNetworkerOptions): IEasyJWTNetworker
}
export interface IEasyJWTNetworker {
  options: EasyJWTNetworkerOptions
  execute(
    request: IEasyJWTRequest,
    data: Record<string, any>
  ): Promise<AxiosResponse>
}
