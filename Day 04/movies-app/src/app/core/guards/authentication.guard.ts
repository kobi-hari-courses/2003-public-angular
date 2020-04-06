import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isLoweredSymbol } from '@angular/compiler';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
    ) { }

  async canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {

      console.log('starting guard');

      const isLoggedIn$ = this.auth.isLoggedIn();
      const isLoggedIn = await isLoggedIn$.pipe(
        first()
      ).toPromise();

      console.log('finishing guard, isLoggedIn = ' + isLoggedIn);
      if (isLoggedIn) return true;

      const accountUrl = this.router.createUrlTree([state.url]);
      this.auth.setNextUrl(accountUrl);

      return this.router.createUrlTree(['account']);
  }

}
