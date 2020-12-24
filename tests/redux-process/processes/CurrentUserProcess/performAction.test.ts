import { getCurrentUserProcess } from '../../../../src/redux-process/processes/CurrentUserProcess'
import { EasyJWTNetworker } from '../../../../src/EasyJWTNetworker'
import { EasyJWTRequest } from '../../../../src/EasyJWTRequest'

describe('src/redux-process/processes/CurrentUserProcess::performAction', function () {
  let networker: EasyJWTNetworker,
    refreshRequest: EasyJWTRequest,
    request: EasyJWTRequest,
    instance: any,
    networkerStub: any

  before(function () {
    refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    networker = new EasyJWTNetworker({
      refreshRequest
    })
    request = new EasyJWTRequest({
      url: '/other',
      method: 'GET'
    })

    networkerStub = this.sinon.stub().returns({
      status: 200,
      data: {
        user: {
          id: 1
        }
      }
    })
    request['_getNetworker'] = () => networkerStub

    const CurrentUserProcess = getCurrentUserProcess(networker, request)
    instance = new CurrentUserProcess({})
  })

  it('should resolve with payload', async function () {
    const result = await instance.performAction({}, {})
    this.assert.deepEqual(result, {
      user: {
        id: 1
      }
    })
  })
})
