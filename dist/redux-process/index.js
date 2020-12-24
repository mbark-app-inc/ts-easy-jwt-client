"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = exports.RequestName = exports.ProcessGroupFactory = void 0;
const NetworkError_1 = __importDefault(require("./errors/NetworkError"));
var ProcessGroupFactory_1 = require("./ProcessGroupFactory");
Object.defineProperty(exports, "ProcessGroupFactory", { enumerable: true, get: function () { return ProcessGroupFactory_1.ProcessGroupFactory; } });
var ProcessFactory_1 = require("./types/ProcessFactory");
Object.defineProperty(exports, "RequestName", { enumerable: true, get: function () { return ProcessFactory_1.RequestName; } });
exports.errors = {
    NetworkError: NetworkError_1.default
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVkdXgtcHJvY2Vzcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5RUFBZ0Q7QUFFaEQsNkRBQTJEO0FBQWxELDBIQUFBLG1CQUFtQixPQUFBO0FBQzVCLHlEQUFvRDtBQUEzQyw2R0FBQSxXQUFXLE9BQUE7QUFFUCxRQUFBLE1BQU0sR0FBRztJQUNwQixZQUFZLEVBQVosc0JBQVk7Q0FDYixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldHdvcmtFcnJvciBmcm9tICcuL2Vycm9ycy9OZXR3b3JrRXJyb3InXG5cbmV4cG9ydCB7IFByb2Nlc3NHcm91cEZhY3RvcnkgfSBmcm9tICcuL1Byb2Nlc3NHcm91cEZhY3RvcnknXG5leHBvcnQgeyBSZXF1ZXN0TmFtZSB9IGZyb20gJy4vdHlwZXMvUHJvY2Vzc0ZhY3RvcnknXG5cbmV4cG9ydCBjb25zdCBlcnJvcnMgPSB7XG4gIE5ldHdvcmtFcnJvclxufVxuIl19