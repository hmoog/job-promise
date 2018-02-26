var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { EventEmitter } from 'eventemitter3';
export var ExecutionState;
(function (ExecutionState) {
    ExecutionState[ExecutionState["NEW"] = 0] = "NEW";
    ExecutionState[ExecutionState["RUNNING"] = 1] = "RUNNING";
    ExecutionState[ExecutionState["DONE"] = 2] = "DONE";
    ExecutionState[ExecutionState["FAILED"] = 3] = "FAILED";
})(ExecutionState || (ExecutionState = {}));
var JobPromise = /** @class */ (function (_super) {
    __extends(JobPromise, _super);
    function JobPromise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JobPromise;
}(EventEmitter));
export { JobPromise };
