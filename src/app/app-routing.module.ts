import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './features/landing/components/Courses/index/index.component';

const routes: Routes = [
  {
    path: 'Huellas-del-Maestro',
    loadChildren: () => import('../app/features/landing/landing.module').then(m => m.LandingModule)
  },
  
  { path: '', redirectTo: '/Huellas-del-Maestro/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
