import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RegisterViewComponent } from './auth/register-view/register-view.component';

const routes: Routes = [
  { path: 'login', title: 'Login', component: LoginViewComponent},
  { path: 'register', title: 'register', component: RegisterViewComponent},
  { path: 'dashboard', title: 'Dash', component: DashboardComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
