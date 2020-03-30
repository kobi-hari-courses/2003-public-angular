import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expander-button',
  templateUrl: './expander-button.component.html',
  styleUrls: ['./expander-button.component.css']
})
export class ExpanderButtonComponent implements OnInit {

  @Output()
  clicked = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onClicked() {
    this.clicked.emit();
  }


}
