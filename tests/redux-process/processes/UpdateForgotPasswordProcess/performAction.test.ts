import { getUpdateForgotPasswordProcess } from '../../../../src/redux-process/processes/UpdateForgotPasswordProcess'
import { EasyJWTNetworker } from '../../../../src/EasyJWTNetworker'
import { EasyJWTRequest } from '../../../../src/EasyJWTRequest'

describe('src/redux-process/processes/UpdateForgotPasswordProcess::performAction', function () {
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

    const UpdateForgotPasswordProcess = getUpdateForgotPasswordProcess(
      networker,
      request
    )
    instance = new UpdateForgotPasswordProcess({})
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
