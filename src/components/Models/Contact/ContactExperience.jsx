import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

// import Computer from "./Computer";
import Robo from "./Robo";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 55 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[2, 3, 1]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 1, 0, 0]}
        ></mesh>
      </group>

      <group
        scale={isMobile ? 0.663 : 0.663}
        position={isMobile ? [1, -4.5, 0] : [1, -4.5, 0]}
        castShadow
        rotation={[0, Math.PI / -3, 0]}
      >
        <Robo />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
