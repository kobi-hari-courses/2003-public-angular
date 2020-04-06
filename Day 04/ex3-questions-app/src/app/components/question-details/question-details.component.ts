import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/models/question';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
  question$: Observable<Question>;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const id$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );

    this.question$ = id$.pipe(
      switchMap(id => this.data.getQuestionByIndex(id))
    );
  }

  async setAnswer(answerIndex: number) {
    const id = Number(this.route.snapshot.params['id']);
    await this.data.answerQuestion(id, answerIndex);
    this.router.navigate(['questions', id + 1]);
  }

}
