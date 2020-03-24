"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require('colors');
var Stock = /** @class */ (function () {
    function Stock(code, displayName, value) {
        this.code = code;
        this.displayName = displayName;
        this.value = value;
    }
    Stock.prototype.display = function () {
        var name = this.code + ": (" + this.displayName + ")";
        var val = ("" + this.value)['green'];
        if (this.value < 0) {
            val = ("" + this.value)['red'];
        }
        console.log(name + ": " + val);
    };
    return Stock;
}());
exports.Stock = Stock;
//# sourceMappingURL=stock.js.map