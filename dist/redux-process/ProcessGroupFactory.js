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
            this._processes = [];
            for (const [key, value] of Object.entries(this.options.requests)) {
                if (value) {
                    const process = this._processFactory.getProcess(key, value);
                    this._processes.push(process);
                }
            }
        }
        return this._processes;
    }
    getProcessGroup() {
        const processes = this.getProcesses();
        const authProcessGroup = new ts_redux_process_1.ReduxProcessGroup('auth', {
            defaultState: this._getDefaultState(),
            processes
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc0dyb3VwRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1eC1wcm9jZXNzL1Byb2Nlc3NHcm91cEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQW9EO0FBQ3BELGdFQUE0RDtBQU81RCxxREFBaUQ7QUFLakQsTUFBYSxtQkFBbUI7SUFZOUIsWUFBWSxPQUFtQztRQVRyQyxrQkFBYSxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQTtRQVVqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsQ0FBYztZQUNyRCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFNVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtZQUNwQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FDN0MsR0FBa0IsRUFDbEIsS0FBSyxDQUNOLENBQUE7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQzlCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUVyQyxNQUFNLGdCQUFnQixHQUFHLElBQUksb0NBQWlCLENBQzVDLE1BQU0sRUFDTjtZQUNFLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckMsU0FBUztTQUNWLENBQ0YsQ0FBQTtRQUVELE9BQU8sZ0JBQWdCLENBQUE7SUFDekIsQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUk7WUFDVixjQUFjLEVBQUUsR0FBRyxFQUFFO2dCQUNuQixJQUFJO29CQUNGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtpQkFDM0M7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxJQUFJLENBQUE7aUJBQ1o7WUFDSCxDQUFDO1lBQ0QsZUFBZSxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsSUFBSTtvQkFDRixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUE7aUJBQzVDO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sSUFBSSxDQUFBO2lCQUNaO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUF6RUQsa0RBeUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkdXhQcm9jZXNzR3JvdXAgfSBmcm9tICd0cy1yZWR1eC1wcm9jZXNzJ1xuaW1wb3J0IHsgRWFzeUpXVFRva2VuTWFuYWdlciB9IGZyb20gJy4uL0Vhc3lKV1RUb2tlbk1hbmFnZXInXG5pbXBvcnQgeyBJUHJvY2Vzc0dyb3VwRmFjdG9yeSB9IGZyb20gJy4vaW50ZXJmYWNlcy9JUHJvY2Vzc0dyb3VwRmFjdG9yeSdcbmltcG9ydCB7XG4gIFByb2Nlc3NHcm91cEZhY3RvcnlPcHRpb25zLFxuICBSb290U3RhdGUsXG4gIEF1dGhTdGF0ZVxufSBmcm9tICcuL3R5cGVzL1Byb2Nlc3NHcm91cEZhY3RvcnknXG5pbXBvcnQgeyBQcm9jZXNzRmFjdG9yeSB9IGZyb20gJy4vUHJvY2Vzc0ZhY3RvcnknXG5pbXBvcnQgeyBSZXF1ZXN0TmFtZSB9IGZyb20gJy4vdHlwZXMvUHJvY2Vzc0ZhY3RvcnknXG5pbXBvcnQgeyBJUmVkdXhQcm9jZXNzQ2xhc3MgfSBmcm9tICd0cy1yZWR1eC1wcm9jZXNzL2Rpc3QvaW50ZXJmYWNlcy9JUmVkdXhQcm9jZXNzJ1xuaW1wb3J0IHsgUHJvY2Vzc1BheWxvYWQgfSBmcm9tICcuL3R5cGVzL1Byb2Nlc3NGYWN0b3J5J1xuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc0dyb3VwRmFjdG9yeTxHbG9iYWxTdGF0ZSBleHRlbmRzIFJvb3RTdGF0ZSA9IFJvb3RTdGF0ZT5cbiAgaW1wbGVtZW50cyBJUHJvY2Vzc0dyb3VwRmFjdG9yeTxHbG9iYWxTdGF0ZT4ge1xuICBvcHRpb25zOiBQcm9jZXNzR3JvdXBGYWN0b3J5T3B0aW9uc1xuICBwcm90ZWN0ZWQgX3Rva2VuTWFuYWdlciA9IG5ldyBFYXN5SldUVG9rZW5NYW5hZ2VyKClcbiAgcHJvdGVjdGVkIF9wcm9jZXNzRmFjdG9yeTogUHJvY2Vzc0ZhY3Rvcnk8R2xvYmFsU3RhdGU+XG4gIHByb3RlY3RlZCBfcHJvY2Vzc2VzPzogSVJlZHV4UHJvY2Vzc0NsYXNzPFxuICAgIGFueSxcbiAgICBQcm9jZXNzUGF5bG9hZCB8IG51bGwsXG4gICAgQXV0aFN0YXRlLFxuICAgIEdsb2JhbFN0YXRlXG4gID5bXVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFByb2Nlc3NHcm91cEZhY3RvcnlPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuX3Byb2Nlc3NGYWN0b3J5ID0gbmV3IFByb2Nlc3NGYWN0b3J5PEdsb2JhbFN0YXRlPih7XG4gICAgICBuZXR3b3JrZXI6IG9wdGlvbnMubmV0d29ya2VyXG4gICAgfSlcbiAgfVxuXG4gIGdldFByb2Nlc3NlcygpOiBJUmVkdXhQcm9jZXNzQ2xhc3M8XG4gICAgYW55LFxuICAgIFByb2Nlc3NQYXlsb2FkIHwgbnVsbCxcbiAgICBBdXRoU3RhdGUsXG4gICAgR2xvYmFsU3RhdGVcbiAgPltdIHtcbiAgICBpZiAoIXRoaXMuX3Byb2Nlc3Nlcykge1xuICAgICAgdGhpcy5fcHJvY2Vzc2VzID0gW11cbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMub3B0aW9ucy5yZXF1ZXN0cykpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgcHJvY2VzcyA9IHRoaXMuX3Byb2Nlc3NGYWN0b3J5LmdldFByb2Nlc3MoXG4gICAgICAgICAgICBrZXkgYXMgUmVxdWVzdE5hbWUsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLl9wcm9jZXNzZXMucHVzaChwcm9jZXNzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzZXNcbiAgfVxuXG4gIGdldFByb2Nlc3NHcm91cCgpOiBSZWR1eFByb2Nlc3NHcm91cDxBdXRoU3RhdGUsIEdsb2JhbFN0YXRlPiB7XG4gICAgY29uc3QgcHJvY2Vzc2VzID0gdGhpcy5nZXRQcm9jZXNzZXMoKVxuXG4gICAgY29uc3QgYXV0aFByb2Nlc3NHcm91cCA9IG5ldyBSZWR1eFByb2Nlc3NHcm91cDxBdXRoU3RhdGUsIEdsb2JhbFN0YXRlPihcbiAgICAgICdhdXRoJyxcbiAgICAgIHtcbiAgICAgICAgZGVmYXVsdFN0YXRlOiB0aGlzLl9nZXREZWZhdWx0U3RhdGUoKSxcbiAgICAgICAgcHJvY2Vzc2VzXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIGF1dGhQcm9jZXNzR3JvdXBcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0RGVmYXVsdFN0YXRlKCk6IEF1dGhTdGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IG51bGwsXG4gICAgICBnZXRBY2Nlc3NUb2tlbjogKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldFJlZnJlc2hUb2tlbjogKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbk1hbmFnZXIuZ2V0UmVmcmVzaFRva2VuKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==