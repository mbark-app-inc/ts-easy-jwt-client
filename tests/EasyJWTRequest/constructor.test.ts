import { EasyJWTRequest } from '../../src/EasyJWTRequest'

describe('src/EasyJWTRequest::constructor', function () {
  it('should return instance of type EasyJWTRequest', function () {
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'POST'
    })

    this.assert.instanceOf(instance, EasyJWTRequest)
  })

  it('should have values set', function () {
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'POST'
    })

    this.assert.hasAllKeys(instance, ['options', '_tokenManager'])
  })
})
