import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    
  }

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;

    // Set the volume to a lower level
    video.volume = 0.2; // Volume at 20% of the maximum

    // Ensure the video loops correctly on mobile devices
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
  }
  
}
