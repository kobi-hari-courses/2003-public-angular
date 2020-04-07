import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows$: Promise<Show[]>;

  constructor(
    private data: DataService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.shows$ = this.data.getAllShows();
  }

  goToShow(id: string) {
    this.router.navigate(['show', id]);
  }

}
