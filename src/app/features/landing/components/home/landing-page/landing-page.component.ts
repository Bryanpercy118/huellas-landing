import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild(HeroComponent) heroComponent!: HeroComponent;

  ngOnInit(): void {
    if (this.heroComponent) {
      this.heroComponent.initializedVideo(); // Llama a la inicialización del video
    }
  }
}
