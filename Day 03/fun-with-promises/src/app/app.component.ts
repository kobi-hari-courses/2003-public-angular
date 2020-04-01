import { RandomizerService } from './services/randomizer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private randomizer: RandomizerService){}

  createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => 
    {
      setTimeout(() => resolve(42), 3000);
    })
  }

  // 1 A B ... C 2

  async go() {
    console.log('We are starting now');
    const start = Date.now();

    const numbers = await this.randomizer.getNumbers();

    const finish = Date.now();
    console.log(`Duration = ${finish-start}`);
    console.log(numbers);


    // let promises: Promise<[number, number]>[] = [];
    // let numbers: number[] = [];

    // const start = Date.now();

    // for (let i = 0; i < 10; i++) {
    //   console.log(i);
    //   const promise = this.randomizer.next(100, 200);
    //   promises.push(promise.then(val => [val, i]));
    // }

    // let pfirst = Promise.race(promises);
    // let tpl = await pfirst;

    // const finish = Date.now();
    // console.log(`Duration = ${finish-start}`);
    // console.log(`result ${tpl[1]} = ${tpl[0]}`);


    // console.log('1');
    // await this.start();
    // console.log('2');
  }

  async start() {
    console.log('A');
    let p = this.createPromise();
    console.log('B');    
    let res = /* } */ await p;
    console.log('C');

    return true;
  }

      // let p1 = this.createPromise();
    // res = await p1;

  
  
    // let x = p.then(res => {
    //   console.log('Promise completed with result: ' + res);
    //   return 'Hello';
    // });

    // x.then(res => {
    //   console.log('X PRomise completed, res = ' + res);
    // })

    // console.log('GO function completed');


}
