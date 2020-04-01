import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  private calculatedNumbersPromise: Promise<number[]> | null = null;

  constructor() { }

  private delay(millis: number) {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  private random(min: number, max: number) {
    let range = max - min;

    let rand = Math.round(Math.random()*range);
    return rand + min;
  }

  private generateNumbers(): Promise<number[]> {
    let promises: Promise<number>[] = [];

    for (let i = 0; i < 10; i++) {
      promises.push(this.next(100, 200));
    }

    return Promise.all(promises);
  }

  public async next(min: number, max: number): Promise<number> {
    const duration = this.random(1000, 8000);
    await this.delay(duration);

    const res = this.random(min, max);
    return res;
  }

  public getNumbers(): Promise<number[]> {
    if (this.calculatedNumbersPromise === null) {
      this.calculatedNumbersPromise = this.generateNumbers();
    }

    return this.calculatedNumbersPromise;
  }


}
