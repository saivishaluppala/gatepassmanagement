import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from "@angular/router";
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentDashboardComponent,
    HodDashboardComponent
  ],
    imports: [
        BrowserModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
