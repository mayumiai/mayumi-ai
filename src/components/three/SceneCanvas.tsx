// src/components/three/SceneCanvas.tsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import FloatingMascot from "./FloatingMascot";

export default function SceneCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 3], fov: 50 }}
      className="w-full h-[500px] rounded-xl bg-gradient-to-b from-pink-50 via-white to-pink-50"
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <FloatingMascot />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

