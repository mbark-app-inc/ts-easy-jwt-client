import { EasyJWTNetworkerOptions } from './types/EasyJWTNetworker'
import { IEasyJWTNetworker } from './interfaces/IEasyJWTNetworker'
import { IEasyJWTRequest } from './interfaces/IEasyJWTRequest'
import { EasyJWTTokenManager } from './EasyJWTTokenManager'
import { AxiosResponse } from 'axios'

export class EasyJWTNetworker implements IEasyJWTNetworker {
  options: EasyJWTNetworkerOptions
  protected _tokenManager: EasyJWTTokenManager

  constructor(options: EasyJWTNetworkerOptions) {
    this.options = options
    this._tokenManager = new EasyJWTTokenManager()
  }

  async execute(
    request: IEasyJWTRequest,
    data: Record<string, any> = {}
  ): Promise<AxiosResponse> {
    let response = await request.send(data)
    if (response.status === 403) {
      const didUpdateAccessToken = await this._refreshAccessToken()
      if (didUpdateAccessToken) {
        response = await request.send(data)
      }
    }

    return response
  }

  protected async _refreshAccessToken() {
    if (!this.options.refreshRequest) {
      return false
    }

    const response = await this.options.refreshRequest.send({
      refreshToken: this._tokenManager.getRefreshToken()
    })

    if (response.status === 200) {
      this._tokenManager.setAccessToken(response.data.tokens.access)

      if (response.data.tokens.refresh) {
        this._tokenManager.setRefreshToken(response.data.tokens.refresh)
      }

      return true
    }

    return false
  }
}
