


import React from 'react';
import { Entity, Scene } from 'aframe-react';





const MetatronsCube = () => {
  const cubePositions = [
    { x: 0, y: 0, z: 0 },
    { x: 1, y: 1, z: 1 },
    { x: -1, y: -1, z: -1 },
    { x: 1, y: -1, z: -1 },
    { x: -1, y: 1, z: 1 },
    { x: 1, y: 1, z: -1 },
    { x: -1, y: -1, z: 1 },
    { x: -1, y: 1, z: -1 },
    { x: 1, y: -1, z: 1 },
  ];

  return (
    <Scene>
      {cubePositions.map((pos, i) => (
        <Entity
          key={i}
          geometry={{ primitive: 'box', width: 2, height: 2, depth: 2 }}
          position={pos}
          material={{ color: `hsl(${Math.random() * 360}, 100%, 50%)` }}
        />
      ))}
    </Scene>
  );
};





export default MetatronsCube;