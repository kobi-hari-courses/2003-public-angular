import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { ExpanderButtonComponent } from './components/expander-button/expander-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    ExpanderComponent,
    ExpanderButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
