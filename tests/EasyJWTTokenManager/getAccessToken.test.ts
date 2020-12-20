import { EasyJWTTokenManager } from '../../src/EasyJWTTokenManager'
import TokenNotFoundError from '../../src/errors/TokenNotFoundError'

describe('src/EasyJWTTokenManager::getAccessToken', function () {
  let instance: EasyJWTTokenManager

  beforeEach(function () {
    instance = new EasyJWTTokenManager()
    instance['_getStorage'] = () => this.mockStorage
  })

  it('should throw TokenNotFoundError if token is not found', function () {
    this.assert.throws(() => {
      instance.getAccessToken()
    }, TokenNotFoundError)
  })

  it('should return token if it is found', function () {
    instance.setAccessToken('my-token')
    const foundToken = instance.getAccessToken()
    this.assert.equal(foundToken, 'my-token')
  })
})
