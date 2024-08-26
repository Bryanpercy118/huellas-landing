import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';

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

    // Reproduce el video siempre que la página esté visible
    this.playVideoOnVisibilityChange();

    // Asegurar que el video se repita correctamente en dispositivos móviles
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
  }

  // Reproduce el video cuando la página se vuelve visible
  private playVideoOnVisibilityChange(): void {
    const video = this.heroVideo.nativeElement;

    const handleVisibilityChange = () => {
      if (!document.hidden) {  // Si la página está visible
        video.play(); // Iniciar la reproducción del video
      }
    };

    // Escuchar el evento de cambio de visibilidad de la página
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Reproducir video cuando la página esté cargada y visible
    handleVisibilityChange();
  }
}
