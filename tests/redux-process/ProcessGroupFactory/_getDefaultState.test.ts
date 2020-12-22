import { ProcessGroupFactory } from '../../../src/redux-process/ProcessGroupFactory'
import { EasyJWTRequest } from '../../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../../src/EasyJWTNetworker'
import { RequestName } from '../../../src/redux-process/types/ProcessFactory'

describe('src/redux-process/ProcessGroupFactory::_getDefaultState', function () {
  let refreshRequest: EasyJWTRequest,
    networker: EasyJWTNetworker,
    processGroupFactory: ProcessGroupFactory,
    registerRequest: EasyJWTRequest

  before(function () {
    registerRequest = new EasyJWTRequest({
      url: '/register',
      method: 'POST'
    })
    refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    networker = new EasyJWTNetworker({
      refreshRequest
    })
    processGroupFactory = new ProcessGroupFactory({
      requests: {
        [RequestName.LOGIN]: undefined,
        [RequestName.REGISTER]: registerRequest
      },
      networker
    })
  })

  it('should return object with keys', function () {
    const state = processGroupFactory['_getDefaultState']()
    this.assert.hasAllKeys(state, ['user', 'getAccessToken', 'getRefreshToken'])
    this.assert.isNull(state.user)
  })

  it('should return access token if set', function () {
    const state = processGroupFactory['_getDefaultState']()
    this.assert.isNull(state.getAccessToken())

    processGroupFactory['_tokenManager']['_getStorage'] = () => this.mockStorage
    processGroupFactory['_tokenManager'].setAccessToken('my-token')

    this.assert.equal(state.getAccessToken(), 'my-token')
  })

  it('should return refresh token if set', function () {
    const state = processGroupFactory['_getDefaultState']()
    this.assert.isNull(state.getRefreshToken())

    processGroupFactory['_tokenManager']['_getStorage'] = () => this.mockStorage
    processGroupFactory['_tokenManager'].setRefreshToken('my-token')

    this.assert.equal(state.getRefreshToken(), 'my-token')
  })
})
