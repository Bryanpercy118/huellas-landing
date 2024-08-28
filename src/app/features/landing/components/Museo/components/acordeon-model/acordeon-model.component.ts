import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-acordeon-model',
  templateUrl: './acordeon-model.component.html',
  styleUrls: ['./acordeon-model.component.css']
})
export class AcordeonModelComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    const container = this.elRef.nativeElement.querySelector('#rendererContainer');

    // Crear la escena
    const scene = new THREE.Scene();
    // No establecer color de fondo, para mantener la transparencia

    // Configurar la cámara
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 1, 3); // Ajustar la posición de la cámara

    // Configurar el renderizador con fondo transparente
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Configurar para que el fondo sea completamente transparente
    container.appendChild(renderer.domElement);

    // Añadir luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Luz ambiental suave
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Añadir controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Cargar el modelo GLTF
    const loader = new GLTFLoader();
    loader.load('assets/images/acordeon.gltf', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);  // Ajustar posición si es necesario
      model.scale.set(6, 6, 6);    // Ajustar la escala del modelo

      scene.add(model);

      // Animar el modelo
      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;  // Rotación continua
        controls.update();  // Actualizar los controles
        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      console.error('Error al cargar el modelo 3D:', error);
    });
  }
}
