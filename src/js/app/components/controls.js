import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';

import Config from '../../data/config';

// Controls based on orbit controls
export default class Controls {
  constructor(camera, renderer) {
    // Orbit controls first needs to pass in THREE to constructor  
    this.threeControls = new OrbitControls(camera, renderer.domElement);
    this.init();
  }

  init() {
    this.threeControls.target.set(Config.controls.target.x, Config.controls.target.y, Config.controls.target.z);
    this.threeControls.autoRotate = Config.controls.autoRotate;
    this.threeControls.autoRotateSpeed = Config.controls.autoRotateSpeed;
    this.threeControls.rotateSpeed = Config.controls.rotateSpeed;
    this.threeControls.zoomSpeed = Config.controls.zoomSpeed;
    this.threeControls.minDistance = Config.controls.minDistance;
    this.threeControls.maxDistance = Config.controls.maxDistance;
    this.threeControls.minPolarAngle = Config.controls.minPolarAngle;
    this.threeControls.maxPolarAngle = Config.controls.maxPolarAngle;
    this.threeControls.enableDamping = Config.controls.enableDamping;
    this.threeControls.enableZoom = Config.controls.enableZoom;
    this.threeControls.dampingFactor = Config.controls.dampingFactor;
  }
}