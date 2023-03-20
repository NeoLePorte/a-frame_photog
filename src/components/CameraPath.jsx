// import React, { useRef, useLayoutEffect } from 'react';
// import { Entity } from 'aframe-react';
// import anime from 'animejs';
// const CameraPath = () => {
//     const curveRef = useRef(null);
//     const cameraRef = useRef(null);
  
//     useLayoutEffect(() => {
//         if (curveRef.current && cameraRef.current) {
//             console.log(curveRef.current    )
//           const path = curveRef.current.components?.path; // add null check with "?"
//           const length = path?.getTotalLength(); // add null check with "?"
//           const cameraPos = { x: 0, y: 0, z: 0 };
//           anime({
//             targets: cameraPos,
//             easing: 'linear',
//             duration: 10000,
//             loop: true,
//             update: () => {
//               if (!path) return; // add null check before using path
//               const point = path.getPointAtLength(cameraPos.x % length);
//               cameraRef.current.setAttribute('position', point);
//               cameraRef.current.setAttribute('rotation', { x: 0, y: cameraPos.x % 360, z: 0 });
//             },
//           });
//         }
//       }, []);
  
//     return (
//       <Entity>
//         <a-curve ref={curveRef}>
//           <a-curve-point position="0 0 0" />
//           <a-curve-point position="0 10 0" />
//           <a-curve-point position="0 20 0" />
//         </a-curve>
//         <Entity camera look-controls ref={cameraRef}>
//           <Entity position="0 0 -1.5" geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03;" material="color: #FFF; shader: flat" />
//         </Entity>
//         <Entity animation={{ attribute: 'fov', from: 75, to: 20, dur: 10000 }} />
//       </Entity>
//     );
//   };
// export default CameraPath;  