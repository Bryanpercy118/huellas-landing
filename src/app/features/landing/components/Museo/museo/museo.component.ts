import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-museo',
  templateUrl: './museo.component.html',
  styleUrls: ['./museo.component.css']
})
export class MuseoComponent implements OnInit, AfterViewInit {

  @ViewChild('videoRef') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.ngAfterViewInit(); 
    this.initThreeJS();
  }

  ngAfterViewInit(): void {
    this.playVideo();
  }

  initThreeJS(): void {
    const container = this.elRef.nativeElement.querySelector('#rendererContainer');
    
    // Crear la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Cargar el modelo GLTF
    const loader = new GLTFLoader();
    loader.load('assets/images/acordeon.gltf', (gltf) => {
      scene.add(gltf.scene);
      animate();
    }, undefined, (error) => {
      console.error(error);
    });

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
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
