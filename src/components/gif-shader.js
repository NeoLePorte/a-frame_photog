export const Shader = {

    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  
    fragmentShader: `
      uniform float time;
      uniform sampler2D gifTexture;
  
      varying vec2 vUv;
  
      void main() {
        vec4 tex = texture2D(gifTexture, vUv);
        gl_FragColor = tex;
      }
    `
  };  