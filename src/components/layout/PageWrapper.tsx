// src/components/layout/PageWrapper.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * PageWrapper
 * - Ensures pages sit below the fixed navbar
 * - Adds a subtle entrance animation (fade + up) using GSAP
 *
 * Usage:
 * <PageWrapper className="pt-24"> ...page content... </PageWrapper>
 */

type Props = {
  children: React.ReactNode;
  className?: string;
};

const NAVBAR_APPROX_HEIGHT = 72; // pixels — adjust if your navbar height changes

export default function PageWrapper({ children, className = "" }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // set CSS variable for dynamic top offset (useful in CSS if needed)
    el.style.setProperty("--mayumi-navbar-offset", `${NAVBAR_APPROX_HEIGHT}px`);

    // Lightweight entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`min-h-[calc(100vh-72px)] pt-[72px] pb-16 px-6 md:px-10 ${className}`}
      style={{
        // safe fallback for older browsers; the CSS variable is set in useEffect
        paddingTop: `${NAVBAR_APPROX_HEIGHT}px`,
      }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
