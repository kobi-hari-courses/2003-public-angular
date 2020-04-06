import { ColorsService } from './service/colors.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { ColorModel } from './models/color.model';
import { map, flatMap, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  search$ = new BehaviorSubject<string>('');
  results$: Observable<ColorModel[]>;
  isBusy$: Observable<boolean>;

  constructor(private colors: ColorsService) {}


  onInput(value: string) {
    this.search$.next(value);
  }

  ngOnInit(): void {
    this.results$ = this.search$.pipe(
      debounceTime(1000), 
      switchMap(s => this.colors.search(s))
    );

    const true$ = this.search$.pipe(
      map(_ => true)
    );

    const false$ = this.results$.pipe(
      map(_=> false)
    );

    this.isBusy$ = merge(true$, false$);

  }

}
