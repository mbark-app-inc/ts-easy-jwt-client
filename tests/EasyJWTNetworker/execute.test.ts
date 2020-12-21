import { EasyJWTRequest } from '../../src/EasyJWTRequest'
import { EasyJWTNetworker } from '../../src/EasyJWTNetworker'

describe('src/EasyJWTNetworker::execute', function () {
  it('should resolve when response status is not 403', async function () {
    const refreshNetworkStub: any = this.sinon
      .stub()
      .returns(Promise.resolve({ status: 200 }))
    const refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    refreshRequest['_getNetworker'] = () => refreshNetworkStub
    const instance = new EasyJWTNetworker({
      refreshRequest
    })

    const requestNetworkStub: any = this.sinon.stub().returns(
      Promise.resolve({
        status: 200
      })
    )
    const request = new EasyJWTRequest({
      url: '/go-do-the-thing',
      method: 'GET'
    })
    request['_getNetworker'] = () => requestNetworkStub

    await instance.execute(request)

    this.assert.notCalled(refreshNetworkStub)
    this.assert.called(requestNetworkStub)
  })

  it('should refresh access token when response is 403 and retry request when refresh is successful', async function () {
    const refreshNetworkStub: any = this.sinon.stub().returns(
      Promise.resolve({
        status: 200,
        data: {
          tokens: {
            access: 'my-new-access'
          }
        }
      })
    )
    const refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    refreshRequest['_getNetworker'] = () => refreshNetworkStub
    const instance = new EasyJWTNetworker({
      refreshRequest
    })

    const requestNetworkStub: any = this.sinon
      .stub()
      .onCall(0)
      .returns(
        Promise.resolve({
          status: 403
        })
      )
      .onCall(1)
      .returns(
        Promise.resolve({
          status: 200
        })
      )
    const request = new EasyJWTRequest({
      url: '/go-do-the-thing',
      method: 'GET'
    })
    request['_getNetworker'] = () => requestNetworkStub

    instance['_tokenManager']['_getStorage'] = () => this.mockStorage
    instance['_tokenManager'].setRefreshToken('my-refresh')

    await instance.execute(request)

    this.assert.called(refreshNetworkStub)
    this.assert.called(requestNetworkStub)

    this.assert.equal(
      instance['_tokenManager'].getAccessToken(),
      'my-new-access'
    )
    this.assert.equal(instance['_tokenManager'].getRefreshToken(), 'my-refresh')
  })

  it('should refresh access token when response is 403 and retry request when refresh is successful and update refresh token if it exists', async function () {
    const refreshNetworkStub: any = this.sinon.stub().returns(
      Promise.resolve({
        status: 200,
        data: {
          tokens: {
            access: 'my-new-access',
            refresh: 'my-new-refresh'
          }
        }
      })
    )
    const refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    refreshRequest['_getNetworker'] = () => refreshNetworkStub
    const instance = new EasyJWTNetworker({
      refreshRequest
    })

    const requestNetworkStub: any = this.sinon
      .stub()
      .onCall(0)
      .returns(
        Promise.resolve({
          status: 403
        })
      )
      .onCall(1)
      .returns(
        Promise.resolve({
          status: 200
        })
      )
    const request = new EasyJWTRequest({
      url: '/go-do-the-thing',
      method: 'GET'
    })
    request['_getNetworker'] = () => requestNetworkStub

    instance['_tokenManager']['_getStorage'] = () => this.mockStorage
    instance['_tokenManager'].setRefreshToken('my-refresh')

    await instance.execute(request)

    this.assert.called(refreshNetworkStub)
    this.assert.called(requestNetworkStub)

    this.assert.equal(
      instance['_tokenManager'].getAccessToken(),
      'my-new-access'
    )
    this.assert.equal(
      instance['_tokenManager'].getRefreshToken(),
      'my-new-refresh'
    )
  })

  it('should refresh access token when response is 403 and exit early when refresh fails', async function () {
    const refreshNetworkStub: any = this.sinon.stub().returns(
      Promise.resolve({
        status: 403,
        data: {}
      })
    )
    const refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    refreshRequest['_getNetworker'] = () => refreshNetworkStub
    const instance = new EasyJWTNetworker({
      refreshRequest
    })

    const requestNetworkStub: any = this.sinon.stub().returns(
      Promise.resolve({
        status: 403
      })
    )

    const request = new EasyJWTRequest({
      url: '/go-do-the-thing',
      method: 'GET'
    })
    request['_getNetworker'] = () => requestNetworkStub

    instance['_tokenManager']['_getStorage'] = () => this.mockStorage
    instance['_tokenManager'].setRefreshToken('my-refresh')

    await instance.execute(request)

    this.assert.called(refreshNetworkStub)
    this.assert.called(requestNetworkStub)

    this.assert.throws(() => instance['_tokenManager'].getAccessToken())
    this.assert.equal(instance['_tokenManager'].getRefreshToken(), 'my-refresh')
  })
})
