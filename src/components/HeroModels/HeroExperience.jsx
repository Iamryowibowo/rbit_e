import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import { Samurai } from "./SamuraiTitan";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px" });

  // source untuk mencari model 3d kita bisa menggunakan glb models
  return (
    // npx gltfjsx optimize-room.glb (jgn lupa di optimezied dlu glb yang mau di pake)
    //untuk 3d model nya kit bisa download di sketchfab untuk souce
    // untuk membuat 3d model dari 3js kita menggunan canvas
    //jgn lupa instasl npm i react-responsive
    <Canvas camera={{ position: [0, 0, 15], fov: 15 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />

      <Particles count={1000} />

      <group
        scale={isMobile ? 0.95 : 1.5}
        position={isMobile ? [0, -1.15, 0] : [0, -1.6, 0]}
        rotation={[0, Math.PI / -3.75, 0]}
      >
        <Samurai />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
