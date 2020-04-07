import { Injectable } from '@angular/core';
import { Show } from '../models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = `http://api.tvmaze.com`;
  private showsPromise: Promise<Show[]> | null = null;

  constructor(private http: HttpClient) { }

  private getUrl(specific: string) {
    return `${this.baseUrl}/${specific}`;
  }

  getAllShows(): Promise<Show[]> {
    if (this.showsPromise === null) {
      const url = this.getUrl('shows');
      this.showsPromise = this.http.get<Show[]>(url).toPromise();            
    }

    return this.showsPromise;
  }

  getShow(id: string): Promise<Show> {
    const url = this.getUrl(`shows/${id}`);
    return this.http.get<Show>(url).toPromise();
  }
}
