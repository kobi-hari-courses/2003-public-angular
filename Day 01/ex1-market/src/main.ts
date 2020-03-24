import { Market } from './market';
import { Stock } from './stock';

let m = new Market();
m.add(new Stock('APL', 'Apple inc', 0));
m.add(new Stock('MSFT', 'Microsoft', 0));
m.add(new Stock('GGL', 'Google.com', 0));
m.add(new Stock('AMZN', 'Amazon ltd', 0));

for(let i = 0; i< 10; i++) {
    setTimeout(() => {
        m.cycle();
        m.display();
    } , 1000 * i);
}

console.log('The end');