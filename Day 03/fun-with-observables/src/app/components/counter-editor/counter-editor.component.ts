import { CounterService } from './../../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-editor',
  templateUrl: './counter-editor.component.html',
  styleUrls: ['./counter-editor.component.css']
})
export class CounterEditorComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  async inc() {
    await this.counterService.increment();
  }

  async dec() {
    await this.counterService.decremenet();
  }

}
