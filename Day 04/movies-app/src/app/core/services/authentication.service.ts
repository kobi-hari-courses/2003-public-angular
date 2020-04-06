import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private status$ = new BehaviorSubject<boolean>(this.isAuthenticated);

  private nextUrl: UrlTree | null = null;


  constructor(private router: Router) { }

  setNextUrl(url: UrlTree) {
    console.log('Authentication service, setting next url to ');
    console.log(url.toString());
    this.nextUrl = url;
  }

  isLoggedIn(): Observable<boolean> {
    return this.status$.asObservable();
  }

  async login(): Promise<void> {
    this.isAuthenticated = true;
    this.status$.next(this.isAuthenticated);

    if (this.nextUrl !== null) {
      console.log('Authentication service automatic navigation to');
      console.log(this.nextUrl.toString());
      this.router.navigateByUrl(this.nextUrl);
      this.nextUrl = null;
    }
  }

  async logout(): Promise<void> {
    this.isAuthenticated = false;
    this.status$.next(this.isAuthenticated);
  }

}
