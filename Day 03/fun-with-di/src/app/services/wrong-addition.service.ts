import { AdditionService } from './addition-service.abstract';
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class WrongAdditionService extends AdditionService{
  id: number;

  constructor(private logger: LoggerService) {
      super();
      this.id = Math.ceil(Math.random()*100000000);
      this.logger.log('Wrong Addition Service Created with id: ' + this.id);
  }

  add(op1: number, op2: number) {
      this.logger.log(`Adding: ${op1}, ${op2}`);
      return op1 + op2 + 1;
  }

}
