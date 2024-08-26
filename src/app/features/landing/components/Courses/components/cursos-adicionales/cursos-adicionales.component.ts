import { Component } from '@angular/core';

interface Curso {
  titulo: string;
  duracion: string;
  instructor: string;
  canciones: string[];
  calificacion: number;
  precioAnterior: number;
  precioActual: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-cursos-adicionales',
  templateUrl: './cursos-adicionales.component.html',
  styleUrls: ['./cursos-adicionales.component.css']
})
export class CursosAdicionalesComponent {
  cursos: Curso[] = [
    {
      titulo: 'Curso completo Paseo',
      duracion: '6 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Brindo con el alma', 'Diana', 'Así fue mi querer'],
      calificacion: 5.0,
      precioAnterior: 700000,
      precioActual: 350000,
      imagenUrl: 'https://huellasdelmaestro.com/wp-content/uploads/2022/06/Banner-cursor-01-jpg.webp'
    },
    {
      titulo: 'Curso de paseo Módulo 1',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Brindo con el alma'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://huellasdelmaestro.com/wp-content/uploads/2023/01/Banner-cursor-02-jpg.webp'
    },
    {
      titulo: 'Curso de paseo Módulo 2',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Diana'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://huellasdelmaestro.com/wp-content/uploads/2023/03/Banner-cursor-03-jpg.webp'
    },
    {
      titulo: 'Curso completo Merengue',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Mi gran amigo'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://huellasdelmaestro.com/wp-content/uploads/2023/09/Banner-cursor-04-jpg.webp'
    },
    {
      titulo: 'Curso completo Puya',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Déjala venir'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://huellasdelmaestro.com/wp-content/uploads/2023/10/Banner-cursor-05-jpg.webp'
    },
    {
      titulo: 'Curso completo Son',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Altos del Rosario'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://huellasdelmaestro.com/wp-content/uploads/2023/12/Curso-Son-jpg.webp'
    }
  ];
}
