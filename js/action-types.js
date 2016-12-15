(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    (function (actionTypes) {
        actionTypes[actionTypes["REFRESH_WIDGETS_REQUEST"] = 0] = "REFRESH_WIDGETS_REQUEST";
        actionTypes[actionTypes["REFRESH_WIDGETS_DONE"] = 1] = "REFRESH_WIDGETS_DONE";
    })(exports.actionTypes || (exports.actionTypes = {}));
    var actionTypes = exports.actionTypes;
});
//# sourceMappingURL=action-types.js.map