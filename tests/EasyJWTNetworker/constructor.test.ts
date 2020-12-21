import { EasyJWTRequest } from '../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../src/EasyJWTNetworker'

describe('src/EasyJWTNetworker::constructor', function () {
  it('should return instance of type EasyJWTRequest', function () {
    const instance = new EasyJWTNetworker({
      refreshRequest: new EasyJWTRequest({
        url: '/refresh',
        method: 'POST'
      })
    })

    this.assert.instanceOf(instance, EasyJWTNetworker)
  })

  it('should have values set', function () {
    const instance = new EasyJWTNetworker({
      refreshRequest: new EasyJWTRequest({
        url: '/refresh',
        method: 'POST'
      })
    })

    this.assert.hasAllKeys(instance, ['options', '_tokenManager'])
  })
})
