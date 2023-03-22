import React, { useRef, useLayoutEffect } from 'react';
import { Entity, Scene } from 'aframe-react';
import anime from 'animejs';

const Sphere = ({ color, position, rotation, id }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      anime({
        targets: ref.current.el.object3D.position,
        x: position.x,
        y: position.y,
        z: position.z,
        duration: 2000,
        easing: 'linear',
        loop: true,
      });
    }
  }, [position.x, position.y, position.z]);

  return (
    <Entity
      geometry={{ primitive: 'sphere', radius: 0.5 }}
      material={{ color, metalness: 1, roughness: 0 }}
      position={position}
      rotation={rotation}
      ref={ref}
      id={id}
    />
  );
};

const FibonacciSpiral = ({ n }) => {
  const phi = (1 + Math.sqrt(5)) / 2;
  const r = 0.5;
  const spirals = [];

  for (let i = 0; i < n; i++) {
    const theta = 2 * Math.PI * i / phi;
    const radius = r * Math.sqrt(i);
    const x = radius * Math.cos(theta);
    const y = i * 0.2;
    const z = radius * Math.sin(theta);
    spirals.push({ x, y, z });
  }

  return spirals.map((pos, i) => (
    <Sphere key={i} color={`hsl(${Math.random() * 360}, 100%, 50%)`} position={pos} rotation={{ x: 90, y: i * 10, z: 90 }} id={`sphere-${i}`} />
  ));
};

export default function HomeScene() {
  const cameraRef = useRef(null);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      anime({
        targets: cameraRef.current.el.object3D.position,
        y: 39,
        duration: 14990,
        easing: 'easeInElastic(5, 2)',
        loop: true
      });
    }

    const spheres = document.querySelectorAll('a-sphere');

    for (let i = 0; i < spheres.length; i++) {
      const sphere = spheres[i];
      const path = document.querySelector(`#sphere-${i} path`);
      const length = path.getTotalLength();
      anime({
        targets: sphere.object3D.position,
        easing: 'spring(1, 80, 10, 0)',
        loop: true,
        duration: 5000,
        translateX: [0, length],
        translateY: [0, 0],
        translateZ: [0, 0],
        offset: i * 100,
      });
    }
  }, []);

  return (
    <Scene>
      <Entity primitive='a-assets'>
          <video id="cube" autoPlay loop={true} src="../public/cube.mp4"></video>
        </Entity>
      <Entity primitive='a-camera' position="0 40 -0" rotation="90 0 0" ref={cameraRef}
        wasd-controls={{ enabled: false }}
        look-controls={{ enabled: false }} />
      <Entity>
        <Entity primitive='a-video' src="#cube" position="0 50 0" rotation="90 0 0"/>
        <Entity primitive='a-light' type="point" intensity='10' color="#445451" position="0.9683026062919912 50 -0.176770114444802"/>
        <Entity primitive='a-light' type="ambient" intensity='10' color="#445451" position="0.9683026062919912 0 -0.176770114444802"/>
          <a-sky color="#a5ff44"></a-sky>
          
          
          {/* <Entity primitive='a-plane' position="0 -1 0" rotation="-90 0 0" width="100" height="100" color="#ff00a6" /> */}
        <FibonacciSpiral n={3000} />
      </Entity>
    </Scene>
  );
}
