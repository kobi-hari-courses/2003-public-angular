import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/models/movie';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie$: Observable<Movie> = null;

  constructor(
    private data: MoviesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const index$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );
    this.movie$ = index$.pipe(
      switchMap(index => this.data.getMovieByIndex(index))
    );
  }

}
