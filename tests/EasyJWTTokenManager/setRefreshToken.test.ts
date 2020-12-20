import { EasyJWTTokenManager } from '../../src/EasyJWTTokenManager'
import TokenNotFoundError from '../../src/errors/TokenNotFoundError'

describe('src/EasyJWTTokenManager::setRefreshToken', function () {
  let instance: EasyJWTTokenManager

  beforeEach(function () {
    instance = new EasyJWTTokenManager()
    instance['_getStorage'] = () => this.mockStorage
  })

  it('should set token', function () {
    this.assert.throws(() => {
      instance.getRefreshToken()
    }, TokenNotFoundError)

    instance.setRefreshToken('my-token')
    const foundToken = instance.getRefreshToken()
    this.assert.equal(foundToken, 'my-token')
  })
})
