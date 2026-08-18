"use client";

import Image from "next/image";

interface HeroProps {
  onIosClick: () => void;
}

export default function Hero({ onIosClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Neon Blobs & Grids */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-[#0b0f17] to-[#0b0f17]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/15 to-cyan-500/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-400 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Next-Gen Mileage & Expense Manager</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight gradient-text sm:text-6xl lg:text-6xl leading-[1.1]">
              Log Every Mile & Vehicle Expenses
            </h1>

            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl font-normal leading-relaxed mx-auto lg:mx-0">
              AutoLog uses background GPS and AI scan technology to automatically capture your trips, parse fuel receipts, parse gas pump display, track vehicle expenses, and send timely service alerts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Google Play Store Link */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-sky-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <div className="text-left leading-none">
                  <div className="text-[10px] uppercase font-semibold text-slate-900 tracking-wider">Get it on</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </a>

              {/* iOS Button with Coming Soon Trigger */}
              <button
                onClick={onIosClick}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto"
              >
                <div className="text-left leading-none">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-semibold text-sky-400 tracking-wider">Coming Soon</span>
                  </div>
                  <div className="text-base font-bold text-slate-200">iOS App Store</div>
                </div>
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-2xl font-bold text-sky-400">99.8%</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">AI Scan Accuracy</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">5 Cars</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">PRO Multi-Vehicle</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Auto GPS</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Zero Manual Entry</p>
              </div>
            </div>
          </div>

          {/* Right Column: App Graphic & Interactive Preview */}
          <div className="lg:col-span-5 relative items-center justify-center">
            {/* Glow backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform rotate-6 scale-95" />

            {/* Frame Container */}
            <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/15 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.01]">
              {/* Dynamic status bar preview */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#0b0f17] border border-white/10 aspect-[9/18]">
                <Image
                  src="/autolog-mockup.webp"
                  alt="AutoLog Mobile App Interface"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover rounded-[2rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
