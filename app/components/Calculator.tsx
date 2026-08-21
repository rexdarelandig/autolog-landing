"use client";

import { useState } from "react";

export default function Calculator() {
  const [milesPerMonth, setMilesPerMonth] = useState(1200);
  const [mpg, setMpg] = useState(25);
  const [gasPrice, setGasPrice] = useState(4.25);

  const totalGallons = milesPerMonth / (mpg || 1);
  const monthlyGasCost = totalGallons * gasPrice;
  const yearlyGasCost = monthlyGasCost * 12;
  const taxDeductionsEst = milesPerMonth * 12 * 0.67; // standard IRS rate ~$0.67/mi

  return (
    <section id="calculator" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-12 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  Interactive Estimator
                </span>
                <h3 className="text-3xl font-bold text-white mt-1">Calculate Your Gas & Tax Savings</h3>
                <p className="text-sm text-slate-300 mt-2">
                  See how much money you spend on fuel and potential IRS tax write-offs milepup can track for you.
                </p>
              </div>

              {/* Slider 1: Monthly Miles */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-semibold">Monthly Driving Distance</span>
                  <span className="text-sky-400 font-mono font-bold">{milesPerMonth.toLocaleString()} miles</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="4000"
                  step="50"
                  value={milesPerMonth}
                  onChange={(e) => setMilesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              {/* Slider 2: Vehicle MPG */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-semibold">Vehicle Fuel Economy (MPG)</span>
                  <span className="text-cyan-400 font-mono font-bold">{mpg} MPG</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="1"
                  value={mpg}
                  onChange={(e) => setMpg(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Slider 3: Gas Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-semibold">Gasoline Price / Gallon</span>
                  <span className="text-amber-400 font-mono font-bold">${gasPrice.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="2.50"
                  max="6.50"
                  step="0.05"
                  value={gasPrice}
                  onChange={(e) => setGasPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            {/* Right Output Box */}
            <div className="lg:col-span-6 rounded-2xl border border-sky-500/30 bg-slate-950 p-6 sm:p-8 space-y-6">
              <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400 border-b border-slate-800 pb-3">
                Estimated Auto Expense Output
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-900 p-4 border border-white/5">
                  <span className="text-xs text-slate-400 block">Monthly Gas Spend</span>
                  <span className="text-2xl font-extrabold text-white mt-1 block">
                    ${monthlyGasCost.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{totalGallons.toFixed(1)} gal/mo</span>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-white/5">
                  <span className="text-xs text-slate-400 block">Yearly Fuel Total</span>
                  <span className="text-2xl font-extrabold text-amber-400 mt-1 block">
                    ${yearlyGasCost.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Estimated fuel budget</span>
                </div>
              </div>

              <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-5 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                    Potential Business Tax Deduction
                  </span>
                  <span className="rounded bg-sky-400/20 px-2 py-0.5 text-[10px] font-bold text-sky-300">
                    IRS Auto-Tracker
                  </span>
                </div>
                <p className="text-3xl font-extrabold text-white">
                  ${taxDeductionsEst.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-slate-300">
                  By auto-logging every business trip with milepup, you can claim significant mileage write-offs effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
