"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessGroupFactory = void 0;
const ts_redux_process_1 = require("ts-redux-process");
const EasyJWTTokenManager_1 = require("../EasyJWTTokenManager");
const ProcessFactory_1 = require("./ProcessFactory");
class ProcessGroupFactory {
    constructor(options) {
        this._tokenManager = new EasyJWTTokenManager_1.EasyJWTTokenManager();
        this.options = options;
        this._processFactory = new ProcessFactory_1.ProcessFactory({
            networker: options.networker
        });
    }
    getProcesses() {
        if (!this._processes) {
            this._processes = {};
            for (const [key, value] of Object.entries(this.options.requests)) {
                if (value) {
                    const process = this._processFactory.getProcess(key, value);
                    this._processes[process.name] = process;
                }
            }
        }
        return this._processes;
    }
    getProcessGroup() {
        const processes = this.getProcesses();
        const authProcessGroup = new ts_redux_process_1.ReduxProcessGroup('auth', {
            defaultState: this._getDefaultState(),
            processes: Object.values(processes)
        });
        return authProcessGroup;
    }
    _getDefaultState() {
        return {
            user: null,
            getAccessToken: () => {
                try {
                    return this._tokenManager.getAccessToken();
                }
                catch (e) {
                    return null;
                }
            },
            getRefreshToken: () => {
                try {
                    return this._tokenManager.getRefreshToken();
                }
                catch (e) {
                    return null;
                }
            }
        };
    }
}
exports.ProcessGroupFactory = ProcessGroupFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc0dyb3VwRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1eC1wcm9jZXNzL1Byb2Nlc3NHcm91cEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQW9EO0FBQ3BELGdFQUE0RDtBQU81RCxxREFBaUQ7QUFLakQsTUFBYSxtQkFBbUI7SUFZOUIsWUFBWSxPQUFtQztRQVRyQyxrQkFBYSxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQTtRQVVqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsQ0FBYztZQUNyRCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFNVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtZQUNwQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FDN0MsR0FBa0IsRUFDbEIsS0FBSyxDQUNOLENBQUE7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFBO2lCQUN4QzthQUNGO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDeEIsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFFckMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9DQUFpQixDQUM1QyxNQUFNLEVBQ047WUFDRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUNwQyxDQUNGLENBQUE7UUFFRCxPQUFPLGdCQUFnQixDQUFBO0lBQ3pCLENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsY0FBYyxFQUFFLEdBQUcsRUFBRTtnQkFDbkIsSUFBSTtvQkFDRixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7aUJBQzNDO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sSUFBSSxDQUFBO2lCQUNaO1lBQ0gsQ0FBQztZQUNELGVBQWUsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BCLElBQUk7b0JBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFBO2lCQUM1QztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLElBQUksQ0FBQTtpQkFDWjtZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGO0FBekVELGtEQXlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZHV4UHJvY2Vzc0dyb3VwIH0gZnJvbSAndHMtcmVkdXgtcHJvY2VzcydcbmltcG9ydCB7IEVhc3lKV1RUb2tlbk1hbmFnZXIgfSBmcm9tICcuLi9FYXN5SldUVG9rZW5NYW5hZ2VyJ1xuaW1wb3J0IHsgSVByb2Nlc3NHcm91cEZhY3RvcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvSVByb2Nlc3NHcm91cEZhY3RvcnknXG5pbXBvcnQge1xuICBQcm9jZXNzR3JvdXBGYWN0b3J5T3B0aW9ucyxcbiAgUm9vdFN0YXRlLFxuICBBdXRoU3RhdGVcbn0gZnJvbSAnLi90eXBlcy9Qcm9jZXNzR3JvdXBGYWN0b3J5J1xuaW1wb3J0IHsgUHJvY2Vzc0ZhY3RvcnkgfSBmcm9tICcuL1Byb2Nlc3NGYWN0b3J5J1xuaW1wb3J0IHsgUmVxdWVzdE5hbWUgfSBmcm9tICcuL3R5cGVzL1Byb2Nlc3NGYWN0b3J5J1xuaW1wb3J0IHsgSVJlZHV4UHJvY2Vzc0NsYXNzIH0gZnJvbSAndHMtcmVkdXgtcHJvY2Vzcy9kaXN0L2ludGVyZmFjZXMvSVJlZHV4UHJvY2VzcydcbmltcG9ydCB7IFByb2Nlc3NQYXlsb2FkIH0gZnJvbSAnLi90eXBlcy9Qcm9jZXNzRmFjdG9yeSdcblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NHcm91cEZhY3Rvcnk8R2xvYmFsU3RhdGUgZXh0ZW5kcyBSb290U3RhdGUgPSBSb290U3RhdGU+XG4gIGltcGxlbWVudHMgSVByb2Nlc3NHcm91cEZhY3Rvcnk8R2xvYmFsU3RhdGU+IHtcbiAgb3B0aW9uczogUHJvY2Vzc0dyb3VwRmFjdG9yeU9wdGlvbnNcbiAgcHJvdGVjdGVkIF90b2tlbk1hbmFnZXIgPSBuZXcgRWFzeUpXVFRva2VuTWFuYWdlcigpXG4gIHByb3RlY3RlZCBfcHJvY2Vzc0ZhY3Rvcnk6IFByb2Nlc3NGYWN0b3J5PEdsb2JhbFN0YXRlPlxuICBwcm90ZWN0ZWQgX3Byb2Nlc3Nlcz86IFJlY29yZDxzdHJpbmcsIElSZWR1eFByb2Nlc3NDbGFzczxcbiAgICBhbnksXG4gICAgUHJvY2Vzc1BheWxvYWQgfCBudWxsLFxuICAgIEF1dGhTdGF0ZSxcbiAgICBHbG9iYWxTdGF0ZVxuICA+PlxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFByb2Nlc3NHcm91cEZhY3RvcnlPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuX3Byb2Nlc3NGYWN0b3J5ID0gbmV3IFByb2Nlc3NGYWN0b3J5PEdsb2JhbFN0YXRlPih7XG4gICAgICBuZXR3b3JrZXI6IG9wdGlvbnMubmV0d29ya2VyXG4gICAgfSlcbiAgfVxuXG4gIGdldFByb2Nlc3NlcygpOiBSZWNvcmQ8c3RyaW5nLCBJUmVkdXhQcm9jZXNzQ2xhc3M8XG4gICAgYW55LFxuICAgIFByb2Nlc3NQYXlsb2FkIHwgbnVsbCxcbiAgICBBdXRoU3RhdGUsXG4gICAgR2xvYmFsU3RhdGVcbiAgPj4ge1xuICAgIGlmICghdGhpcy5fcHJvY2Vzc2VzKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzZXMgPSB7fVxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5vcHRpb25zLnJlcXVlc3RzKSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBwcm9jZXNzID0gdGhpcy5fcHJvY2Vzc0ZhY3RvcnkuZ2V0UHJvY2VzcyhcbiAgICAgICAgICAgIGtleSBhcyBSZXF1ZXN0TmFtZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICAgIHRoaXMuX3Byb2Nlc3Nlc1twcm9jZXNzLm5hbWVdID0gcHJvY2Vzc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzZXNcbiAgfVxuXG4gIGdldFByb2Nlc3NHcm91cCgpOiBSZWR1eFByb2Nlc3NHcm91cDxBdXRoU3RhdGUsIEdsb2JhbFN0YXRlPiB7XG4gICAgY29uc3QgcHJvY2Vzc2VzID0gdGhpcy5nZXRQcm9jZXNzZXMoKVxuXG4gICAgY29uc3QgYXV0aFByb2Nlc3NHcm91cCA9IG5ldyBSZWR1eFByb2Nlc3NHcm91cDxBdXRoU3RhdGUsIEdsb2JhbFN0YXRlPihcbiAgICAgICdhdXRoJyxcbiAgICAgIHtcbiAgICAgICAgZGVmYXVsdFN0YXRlOiB0aGlzLl9nZXREZWZhdWx0U3RhdGUoKSxcbiAgICAgICAgcHJvY2Vzc2VzOiBPYmplY3QudmFsdWVzKHByb2Nlc3NlcylcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gYXV0aFByb2Nlc3NHcm91cFxuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXREZWZhdWx0U3RhdGUoKTogQXV0aFN0YXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogbnVsbCxcbiAgICAgIGdldEFjY2Vzc1Rva2VuOiAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuTWFuYWdlci5nZXRBY2Nlc3NUb2tlbigpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0UmVmcmVzaFRva2VuOiAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuTWFuYWdlci5nZXRSZWZyZXNoVG9rZW4oKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19