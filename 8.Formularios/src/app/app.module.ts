import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //ReactiveFormsModule para la aproximación por data
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PorTemplateComponent } from './components/por-template/por-template.component';
import { PorDataComponent } from './components/por-data/por-data.component';


@NgModule({
  declarations: [
    AppComponent,
    PorTemplateComponent,
    PorDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule //para formulario por data
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
