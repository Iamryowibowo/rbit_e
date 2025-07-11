import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import * as THREE from "three";

const HeroLights = () => {
  const targetRef = useRef();
  useFrame(() => {
    if (targetRef.current && lightRef.current) {
      lightRef.current.target = targetRef.current;
    }
  });

  const lightRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 768px" });

  return (
    <>
      <mesh ref={targetRef} position={[0, 0, 0]} visible={false}>
        <sphereGeometry args={[2, 1, 8]} />
        <meshBasicMaterial color="red" />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, -10]}
        position={isMobile ? [0, -1.18, 0] : [0, -1.5, 0]}
        receiveShadow
      >
        <circleGeometry args={isMobile ? [0.75, 5] : [1.175, 5]} />
        <meshStandardMaterial emissive="white" emissiveIntensity={100} />
      </mesh>

      <spotLight
        ref={lightRef}
        position={[0, 2, 0]} // dari atas tengah
        intensity={100}
        angle={2.5}
        penumbra={1}
        color="white"
        castShadow
      />
      <primitive
        object={new THREE.RectAreaLight("white", 8)}
        position={[0, 2, 0]}
        intensity={25}
        rotation={[-Math.PI / 4, Math.PI / 15, 0]}
      />
    </>
  );
};

export default HeroLights;
