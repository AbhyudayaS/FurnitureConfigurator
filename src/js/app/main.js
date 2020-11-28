import * as THREE from 'three';

import Renderer from './components/renderer';
import Camera from './components/camera';
import Model from './model/model';
import Controls from './components/controls';
import Light from './components/light';
import Texture from './model/texture';
import Config from '../data/config';
import UIHelper from './helpers/uiHelper';


export default class Main {
  constructor(container) {
    this.container = container;
   
    // Start Three clock
    this.clock = new THREE.Clock();

    // Main scene creation
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFFFFFF);
    this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

    // Main renderer constructor
    this.renderer = new Renderer(this.scene, container);
    // Components instantiations
    this.camera = new Camera(this.renderer.threeRenderer);

    this.light = new Light(this.scene);
    // Create and place lights in scene
    const lights = ['ambient', 'directional', 'point', 'hemi'];
    lights.forEach((light) => this.light.place(light));

    this.controls = new Controls(this.camera.threeCamera, this.renderer.threeRenderer);

    this.manager = new THREE.LoadingManager();
    this.modelManager = new THREE.LoadingManager();

    this.mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(130, 130), new THREE.MeshPhongMaterial({
      color: new THREE.Color(10, 10, 10),
      depthWrite: false,

      shininess: 10,
      specular: 0xffffff
    }));
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.receiveShadow = true;

    this.scene.add(this.mesh);

    // this.grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
    // this.grid.material.opacity = 0.2;
    // this.grid.material.transparent = true;
    // this.scene.add( this.grid );

    this.texture = new Texture();
    this.texture.load(this.manager).then(() => {
      this.manager.onProgress = (item, loaded, total) => {
        console.log(`${item}: ${loaded} ${total}`);
      };

      this.manager.onLoad = () => {
        console.log(`Loaded`);
      };
    });

    this.model = new Model(this.scene, this.modelManager);
    this.model.load(this.scene, this.model);

    this.modelManager.onLoad = () => {
      document.getElementById('loader').style.display = 'none';
    };

    // Play Cupboard Animation
    // Pause the animation when the length is half *checked in updateAnimation*
    // set timeScale to reverse the animation 
    this.reverse = false;
    document.getElementById('togBtn').addEventListener('change', () => {
      if (document.getElementById('togBtn').checked) {
        this.reverse = false;
        this.model.playAnimationForward();
        this.model.playAnimation();
      } else {
        this.reverse = true;
        this.model.playAnimationReverse();
        this.model.playAnimation();
      }
    });

    document.getElementById('texture1').addEventListener('click', () => {
      // this.model.changeMaterial(Config.texture.path + Config.texture.imageFiles[0]);
      this.model.changeMaterial(this.texture.textures[Config.texture.imageFiles[3]]);
      UIHelper.showBorderOnSelectionExtColor(0);
    });
    document.getElementById('texture2').addEventListener('click', () => {
      // this.model.changeMaterial(Config.texture.path + Config.texture.imageFiles[1]);
      this.model.changeMaterial(this.texture.textures[Config.texture.imageFiles[0]]);
      UIHelper.showBorderOnSelectionExtColor(1);
    });
    document.getElementById('texture3').addEventListener('click', () => {
      // this.model.changeMaterial(Config.texture.path + Config.texture.imageFiles[2]);
      this.model.changeMaterial(this.texture.textures[Config.texture.imageFiles[1]]);
      UIHelper.showBorderOnSelectionExtColor(2);
    });
    document.getElementById('texture4').addEventListener('click', () => {
      // this.model.changeMaterial(Config.texture.path + Config.texture.imageFiles[2]);
      this.model.changeMaterial(this.texture.textures[Config.texture.imageFiles[2]]);
      UIHelper.showBorderOnSelectionExtColor(3);
    });

    this.render();
  }

  render() {
    // Call render function and pass in created scene and camera
    this.renderer.render(this.scene, this.camera.threeCamera);
    this.controls.threeControls.update();
    this.updateAnimation();
    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
  }

  updateAnimation() {
    const delta = this.clock.getDelta();
    if (this.model) {
      if (!this.reverse) {
        if (this.model.mixer && this.model.action.time < this.model.animationDuration / 2) {
          this.model.mixer.update(delta);
        }
      } else {
        this.model.mixer.update(delta);
      }
    }
  }
}
