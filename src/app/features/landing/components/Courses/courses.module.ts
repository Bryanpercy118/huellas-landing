import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosAdicionalesComponent } from './components/cursos-adicionales/cursos-adicionales.component';
import { CursosDestacadosComponent } from './components/cursos-destacados/cursos-destacados.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    IndexComponent,
    CursosAdicionalesComponent,
    CursosDestacadosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
