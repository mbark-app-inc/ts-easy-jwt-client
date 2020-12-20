export default class MockStorage {
  protected _storage: Record<string, string> = {}

  setItem(key: string, value: string) {
    this._storage[key] = value || ''
  }

  getItem(key: string) {
    return key in this._storage ? this._storage[key] : null
  }

  removeItem(key: string) {
    delete this._storage[key]
  }
}
