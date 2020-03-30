import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly question: string = 'How much is 6 * 7?';
  readonly answers: string[] = ['42', '48', '49', '52'];
  readonly correctAnswerIndex = 0;
    
  selectedAnswerIndex: number | null = null;
  wasAnswered: boolean = false;
  isCorrect: boolean | null = null;
  resultMessage: string = '';

  selectAnswer(value: number) {
    this.selectedAnswerIndex = value;
    this.wasAnswered = true;
    this.isCorrect = (this.selectedAnswerIndex === this.correctAnswerIndex);

    if (this.isCorrect) {
      this.resultMessage = 'Correct';
    } else {
      this.resultMessage = 'Wrong';
    }
  }

}
