import { ProcessFactory } from '../../../src/redux-process/ProcessFactory'
import { EasyJWTRequest } from '../../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../../src/EasyJWTNetworker'
import { RequestName } from '../../../src/redux-process/types/ProcessFactory'

describe('src/redux-process/ProcessFactory::getProcess', function () {
  let refreshRequest: EasyJWTRequest,
    loginRequest: EasyJWTRequest,
    networker: EasyJWTNetworker

  before(function () {
    refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    networker = new EasyJWTNetworker({
      refreshRequest
    })
    loginRequest = new EasyJWTRequest({
      url: '/login',
      method: 'POST'
    })
  })

  it('should return subclass of ReduxProcess', function () {
    const instance = new ProcessFactory({
      networker
    })

    for (const name of Object.values(RequestName)) {
      const ProcessClass = instance.getProcess(
        name as RequestName,
        loginRequest
      )
      this.assert.equal(ProcessClass['name'], `${name}Process`)
    }
  })
})
