import { getCurrentUserProcess } from '../../../../src/redux-process/processes/CurrentUserProcess'
import { EasyJWTProcess } from '../../../../src/redux-process/processes/EasyJWTProcess'
import { EasyJWTNetworker } from '../../../../src/EasyJWTNetworker'
import { EasyJWTRequest } from '../../../../src/EasyJWTRequest'

describe('src/redux-process/processes/CurrentUserProcess::higherOrderFunc', function () {
  let networker: EasyJWTNetworker,
    refreshRequest: EasyJWTRequest,
    request: EasyJWTRequest

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
  })

  it('should return class that inherits EasyJWTProcess', function () {
    const TheClass = getCurrentUserProcess(networker, request)

    const instance = new TheClass({})

    this.assert.instanceOf(instance, EasyJWTProcess)
  })
})
