import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BpmModule} from './bpm/bpm.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BpmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
