import { PayloadHandler } from '../../../../src/redux-process/helpers/PayloadHandler'
import NetworkError from '../../../../src/redux-process/errors/NetworkError'

describe('src/redux-process/helpers/payloadHandler::process', function () {
  let instance: PayloadHandler

  before(function () {
    instance = new PayloadHandler()
  })

  it('should throw error if status is not 200', function () {
    const responsePayload: any = {
      status: 400,
      data: {
        message: 'Invalid request'
      }
    }

    this.assert.throws(() => {
      instance.process(responsePayload)
    }, NetworkError)
  })

  it('should return null if user is not found', function () {
    const responsePayload: any = {
      status: 200,
      data: {}
    }

    const result = instance.process(responsePayload)
    this.assert.isNull(result)
  })

  it('should return user if found', function () {
    const responsePayload: any = {
      status: 200,
      data: {
        user: {
          id: 1
        }
      }
    }

    const result = instance.process(responsePayload)
    this.assert.deepEqual(result, {
      user: {
        id: 1
      }
    })
  })

  it('should set tokens if they exist', function () {
    const responsePayload: any = {
      status: 200,
      data: {
        user: {
          id: 1
        },
        tokens: {
          access: 'my-access',
          refresh: 'my-refresh'
        }
      }
    }

    instance['_tokenManager']['_getStorage'] = () => this.mockStorage
    this.assert.throws(() => {
      instance['_tokenManager'].getAccessToken()
    })
    this.assert.throws(() => {
      instance['_tokenManager'].getRefreshToken()
    })

    const result = instance.process(responsePayload)
    this.assert.deepEqual(result, {
      user: {
        id: 1
      }
    })

    this.assert.equal(instance['_tokenManager'].getAccessToken(), 'my-access')
    this.assert.equal(instance['_tokenManager'].getRefreshToken(), 'my-refresh')
  })
})
