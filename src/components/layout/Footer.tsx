// src/components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full mt-32 border-t border-pink-200/40 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Branding */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Mayumi AI"
            className="w-8 h-8 opacity-90"
          />
          <span className="font-serif text-lg tracking-wide">
            Mayumi AI
          </span>
          <span className="text-pink-400 text-lg">🌸</span>
        </div>

        {/* Footer Nav */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="/legal/terms" className="hover:text-pink-400 transition-colors">
            Terms
          </a>
          <a href="/legal/privacy" className="hover:text-pink-400 transition-colors">
            Privacy
          </a>
          <a href="/legal/licensing" className="hover:text-pink-400 transition-colors">
            Licensing
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © Mayumi AI, 2025  
        </div>
      </div>
    </footer>
  );
}

