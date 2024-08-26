import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosAdicionalesComponent } from './components/cursos-adicionales/cursos-adicionales.component';
import { CursosDestacadosComponent } from './components/cursos-destacados/cursos-destacados.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent,
    CursosAdicionalesComponent,
    CursosDestacadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
