import * as THREE from 'three';
import { Shader } from './gif-shader';
import AFRAME from 'aframe';

const GifMaterial = AFRAME.registerComponent('gif-material', {
  schema: {
    src: { type: 'string' }
  },

  init: function() {
    var el = this.el;
    var data = this.data;
    var material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        gifTexture: { value: new THREE.TextureLoader().load(data.src) }
      },
      vertexShader: Shader.vertexShader,
      fragmentShader: Shader.fragmentShader
    });

    el.setObject3D('mesh', new THREE.Mesh(new THREE.BoxBufferGeometry(), material));
  },

  tick: function(time, timeDelta) {
    this.el.getObject3D('mesh').material.uniforms.time.value = time / 1000;
    console.log(time);
  }
});

export { GifMaterial };
