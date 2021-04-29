"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyJWTNetworker = void 0;
const EasyJWTTokenManager_1 = require("./EasyJWTTokenManager");
class EasyJWTNetworker {
    constructor(options) {
        this.options = options;
        this._tokenManager = new EasyJWTTokenManager_1.EasyJWTTokenManager();
    }
    async execute(request, params = {}, data = {}) {
        let response = await request.send(params, data);
        if (response.status === 403) {
            const didUpdateAccessToken = await this._refreshAccessToken();
            if (didUpdateAccessToken) {
                response = await request.send(params, data);
            }
        }
        return response;
    }
    async _refreshAccessToken() {
        if (!this.options.refreshRequest) {
            return false;
        }
        const response = await this.options.refreshRequest.send({}, {
            refreshToken: this._tokenManager.getRefreshToken()
        });
        if (response.status === 200) {
            this._tokenManager.setAccessToken(response.data.tokens.access);
            if (response.data.tokens.refresh) {
                this._tokenManager.setRefreshToken(response.data.tokens.refresh);
            }
            return true;
        }
        return false;
    }
}
exports.EasyJWTNetworker = EasyJWTNetworker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFzeUpXVE5ldHdvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9FYXN5SldUTmV0d29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLCtEQUEyRDtBQUczRCxNQUFhLGdCQUFnQjtJQUkzQixZQUFZLE9BQWdDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFBO0lBQ2hELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUNYLE9BQXdCLEVBQ3hCLFNBQWlDLEVBQUUsRUFDbkMsT0FBNEIsRUFBRTtRQUU5QixJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9DLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1lBQzdELElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hCLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQzVDO1NBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBRVMsS0FBSyxDQUFDLG1CQUFtQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUMxRCxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7U0FDbkQsQ0FBQyxDQUFBO1FBRUYsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUU5RCxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDakU7WUFFRCxPQUFPLElBQUksQ0FBQTtTQUNaO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0NBQ0Y7QUE5Q0QsNENBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzeUpXVE5ldHdvcmtlck9wdGlvbnMgfSBmcm9tICcuL3R5cGVzL0Vhc3lKV1ROZXR3b3JrZXInXG5pbXBvcnQgeyBJRWFzeUpXVE5ldHdvcmtlciB9IGZyb20gJy4vaW50ZXJmYWNlcy9JRWFzeUpXVE5ldHdvcmtlcidcbmltcG9ydCB7IElFYXN5SldUUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlcy9JRWFzeUpXVFJlcXVlc3QnXG5pbXBvcnQgeyBFYXN5SldUVG9rZW5NYW5hZ2VyIH0gZnJvbSAnLi9FYXN5SldUVG9rZW5NYW5hZ2VyJ1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY2xhc3MgRWFzeUpXVE5ldHdvcmtlciBpbXBsZW1lbnRzIElFYXN5SldUTmV0d29ya2VyIHtcbiAgb3B0aW9uczogRWFzeUpXVE5ldHdvcmtlck9wdGlvbnNcbiAgcHJvdGVjdGVkIF90b2tlbk1hbmFnZXI6IEVhc3lKV1RUb2tlbk1hbmFnZXJcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBFYXN5SldUTmV0d29ya2VyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLl90b2tlbk1hbmFnZXIgPSBuZXcgRWFzeUpXVFRva2VuTWFuYWdlcigpXG4gIH1cblxuICBhc3luYyBleGVjdXRlKFxuICAgIHJlcXVlc3Q6IElFYXN5SldUUmVxdWVzdCxcbiAgICBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fSxcbiAgICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge31cbiAgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPiB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5zZW5kKHBhcmFtcywgZGF0YSlcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgIGNvbnN0IGRpZFVwZGF0ZUFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5fcmVmcmVzaEFjY2Vzc1Rva2VuKClcbiAgICAgIGlmIChkaWRVcGRhdGVBY2Nlc3NUb2tlbikge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Quc2VuZChwYXJhbXMsIGRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgX3JlZnJlc2hBY2Nlc3NUb2tlbigpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5yZWZyZXNoUmVxdWVzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm9wdGlvbnMucmVmcmVzaFJlcXVlc3Quc2VuZCh7fSwge1xuICAgICAgcmVmcmVzaFRva2VuOiB0aGlzLl90b2tlbk1hbmFnZXIuZ2V0UmVmcmVzaFRva2VuKClcbiAgICB9KVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICB0aGlzLl90b2tlbk1hbmFnZXIuc2V0QWNjZXNzVG9rZW4ocmVzcG9uc2UuZGF0YS50b2tlbnMuYWNjZXNzKVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS50b2tlbnMucmVmcmVzaCkge1xuICAgICAgICB0aGlzLl90b2tlbk1hbmFnZXIuc2V0UmVmcmVzaFRva2VuKHJlc3BvbnNlLmRhdGEudG9rZW5zLnJlZnJlc2gpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cbiJdfQ==