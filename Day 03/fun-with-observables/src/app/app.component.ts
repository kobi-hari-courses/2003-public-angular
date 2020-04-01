import { Component } from '@angular/core';
import { Observer, interval, Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingCounterPresenter = true;

  toggleCounterPresenter() {
    this.isShowingCounterPresenter = !this.isShowingCounterPresenter;
  }


  createObserver(id: number): Observer<number> {
    return {
      next: t => console.log(`Observer ${id} next ${t}`), 
      complete: () => console.log(`Observer ${id} completed`), 
      error: err => console.log(`Observer ${id} error ${err}`), 
    }
  }

  createInterval(): Observable<number> {
    return interval(1000);
  }

  createObservable(): Observable<number> {
    return new Observable<number>(observer => {

      observer.next(10);
      setTimeout(() => observer.next(20), 2000);
      setTimeout(() => observer.next(30), 4000);
      setTimeout(() => observer.next(60), 5000);
      setTimeout(() => observer.next(90), 7000);
      setTimeout(() => observer.complete(), 10000);
    });
  }

  createSubject(): Observable<number> {
    const subj = new Subject<number>();

    subj.next(10);
    setTimeout(() => subj.next(20), 2000);
    setTimeout(() => subj.next(30), 5000);
    setTimeout(() => subj.next(60), 6000);
    setTimeout(() => subj.next(90), 7000);
    setTimeout(() => subj.complete(), 10000);

    return subj;
  }

  createBehaviorSubject(): Observable<number> {
    const subj = new BehaviorSubject<number>(10);

    setTimeout(() => subj.next(20), 2000);
    setTimeout(() => subj.next(30), 5000);
    setTimeout(() => subj.next(60), 6000);
    setTimeout(() => subj.next(90), 7000);
    setTimeout(() => subj.complete(), 10000);

    return subj;
  }

  createReplaySubject(): Observable<number> {
    const subj = new ReplaySubject<number>()

    subj.next(10);
    setTimeout(() => subj.next(20), 2000);
    setTimeout(() => subj.next(30), 5000);
    setTimeout(() => subj.next(60), 6000);
    setTimeout(() => subj.next(90), 7000);
    setTimeout(() => subj.complete(), 10000);

    return subj;

  }


  go() {
    const observer1 = this.createObserver(1);
    const observer2 = this.createObserver(2);

    const observable = this.createReplaySubject();

    observable.subscribe(observer1);

    setTimeout(() => observable.subscribe(observer2) , 6500);
  }
}
