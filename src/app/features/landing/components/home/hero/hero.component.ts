import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional que necesites en la inicialización del componente
  }

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;

    // Establecer el volumen en un nivel más bajo
    video.volume = 0.2; // Volumen al 20% del máximo

    // Asegurar que el video se repita correctamente en dispositivos móviles
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
  }
}
