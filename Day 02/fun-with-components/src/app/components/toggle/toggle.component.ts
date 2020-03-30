import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit, OnDestroy {
  @Input()
  isOn: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log('Toggle created, with "isOn" = ' + this.isOn);
  }

  ngOnDestroy(): void {
    console.log('Destroying the toggle');
  }
}
