import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    counter: number = 1000;

    constructor() {
        console.log('Logger Service Created');
    }

    log(msg: string) {
        console.log(`${this.counter++}: ${msg}`);
    }
}