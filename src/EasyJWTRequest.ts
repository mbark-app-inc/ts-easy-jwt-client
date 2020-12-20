import { EasyJWTRequestOptions } from './types/EasyJWTRequest'
import { IEasyJWTRequest } from './interfaces/IEasyJWTRequest'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { EasyJWTTokenManager } from './EasyJWTTokenManager'

export class EasyJWTRequest implements IEasyJWTRequest {
  options: EasyJWTRequestOptions
  protected _tokenManager: EasyJWTTokenManager

  constructor(options: EasyJWTRequestOptions) {
    this.options = options
    this._tokenManager = new EasyJWTTokenManager()
  }

  protected _getNetworker() {
    return axios
  }

  async send(data: Record<string, any> = {}): Promise<AxiosResponse> {
    const request = this._getRequest(data)
    return this._getNetworker()(request)
  }

  protected _getRequest(data: Record<string, any>) {
    const request: AxiosRequestConfig = {
      method: this.options.method,
      url: this.options.url
    }

    const shouldBeParams = ['GET', 'DELETE'].includes(this.options.method)

    if (shouldBeParams) {
      request.params = data
    } else {
      request.data = data
    }

    if (this.options.needsAuth) {
      const token = this._tokenManager.getAccessToken()
      request.headers = {
        authorization: `Bearer ${token}`
      }
    }

    return request
  }
}
