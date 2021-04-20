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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc0dyb3VwRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1eC1wcm9jZXNzL1Byb2Nlc3NHcm91cEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQW9EO0FBQ3BELGdFQUE0RDtBQU81RCxxREFBaUQ7QUFLakQsTUFBYSxtQkFBbUI7SUFVOUIsWUFBWSxPQUFtQztRQVByQyxrQkFBYSxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQTtRQVFqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsQ0FBYztZQUNyRCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFJVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtZQUNwQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FDN0MsR0FBa0IsRUFDbEIsS0FBSyxDQUNOLENBQUE7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFBO2lCQUN4QzthQUNGO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDeEIsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFFckMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9DQUFpQixDQUM1QyxNQUFNLEVBQ047WUFDRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUNwQyxDQUNGLENBQUE7UUFFRCxPQUFPLGdCQUFnQixDQUFBO0lBQ3pCLENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsY0FBYyxFQUFFLEdBQUcsRUFBRTtnQkFDbkIsSUFBSTtvQkFDRixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7aUJBQzNDO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sSUFBSSxDQUFBO2lCQUNaO1lBQ0gsQ0FBQztZQUNELGVBQWUsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BCLElBQUk7b0JBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFBO2lCQUM1QztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLElBQUksQ0FBQTtpQkFDWjtZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGO0FBckVELGtEQXFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZHV4UHJvY2Vzc0dyb3VwIH0gZnJvbSAndHMtcmVkdXgtcHJvY2VzcydcbmltcG9ydCB7IEVhc3lKV1RUb2tlbk1hbmFnZXIgfSBmcm9tICcuLi9FYXN5SldUVG9rZW5NYW5hZ2VyJ1xuaW1wb3J0IHsgSVByb2Nlc3NHcm91cEZhY3RvcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvSVByb2Nlc3NHcm91cEZhY3RvcnknXG5pbXBvcnQge1xuICBQcm9jZXNzR3JvdXBGYWN0b3J5T3B0aW9ucyxcbiAgUm9vdFN0YXRlLFxuICBBdXRoU3RhdGVcbn0gZnJvbSAnLi90eXBlcy9Qcm9jZXNzR3JvdXBGYWN0b3J5J1xuaW1wb3J0IHsgUHJvY2Vzc0ZhY3RvcnkgfSBmcm9tICcuL1Byb2Nlc3NGYWN0b3J5J1xuaW1wb3J0IHsgUmVxdWVzdE5hbWUgfSBmcm9tICcuL3R5cGVzL1Byb2Nlc3NGYWN0b3J5J1xuaW1wb3J0IHsgSVJlZHV4UHJvY2Vzc0NsYXNzIH0gZnJvbSAndHMtcmVkdXgtcHJvY2Vzcy9kaXN0L2ludGVyZmFjZXMvSVJlZHV4UHJvY2VzcydcbmltcG9ydCB7IFByb2Nlc3NQYXlsb2FkIH0gZnJvbSAnLi90eXBlcy9Qcm9jZXNzRmFjdG9yeSdcblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NHcm91cEZhY3Rvcnk8R2xvYmFsU3RhdGUgZXh0ZW5kcyBSb290U3RhdGUgPSBSb290U3RhdGU+XG4gIGltcGxlbWVudHMgSVByb2Nlc3NHcm91cEZhY3Rvcnk8R2xvYmFsU3RhdGU+IHtcbiAgb3B0aW9uczogUHJvY2Vzc0dyb3VwRmFjdG9yeU9wdGlvbnNcbiAgcHJvdGVjdGVkIF90b2tlbk1hbmFnZXIgPSBuZXcgRWFzeUpXVFRva2VuTWFuYWdlcigpXG4gIHByb3RlY3RlZCBfcHJvY2Vzc0ZhY3Rvcnk6IFByb2Nlc3NGYWN0b3J5PEdsb2JhbFN0YXRlPlxuICBwcm90ZWN0ZWQgX3Byb2Nlc3Nlcz86IFJlY29yZDxcbiAgICBzdHJpbmcsXG4gICAgSVJlZHV4UHJvY2Vzc0NsYXNzPGFueSwgUHJvY2Vzc1BheWxvYWQgfCBudWxsLCBBdXRoU3RhdGUsIEdsb2JhbFN0YXRlPlxuICA+XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogUHJvY2Vzc0dyb3VwRmFjdG9yeU9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5fcHJvY2Vzc0ZhY3RvcnkgPSBuZXcgUHJvY2Vzc0ZhY3Rvcnk8R2xvYmFsU3RhdGU+KHtcbiAgICAgIG5ldHdvcmtlcjogb3B0aW9ucy5uZXR3b3JrZXJcbiAgICB9KVxuICB9XG5cbiAgZ2V0UHJvY2Vzc2VzKCk6IFJlY29yZDxcbiAgICBzdHJpbmcsXG4gICAgSVJlZHV4UHJvY2Vzc0NsYXNzPGFueSwgUHJvY2Vzc1BheWxvYWQgfCBudWxsLCBBdXRoU3RhdGUsIEdsb2JhbFN0YXRlPlxuICA+IHtcbiAgICBpZiAoIXRoaXMuX3Byb2Nlc3Nlcykge1xuICAgICAgdGhpcy5fcHJvY2Vzc2VzID0ge31cbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMub3B0aW9ucy5yZXF1ZXN0cykpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgcHJvY2VzcyA9IHRoaXMuX3Byb2Nlc3NGYWN0b3J5LmdldFByb2Nlc3MoXG4gICAgICAgICAgICBrZXkgYXMgUmVxdWVzdE5hbWUsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLl9wcm9jZXNzZXNbcHJvY2Vzcy5uYW1lXSA9IHByb2Nlc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2VzXG4gIH1cblxuICBnZXRQcm9jZXNzR3JvdXAoKTogUmVkdXhQcm9jZXNzR3JvdXA8QXV0aFN0YXRlLCBHbG9iYWxTdGF0ZT4ge1xuICAgIGNvbnN0IHByb2Nlc3NlcyA9IHRoaXMuZ2V0UHJvY2Vzc2VzKClcblxuICAgIGNvbnN0IGF1dGhQcm9jZXNzR3JvdXAgPSBuZXcgUmVkdXhQcm9jZXNzR3JvdXA8QXV0aFN0YXRlLCBHbG9iYWxTdGF0ZT4oXG4gICAgICAnYXV0aCcsXG4gICAgICB7XG4gICAgICAgIGRlZmF1bHRTdGF0ZTogdGhpcy5fZ2V0RGVmYXVsdFN0YXRlKCksXG4gICAgICAgIHByb2Nlc3NlczogT2JqZWN0LnZhbHVlcyhwcm9jZXNzZXMpXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIGF1dGhQcm9jZXNzR3JvdXBcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0RGVmYXVsdFN0YXRlKCk6IEF1dGhTdGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IG51bGwsXG4gICAgICBnZXRBY2Nlc3NUb2tlbjogKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldFJlZnJlc2hUb2tlbjogKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbk1hbmFnZXIuZ2V0UmVmcmVzaFRva2VuKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==