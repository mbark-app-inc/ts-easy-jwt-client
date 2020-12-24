import { ReduxProcess } from 'ts-redux-process'
import { ProcessPayload } from '../types/ProcessFactory'
import { AuthState, RootState } from '../types/ProcessGroupFactory'
export declare abstract class EasyJWTProcess<
  GlobalState extends RootState = RootState
> extends ReduxProcess<
  Record<string, any>,
  ProcessPayload | null,
  AuthState,
  GlobalState
> {
  abstract performAction(
    form: Record<string, any>
  ): Promise<ProcessPayload | null>
  getNewState(
    payload: ProcessPayload | null,
    oldState: AuthState
  ): AuthState<any>
}
