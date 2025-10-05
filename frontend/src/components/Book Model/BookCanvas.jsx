import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import BookLight from "./BookLight.jsx";
import BookModel from "./BookModel.jsx";
import { useMediaQuery } from "react-responsive";
const BookCanvas = () => {
  const isTablet = useMediaQuery({ query: "max-width:1024" });
  const isMobile = useMediaQuery({ query: "max-width:768" });
  return (
    <Canvas
      camera={{ position: [-6, 3, 16], fov: 65 }}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <OrbitControls
        minDistance={100}
        maxDistance={100}
        // ADDED: Angle limits to prevent awkward views
        minPolarAngle={Math.PI / 6} // 30° from top
        maxPolarAngle={Math.PI / 2.2} // Don't go under model
        target={[0, 0, 0]} // Focus on center
        dampingFactor={0.05} // Smooth movement
        enableDamping={true}
      />

      <BookLight />
      <group rotation={[0, Math.PI, 0]}>
        {" "}
        {/* Adjust this value as needed */}
        <BookModel scale={isMobile ? 3 : 4} />
      </group>
    </Canvas>
  );
};

export default BookCanvas;
