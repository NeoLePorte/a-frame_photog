import React, { useRef, useLayoutEffect } from 'react';
import { Entity, Scene } from 'aframe-react';
import anime from 'animejs';

const Sphere = ({ color, position, id }) => {
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
      <Entity position={position} id={id}>
        <Entity
          geometry={{ primitive: 'sphere', radius: 0.5 }}
          material={{ color, roughness: 0 }}
        />
        <Entity
          light={{ type: 'point', color: color, intensity: 3 }}
          primitive='a-point-light'
          position='0 0 0'
        />
      </Entity>
    );
  };

const TreeOfLife = () => {
  const positions = [
    // Kether
    { x: 0, y: 15, z: 0 },
    // Chokmah
    { x: 3, y: 12, z: 0 },
    // Binah
    { x: -3, y: 12, z: 0 },
    // Chesed
    { x: 6, y: 9, z: 0 },
    // Geburah
    { x: -6, y: 9, z: 0 },
    // Tiphareth
    { x: 0, y: 6, z: 0 },
    // Netzach
    { x: 3, y: 3, z: 0 },
    // Hod
    { x: -3, y: 3, z: 0 },
    // Yesod
    { x: 0, y: 0, z: 0 },
    // Malkuth
    { x: 0, y: -6, z: 0 },
  ];

  return positions.map((pos, i) => (
    <Sphere key={i} color={`hsl(${Math.random() * 360}, 100%, 50%)`} position={pos} id={`sphere-${i}`} />
  ));
};

export default function HomeScene() {
  useLayoutEffect(() => {
    const spheres = document.querySelectorAll('a-sphere');

    for (let i = 0; i < spheres.length; i++) {
      const sphere = spheres[i];
      const path = document.querySelector(`#sphere-${i} path`);
      const length = path.getTotalLength();
      anime({
        targets: sphere.object3D.position,
        easing: 'linear',
        loop: true,
        duration: 2000,
        translateX: [0, length],
        translateY: [0, 0],
        translateZ: [0, 0],
        offset: i * 100,
      });
    }
  }, []);

  return (
    <Scene userInteractionEnabled={false}>
        <Entity
          light={{ type: 'point', color: 'white', intensity: 3 }}
          primitive='a-point-light'
          position='0 0 0'
        />
      <TreeOfLife />
    </Scene>
  );
}
