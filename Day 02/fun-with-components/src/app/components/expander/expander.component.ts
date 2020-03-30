import { ExpanderButtonComponent } from './../expander-button/expander-button.component';
import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterContentInit {
  @Input()
  isExpanded: boolean = true;

  @ContentChild(ExpanderButtonComponent)
  myButton: ExpanderButtonComponent;

  toggleIsExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  constructor() {     
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.myButton) {
      this.myButton.clicked.subscribe(() => {
        this.toggleIsExpanded();
      });
    }
  }

}
