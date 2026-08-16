import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autolog | Delete Account",
  description: "Request deletion of your Autolog account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-10 sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#ffd7cc,#f8f5ef_46%,#e5edf7)]" />
      <div className="pointer-events-none absolute -top-20 -left-20 -z-10 h-72 w-72 rounded-full bg-[#ff9f85]/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#5da5dc]/30 blur-3xl animate-pulse [animation-delay:700ms]" />

      <main className="w-full max-w-3xl rounded-4xl border border-white/60 bg-white/72 p-6 shadow-[0_20px_80px_-40px_rgba(43,55,73,0.55)] backdrop-blur sm:p-10">
        <p className="mb-5 inline-flex rounded-full border border-[#8b3024]/20 bg-[#8b3024]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b3024]">
          Account & Data Request
        </p>

        <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-[#1e2f45] sm:text-5xl">
          Request account deletion
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#2a4460] sm:text-lg">
          Use this form to request deletion of your Autolog account and associated data. Once submitted, our support team will review and process your request.
        </p>

        <div className="mt-7 rounded-2xl border border-[#16395a]/15 bg-white/70 p-4 sm:p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#36597d]">
            What to expect
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-[#2e4b69] sm:text-base">
            <li>• We verify account ownership before deletion.</li>
            <li>• Active subscriptions should be canceled first.</li>
            <li>• Deletion requests are typically completed within 30 days.</li>
          </ul>
        </div>

        <form className="mt-8 space-y-4" aria-label="Delete account request form">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#233a53]">
                Full Name
              </span>
              <input
                type="text"
                name="fullName"
                placeholder="Alex Driver"
                className="h-12 w-full rounded-xl border border-[#204a72]/20 bg-white/85 px-4 text-sm text-[#112a42] outline-none transition focus:border-[#1f5f96] focus:ring-2 focus:ring-[#73aad5]/30"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#233a53]">
                Account Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-[#204a72]/20 bg-white/85 px-4 text-sm text-[#112a42] outline-none transition focus:border-[#1f5f96] focus:ring-2 focus:ring-[#73aad5]/30"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#233a53]">
              Reason (optional)
            </span>
            <textarea
              name="reason"
              rows={4}
              placeholder="Tell us why you want to delete your account..."
              className="w-full rounded-xl border border-[#204a72]/20 bg-white/85 px-4 py-3 text-sm text-[#112a42] outline-none transition focus:border-[#1f5f96] focus:ring-2 focus:ring-[#73aad5]/30"
            />
          </label>

          <label className="flex items-start gap-3 rounded-xl border border-[#204a72]/15 bg-white/70 p-3">
            <input
              type="checkbox"
              name="confirm"
              className="mt-1 h-4 w-4 rounded border-[#2a5378] text-[#153a5a] focus:ring-[#73aad5]/50"
            />
            <span className="text-sm leading-6 text-[#2d4a67]">
              I understand this action is permanent and may remove account data,
              trip history, and uploaded records.
            </span>
          </label>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#8b3024] px-6 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#74261d]"
            >
              Submit Deletion Request
            </button>
          </div>

          <p className="text-xs leading-5 text-[#486b8f]">
            UI prototype only: this form does not submit data yet.
          </p>
        </form>

        <div className="mt-8 border-t border-[#1a4670]/15 pt-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-[#1f4f7a] underline-offset-4 transition hover:underline"
          >
            Back to homepage
          </Link>
        </div>
      </main>
    </div>
  );
}