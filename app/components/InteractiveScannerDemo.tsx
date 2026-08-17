"use client";

import { useState } from "react";

export default function InteractiveScannerDemo() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<{
    station: string;
    gallons: string;
    total: string;
    vehicleMatch: string;
    date: string;
  } | null>({
    station: "Shell Fuel Station #402",
    gallons: "14.28 gal @ $4.58/gal",
    total: "$65.40",
    vehicleMatch: "Tesla Model Y / Ford F-150",
    date: "Just now",
  });

  const handleRunScan = () => {
    setIsScanning(true);
    setScannedData(null);
    setTimeout(() => {
      setIsScanning(false);
      setScannedData({
        station: "Chevron Station #891",
        gallons: "15.50 gal @ $4.39/gal",
        total: "$68.05",
        vehicleMatch: "BMW X5 (Pro Fleet)",
        date: "Aug 16, 2026",
      });
    }, 1800);
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
            <span>✨ Pro Feature Simulator</span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-2">AI Receipt & Pump Recognition</h3>
          <p className="text-sm text-slate-400 mt-1">
            Snap a photo of any gas receipt or pump display. AutoLog instantly parses fuel volume, total cost, and assigns it to your vehicle.
          </p>
        </div>

        <button
          onClick={handleRunScan}
          disabled={isScanning}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all shrink-0"
        >
          {isScanning ? (
            <>
              <svg className="animate-spin h-4 w-4 text-slate-950" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              AI Extracting Data...
            </>
          ) : (
            <>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <circle cx="12" cy="13" r="3" strokeWidth={2} />
              </svg>
              Test AI Receipt Scanner
            </>
          )}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Receipt Visualizer Box */}
        <div className="relative rounded-2xl border border-white/10 bg-slate-950 p-5 overflow-hidden min-h-[220px] flex flex-col justify-center items-center">
          {/* Animated Scanning Laser */}
          {isScanning && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scan" />
          )}

          <div className="w-full max-w-xs rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-xs text-slate-300 space-y-2 relative shadow-xl">
            <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
              <span>RECEIPT #94812</span>
              <span>100% OCR</span>
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold">SHELL GAS & CONVENIENCE</p>
              <p className="text-[11px] text-slate-400">PUMP 04 - UNLEADED REGULAR</p>
            </div>
            <div className="flex justify-between border-t border-slate-800 pt-2 text-sky-400 font-bold text-sm">
              <span>TOTAL</span>
              <span>$68.05</span>
            </div>
            <div className="text-[10px] text-cyan-400 flex items-center gap-1 pt-1">
              <span>✓ Auto Match: Ford F-150 Lightning / Gasoline Fleet</span>
            </div>
          </div>
        </div>

        {/* Extracted Output Cards */}
        <div className="space-y-3">
          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">Gas Station</span>
            <span className="text-sm font-semibold text-white">
              {scannedData ? scannedData.station : "Scanning..."}
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">Volume & Rate</span>
            <span className="text-sm font-semibold text-sky-400">
              {scannedData ? scannedData.gallons : "Calculating..."}
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">Total Price</span>
            <span className="text-base font-bold text-white">
              {scannedData ? scannedData.total : "--"}
            </span>
          </div>

          <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 flex items-center justify-between">
            <span className="text-xs text-sky-300 font-semibold">Auto-Assigned Vehicle</span>
            <span className="text-xs font-bold text-white rounded bg-sky-500/20 px-2 py-1 border border-sky-500/30">
              {scannedData ? scannedData.vehicleMatch : "Matching..."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
