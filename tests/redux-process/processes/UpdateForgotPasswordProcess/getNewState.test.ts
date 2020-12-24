import { getUpdateForgotPasswordProcess } from '../../../../src/redux-process/processes/UpdateForgotPasswordProcess'
import { EasyJWTNetworker } from '../../../../src/EasyJWTNetworker'
import { EasyJWTRequest } from '../../../../src/EasyJWTRequest'

describe('src/redux-process/processes/UpdateForgotPasswordProcess::getNewState', function () {
  let networker: EasyJWTNetworker,
    refreshRequest: EasyJWTRequest,
    request: EasyJWTRequest,
    instance: any

  before(function () {
    refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    networker = new EasyJWTNetworker({
      refreshRequest
    })
    request = new EasyJWTRequest({
      url: '/other',
      method: 'GET'
    })

    const UpdateForgotPasswordProcess = getUpdateForgotPasswordProcess(
      networker,
      request
    )
    instance = new UpdateForgotPasswordProcess({})
  })

  it('should return original state if payload is null', function () {
    const oldState = {
      user: null
    }
    const newState = instance.getNewState(null, oldState)
    this.assert.equal(newState, oldState)
  })

  it('should return modified state if payload is not null', function () {
    const oldState = {
      user: null
    }
    const newState = instance.getNewState(
      {
        user: 1
      },
      oldState
    )
    this.assert.deepEqual(newState, {
      user: 1
    })
  })
})
