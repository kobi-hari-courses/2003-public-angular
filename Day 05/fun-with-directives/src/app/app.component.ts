import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFavoriteColor = '160, 0, 200';

  h1Highlighted() {
    console.log('h1 highlighted');
  }

  ngOnInit(): void {
  }
}
