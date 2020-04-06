import { ALL_QUESTIONS } from './../models/all-questions';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  async getAllQuestions(): Promise<Question[]> {
    return ALL_QUESTIONS;
  }

  async getQuestionByIndex(index: number): Promise<Question> {
    return ALL_QUESTIONS[index];
  }

  async answerQuestion(questionIndex: number, answerIndex: number): Promise<void> {
    ALL_QUESTIONS[questionIndex].userAnswerIndex = answerIndex;  
  }

}
