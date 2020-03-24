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
var m = new Market();
m.add(new Stock('APL', 'Apple inc', 0));
m.add(new Stock('MSFT', 'Microsoft', 0));
m.add(new Stock('GGL', 'Google.com', 0));
m.add(new Stock('AMZN', 'Amazon ltd', 0));
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        m.cycle();
        m.display();
    }, 1000 * i);
}
console.log('The end');
