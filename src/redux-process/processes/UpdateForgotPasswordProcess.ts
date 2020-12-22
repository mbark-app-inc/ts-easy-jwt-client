import { EasyJWTProcess } from './EasyJWTProcess'
import { ProcessPayload } from '../types/ProcessFactory'
import { RootState } from '../types/ProcessGroupFactory'
import { EasyJWTNetworker } from '../../EasyJWTNetworker'
import { EasyJWTRequest } from '../../EasyJWTRequest'
import { payloadHandler } from '../helpers/payloadHandler'

export function getUpdateForgotPasswordProcess<
  GlobalState extends RootState = RootState
>(networker: EasyJWTNetworker, request: EasyJWTRequest) {
  return class UpdateForgotPasswordProcess extends EasyJWTProcess<GlobalState> {
    async performAction(form: any = {}): Promise<ProcessPayload | null> {
      const response = await networker.execute(request, form)
      return payloadHandler(response)
    }
  }
}
