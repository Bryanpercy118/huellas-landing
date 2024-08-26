import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const video = document.getElementById('backgroundVideo') as HTMLVideoElement;
    if (video) {
      video.volume = 0.2; // Ajusta el volumen al 20%
    }
  }
}
