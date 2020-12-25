# ProcessGroupFactory
The `ProcessGroupFactory` class is responsible for generating the ReduxProcessGroup and appropriate ReduxProcess classes for specific actions around user authentication & token management. Any additional actions can be coded manually.

## Overview

`ProcessGroupFactory` is a class that takes the previously created networker and requests. These requests are then transformed into the various different ReduxProcess. It takes an `options` argument that dictates the parameters for the class.

### Arguments
* `options` - The options object contains a few required keys.
  * `requests` - An object where the key is a value of the `RequestName` enum and the corresponding value pair is an instance of `EasyJWTRequest`.
  * `networker` - An instance of `EasyJWTNetworker`.

### Methods

Once `ProcessGroupFactory` has been implemented there are a number of available methods.
```typescript
getProcesses(): IReduxProcessClass<any, ProcessPayload | null, AuthState, GlobalState>[]
```
  * This method will return the generated processes. These should be deconstructed for use with the process group. This value is generated once and cached. The cache will be returned on each subsequent request.

```typescript
getProcessGroup(): ReduxProcessGroup<AuthState, GlobalState>
```
  * This method will return the generated process group. It will have the processes already registered to the group.

## Example
```typescript
/**
 * Available requests from RequestName
 * REGISTER
 * LOGIN
 * LOGOUT
 * CURRENT_USER
 * FORGOT_PASSWORD
 * UPDATE_FORGOT_PASSWORD
 */


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

const processGroupFactory = new ProcessGroupFactory({
  requests: {
    [RequestName.CURRENT_USER]: requestCurrentUser
  },
  networker
})

processGroupFactory.getProcesses()
ProcessGroupFactoryOptions.getProcessGroup()
```
