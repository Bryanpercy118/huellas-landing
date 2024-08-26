import { Component, AfterViewInit, ViewChild, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  private currentUrl: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;

    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));

    // Detecta cambios en la ruta
    this.router.events.subscribe(() => {
      this.checkAndPlayVideo();
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
      video.play();
    } else {
      video.pause();
    }
  }

  isCurrentRouteVisible(): boolean {
    return this.router.url === '/Huellas-del-Maestro/home';
  }

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }
}
