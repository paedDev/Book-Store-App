import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import BookModel from "./BookModel.jsx";

const RotatingBook = ({ scale }) => {
  const groupRef = useRef();
  useFrame(() => {
    // Increment y rotation each frame for smooth auto-rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // adjust speed here
    }
  });
  return (
    <group ref={groupRef} rotation={[0.25, Math.PI / 4, 0]}>
      <BookModel scale={scale} />
    </group>
  );
};

export default RotatingBook;
