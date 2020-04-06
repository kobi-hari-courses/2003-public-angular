import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidQuestionGuard implements CanActivate {
  constructor(
    private data: DataService, 
    private router: Router
  ) {

  }


  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {      
      const id = Number(next.params['id']);
      console.log(id);
      const question = await this.data.getQuestionByIndex(id);
      console.log(question);

      if ((question) && (question.userAnswerIndex === null))
        return true;

      console.log('invalid');
      return this.router.createUrlTree(['questions']);
  }
  
}
