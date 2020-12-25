# EasyJWTRequest
The `EasyJWTRequest` class is responsible for providing the scaffolding for a request. It houses the path and method. The request data (payload or query) is provided when it is executed.

## Overview

`EasyJWTRequest` is a class that should be instantiated. It takes an `options` argument that dictates the parameters for the class.

### Arguments
* `options` - The options object contains a few required keys.
  * `url` - The full url that the request will be sent to.
  * `method` - The type of request (GET, POST, PUT, DELETE).
  * `needsAuth` - An optional parameter that indicated if the authentication token should be used for this request.

### Methods

Once `EasyJWTRequest` has been implemented there are a number of available methods.
```typescript
send(data: Record<string, any> = {}): Promise<AxiosResponse>
```
  * This method will send a request to the specified url with the provided data. If the request method is of type GET or DELETE, the data will be formatted in the query. A POST or PUT request method will result in a payload. While this can be called directly, it is our recommendation that the requests be executed from the `EasyJWTNetworker` class so that the full power of this package can be utilized.

## Example
```typescript
const requestLogin = new EasyJWTRequest({
  url: 'https://mywebsite.com/api/login',
  method: 'POST'
})

const requestCurrentUser = new EasyJWTRequest({
  url: 'https://mywebsite.com/api/users/me',
  method: 'GET',
  needsAuth: true
})
```
