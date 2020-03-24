var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.add = function () {
        return this.a + this.b;
    };
    return Calculator;
}());
var c1 = new Calculator(10, 5);
var res = c1.add();
console.log(res);
