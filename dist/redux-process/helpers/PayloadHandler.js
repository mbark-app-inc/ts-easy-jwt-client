"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadHandler = void 0;
const EasyJWTTokenManager_1 = require("../../EasyJWTTokenManager");
const NetworkError_1 = __importDefault(require("../errors/NetworkError"));
class PayloadHandler {
    constructor() {
        this._tokenManager = new EasyJWTTokenManager_1.EasyJWTTokenManager();
    }
    process(response) {
        if (response.status === 200) {
            const { tokens, user } = response.data;
            if (tokens) {
                if (tokens.access) {
                    this._tokenManager.setAccessToken(tokens.access);
                }
                if (tokens.refresh) {
                    this._tokenManager.setRefreshToken(tokens.refresh);
                }
            }
            if (user) {
                return {
                    user
                };
            }
            return null;
        }
        else {
            throw new NetworkError_1.default(response);
        }
    }
}
exports.PayloadHandler = PayloadHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bG9hZEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVkdXgtcHJvY2Vzcy9oZWxwZXJzL1BheWxvYWRIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLG1FQUErRDtBQUMvRCwwRUFBaUQ7QUFHakQsTUFBYSxjQUFjO0lBQTNCO1FBQ1ksa0JBQWEsR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUE7SUF5QnJELENBQUM7SUF2QkMsT0FBTyxDQUFDLFFBQXVCO1FBQzdCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO1lBQ3RDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNqRDtnQkFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDbkQ7YUFDRjtZQUVELElBQUksSUFBSSxFQUFFO2dCQUNSLE9BQU87b0JBQ0wsSUFBSTtpQkFDTCxDQUFBO2FBQ0Y7WUFFRCxPQUFPLElBQUksQ0FBQTtTQUNaO2FBQU07WUFDTCxNQUFNLElBQUksc0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUNqQztJQUNILENBQUM7Q0FDRjtBQTFCRCx3Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBFYXN5SldUVG9rZW5NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vRWFzeUpXVFRva2VuTWFuYWdlcidcbmltcG9ydCBOZXR3b3JrRXJyb3IgZnJvbSAnLi4vZXJyb3JzL05ldHdvcmtFcnJvcidcbmltcG9ydCB7IFByb2Nlc3NQYXlsb2FkIH0gZnJvbSAnLi4vdHlwZXMvUHJvY2Vzc0ZhY3RvcnknXG5cbmV4cG9ydCBjbGFzcyBQYXlsb2FkSGFuZGxlciB7XG4gIHByb3RlY3RlZCBfdG9rZW5NYW5hZ2VyID0gbmV3IEVhc3lKV1RUb2tlbk1hbmFnZXIoKVxuXG4gIHByb2Nlc3MocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpOiBQcm9jZXNzUGF5bG9hZCB8IG51bGwge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgeyB0b2tlbnMsIHVzZXIgfSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgIGlmICh0b2tlbnMpIHtcbiAgICAgICAgaWYgKHRva2Vucy5hY2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLl90b2tlbk1hbmFnZXIuc2V0QWNjZXNzVG9rZW4odG9rZW5zLmFjY2VzcylcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW5zLnJlZnJlc2gpIHtcbiAgICAgICAgICB0aGlzLl90b2tlbk1hbmFnZXIuc2V0UmVmcmVzaFRva2VuKHRva2Vucy5yZWZyZXNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXNlclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBOZXR3b3JrRXJyb3IocmVzcG9uc2UpXG4gICAgfVxuICB9XG59XG4iXX0=