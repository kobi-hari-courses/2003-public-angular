import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject<number>(0);

  constructor() { }

  getValue(): Observable<number> {
    return this.value$.asObservable();
  }

  async increment() : Promise<void> {
    this.value ++;
    this.value$.next(this.value);
  }

  async decremenet(): Promise<void> {
    this.value --;
    this.value$.next(this.value);
  }

}
