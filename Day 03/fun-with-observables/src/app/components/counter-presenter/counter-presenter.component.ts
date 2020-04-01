import { CounterService } from './../../services/counter.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-presenter',
  templateUrl: './counter-presenter.component.html',
  styleUrls: ['./counter-presenter.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPresenterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {
    console.log('Creating one Counter Presenter');
   }

  ngOnInit(): void {
    this.counter$ = this.counterService.getValue();
  }

}
