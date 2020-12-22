import { ProcessGroupFactory } from '../../../src/redux-process/ProcessGroupFactory'
import { EasyJWTRequest } from '../../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../../src/EasyJWTNetworker'
import { RequestName } from '../../../src/redux-process/types/ProcessFactory'

describe('src/redux-process/ProcessGroupFactory::getProcesses', function () {
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

  it('should redux processes and set cache', function () {
    this.assert.isNotOk(processGroupFactory['_processes'])
    const processes = processGroupFactory.getProcesses()
    this.assert.isArray(processes)
    this.assert.lengthOf(processes, 1)
    this.assert.isArray(processGroupFactory['_processes'])
  })

  it('should return cache if already called once', function () {
    this.assert.isArray(processGroupFactory['_processes'])
    const processes = processGroupFactory.getProcesses()
    this.assert.isArray(processes)
    this.assert.lengthOf(processes, 1)
    this.assert.isArray(processGroupFactory['_processes'])
  })
})
