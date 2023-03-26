import React, { useRef, useLayoutEffect, useContext, useEffect } from 'react';
import { Entity, Scene } from 'aframe-react';
import anime from 'animejs';
import video from '../videos/eyes.webm';
import SkyImage from "../images/Sky.jpg";
import gif from "../gifs/glitch.gif";
import { VideoContext } from './VideoProvider';

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
  const { isPlaying } = useContext(VideoContext);
  const videoRef = useRef();
  useEffect(() => {
    console.log("isPlaying", isPlaying)
    console.log("videoRef", videoRef)
    console.log("videocontext", VideoContext)
    if (videoRef.current !== null) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  

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
      <Entity primitive='a-assets' timeout="20000">
          <video id="cube" preload="auto" autoPlay={true} loop={true} src={video} ref={videoRef}></video>
          <img id="gif" src={gif} alt="gif" />
          <img id="sky" src={SkyImage} alt='sky'></img>
        </Entity>
      <Entity primitive='a-camera' position="0 40 -0" rotation="90 0 0" ref={cameraRef}
        wasd-controls={{ enabled: false }}
        look-controls={{ enabled: false }} />
      <Entity>
        <Entity primitive='a-video' position="0 50 0" rotation="90 0 0" src={'#cube'} >
        </Entity>
        <Entity primitive='a-light' type="point" intensity='10' color="#adff48" position="0.9683026062919912 10 -0.176770114444802"/>
        <Entity primitive='a-light' type="ambient" intensity='10' color="#a8ff50" position="0.9683026062919912 0 -0.176770114444802"/>
          <a-sky color="#ff00d0" src="#sky"></a-sky>
        <FibonacciSpiral n={3000} />
      </Entity>
    </Scene>
  );
}
