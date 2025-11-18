// src/components/hero/HeroText.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroText() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <p
      ref={textRef}
      className="mt-4 text-pink-400 text-lg md:text-xl fade-in-on-scroll"
    >
      Frontier Intelligence Lab | Scalable Agent Systems | Autonomous Reasoning
    </p>
  );
}

