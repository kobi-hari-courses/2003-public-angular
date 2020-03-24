class Calculator {
    constructor(private a: number, private b: number) {}

    add() {
        return this.a + this.b;
    }
}

let c1 = new Calculator(10, 5);
let res = c1.add();
console.log(res);