import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NospaceDirective } from './directives/nospace.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HideableDirective } from './directives/hideable.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NospaceDirective,
    HideableDirective, 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
