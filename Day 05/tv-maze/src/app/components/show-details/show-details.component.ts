import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
 
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show$: Observable<Show>;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id$ = this.route.params.pipe(
      map(prms => <string>prms['id'])
    );

    this.show$ = id$.pipe(
      switchMap(id => this.data.getShow(id))
    );
  }

}
