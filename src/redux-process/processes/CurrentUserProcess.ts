import { EasyJWTProcess } from './EasyJWTProcess'
import { ProcessPayload } from '../types/ProcessFactory'
import { RootState } from '../types/ProcessGroupFactory'
import { EasyJWTNetworker } from '../../EasyJWTNetworker'
import { EasyJWTRequest } from '../../EasyJWTRequest'
import { PayloadHandler } from '../helpers/PayloadHandler'

export function getCurrentUserProcess<
  GlobalState extends RootState = RootState
>(networker: EasyJWTNetworker, request: EasyJWTRequest) {
  return class CurrentUserProcess extends EasyJWTProcess<GlobalState> {
    async performAction(form: any = {}): Promise<ProcessPayload | null> {
      const response = await networker.execute(request, form)
      const handler = new PayloadHandler()
      return handler.process(response)
    }
  }
}
