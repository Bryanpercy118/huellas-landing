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
  private mixer: THREE.AnimationMixer | undefined;

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

    // Cargar el modelo GLTF con la animación
    const loader = new GLTFLoader();
    loader.load('assets/images/acordeon.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Configurar AnimationMixer y reproducir las animaciones
      this.mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => {
        this.mixer?.clipAction(clip).play();
      });

      animate();
    }, undefined, (error) => {
      console.error('Error al cargar el modelo GLTF:', error);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Actualizar las animaciones
      if (this.mixer) {
        const delta = new THREE.Clock().getDelta();
        this.mixer.update(delta);
      }

      renderer.render(scene, camera);
    };
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
