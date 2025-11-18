// src/components/hero/KawaiiParticles.tsx
import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function KawaiiParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "w-2 h-2 rounded-full bg-pink-300 absolute opacity-80";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      containerRef.current?.appendChild(particle);

      anime({
        targets: particle,
        translateY: [-5, 20 + Math.random() * 20],
        translateX: [-10 + Math.random() * 20, 0],
        opacity: [0.2, 0.8, 0],
        scale: [0.5, 1.2, 0.5],
        duration: 4000 + Math.random() * 2000,
        easing: "easeInOutSine",
        complete: () => {
          particle.remove();
          createParticle(); // loop
        },
      });
    };

    for (let i = 0; i < 10; i++) createParticle();
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}

