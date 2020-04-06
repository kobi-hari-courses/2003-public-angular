import { ALLCOLORS } from './../models/all-colors';
import { Injectable } from '@angular/core';
import { ColorModel } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }


  async search(keyword: string): Promise<ColorModel[]> {
    console.log('Starting search for ' + keyword);
    if (!keyword) return [];

    keyword = keyword.toLowerCase();
    const res = Object.entries(ALLCOLORS)
      .map(tuple => {
        return <ColorModel>{displayName: tuple[1], code: tuple[0]}
      })
      .filter(cm => cm.displayName.toLowerCase().includes(keyword));

    await this.delay(4000);

    console.log('Completed search for ' + keyword);
    return res;
  }

}


