import { EasyJWTTokenManager } from '../../src/EasyJWTTokenManager'

describe('src/EasyJWTTokenManager::constructor', function () {
  it('should return instance of type EasyJWTTokenManager', function () {
    const instance = new EasyJWTTokenManager()

    this.assert.instanceOf(instance, EasyJWTTokenManager)
  })
})
