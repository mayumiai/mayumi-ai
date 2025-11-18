// src/components/scroll/ScrollSection.tsx

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide" | "scale";
}

export default function ScrollSection({
  children,
  className,
  animation = "fade",
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let fromVars = {};
    let toVars = {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    };

    if (animation === "fade") {
      fromVars = { opacity: 0 };
      toVars = { ...toVars, opacity: 1 };
    }

    if (animation === "slide") {
      fromVars = { opacity: 0, y: 100 };
      toVars = { ...toVars, opacity: 1, y: 0 };
    }

    if (animation === "scale") {
      fromVars = { opacity: 0, scale: 0.8 };
      toVars = { ...toVars, opacity: 1, scale: 1 };
    }

    gsap.fromTo(el, fromVars, toVars);
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
