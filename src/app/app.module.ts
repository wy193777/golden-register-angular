import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpModule,
  MatToolbarModule,
  FlexLayoutModule,
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: modules,
  exports: modules,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
