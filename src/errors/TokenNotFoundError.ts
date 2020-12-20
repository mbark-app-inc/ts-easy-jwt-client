export default class TokenNotFoundError extends Error {
  constructor() {
    super('Auth token not found.')

    this.name = this.constructor.name
  }
}
