import { EasyJWTTokenManager } from '../../src/EasyJWTTokenManager'
import TokenNotFoundError from '../../src/errors/TokenNotFoundError'

describe('src/EasyJWTTokenManager::removeRefreshToken', function () {
  let instance: EasyJWTTokenManager

  beforeEach(function () {
    instance = new EasyJWTTokenManager()
    instance['_getStorage'] = () => this.mockStorage
  })

  it('should remove token', function () {
    instance.setRefreshToken('my-token')
    const foundToken = instance.getRefreshToken()
    this.assert.equal(foundToken, 'my-token')

    instance.removeRefreshToken()

    this.assert.throws(() => {
      instance.getRefreshToken()
    }, TokenNotFoundError)
  })
})
