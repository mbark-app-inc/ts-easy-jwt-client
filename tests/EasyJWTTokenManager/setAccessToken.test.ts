import { EasyJWTTokenManager } from '../../src/EasyJWTTokenManager'
import TokenNotFoundError from '../../src/errors/TokenNotFoundError'

describe('src/EasyJWTTokenManager::setAccessToken', function () {
  let instance: EasyJWTTokenManager

  beforeEach(function () {
    instance = new EasyJWTTokenManager()
    instance['_getStorage'] = () => this.mockStorage
  })

  it('should set token', function () {
    this.assert.throws(() => {
      instance.getAccessToken()
    }, TokenNotFoundError)

    instance.setAccessToken('my-token')
    const foundToken = instance.getAccessToken()
    this.assert.equal(foundToken, 'my-token')
  })
})
