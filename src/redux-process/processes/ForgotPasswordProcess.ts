import { ReduxProcess } from 'ts-redux-process'
import { ProcessPayload } from '../types/ProcessFactory'
import { AuthState, RootState } from '../types/ProcessGroupFactory'
import { EasyJWTTokenManager } from '../../EasyJWTTokenManager'
import { EasyJWTNetworker } from '../../EasyJWTNetworker'
import { EasyJWTRequest } from '../../EasyJWTRequest'
import NetworkError from '../errors/NetworkError'

export function getForgotPasswordProcess<GlobalState extends RootState>(
  networker: EasyJWTNetworker,
  request: EasyJWTRequest
) {
  return class ForgotPasswordProcess extends ReduxProcess<
    any,
    ProcessPayload | null,
    AuthState,
    GlobalState
  > {
    async performAction(form: any = {}): Promise<ProcessPayload | null> {
      const response = await networker.execute(request, form)
      if (response.status === 200) {
        const { tokens, user } = response.data
        if (tokens) {
          const tokenManager = new EasyJWTTokenManager()
          if (tokens.access) {
            tokenManager.setAccessToken(tokens.access)
          }
          if (tokens.response) {
            tokenManager.setRefreshToken(tokens.response)
          }
        }

        if (user) {
          return {
            user
          }
        }

        return null
      } else {
        throw new NetworkError(response)
      }
    }

    getNewState(payload: ProcessPayload | null, oldState: AuthState) {
      if (payload) {
        return {
          ...oldState,
          ...payload
        }
      } else {
        return oldState
      }
    }
  }
}
