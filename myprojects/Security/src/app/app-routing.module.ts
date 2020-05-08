import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sign-up', component:  SignUpComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
