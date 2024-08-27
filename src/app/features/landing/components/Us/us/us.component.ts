import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit  {

  ngOnInit(): void {
    // Interesados se cuentan más rápido
    this.startCountUp('peopleCount', 6000, 2000);  // 2 segundos

    // Cursos y países se cuentan más lentamente
    this.startCountUp('coursesCount', 6, 4000);    // 4 segundos
    this.startCountUp('countriesCount', 6, 4000);  // 4 segundos
  }

  startCountUp(elementId: string, endValue: number, duration: number) {
    const element = document.getElementById(elementId);
    let start = 0;
    const increment = Math.ceil(endValue / (duration / 16.6667)); // Cada cuadro es aproximadamente 16.6667ms (60 FPS)
    const timer = setInterval(() => {
      start += increment;
      if (element) {
        element.innerText = start > endValue ? endValue.toString() : start.toString();
      }
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, 16.6667);
  }
}
