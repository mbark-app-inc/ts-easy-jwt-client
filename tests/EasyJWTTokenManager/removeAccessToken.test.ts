import { EasyJWTTokenManager } from '../../src/EasyJWTTokenManager'
import TokenNotFoundError from '../../src/errors/TokenNotFoundError'

describe('src/EasyJWTTokenManager::removeAccessToken', function () {
  let instance: EasyJWTTokenManager

  beforeEach(function () {
    instance = new EasyJWTTokenManager()
    instance['_getStorage'] = () => this.mockStorage
  })

  it('should remove token', function () {
    instance.setAccessToken('my-token')
    const foundToken = instance.getAccessToken()
    this.assert.equal(foundToken, 'my-token')

    instance.removeAccessToken()

    this.assert.throws(() => {
      instance.getAccessToken()
    }, TokenNotFoundError)
  })
})
