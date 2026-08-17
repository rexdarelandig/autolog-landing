"use client";

import { useState } from "react";
import InteractiveScannerDemo from "./InteractiveScannerDemo";

export default function FeatureShowcase() {
  const [activeVehicleIndex, setActiveVehicleIndex] = useState(0);

  const vehicles = [
    { name: "Tesla Model Y", type: "Electric • Daily Drive", range: "310 mi", fill: "92%", color: "border-sky-500/50 bg-sky-500/10 text-sky-400" },
    { name: "BMW X5 xDrive", type: "Gas • Executive", range: "480 mi", fill: "Fuel 85%", color: "border-cyan-500/50 bg-cyan-500/10 text-cyan-400" },
    { name: "Ford F-150 SuperCrew", type: "Gas • Work Truck", range: "600 mi", fill: "Fuel 60%", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
    { name: "Honda Civic Sport", type: "Gas • Commuter", range: "420 mi", fill: "Fuel 95%", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
    { name: "Porsche 911 Carrera", type: "Gas • Weekend", range: "350 mi", fill: "Fuel 70%", color: "border-amber-500/50 bg-amber-500/10 text-amber-400" },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-heading">
            Engineered For Drivers & Fleet Owners
          </h2>
          <p className="text-3xl font-extrabold text-white sm:text-5xl font-heading">
            Everything your vehicle needs in <span className="gradient-text">One Seamless App</span>
          </p>
          <p className="text-base text-slate-300 sm:text-lg">
            Say goodbye to lost paper receipts and manual spreadsheet logs. AutoLog handles trip recording, expense management, and vehicle health automatically.
          </p>
        </div>

        {/* Feature 1: AI Scanner Showcase Component */}
        <div id="ai-scanner" className="pt-4">
          <InteractiveScannerDemo />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: GPS Trip Tracker */}
          <div className="glass-card glass-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 text-2xl">
                📍
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Automated GPS Trip Tracker</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                AutoLog detects when you start driving and auto-logs your start/end destinations, distance, and duration. Zero manual intervention required.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/80 p-3 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                Background GPS Active
              </span>
              <span className="text-sky-400 font-heading font-bold">$12.50 saved</span>
            </div>
          </div>

          {/* Card 2: View Expenses & Financial Reports */}
          <div className="glass-card glass-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl">
                📊
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Expense & Budget Analytics</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Categorize costs into Fuel, Maintenance, Tolls, Insurance, and Upgrades. Track cost per mile/km with intuitive interactive breakdown charts.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/80 p-3 text-xs">
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Monthly Fuel & Service</span>
                <span className="font-bold text-white font-heading">$387.90</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden flex">
                <div className="bg-sky-400 h-full w-[65%]" />
                <div className="bg-cyan-400 h-full w-[25%]" />
                <div className="bg-blue-400 h-full w-[10%]" />
              </div>
            </div>
          </div>

          {/* Card 3: Reminders for Upcoming Maintenance */}
          <div className="glass-card glass-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl">
                🔔
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Smart Maintenance Reminders</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Receive proactive alerts for oil changes, tire rotations, registration renewals, and brake inspections based on mileage or calendar schedule.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-xs flex justify-between items-center text-amber-200">
                <span>🛢️ Oil Change Due</span>
                <span className="font-bold text-amber-400 font-heading">In 450 mi</span>
              </div>
            </div>
          </div>

          {/* Card 4: Export Data and Vehicle Reports */}
          <div className="glass-card glass-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl">
                📑
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Export PDF & CSV Vehicle Reports</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Generate IRS-ready mileage logs and official vehicle maintenance history PDF reports with a single tap for tax deductions or resale value.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
              <span>PDF • CSV • Excel</span>
              <span className="text-purple-400 font-semibold cursor-pointer hover:underline">Preview Report →</span>
            </div>
          </div>

          {/* Card 5 & 6 Span 2 columns: Multi-Vehicle Garage (1 Free vs 5 Pro) */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:col-span-2 flex flex-col justify-between border-sky-500/30 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 text-2xl">
                  🚗
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-xs text-slate-300">
                    Free: 1 Vehicle
                  </span>
                  <span className="rounded-full bg-sky-500/20 border border-sky-500/40 px-3 py-1 text-xs font-bold text-sky-400 font-heading">
                    Pro: Up to 5 Vehicles
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-heading">Garage Fleet Switcher</h3>
                <p className="text-sm text-slate-300 mt-1">
                  Manage your entire personal or family garage. Switch between up to 5 vehicles on Pro tier with dedicated odometer histories and fuel profiles.
                </p>
              </div>

              {/* Interactive Garage Switcher */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                {vehicles.map((v, index) => (
                  <button
                    key={v.name}
                    onClick={() => setActiveVehicleIndex(index)}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      activeVehicleIndex === index
                        ? v.color + " ring-2 ring-sky-400/30 shadow-lg"
                        : "border-white/10 bg-slate-900/60 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    <p className="text-xs font-bold truncate font-heading">{v.name}</p>
                    <p className="text-[10px] opacity-80 mt-1 font-heading">{v.range}</p>
                  </button>
                ))}
              </div>

              {/* Selected Vehicle Card */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white font-heading">{vehicles[activeVehicleIndex].name}</h4>
                    <span className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-300 font-heading">
                      Vehicle #{activeVehicleIndex + 1}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{vehicles[activeVehicleIndex].type}</p>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Est Range</span>
                    <span className="text-white font-bold font-heading">{vehicles[activeVehicleIndex].range}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Fuel Level</span>
                    <span className="text-sky-400 font-bold font-heading">{vehicles[activeVehicleIndex].fill}</span>
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
