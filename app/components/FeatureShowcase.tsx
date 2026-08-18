"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ShowcaseSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  color: string;
  accentGlow: string;
}

const slides: ShowcaseSlide[] = [
  {
    id: "gps-tracking",
    badge: "📍 Background GPS",
    title: "Automated GPS Trip Tracker",
    subtitle: "Zero-effort drive recording",
    description:
      "AutoLog automatically senses when you start driving and logs your start/end destinations, exact distance, route map, and duration with zero manual intervention required.",
    highlights: [
      "Auto start & stop detection",
    ],
    image: "/gps-trips.webp",
    alt: "AutoLog GPS Trip Tracking Interface",
    color: "from-sky-500 to-cyan-400",
    accentGlow: "rgba(56, 189, 248, 0.25)",
  },
  {
    id: "fuel-logs",
    badge: "⛽ Expense Manager",
    title: "Fuel & Expense Analytics",
    subtitle: "Track cost per mile in real-time",
    description:
      "Record every fuel fill-up, oil change, and maintenance cost. AutoLog calculates your precise fuel efficiency (MPG or L/100km) and monthly operating cost per kilometer.",
    highlights: [
      "Cost-per-mile & fuel efficiency graphs",
      "Gas station location tracking",
      "Support for all fuel types & electric EV",
    ],
    image: "/dashboard-2.webp",
    alt: "AutoLog Fuel Recording Interface",
    color: "from-cyan-400 to-emerald-400",
    accentGlow: "rgba(34, 211, 238, 0.25)",
  },
  {
    id: "ai-scanner",
    badge: "✨ AI Receipt OCR",
    title: "Instant AI Receipt Reader",
    subtitle: "Turn paper receipts into organized data",
    description:
      "Snap a quick picture of your paper gas receipt or pump screen. Our smart vision AI extracts total price, volume, fuel grade, date, and auto-matches it to your vehicle.",
    highlights: [
      "99.8% extraction accuracy",
      "Extracts pump screen & paper invoices",
      "Instant duplicate & error detection",
    ],
    image: "/receipt-1.webp",
    alt: "AutoLog AI Receipt Scanning Interface",
    color: "from-purple-400 to-sky-400",
    accentGlow: "rgba(168, 85, 247, 0.25)",
  },
  {
    id: "garage-fleet",
    badge: "🚗 Multi-Vehicle Garage",
    title: "Manage Up to 5 Vehicles",
    subtitle: "Fleet & personal garage manager",
    description:
      "Switch effortlessly between daily commuters, work trucks, and family cars. Keep separate odometer logs, service histories, and fuel profiles for every vehicle.",
    highlights: [
      "1-tap vehicle profile switcher",
      "Independent odometer & service tracking",
      "Free 1 vehicle • Pro up to 5 vehicles",
    ],
    image: "/garage.webp",
    alt: "AutoLog Garage Management Interface",
    color: "from-amber-400 to-sky-400",
    accentGlow: "rgba(251, 191, 36, 0.25)",
  },
  {
    id: "live-cockpit",
    badge: "📊 Command Center",
    title: "Live Drive Cockpit & Alerts",
    subtitle: "Real-time driving stats at a glance",
    description:
      "Stay informed with a dynamic dashboard highlighting active trip stats, monthly budget utilization, upcoming maintenance notifications, and quick-action shortcuts.",
    highlights: [
      "Live trip speed & odometer HUD",
      "Proactive service reminder banners",
      "Clean, distraction-free dark UI",
    ],
    image: "/live-drive.webp",
    alt: "AutoLog Live Dashboard Interface",
    color: "from-sky-400 to-blue-500",
    accentGlow: "rgba(56, 189, 248, 0.25)",
  },
  {
    id: "activity-reports",
    badge: "📑 PDF & CSV Exports",
    title: "Activity Logs & Reports",
    subtitle: "One-click expense documentation",
    description:
      "Filter your drive log history by date or vehicle and export official PDF vehicle reports or CSV spreadsheets ready for tax deductions and reimbursement.",
    highlights: [
      "Chronological trip & expense timeline",
      "Filter by business vs. personal category",
      "Export PDF summary & raw CSV data",
    ],
    image: "/export-reports.webp",
    alt: "AutoLog Activity Timeline Interface",
    color: "from-teal-400 to-cyan-500",
    accentGlow: "rgba(45, 212, 191, 0.25)",
  },
];

export default function FeatureShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeSlide = slides[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance carousel every 6s unless paused by user interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, handleNext]);

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background ambient light blur */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/10 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold text-sky-400 font-heading">
            📱 Interactive App Experience
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl font-heading">
            Inside the <span className="gradient-text">AutoLog Mobile App</span>
          </h2>
          <p className="text-base text-slate-300 sm:text-lg">
            Explore how AutoLog simplifies mileage tracking, fuel logging, and garage maintenance with an intuitive dark-themed mobile interface.
          </p>
        </div>

        {/* Feature Category Tabs */}
        <div
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 shrink-0 font-heading ${isActive
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-lg shadow-sky-500/10 scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-white/10 hover:bg-slate-800 hover:text-slate-200"
                  }`}
              >
                <span>{slide.badge.split(" ")[0]}</span>
                <span>{slide.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Screenshot Carousel Showcase */}
        <div
          className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-2xl md:p-10"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Dynamic Background Glow matching active slide */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] transition-all duration-700 -z-10"
            style={{ backgroundColor: activeSlide.accentGlow }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Feature Description Card */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-sky-300">
                {activeSlide.badge}
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                  {activeSlide.title}
                </h3>
                <p className="text-sky-400 font-semibold text-sm mt-1 font-heading">
                  {activeSlide.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeSlide.description}
              </p>

              {/* Key Highlight Bullets */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                {activeSlide.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs shrink-0">
                      ✓
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next screenshot"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95"
                  >
                    →
                  </button>
                  <span className="text-xs text-slate-400 ml-2 font-mono">
                    0{currentIndex + 1} / 0{slides.length}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                        ? "w-8 bg-sky-400"
                        : "w-2 bg-slate-700 hover:bg-slate-500"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Smartphone Mockup Frame holding Active Screenshot */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                {/* Phone Glass Shadow & Frame */}
                <div className="relative rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-sky-950/50 ring-1 ring-white/10">
                  {/* Speaker / Pill notch mockup */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-24 rounded-full bg-slate-900 border border-slate-800/80 z-20 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-950 mr-2" />
                    <div className="h-1 w-8 rounded-full bg-slate-800" />
                  </div>

                  {/* Image Display */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 aspect-[9/18]">
                    <Image
                      key={activeSlide.id}
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      width={360}
                      height={720}
                      className="w-full h-full object-contain transition-opacity duration-300 rounded-[2rem]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

