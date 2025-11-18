// src/components/layout/Navbar.tsx

import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ROUTES } from "@/app/routes";
import gsap from "gsap";

export default function Navbar() {
  const sakuraRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sakuraRef.current) return;
    gsap.fromTo(
      sakuraRef.current,
      { y: -4, opacity: 0.4 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  const navItems = [
    { label: "Research", to: ROUTES.RESEARCH },
    { label: "Agent Stack", to: ROUTES.AGENT_STACK },
    { label: "Products", to: ROUTES.PRODUCTS },
    { label: "Launchpad", to: ROUTES.LAUNCHPAD },
    { label: "About", to: ROUTES.ABOUT },
  ];

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-pink-200/40">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Mayumi AI"
            className="w-8 h-8 drop-shadow-sm"
          />
          <span className="font-serif text-xl tracking-wide">
            Mayumi AI
          </span>
          <span
            ref={sakuraRef}
            className="text-pink-400 text-lg select-none"
          >
            🌸
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-all ${
                  isActive
                    ? "text-pink-500"
                    : "text-gray-600 hover:text-pink-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

