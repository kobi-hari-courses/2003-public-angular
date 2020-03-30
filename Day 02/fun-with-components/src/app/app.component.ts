import { ExpanderComponent } from './components/expander/expander.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  showToggles = [true, true, true];

  @ViewChild('mySecondExpander', {read: ExpanderComponent})
  secondExpander: ExpanderComponent;

  toggleHideOrShow(index: number) {
    this.showToggles[index] = !this.showToggles[index];
  }

  ngAfterViewInit(): void {
    console.log(this.secondExpander);    
  }

}
