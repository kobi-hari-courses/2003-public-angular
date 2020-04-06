import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  captions: string[] = [];

  constructor(
    private data: MoviesService, 
    private router: Router
    ) { }

  async ngOnInit() {
    this.captions = await this.data.getAllTitles();
  }

  selectMovie(index: number) {
    // our target address is: /movies/4
    this.router.navigate(['movies', index]);
  }


}
