import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AutoLog | Delete Account",
  description: "Request deletion of your AutoLog account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0f17] text-slate-100 px-4 py-10 sm:px-6 sm:py-16 selection:bg-sky-500/30 selection:text-sky-300">
      {/* Background Neon Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-[#0b0f17] to-[#0b0f17]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/15 to-cyan-500/15 blur-3xl" />

      {/* Top Header Bar */}
      <header className="mx-auto max-w-4xl pb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950 font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <span className="text-xl font-bold tracking-tight text-white">AutoLog</span>
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 rounded-full"
        >
          ← Return to Home
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400">
          <span>Account & Data Management</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Request Account Deletion
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
          Use this form to request deletion of your AutoLog account and associated cloud data. Once submitted, our team will review and process your request.
        </p>

        <div className="mt-6 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
            What to expect
          </p>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span>We verify account ownership before permanently removing records.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span>Active Google Play subscriptions should be canceled separately via Google Play Store.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span>Deletion requests are processed and cloud backups cleared within 30 days.</span>
            </li>
          </ul>
        </div>

        <form className="mt-8 space-y-4" aria-label="Delete account request form">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold text-slate-300">
                Full Name
              </span>
              <input
                type="text"
                name="fullName"
                placeholder="Alex Driver"
                className="h-12 w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold text-slate-300">
                Account Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold text-slate-300">
              Reason (optional)
            </span>
            <textarea
              name="reason"
              rows={4}
              placeholder="Tell us why you want to delete your account..."
              className="w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
            />
          </label>

          <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-800/40 p-4">
            <input
              type="checkbox"
              name="confirm"
              className="mt-1 h-4 w-4 rounded border-slate-700 text-sky-500 focus:ring-sky-400/50"
            />
            <span className="text-xs leading-relaxed text-slate-300">
              I understand this action is permanent and will remove account credentials, trip logs, vehicle profiles, and cloud backup records.
            </span>
          </label>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-8 text-sm font-bold text-white shadow-lg shadow-rose-500/20 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Deletion Request
            </button>
          </div>
        </form>

        <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between text-xs text-slate-400">
          <span>AutoLog Privacy & Data Protection</span>
          <Link
            href="/"
            className="font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}