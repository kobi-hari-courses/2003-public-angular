import { AuthenticationService } from './core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  status$: Observable<string>;

  constructor(private auth: AuthenticationService){}

  ngOnInit(): void {
    this.status$ = this.auth.isLoggedIn().pipe(
      map(b => b ? 'Logged In' : 'Logged Out')
    )
  }
}
