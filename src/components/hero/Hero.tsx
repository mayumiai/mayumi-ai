// src/components/hero/Hero.tsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroText from "./HeroText";
import KawaiiParticles from "./KawaiiParticles";
import { ROUTES } from "@/app/routes";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });

      // Scroll-based subtle fade-in
      gsap.utils.toArray(".fade-in-on-scroll").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power1.out",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 pt-24 bg-gradient-to-b from-pink-50 via-white to-pink-50 overflow-hidden"
    >
      {/* Kawaii particles floating */}
      <KawaiiParticles />

      {/* Hero text */}
      <h1 className="hero-title font-serif text-5xl md:text-6xl text-gray-900 mb-4">
        Mayumi AI
      </h1>
      <p className="hero-subtitle text-lg md:text-xl text-gray-700 mb-8">
        まゆみ人工知能研究所
        <br />
        <span className="text-gray-500 text-sm">Mayumi Artificial Intelligence Lab</span>
      </p>

      {/* Hero action buttons */}
      <div className="hero-buttons flex flex-wrap justify-center gap-4">
        <Link
          to={ROUTES.RESEARCH}
          className="px-6 py-3 rounded-full bg-pink-100 hover:bg-pink-200 text-gray-900 font-medium shadow-sm transition-colors"
        >
          Explore Research 🌸
        </Link>
        <Link
          to={ROUTES.AGENT_STACK}
          className="px-6 py-3 rounded-full bg-white border border-pink-200 text-gray-900 font-medium shadow-sm hover:bg-pink-50 transition-colors"
        >
          Agent Stack
        </Link>
      </div>

      {/* HeroText component for optional animated subtitle */}
      <HeroText />
    </section>
  );
}

