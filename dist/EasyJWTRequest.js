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
    async send(data = {}) {
        const request = this._getRequest(data);
        return this._getNetworker()(request);
    }
    _getRequest(data) {
        const request = {
            method: this.options.method,
            url: this.options.url
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
}
exports.EasyJWTRequest = EasyJWTRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFzeUpXVFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRWFzeUpXVFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsa0RBQWdFO0FBQ2hFLCtEQUEyRDtBQUUzRCxNQUFhLGNBQWM7SUFJekIsWUFBWSxPQUE4QjtRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQTtJQUNoRCxDQUFDO0lBRVMsYUFBYTtRQUNyQixPQUFPLGVBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQTRCLEVBQUU7UUFDdkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRVMsV0FBVyxDQUFDLElBQXlCO1FBQzdDLE1BQU0sT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7U0FDdEIsQ0FBQTtRQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRXRFLElBQUksY0FBYyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3RCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtTQUNwQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUNqRCxPQUFPLENBQUMsT0FBTyxHQUFHO2dCQUNoQixhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUU7YUFDakMsQ0FBQTtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztDQUNGO0FBekNELHdDQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVhc3lKV1RSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMvRWFzeUpXVFJlcXVlc3QnXG5pbXBvcnQgeyBJRWFzeUpXVFJlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZXMvSUVhc3lKV1RSZXF1ZXN0J1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgRWFzeUpXVFRva2VuTWFuYWdlciB9IGZyb20gJy4vRWFzeUpXVFRva2VuTWFuYWdlcidcblxuZXhwb3J0IGNsYXNzIEVhc3lKV1RSZXF1ZXN0IGltcGxlbWVudHMgSUVhc3lKV1RSZXF1ZXN0IHtcbiAgb3B0aW9uczogRWFzeUpXVFJlcXVlc3RPcHRpb25zXG4gIHByb3RlY3RlZCBfdG9rZW5NYW5hZ2VyOiBFYXN5SldUVG9rZW5NYW5hZ2VyXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogRWFzeUpXVFJlcXVlc3RPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuX3Rva2VuTWFuYWdlciA9IG5ldyBFYXN5SldUVG9rZW5NYW5hZ2VyKClcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0TmV0d29ya2VyKCkge1xuICAgIHJldHVybiBheGlvc1xuICB9XG5cbiAgYXN5bmMgc2VuZChkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge30pOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fZ2V0UmVxdWVzdChkYXRhKVxuICAgIHJldHVybiB0aGlzLl9nZXROZXR3b3JrZXIoKShyZXF1ZXN0KVxuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRSZXF1ZXN0KGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBjb25zdCByZXF1ZXN0OiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgICBtZXRob2Q6IHRoaXMub3B0aW9ucy5tZXRob2QsXG4gICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmxcbiAgICB9XG5cbiAgICBjb25zdCBzaG91bGRCZVBhcmFtcyA9IFsnR0VUJywgJ0RFTEVURSddLmluY2x1ZGVzKHRoaXMub3B0aW9ucy5tZXRob2QpXG5cbiAgICBpZiAoc2hvdWxkQmVQYXJhbXMpIHtcbiAgICAgIHJlcXVlc3QucGFyYW1zID0gZGF0YVxuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0LmRhdGEgPSBkYXRhXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5uZWVkc0F1dGgpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5fdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKClcbiAgICAgIHJlcXVlc3QuaGVhZGVycyA9IHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFxuICB9XG59XG4iXX0=