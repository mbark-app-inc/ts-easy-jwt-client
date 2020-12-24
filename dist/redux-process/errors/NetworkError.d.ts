import { AxiosResponse } from 'axios'
export default class NetworkError extends Error {
  response: AxiosResponse
  constructor(response: AxiosResponse)
}
