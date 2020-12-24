"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyJWTProcess = void 0;
const ts_redux_process_1 = require("ts-redux-process");
class EasyJWTProcess extends ts_redux_process_1.ReduxProcess {
    getNewState(payload, oldState) {
        if (payload) {
            return {
                ...oldState,
                ...payload
            };
        }
        else {
            return oldState;
        }
    }
}
exports.EasyJWTProcess = EasyJWTProcess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFzeUpXVFByb2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVkdXgtcHJvY2Vzcy9wcm9jZXNzZXMvRWFzeUpXVFByb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQStDO0FBSS9DLE1BQXNCLGNBRXBCLFNBQVEsK0JBS1Q7SUFLQyxXQUFXLENBQUMsT0FBOEIsRUFBRSxRQUFtQjtRQUM3RCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU87Z0JBQ0wsR0FBRyxRQUFRO2dCQUNYLEdBQUcsT0FBTzthQUNYLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTyxRQUFRLENBQUE7U0FDaEI7SUFDSCxDQUFDO0NBQ0Y7QUF0QkQsd0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkdXhQcm9jZXNzIH0gZnJvbSAndHMtcmVkdXgtcHJvY2VzcydcbmltcG9ydCB7IFByb2Nlc3NQYXlsb2FkIH0gZnJvbSAnLi4vdHlwZXMvUHJvY2Vzc0ZhY3RvcnknXG5pbXBvcnQgeyBBdXRoU3RhdGUsIFJvb3RTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL1Byb2Nlc3NHcm91cEZhY3RvcnknXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFYXN5SldUUHJvY2VzczxcbiAgR2xvYmFsU3RhdGUgZXh0ZW5kcyBSb290U3RhdGUgPSBSb290U3RhdGVcbj4gZXh0ZW5kcyBSZWR1eFByb2Nlc3M8XG4gIFJlY29yZDxzdHJpbmcsIGFueT4sXG4gIFByb2Nlc3NQYXlsb2FkIHwgbnVsbCxcbiAgQXV0aFN0YXRlLFxuICBHbG9iYWxTdGF0ZVxuPiB7XG4gIGFic3RyYWN0IHBlcmZvcm1BY3Rpb24oXG4gICAgZm9ybTogUmVjb3JkPHN0cmluZywgYW55PlxuICApOiBQcm9taXNlPFByb2Nlc3NQYXlsb2FkIHwgbnVsbD5cblxuICBnZXROZXdTdGF0ZShwYXlsb2FkOiBQcm9jZXNzUGF5bG9hZCB8IG51bGwsIG9sZFN0YXRlOiBBdXRoU3RhdGUpIHtcbiAgICBpZiAocGF5bG9hZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2xkU3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9sZFN0YXRlXG4gICAgfVxuICB9XG59XG4iXX0=