# EasyJWTTokenManager
The `EasyJWTTokenManager` class is responsible for managing the access and refresh token. These values are stored in the browsers local storage.

## Overview

`EasyJWTTokenManager` is a class that does not need to be utilized directly. However, if the need arises there are a number of helpful methods available to directly access the tokens.

### Methods

Once `EasyJWTTokenManager` has been implemented there are a number of available methods.
```typescript
getAccessToken(): string
```
  * This method will return the access token from local storage or throw an error.

```typescript
setAccessToken(token: string)
```
  * This method will save the access token to local storage.

```typescript
removeAccessToken()
```
  * This method will remove the access token from local storage.

```typescript
getRefreshToken(): string
```
  * This method will return the refresh token from local storage or throw an error.

```typescript
setRefreshToken(token: string)
```
  * This method will save the refresh token to local storage.

```typescript
removeRefreshToken()
```
  * This method will remove the refresh token from local storage.

## Example
```typescript
const tokenManager = new EasyJWTTokenManager()
```
