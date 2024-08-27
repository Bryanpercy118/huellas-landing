import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { IndexComponent } from './components/Courses/index/index.component';
import { UsComponent } from './components/Us/us/us.component';
// Importa los componentes que quieras asociar a las rutas

const routes: Routes = [
  { path: 'home', title: 'Huellas del Maestro', component: LandingPageComponent },
  { path: 'courses', title: 'Cursos', component: IndexComponent },
  { path: 'us', title:'Nosotros', component: UsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full', }  // Ruta por defecto dentro de este módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
