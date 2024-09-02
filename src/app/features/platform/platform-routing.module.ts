import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterViewComponent } from './auth/register-view/register-view.component';
import { HomeComponent } from './admin/home/home.component';
import { CourseComponent } from './admin/course/course.component';
import { ProfileComponent } from './admin/profile/profile.component';

const routes: Routes = [
  { path: 'login', title: 'Login', component: LoginViewComponent},
  { path: 'register', title: 'register', component: RegisterViewComponent},
  { path: 'Huellas-del-Maestro', title: 'Dash', component: DashboardComponent, children:[
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CourseComponent },
      { path: 'profile', component: ProfileComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
