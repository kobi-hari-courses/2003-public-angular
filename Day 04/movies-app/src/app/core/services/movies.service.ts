import { ALL_MOVIES } from './../models/all-movies';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async getAllTitles(): Promise<string[]> {
    await this.delay(1000);
    return ALL_MOVIES.map(m => m.caption);
  }

  async getMovie(title: string): Promise<Movie> {
    await this.delay(1000);
    return ALL_MOVIES.find(m => m.caption === title);
  }

  async getMovieByIndex(index: number): Promise<Movie> {
    await this.delay(1000);
    return ALL_MOVIES[index];
  }

  async getMoviesCount(): Promise<number> {
    return ALL_MOVIES.length;
  }
}
