"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Market = /** @class */ (function () {
    function Market() {
        this.stocks = [];
    }
    Market.prototype.add = function (stock) {
        this.stocks.push(stock);
    };
    Market.prototype.display = function () {
        for (var _i = 0, _a = this.stocks; _i < _a.length; _i++) {
            var stock = _a[_i];
            stock.display();
        }
    };
    Market.prototype.cycle = function () {
        for (var _i = 0, _a = this.stocks; _i < _a.length; _i++) {
            var stock = _a[_i];
            var delta = Math.random() * 4 - 2;
            stock.value += delta;
        }
    };
    return Market;
}());
exports.Market = Market;
//# sourceMappingURL=market.js.map