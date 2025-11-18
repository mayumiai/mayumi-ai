// src/components/scroll/ParallaxItem.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxItemProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxItem({
  children,
  speed = 0.4,
  className,
}: ParallaxItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      y: (index, target) => -(target.clientHeight * speed),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
