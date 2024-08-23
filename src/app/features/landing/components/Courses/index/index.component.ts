import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private model!: THREE.Object3D;
  private controls!: OrbitControls;
  private mixer!: THREE.AnimationMixer; // Para manejar las animaciones
  private clock = new THREE.Clock(); // Para calcular el tiempo transcurrido

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initThreeJs();
    this.loadModel();
    this.animate();
  }

  private initThreeJs(): void {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.8);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    // Ajuste de la cámara para centrar y acercar el modelo
    this.camera = new THREE.PerspectiveCamera(75, (window.innerWidth * 0.5) / (window.innerHeight * 0.8), 0.1, 1000);
    this.camera.position.set(0, 1, 3); // Acercar la cámara al modelo

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;

    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Luz ambiental suave
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    this.scene.add(directionalLight);
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load('/assets/images/ac.gltf', (gltf) => {
      this.model = gltf.scene;

      // Rotar el modelo para que quede de frente
      this.model.rotation.x = 0;
      this.model.rotation.y = 5.1;  // Rotar 90 grados en el eje Y
      this.model.rotation.z = 0;

      // Escalar y posicionar el modelo
      this.model.scale.set(6, 6, 6); // Ajustar la escala del modelo
      this.model.position.set(0, 0, 0); // Centrar el modelo

      this.scene.add(this.model);

      // Configurar el AnimationMixer para manejar las animaciones
      this.mixer = new THREE.AnimationMixer(this.model);

      gltf.animations.forEach((clip) => {
        this.mixer.clipAction(clip).play();
      });

    }, undefined, (error) => {
      console.error('An error happened while loading the model:', error);
    });
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta(); // Obtener el tiempo transcurrido desde la última llamada
    if (this.mixer) this.mixer.update(delta); // Actualizar las animaciones

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
