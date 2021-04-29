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

  async send(
    params: Record<string, string> = {},
    data: Record<string, any> = {}
  ): Promise<AxiosResponse> {
    const request = this._getRequest(params, data)
    return this._getNetworker()(request)
  }

  protected _getRequest(
    params: Record<string, string>,
    data: Record<string, any>
  ) {
    const request: AxiosRequestConfig = {
      method: this.options.method,
      url: this._getUrlWithParams(params)
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

  protected _getUrlWithParams(params: Record<string, string>): string {
    return Object.entries(params).reduce((url, [key, value]) => {
      return url.replace(`{${key}}`, value)
    }, this.options.url)
  }
}
