import {
  TWEEN
} from 'three/examples/jsm/libs/tween.module.min';

// This object contains the state of the app
export default {
  isDev: false,
  isShowingStats: true,
  isLoaded: false,
  isTweening: false,
  isRotating: true,
  isMouseMoving: false,
  isMouseOver: false,
  maxAnisotropy: 1,
  dpr: 1,
  easing: TWEEN.Easing.Quadratic.InOut,
  duration: 500,
  model: {
    path: './assets/cupBoard/',
    scale: 0.05
  },
  env: {
    path: ''
  },
  texture: {
    path: './assets/configurator_textures/cupboard/',
    imageFiles: ['woodmat_01_albedo.jpg','woodmat_02_albedo.jpg','woodmat_03_albedo.jpg','woodmat_04_albedo.jpeg']
  },
  mesh: {
    enableHelper: false,
    wireframe: false,
    translucent: false,
    material: {
      color: 0xffffff,
      emissive: 0xffffff
    }
  },
  fog: {
    color: 0xffffff,
    near: 0.0008
  },
  camera: {
    fov: 45,
    near: 0.25,
    far: 20000,
    aspect: 1,
    posX: 0,
    posY: 70,
    posZ: 200
  },
  controls: {
    autoRotate: false,
    autoRotateSpeed: -0.5,
    rotateSpeed: 0.5,
    zoomSpeed: 0.8,
    minDistance: 40,
    maxDistance: 200,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enableDamping: true,
    dampingFactor: 0.5,
    enableZoom: true,
    target: {
      x: 0,
      y: 40,
      z: 0
    }
  },
  ambientLight: {
    enabled: false,
    color: 0x141414
  },
  directionalLight: {
    enabled: true,
    color: 0xf0f0f0,
    intensity: 0.4,
    x: -75,
    y: 350,
    z: 120
  },
  shadow: {
    enabled: true,
    helperEnabled: false,
    bias: 0.0001,
    mapWidth: 2048,
    mapHeight: 2048,
    near: 250,
    far: 400,
    top: 100,
    right: 100,
    bottom: -100,
    left: -100
  },
  pointLight: {
    enabled: true,
    color: 0xffffff,
    intensity: 0.1,
    distance: 115,
    x: 0,
    y: 0,
    z: 0
  },
  hemiLight: {
    enabled: true,
    color: 0xffffff,
    groundColor: 0x444444,
    intensity: 0.1,
    x: 0,
    y: 0,
    z: 0
  }
};
