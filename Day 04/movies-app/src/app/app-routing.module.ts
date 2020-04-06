import { AuthenticationGuard } from './core/guards/authentication.guard';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountComponent } from './components/account/account.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'movies', component: MoviesListComponent}, 
  {path: 'movies/:id', component: MovieDetailsComponent}, 
  {path: 'movies/:id/edit', component: MovieEditComponent, canActivate: [AuthenticationGuard]}, 
  {path: 'account', component: AccountComponent}, 
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
