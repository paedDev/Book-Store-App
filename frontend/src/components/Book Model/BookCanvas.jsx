import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BookLight from "./BookLight.jsx";
import BookModel from "./BookModel.jsx";
import { useMediaQuery } from "react-responsive";
const BookCanvas = () => {
  const isTablet = useMediaQuery({ query: "max-width:1024" });
  const isMobile = useMediaQuery({ query: "max-width:768" });
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <OrbitControls
        enableRotate={true}
        enableZoom={true}
        enableDamping={false}
        maxDistance={10}
        minDistance={100}
      />
      {/* Light */}
      <BookLight />
      <group>
        <BookModel scale={isMobile ? 1 : 2} />
      </group>
    </Canvas>
  );
};

export default BookCanvas;
