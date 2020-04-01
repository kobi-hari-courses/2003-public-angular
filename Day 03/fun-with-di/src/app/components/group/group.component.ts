import { Component, OnInit } from '@angular/core';
import { CorrectAdditionService } from 'src/app/services/correct-addition.service';
import { AdditionService } from 'src/app/services/addition-service.abstract';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [{
    provide: AdditionService, 
    useExisting: CorrectAdditionService
  }, 
  {
    provide: CorrectAdditionService, 
    useClass: CorrectAdditionService
  }
]
})
export class GroupComponent implements OnInit {

  constructor(public additionService: AdditionService) { }

  ngOnInit(): void {
  }

}
