import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data
  colors: string[] = ['Red', 'Green', 'Blue', 'Magenta', 'Brown', 'Black'];
  fonts: string[] = ['Arial', 'Times new Roman', 'Consolas', 'David', 'Tahoma', 'Sans Serif'];
  sizes: string[] = ['12px', '18px', '27px', '42px', '70px'];

  selectedColor: string = this.colors[0];
  selectedFont: string = this.fonts[0];
  selectedSize: string = this.sizes[0];

  // Actions
  selectColor(value: string) {
    console.log('selecting color: ' + value);
    this.selectedColor = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

}
