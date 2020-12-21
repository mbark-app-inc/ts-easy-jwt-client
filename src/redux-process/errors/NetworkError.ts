import { AxiosResponse } from 'axios'

export default class NetworkError extends Error {
  response: AxiosResponse

  constructor(response: AxiosResponse) {
    super(response.data.message || 'A network error has occured.')

    this.name = this.constructor.name
    this.response = response
  }
}
