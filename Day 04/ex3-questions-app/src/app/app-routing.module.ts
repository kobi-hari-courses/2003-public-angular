import { ValidQuestionGuard } from './core/valid-question.guard';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'questions', pathMatch: 'full'}, 
  {path: 'questions', component: QuestionsListComponent}, 
  {path: 'questions/:id', component: QuestionDetailsComponent, canActivate: [ValidQuestionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
