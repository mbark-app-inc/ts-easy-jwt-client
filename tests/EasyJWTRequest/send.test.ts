import { EasyJWTRequest } from '../../src/EasyJWTRequest'
import TokenNotFoundError from '../../src/errors/TokenNotFoundError'

describe('src/EasyJWTRequest::send', function () {
  it('should resolve with a GET request', async function () {
    let networkerSpy: any = this.sinon.spy()
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'GET'
    })
    instance['_getNetworker'] = () => networkerSpy

    const result = await instance.send(
      {},
      {
        key: 'value'
      }
    )
    this.assert.calledWith(networkerSpy, {
      url: '/asdf',
      method: 'GET',
      params: {
        key: 'value'
      }
    })
  })

  it('should resolve with a DELETE request', async function () {
    let networkerSpy: any = this.sinon.spy()
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'DELETE'
    })
    instance['_getNetworker'] = () => networkerSpy

    const result = await instance.send(
      {},
      {
        key: 'value'
      }
    )
    this.assert.calledWith(networkerSpy, {
      url: '/asdf',
      method: 'DELETE',
      params: {
        key: 'value'
      }
    })
  })

  it('should resolve with a POST request', async function () {
    let networkerSpy: any = this.sinon.spy()
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'POST'
    })
    instance['_getNetworker'] = () => networkerSpy

    const result = await instance.send(
      {},
      {
        key: 'value'
      }
    )
    this.assert.calledWith(networkerSpy, {
      url: '/asdf',
      method: 'POST',
      data: {
        key: 'value'
      }
    })
  })

  it('should resolve with a PUT request', async function () {
    let networkerSpy: any = this.sinon.spy()
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'PUT'
    })
    instance['_getNetworker'] = () => networkerSpy

    const result = await instance.send(
      {},
      {
        key: 'value'
      }
    )
    this.assert.calledWith(networkerSpy, {
      url: '/asdf',
      method: 'PUT',
      data: {
        key: 'value'
      }
    })
  })

  it('should throw an error with needsAuth is set and token does not exist', function () {
    let networkerSpy: any = this.sinon.spy()
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'PUT',
      needsAuth: true
    })
    instance['_getNetworker'] = () => networkerSpy
    instance['_tokenManager']['_getStorage'] = () => this.mockStorage

    return instance
      .send(
        {},
        {
          key: 'value'
        }
      )
      .then(() => {
        this.assert.notCalled(networkerSpy)
      })
      .catch((e) => {
        this.assert.instanceOf(e, TokenNotFoundError)
      })
  })

  it('should resolve with a PUT request', async function () {
    let networkerSpy: any = this.sinon.spy()
    const instance = new EasyJWTRequest({
      url: '/asdf',
      method: 'PUT',
      needsAuth: true
    })
    instance['_getNetworker'] = () => networkerSpy
    instance['_tokenManager']['_getStorage'] = () => this.mockStorage
    instance['_tokenManager'].setAccessToken('my-token')

    const result = await instance.send(
      {},
      {
        key: 'value'
      }
    )
    this.assert.calledWith(networkerSpy, {
      url: '/asdf',
      method: 'PUT',
      data: {
        key: 'value'
      },
      headers: {
        authorization: 'Bearer my-token'
      }
    })
  })

  it('should resolve with a url params request', async function () {
    let networkerSpy: any = this.sinon.spy()
    const instance = new EasyJWTRequest({
      url: '/asdf/{param1}',
      method: 'PUT',
      needsAuth: true
    })
    instance['_getNetworker'] = () => networkerSpy
    instance['_tokenManager']['_getStorage'] = () => this.mockStorage
    instance['_tokenManager'].setAccessToken('my-token')

    const result = await instance.send(
      { param1: 'value1' },
      {
        key: 'value'
      }
    )
    this.assert.calledWith(networkerSpy, {
      url: '/asdf/value1',
      method: 'PUT',
      data: {
        key: 'value'
      },
      headers: {
        authorization: 'Bearer my-token'
      }
    })
  })
})
