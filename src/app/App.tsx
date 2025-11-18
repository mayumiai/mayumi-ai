// src/app/App.tsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";

/**
 * Lazy pages for smaller initial bundle
 * Files exist at src/pages/*.tsx
 */
const Home = lazy(() => import("@/pages/Home"));
const Research = lazy(() => import("@/pages/Research"));
const AgentStack = lazy(() => import("@/pages/AgentStack"));
const Products = lazy(() => import("@/pages/Products"));
const Launchpad = lazy(() => import("@/pages/Launchpad"));
const About = lazy(() => import("@/pages/About"));
const Terms = lazy(() => import("@/pages/Legal/Terms"));
const Privacy = lazy(() => import("@/pages/Legal/Privacy"));
const Licensing = lazy(() => import("@/pages/Legal/Licensing"));

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,#fff6fb,white)] text-slate-900 selection:bg-kawaiiPink selection:text-white">
      <Navbar />

      <main className="flex-1">
        <PageWrapper>
          <Suspense fallback={<div className="container py-20 text-center">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/agentstack" element={<AgentStack />} />
              <Route path="/products" element={<Products />} />
              <Route path="/launchpad" element={<Launchpad />} />
              <Route path="/about" element={<About />} />

              {/* Legal */}
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/licensing" element={<Licensing />} />

              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </PageWrapper>
      </main>

      <Footer />
    </div>
  );
}

