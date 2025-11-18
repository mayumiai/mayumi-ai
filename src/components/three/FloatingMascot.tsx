// src/components/three/FloatingMascot.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Mesh } from "three";

export default function FloatingMascot() {
  const gltf = useLoader(GLTFLoader, "/models/mayumi_model.glb");
  const mascotRef = useRef<Mesh>(null);

  // Floating animation
  useFrame(({ clock }) => {
    if (!mascotRef.current) return;
    const t = clock.getElapsedTime();
    mascotRef.current.position.y = Math.sin(t / 2) * 0.15 + 0.5;
    mascotRef.current.rotation.y = Math.sin(t / 4) * 0.2;
  });

  return (
    <primitive
      ref={mascotRef}
      object={gltf.scene}
      scale={0.7}
      position={[0, 0.5, 0]}
    />
  );
}

