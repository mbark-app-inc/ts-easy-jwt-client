import { ProcessPayload } from '../types/ProcessFactory'
import { RootState } from '../types/ProcessGroupFactory'
import { EasyJWTNetworker } from '../../EasyJWTNetworker'
import { EasyJWTRequest } from '../../EasyJWTRequest'
export declare function getLoginProcess<
  GlobalState extends RootState = RootState
>(
  networker: EasyJWTNetworker,
  request: EasyJWTRequest
): {
  new (
    options: import('ts-redux-process/dist/types/ReduxProcess').ReduxProcessOptions
  ): {
    performAction(form?: any): Promise<ProcessPayload | null>
    getNewState(
      payload: Pick<
        import('../types/ProcessGroupFactory').AuthState<any>,
        'user'
      > | null,
      oldState: import('../types/ProcessGroupFactory').AuthState<any>
    ): import('../types/ProcessGroupFactory').AuthState<any>
    options: import('ts-redux-process/dist/types/ReduxProcess').ReduxProcessOptions
  }
  getProcessKey(): string
}
