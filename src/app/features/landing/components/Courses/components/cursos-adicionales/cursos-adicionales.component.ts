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
      imagenUrl: 'https://www.example.com/course1-image.jpg'
    },
    {
      titulo: 'Curso de paseo Módulo 1',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Brindo con el alma'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://www.example.com/course2-image.jpg'
    },
    {
      titulo: 'Curso de paseo Módulo 2',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Diana'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://www.example.com/course3-image.jpg'
    },
    {
      titulo: 'Curso completo Paseo',
      duracion: '6 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Brindo con el alma', 'Diana', 'Así fue mi querer'],
      calificacion: 5.0,
      precioAnterior: 700000,
      precioActual: 350000,
      imagenUrl: 'https://www.example.com/course1-image.jpg'
    },
    {
      titulo: 'Curso de paseo Módulo 1',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Brindo con el alma'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://www.example.com/course2-image.jpg'
    },
    {
      titulo: 'Curso de paseo Módulo 2',
      duracion: '2 Meses',
      instructor: 'Cocha Molina',
      canciones: ['Diana'],
      calificacion: 5.0,
      precioAnterior: 400000,
      precioActual: 200000,
      imagenUrl: 'https://www.example.com/course3-image.jpg'
    }
   
  ];
}
