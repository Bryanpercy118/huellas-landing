import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing/components/home/landing-page/landing-page.component';
import { IndexComponent } from './features/landing/components/Courses/index/index.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch:'full'},
  {path: 'landing', component: LandingPageComponent},
  {path:'courses', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
