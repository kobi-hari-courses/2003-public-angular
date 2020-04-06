import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter: number;

  constructor(private data: MoviesService) { }

  async ngOnInit() {
    this.counter = await this.data.getMoviesCount();
  }

}
