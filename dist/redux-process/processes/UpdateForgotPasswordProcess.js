"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdateForgotPasswordProcess = void 0;
const EasyJWTProcess_1 = require("./EasyJWTProcess");
const PayloadHandler_1 = require("../helpers/PayloadHandler");
function getUpdateForgotPasswordProcess(networker, request) {
    return class UpdateForgotPasswordProcess extends EasyJWTProcess_1.EasyJWTProcess {
        async performAction(form = {}) {
            const response = await networker.execute(request, form);
            const handler = new PayloadHandler_1.PayloadHandler();
            return handler.process(response);
        }
    };
}
exports.getUpdateForgotPasswordProcess = getUpdateForgotPasswordProcess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlRm9yZ290UGFzc3dvcmRQcm9jZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JlZHV4LXByb2Nlc3MvcHJvY2Vzc2VzL1VwZGF0ZUZvcmdvdFBhc3N3b3JkUHJvY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBaUQ7QUFLakQsOERBQTBEO0FBRTFELFNBQWdCLDhCQUE4QixDQUU1QyxTQUEyQixFQUFFLE9BQXVCO0lBQ3BELE9BQU8sTUFBTSwyQkFBNEIsU0FBUSwrQkFBMkI7UUFDMUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFZLEVBQUU7WUFDaEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN2RCxNQUFNLE9BQU8sR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQTtZQUNwQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbEMsQ0FBQztLQUNGLENBQUE7QUFDSCxDQUFDO0FBVkQsd0VBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXN5SldUUHJvY2VzcyB9IGZyb20gJy4vRWFzeUpXVFByb2Nlc3MnXG5pbXBvcnQgeyBQcm9jZXNzUGF5bG9hZCB9IGZyb20gJy4uL3R5cGVzL1Byb2Nlc3NGYWN0b3J5J1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvUHJvY2Vzc0dyb3VwRmFjdG9yeSdcbmltcG9ydCB7IEVhc3lKV1ROZXR3b3JrZXIgfSBmcm9tICcuLi8uLi9FYXN5SldUTmV0d29ya2VyJ1xuaW1wb3J0IHsgRWFzeUpXVFJlcXVlc3QgfSBmcm9tICcuLi8uLi9FYXN5SldUUmVxdWVzdCdcbmltcG9ydCB7IFBheWxvYWRIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVycy9QYXlsb2FkSGFuZGxlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZGF0ZUZvcmdvdFBhc3N3b3JkUHJvY2VzczxcbiAgR2xvYmFsU3RhdGUgZXh0ZW5kcyBSb290U3RhdGUgPSBSb290U3RhdGVcbj4obmV0d29ya2VyOiBFYXN5SldUTmV0d29ya2VyLCByZXF1ZXN0OiBFYXN5SldUUmVxdWVzdCkge1xuICByZXR1cm4gY2xhc3MgVXBkYXRlRm9yZ290UGFzc3dvcmRQcm9jZXNzIGV4dGVuZHMgRWFzeUpXVFByb2Nlc3M8R2xvYmFsU3RhdGU+IHtcbiAgICBhc3luYyBwZXJmb3JtQWN0aW9uKGZvcm06IGFueSA9IHt9KTogUHJvbWlzZTxQcm9jZXNzUGF5bG9hZCB8IG51bGw+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV0d29ya2VyLmV4ZWN1dGUocmVxdWVzdCwgZm9ybSlcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgUGF5bG9hZEhhbmRsZXIoKVxuICAgICAgcmV0dXJuIGhhbmRsZXIucHJvY2VzcyhyZXNwb25zZSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==