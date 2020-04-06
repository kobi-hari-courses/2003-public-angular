import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, map, last, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getInterval() {
    return interval(1000);
  }

  dump<T>(o: Observable<T>, id: string) {
    o.subscribe({
      next: val => console.log(id + ' next: ' + val), 
      complete: () => console.log(id + ' complete'), 
      error: err => console.log(id + ' error ' + err)
    });
  }

  go() {
    let o1 = this.getInterval();

    let o2 = o1.pipe(
      take(10) 
    );

    let o3 = o2.pipe(
      map(x => x**2)
    )

    let o4 = o3.pipe(
      takeLast(3)
    )

    this.dump(o1, 'source');
    this.dump(o2, 'take');
    this.dump(o3, 'map');
    this.dump(o4, 'last');

  }
}
