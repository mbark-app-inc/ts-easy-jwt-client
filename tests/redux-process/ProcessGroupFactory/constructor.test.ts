import { ProcessGroupFactory } from '../../../src/redux-process/ProcessGroupFactory'
import { EasyJWTRequest } from '../../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../../src/EasyJWTNetworker'

describe('src/redux-process/ProcessGroupFactory::constructor', function () {
  let refreshRequest: EasyJWTRequest, networker: EasyJWTNetworker

  before(function () {
    refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    networker = new EasyJWTNetworker({
      refreshRequest
    })
  })

  it('should return instance of type ProcessGroupFactory', function () {
    const instance = new ProcessGroupFactory({
      requests: {},
      networker
    })

    this.assert.instanceOf(instance, ProcessGroupFactory)
  })

  it('should have values set', function () {
    const instance = new ProcessGroupFactory({
      requests: {},
      networker
    })

    this.assert.hasAllKeys(instance, [
      'options',
      '_tokenManager',
      '_processFactory'
    ])
  })
})
