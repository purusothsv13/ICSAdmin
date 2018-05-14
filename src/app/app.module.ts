import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {MatExpansionModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
