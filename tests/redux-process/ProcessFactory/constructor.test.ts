import { ProcessFactory } from '../../../src/redux-process/ProcessFactory'
import { EasyJWTRequest } from '../../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../../src/EasyJWTNetworker'

describe('src/redux-process/ProcessFactory::constructor', function () {
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
  it('should return instance of type ProcessFactory', function () {
    const instance = new ProcessFactory({
      networker
    })

    this.assert.instanceOf(instance, ProcessFactory)
  })

  it('should have values set', function () {
    const instance = new ProcessFactory({
      networker
    })

    this.assert.hasAllKeys(instance, ['options', '_tokenManager'])
  })
})
