"use client";

import { useState } from "react";

interface PricingProps {
  onIosClick: () => void;
}

export default function Pricing({ onIosClick }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 relative">
      {/* Glow highlight behind pricing */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-heading">
            Simple & Transparent Plans
          </h2>
          <p className="text-3xl font-extrabold text-white sm:text-5xl font-heading">
            Choose the right tier for your vehicle
          </p>
          <p className="text-base text-slate-300">
            Start for free with 1 vehicle or upgrade to PRO to unlock 5 vehicles, AI scanning, and unlimited data export.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative h-8 w-16 rounded-full bg-slate-800 p-1 border border-white/10 transition-colors"
            >
              <div
                className={`h-6 w-6 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 shadow-md transform transition-transform ${
                  billingCycle === "annual" ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${billingCycle === "annual" ? "text-white" : "text-slate-400"}`}>
              Annual
              <span className="rounded-full bg-sky-500/20 border border-sky-500/40 px-2 py-0.5 text-[10px] font-bold text-sky-400 font-heading">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Free Tier Card */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border-white/10 hover:border-white/20 transition-all">
            <div className="space-y-6">
              <div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-700">
                  Starter Tier
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 font-heading">Free Tier</h3>
                <p className="text-xs text-slate-400 mt-1">Essential GPS tracking for single car owners.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white font-heading">$0</span>
                <span className="text-sm text-slate-400">/ forever</span>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">Included Features:</p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span><strong className="text-white font-heading">1 Vehicle</strong> profile</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>GPS Automatic Trip Logging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>Basic Expense & Fuel Entry</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>Standard Maintenance Reminders</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-500">
                    <span>✕</span>
                    <span className="line-through">AI Gas Receipt & Pump Scanner</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-500">
                    <span>✕</span>
                    <span className="line-through">PDF/CSV Export Reports</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-heading"
              >
                Download Free App
              </a>
            </div>
          </div>

          {/* PRO Tier Card */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border-sky-500/50 bg-gradient-to-b from-sky-950/20 via-slate-900/80 to-slate-900/90 relative shadow-2xl shadow-sky-500/10">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-1 text-xs font-bold text-slate-950 shadow-md font-heading">
              MOST POPULAR
            </div>

            <div className="space-y-6">
              <div>
                <span className="rounded-full bg-sky-500/20 border border-sky-500/40 px-3 py-1 text-xs font-bold text-sky-400 font-heading">
                  PRO User Tier
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 flex items-center gap-2 font-heading">
                  Pro Tier <span className="text-sky-400">⚡</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1">Full AI scanning power & multi-car garage manager.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white font-heading">
                  {billingCycle === "annual" ? "$3.33" : "$4.99"}
                </span>
                <span className="text-sm text-slate-400">/ month</span>
                {billingCycle === "annual" && (
                  <span className="text-xs text-sky-400 ml-2 font-semibold font-heading">Billed $39.99 annually</span>
                )}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6 text-sm text-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-400 font-heading">Everything in Free, plus:</p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span><strong className="text-sky-300 font-bold font-heading">Up to 5 Vehicles</strong> in Garage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span><strong className="text-white">AI Scanner</strong> for Gas Receipts & Pump Displays</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>Automatic Vehicle Recognition for Auto Fill</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>Export Data & Official Vehicle Reports (PDF / CSV)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>Advanced Expense Charts & Cost Per Mile Analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>Priority Smart Maintenance Alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 space-y-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all font-heading"
              >
                Get Pro on Google Play
              </a>
              <button
                onClick={onIosClick}
                className="w-full text-center text-xs text-slate-400 hover:text-white transition-colors py-1"
              >
                Using iPhone? Join iOS Pro Waitlist →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
