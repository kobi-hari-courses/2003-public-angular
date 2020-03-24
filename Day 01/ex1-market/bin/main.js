"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var market_1 = require("./market");
var stock_1 = require("./stock");
var m = new market_1.Market();
m.add(new stock_1.Stock('APL', 'Apple inc', 0));
m.add(new stock_1.Stock('MSFT', 'Microsoft', 0));
m.add(new stock_1.Stock('GGL', 'Google.com', 0));
m.add(new stock_1.Stock('AMZN', 'Amazon ltd', 0));
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        m.cycle();
        m.display();
    }, 1000 * i);
}
console.log('The end');
//# sourceMappingURL=main.js.map