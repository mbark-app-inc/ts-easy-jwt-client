import { AxiosResponse } from 'axios'
import { EasyJWTTokenManager } from '../../EasyJWTTokenManager'
import { ProcessPayload } from '../types/ProcessFactory'
export declare class PayloadHandler {
  protected _tokenManager: EasyJWTTokenManager
  process(response: AxiosResponse): ProcessPayload | null
}
