"use client";

import { useState } from "react";

interface IosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IosModal({ isOpen, onClose }: IosModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950 font-bold text-2xl">
              🍎
            </div>
            <div>
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-400 border border-sky-500/30">
                Coming Soon on iOS
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">AutoLog for iPhone & iPad</h3>
              <p className="text-sm text-slate-300 mt-1">
                The iOS version of AutoLog is currently in final Beta testing on TestFlight. Be the first to get notified when it hits the App Store!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <label className="block">
                <span className="text-xs font-semibold text-slate-300">Your Email Address</span>
                <input
                  type="email"
                  required
                  placeholder="driver@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 py-3 text-sm font-bold text-slate-950 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get iOS Early Beta Invite
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-400 text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">You&apos;re on the VIP list!</h3>
            <p className="text-sm text-slate-300">
              We&apos;ve reserved your early access spot for <strong className="text-sky-400">{email}</strong>. We&apos;ll send your TestFlight invite as soon as iOS slots open up.
            </p>
            <button
              onClick={onClose}
              className="mt-4 rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
            >
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
