import {
  EasyJWTRequestOptions
} from './types/EasyJWTRequest'
import { IEasyJWTRequest } from './interfaces/IEasyJWTRequest'
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

export class EasyJWTRequest implements IEasyJWTRequest {
  options: EasyJWTRequestOptions

  constructor (options: EasyJWTRequestOptions) {
    this.options = options
  }

  send(data: Record<string, any> = {}): AxiosPromise {
    const request = this._getRequest(data)
    return axios(request)
  }

  protected _getRequest(data: Record<string, any>) {
    const request: AxiosRequestConfig = {
      method: this.options.method,
      url: this.options.url
    }

    const shouldBeParams = [
      'GET',
      'DELETE'
    ].includes(this.options.method)

    if (shouldBeParams) {
      request.params = data
    } else {
      request.data = data
    }

    if (this.options.needsAuth) {
      const token = 'my token'
      request.headers = {
        'authorization': `Bearer ${token}`
      }
    }

    return request
  }
}
