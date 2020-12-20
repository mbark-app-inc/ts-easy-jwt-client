export type NetworkMethod = 'POST' | 'GET' | 'DELETE' | 'PUT'

export type EasyJWTRequestOptions = {
  url: string
  method: NetworkMethod
  needsAuth?: boolean
}
