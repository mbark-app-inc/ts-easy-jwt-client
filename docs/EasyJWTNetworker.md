# EasyJWTNetworker
The `EasyJWTNetworker` class is responsible for executing a request, while also handling the expiration and refreshing of tokens.

## Overview

`EasyJWTNetworker` is a class that should be instantiated. It takes an `options` argument that dictates the parameters for the class.

### Arguments
* `options` - The options object contains a few required keys.
  * `refreshRequest` - The request to execute in order to refresh an expired access token.

### Methods

Once `EasyJWTNetworker` has been implemented there are a number of available methods.
```typescript
execute(request: IEasyJWTRequest, data: Record<string, any> = {}): Promise<AxiosResponse>
```
  * This method will execute the provided request with the specified data. Should the request fail with an expired access token, the token will be refreshed, then the request re-executed.

## Example
```typescript
const requestRefresh = new EasyJWTRequest({
  url: 'https://mywebsite.com/api/refresh',
  method: 'POST'
})

const requestCurrentUser = new EasyJWTRequest({
  url: 'https://mywebsite.com/api/users/me',
  method: 'GET',
  needsAuth: true
})

const networker = new EasyJWTNetworker({
  refreshRequest: requestRefresh
})

networker.execute(requestCurrentUser)
```
