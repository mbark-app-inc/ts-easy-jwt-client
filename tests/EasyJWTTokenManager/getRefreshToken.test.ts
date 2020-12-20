import { EasyJWTTokenManager } from '../../src/EasyJWTTokenManager'
import TokenNotFoundError from '../../src/errors/TokenNotFoundError'

describe('src/EasyJWTTokenManager::getRefreshToken', function () {
  let instance: EasyJWTTokenManager

  beforeEach(function () {
    instance = new EasyJWTTokenManager()
    instance['_getStorage'] = () => this.mockStorage
  })

  it('should throw TokenNotFoundError if token is not found', function () {
    this.assert.throws(() => {
      instance.getRefreshToken()
    }, TokenNotFoundError)
  })

  it('should return token if it is found', function () {
    instance.setRefreshToken('my-token')
    const foundToken = instance.getRefreshToken()
    this.assert.equal(foundToken, 'my-token')
  })
})
