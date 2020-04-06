import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie> = null;

  constructor(
    private data: MoviesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    const index$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );
    this.movie$ = index$.pipe(
      switchMap(index => this.data.getMovieByIndex(index))
    );
  }

  next() {
    const index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index + 1]);
  }

  prev() {
    const index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index - 1]);
  }

  edit() {
    const index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index, 'edit']);
  }

}
