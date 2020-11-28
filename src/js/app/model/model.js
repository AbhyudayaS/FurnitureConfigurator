import * as THREE from 'three';
import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
  DRACOLoader
} from 'three/examples/jsm/loaders/DRACOLoader';

import Config from '../../data/config';

export default class Model {
  constructor(scene, manager) {
    this.scene = scene;
    // this.textures = textures;

    // Manager is passed in to loader to determine when loading done in main
    // this.loader = new THREE.ObjectLoader(manager);
    this.loader = new GLTFLoader(manager).setPath(Config.model.path);
    this.dracoloader = new DRACOLoader();
    this.cupboard = null;
    this.mixer = null;
    this.action = null;
    this.animationDuration = null;
  }

  setCupboard(cupboard) {
    this.cupboard = cupboard;
  }

  setAnimation(gltf) {
    this.mixer = new THREE.AnimationMixer(gltf.scene.children[0]);
    this.animationDuration = gltf.animations[0].duration;
    this.action = this.mixer.clipAction(gltf.animations[0]);
    this.action.setLoop(THREE.LoopOnce);
    this.action.clampWhenFinished = true;
    this.action.enable = true;
    this.mixer.addEventListener('finished', function (e) {
      e.action.stop();
    });
  }

  playAnimation() {
    this.action.play();
  }

  playAnimationForward() {
    this.action.timeScale = 1;
  }

  playAnimationReverse() {
    this.action.timeScale = -1;
  }

  load(scene, model) {
    this.dracoloader.setDecoderPath('./assets/decoder/draco/');     
    this.loader.setDRACOLoader(this.dracoloader);
    this.loader.load('scene.gltf', function (gltf) {
      const cupboard = gltf.scene.children[0];

      cupboard.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }

      });

      model.setCupboard(cupboard);
      model.setAnimation(gltf);

      gltf.scene.scale.multiplyScalar(Config.model.scale);
      scene.add(gltf.scene);
    });
  }

  changeMaterial(texture) {
    // const seatTexture = new THREE.TextureLoader().load(path);
    // seatTexture.wrapS = THREE.RepeatWrapping;
    // seatTexture.wrapT = THREE.RepeatWrapping;
    // seatTexture.repeat.set(1, 1); 
    if(this.cupboard.getObjectByName("VIFS241").children[0].children[1].name === "VIFS241_Skaf_0"){
      this.cupboard.getObjectByName("VIFS241").children[0].children[1].material.map = texture;
    }else{
      this.cupboard.getObjectByName("VIFS241").children[0].children[0].material.map = texture;
    }    
    this.cupboard.getObjectByName("Object014_Skaf_0").material.map = texture;
  }
}
