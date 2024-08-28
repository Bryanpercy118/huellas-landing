import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-museo',
  templateUrl: './museo.component.html',
  styleUrls: ['./museo.component.css']
})
export class MuseoComponent implements OnInit, AfterViewInit {

  @ViewChild('videoRef') videoElement!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    this.ngAfterViewInit(); 
  }
  ngAfterViewInit(): void {
    this.playVideo();
  }

  playVideo(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    
    // Asegura que el video esté silenciado
    video.muted = true;
    
    // Reproduce el video
    video.play().catch(error => {
      console.error('Error al intentar reproducir el video:', error);
    });
  }
}
