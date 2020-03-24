import { Stock } from "./stock";

export class Market {
    private stocks: Stock[] = [];

    add(stock: Stock) {
        this.stocks.push(stock);
    }

    display() {
        for (const stock of this.stocks) {
            stock.display();            
        }
    }

    cycle() {
        for(const stock of this.stocks) {
            let delta = Math.random()*4 - 2;
            stock.value += delta;
        }
    }
}
