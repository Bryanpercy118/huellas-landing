import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializedVideo(); 
  }
  
  initializedVideo(): void {
    const video = this.heroVideo.nativeElement;
    video.pause(); // Pausa el video primero
    video.currentTime = 0; // Reinicia el video desde el inicio
    video.play(); // Reproduce el video
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));

    // Detecta cambios en la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkAndPlayVideo();
      }
    });
  }

  ngAfterViewInit(): void {
    this.checkAndPlayVideo(); // Verifica si el video debe reproducirse al cargar
  }

  handleVisibilityChange(): void {
    this.checkAndPlayVideo(); // Verifica si el video debe reproducirse al cambiar la visibilidad de la pestaña
  }

  checkAndPlayVideo(): void {
    const video = this.heroVideo.nativeElement;

    if (this.isCurrentRouteVisible() && !document.hidden) {
      video.pause(); // Pausa el video primero
      video.currentTime = 0; // Reinicia el video desde el inicio
      video.volume = 0.2; // Ajusta el volumen a un nivel bajo (20% del máximo)
      video.play(); // Reproduce el video
    } else {
      video.pause(); // Pausa el video si la ruta no es visible o la pestaña no está activa
    }
}


  isCurrentRouteVisible(): boolean {
    return this.router.url === '/Huellas-del-Maestro/home';
  }

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }
}
