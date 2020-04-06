import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = [];

  constructor(
    private data: DataService, 
    private router: Router) { }

  async ngOnInit() {
    this.questions = await this.data.getAllQuestions();
  }

  navigateToQuestion(index: number) {
    this.router.navigate(['questions', index]);
  }

}
