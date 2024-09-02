import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './features/landing/components/Courses/index/index.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/Huellas-del-Maestro/home', pathMatch: 'full' },
  {
    path: 'Huellas-del-Maestro',
    loadChildren: () => import('./features/landing/landing-routing.module').then(m => m.LandingRoutingModule)
  },
  {
    path: 'Platform',
    loadChildren: () => import('../app/features/platform/platform.module').then(m => m.PlatformModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
