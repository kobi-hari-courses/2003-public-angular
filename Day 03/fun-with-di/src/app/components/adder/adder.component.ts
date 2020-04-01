import { Component, OnInit } from '@angular/core';
import { CorrectAdditionService } from 'src/app/services/correct-addition.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css'], 
  providers: []
})
export class AdderComponent {
  result: number;

  constructor(public additionService: CorrectAdditionService) { }

  calc(op1: string, op2: string) {
    let o1 = Number(op1);
    let o2 = Number(op2);

    this.result = this.additionService.add(o1, o2);
  }

}
