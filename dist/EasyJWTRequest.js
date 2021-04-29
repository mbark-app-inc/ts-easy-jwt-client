"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyJWTRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const EasyJWTTokenManager_1 = require("./EasyJWTTokenManager");
class EasyJWTRequest {
    constructor(options) {
        this.options = options;
        this._tokenManager = new EasyJWTTokenManager_1.EasyJWTTokenManager();
    }
    _getNetworker() {
        return axios_1.default;
    }
    async send(params = {}, data = {}) {
        const request = this._getRequest(params, data);
        return this._getNetworker()(request);
    }
    _getRequest(params, data) {
        const request = {
            method: this.options.method,
            url: this._getUrlWithParams(params)
        };
        const shouldBeParams = ['GET', 'DELETE'].includes(this.options.method);
        if (shouldBeParams) {
            request.params = data;
        }
        else {
            request.data = data;
        }
        if (this.options.needsAuth) {
            const token = this._tokenManager.getAccessToken();
            request.headers = {
                authorization: `Bearer ${token}`
            };
        }
        return request;
    }
    _getUrlWithParams(params) {
        return Object.entries(params).reduce((url, [key, value]) => {
            return url.replace(`{${key}}`, value);
        }, this.options.url);
    }
}
exports.EasyJWTRequest = EasyJWTRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFzeUpXVFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRWFzeUpXVFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsa0RBQWdFO0FBQ2hFLCtEQUEyRDtBQUUzRCxNQUFhLGNBQWM7SUFJekIsWUFBWSxPQUE4QjtRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQTtJQUNoRCxDQUFDO0lBRVMsYUFBYTtRQUNyQixPQUFPLGVBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQWlDLEVBQUUsRUFBRSxPQUE0QixFQUFFO1FBQzVFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFUyxXQUFXLENBQUMsTUFBOEIsRUFBRSxJQUF5QjtRQUM3RSxNQUFNLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUMzQixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztTQUNwQyxDQUFBO1FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFdEUsSUFBSSxjQUFjLEVBQUU7WUFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDdEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1NBQ3BCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEdBQUc7Z0JBQ2hCLGFBQWEsRUFBRSxVQUFVLEtBQUssRUFBRTthQUNqQyxDQUFBO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0lBRVMsaUJBQWlCLENBQUMsTUFBOEI7UUFDeEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQ3pELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7Q0FDRjtBQS9DRCx3Q0ErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXN5SldUUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzL0Vhc3lKV1RSZXF1ZXN0J1xuaW1wb3J0IHsgSUVhc3lKV1RSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzL0lFYXN5SldUUmVxdWVzdCdcbmltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IEVhc3lKV1RUb2tlbk1hbmFnZXIgfSBmcm9tICcuL0Vhc3lKV1RUb2tlbk1hbmFnZXInXG5cbmV4cG9ydCBjbGFzcyBFYXN5SldUUmVxdWVzdCBpbXBsZW1lbnRzIElFYXN5SldUUmVxdWVzdCB7XG4gIG9wdGlvbnM6IEVhc3lKV1RSZXF1ZXN0T3B0aW9uc1xuICBwcm90ZWN0ZWQgX3Rva2VuTWFuYWdlcjogRWFzeUpXVFRva2VuTWFuYWdlclxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEVhc3lKV1RSZXF1ZXN0T3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLl90b2tlbk1hbmFnZXIgPSBuZXcgRWFzeUpXVFRva2VuTWFuYWdlcigpXG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldE5ldHdvcmtlcigpIHtcbiAgICByZXR1cm4gYXhpb3NcbiAgfVxuXG4gIGFzeW5jIHNlbmQocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge30sIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fSk6IFByb21pc2U8QXhpb3NSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLl9nZXRSZXF1ZXN0KHBhcmFtcywgZGF0YSlcbiAgICByZXR1cm4gdGhpcy5fZ2V0TmV0d29ya2VyKCkocmVxdWVzdClcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0UmVxdWVzdChwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBjb25zdCByZXF1ZXN0OiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgICBtZXRob2Q6IHRoaXMub3B0aW9ucy5tZXRob2QsXG4gICAgICB1cmw6IHRoaXMuX2dldFVybFdpdGhQYXJhbXMocGFyYW1zKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZEJlUGFyYW1zID0gWydHRVQnLCAnREVMRVRFJ10uaW5jbHVkZXModGhpcy5vcHRpb25zLm1ldGhvZClcblxuICAgIGlmIChzaG91bGRCZVBhcmFtcykge1xuICAgICAgcmVxdWVzdC5wYXJhbXMgPSBkYXRhXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QuZGF0YSA9IGRhdGFcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm5lZWRzQXV0aCkge1xuICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLl90b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKVxuICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFVybFdpdGhQYXJhbXMocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGFyYW1zKS5yZWR1Y2UoKHVybCwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICByZXR1cm4gdXJsLnJlcGxhY2UoYHske2tleX19YCwgdmFsdWUpXG4gICAgfSwgdGhpcy5vcHRpb25zLnVybClcbiAgfVxufVxuIl19