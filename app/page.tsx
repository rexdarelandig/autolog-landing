"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import Pricing from "./components/Pricing";
import Calculator from "./components/Calculator";
import FAQ from "./components/FAQ";
import IosModal from "./components/IosModal";
import Link from "next/link";

export default function Home() {
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-sky-500/30 selection:text-sky-300">
      {/* Top Navbar */}
      <Navbar onIosClick={() => setIsIosModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onIosClick={() => setIsIosModalOpen(true)} />
        <FeatureShowcase />
        <Pricing onIosClick={() => setIsIosModalOpen(true)} />
        <FAQ />

        {/* Call To Action Footer Banner */}
        <section className="py-20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-sky-950/30 via-slate-900 to-[#0b0f17]" />
          <div className="mx-auto max-w-5xl px-4 text-center space-y-6 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold text-sky-400">
              ⚡ Available Now on Android • iOS Launching Soon
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Start Tracking Your Trips & Gas Spend Today
            </h2>
            <p className="max-w-2xl mx-auto text-base text-slate-300 sm:text-lg">
              Join thousands of smart drivers who never manually log mileage or lose a gas receipt again.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-sky-500/25 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Download on Google Play Store
              </a>

              <button
                onClick={() => setIsIosModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                iOS App Store (Coming Soon)
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-12 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge-icon lucide-gauge text-slate-950"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
            </div>
            <span className="font-bold text-white text-base">AutoLog</span>
            <span>© {new Date().getFullYear()} AutoLog Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/delete-account" className="hover:text-sky-400 transition-colors">
              Delete Account
            </Link>
            <a href="mailto:support@autolog.app" className="hover:text-sky-400 transition-colors">
              Support & Contact
            </a>
          </div>
        </div>
      </footer>

      {/* iOS Modal */}
      <IosModal isOpen={isIosModalOpen} onClose={() => setIsIosModalOpen(false)} />
    </div>
  );
}
