import { CorrectAdditionService } from './services/correct-addition.service';
import { Component } from '@angular/core';
import { AdditionService } from './services/addition-service.abstract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'fun-with-di';
}
