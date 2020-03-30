import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent {
  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  @Output()
  changed = new EventEmitter<string>();


  select(value: string) {
    this.selectedOption = value;
    this.changed.emit(value);
  }

}
