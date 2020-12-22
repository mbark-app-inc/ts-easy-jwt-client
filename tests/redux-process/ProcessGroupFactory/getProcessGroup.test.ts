import { ProcessGroupFactory } from '../../../src/redux-process/ProcessGroupFactory'
import { EasyJWTRequest } from '../../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../../src/EasyJWTNetworker'
import { RequestName } from '../../../src/redux-process/types/ProcessFactory'
import { ReduxProcessGroup } from 'ts-redux-process'

describe('src/redux-process/ProcessGroupFactory::getProcessGroup', function () {
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

  it('should redux process group', function () {
    const group = processGroupFactory.getProcessGroup()
    this.assert.instanceOf(group, ReduxProcessGroup)
  })
})
