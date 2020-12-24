import { EasyJWTNetworker, EasyJWTRequest } from '../../dist'

async function main() {
  const refreshRequest = new EasyJWTRequest({
    url: '/api/refresh',
    method: 'POST'
  })

  const networker = new EasyJWTNetworker({
    refreshRequest
  })

  const loginRequest = new EasyJWTRequest({
    url: 'http://www.postman-echo.com/post',
    method: 'POST'
  })

  const result = await networker.execute(loginRequest, {
    username: 'username',
    password: 'password'
  })

  console.log(result.data)
}

main()
