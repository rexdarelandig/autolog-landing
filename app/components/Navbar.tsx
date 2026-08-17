"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onIosClick: () => void;
}

export default function Navbar({ onIosClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950 font-bold text-xl shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              AutoLog <span className="rounded-full bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 text-[10px] font-semibold text-sky-400 uppercase tracking-widest">Pro AI</span>
            </span>
            <span className="text-xs text-slate-400">Vehicle & Gas Tracker</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="transition hover:text-sky-400">
            Features
          </a>
          <a href="#ai-scanner" className="transition hover:text-sky-400 flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            AI Scanner
          </a>
          <a href="#pricing" className="transition hover:text-sky-400">
            Pricing
          </a>
          <a href="#calculator" className="transition hover:text-sky-400">
            Gas Calculator
          </a>
          <a href="#faq" className="transition hover:text-sky-400">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onIosClick}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            iOS App Store
          </button>

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/20 transition hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Google Play
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg p-2 text-slate-400 hover:bg-white/10 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0e1522] px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-400"
            >
              Features
            </a>
            <a
              href="#ai-scanner"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-400 flex items-center justify-between"
            >
              <span>AI Receipt Scanner</span>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-xs text-sky-400">PRO</span>
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-400"
            >
              Pricing Tiers
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-400"
            >
              Fuel Savings Calculator
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-400"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-4 flex flex-col gap-2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 py-3 text-sm font-semibold text-slate-950"
            >
              Download on Google Play
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onIosClick();
              }}
              className="w-full text-center rounded-full border border-white/15 bg-white/5 py-3 text-sm font-semibold text-slate-300"
            >
              iOS (App Store) - Coming Soon
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
