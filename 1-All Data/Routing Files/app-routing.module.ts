import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {HodDashboardComponent} from "./hod-dashboard/hod-dashboard.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'student-dashboard', component: StudentDashboardComponent},
  {path: 'hod-dashboard', component: HodDashboardComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
