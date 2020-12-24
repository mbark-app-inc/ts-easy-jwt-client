import { getRegisterProcess } from '../../../../src/redux-process/processes/RegisterProcess'
import { EasyJWTNetworker } from '../../../../src/EasyJWTNetworker'
import { EasyJWTRequest } from '../../../../src/EasyJWTRequest'

describe('src/redux-process/processes/RegisterProcess::getNewState', function () {
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

    const LoginProcess = getRegisterProcess(networker, request)
    instance = new LoginProcess({})
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
