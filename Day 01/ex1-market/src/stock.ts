declare function require(name: string);
var colors = require('colors');

export class Stock {
    constructor(
        public code: string,
        public displayName: string,
        public value: number
    ) { }

    display() {
        let name = `${this.code}: (${this.displayName})`;
        let val = `${this.value}`['green'];

        if (this.value < 0) {
            val = `${this.value}`['red'];
        }

        console.log(`${name}: ${val}`);
    }
}
