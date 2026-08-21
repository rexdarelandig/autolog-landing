import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "milepup | Privacy Policy",
  description:
    "Privacy Policy for milepup: Vehicle & Gas Tracker by Rex Darel Andig.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0f17] text-slate-100 px-4 py-10 sm:px-6 sm:py-16 selection:bg-sky-500/30 selection:text-sky-300">
      {/* Background Neon Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-[#0b0f17] to-[#0b0f17]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/15 to-cyan-500/15 blur-3xl" />

      {/* Top Header Bar */}
      <header className="mx-auto max-w-5xl pb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950 font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <span className="text-xl font-bold tracking-tight text-white">milepup</span>
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 rounded-full"
        >
          ← Return to Home
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        {/* Header Hero Box */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
            <span>Legal Notice</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-sky-300 font-semibold">
            milepup: Vehicle & Gas Tracker
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:flex-wrap sm:gap-6 pt-4 border-t border-white/10">
            <span>Developer: Rex Darel Andig</span>
            <span>Effective Date: August 16, 2026</span>
            <a
              href="mailto:rexdarelandig@gmail.com"
              className="text-sky-400 hover:underline"
            >
              Contact: rexdarelandig@gmail.com
            </a>
          </div>
        </section>

        {/* Content Body */}
        <article className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="space-y-10 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              This Privacy Policy describes how Rex Darel Andig (&quot;Developer,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores,
              and protects your information when you use the mobile
              application <strong className="text-white">milepup: Vehicle & Gas Tracker</strong> (the
              &quot;Application&quot; or &quot;App&quot;).
            </p>

            <section className="space-y-4">
              <h2 className="border-l-4 border-sky-400 pl-4 text-xl font-bold text-white">
                1. Overview & Data Architecture
              </h2>
              <ul className="space-y-3 pl-4 list-disc marker:text-sky-400">
                <li>
                  <strong className="text-white">
                    Free Tier (Local Storage Only):
                  </strong>{" "}
                  No account creation is required. All vehicle specifications,
                  logs, fuel entries, receipt images, and trip data remain
                  strictly on your local device storage. We do not transmit or
                  store your data on external servers in this tier.
                </li>
                <li>
                  <strong className="text-white">
                    PRO Tier (Cloud Synchronization):
                  </strong>{" "}
                  If you upgrade to the PRO tier, an account is created to
                  enable cloud synchronization via Supabase. Structured data
                  (vehicle specs, logs, mileage, fuel entries) and vehicle
                  avatar profile photos are synchronized.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-sky-400 pl-4 text-xl font-bold text-white">
                2. Information We Collect & Image Policy
              </h2>

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  A. Information You Provide
                </h3>
                <ul className="space-y-3 pl-4 list-disc marker:text-sky-400">
                  <li>
                    <strong className="text-white">
                      Vehicle Information:
                    </strong>{" "}
                    Make, model, year, trim, mileage/odometer readings,
                    maintenance history, optional license plate numbers, and
                    vehicle avatar profile photos.
                  </li>
                  <li>
                    <strong className="text-white">
                      Fuel & Financial Records:
                    </strong>{" "}
                    Gas fill-up logs, unit fuel prices, total spent, fuel
                    volume, station notes, and receipt images.
                  </li>
                  <li>
                    <strong className="text-white">
                      Account Information (PRO Only):
                    </strong>{" "}
                    Email address and login credentials for cloud
                    authentication.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-amber-200 space-y-2">
                <p className="font-bold text-amber-400 text-sm">
                  Receipt vs. Avatar Photo Policy:
                </p>
                <ul className="space-y-2 pl-4 list-disc marker:text-amber-400 text-xs">
                  <li>
                    <strong className="text-white">Gas & Maintenance Receipt Photos:</strong> All
                    receipt photos remain <strong className="text-amber-300">strictly stored on your local
                      device only</strong> and are <strong className="text-amber-300">never uploaded to the
                        cloud</strong> (even for PRO users).
                  </li>
                  <li>
                    <strong className="text-white">Vehicle Avatar Profile Photos:</strong> Vehicle
                    avatar photos for PRO users are stored in secure cloud
                    storage (Supabase) to sync your vehicle profile across
                    devices. For Free Tier users, avatars remain local only.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  B. Automatically Collected Information & Device Permissions
                </h3>
                <ul className="space-y-3 pl-4 list-disc marker:text-sky-400">
                  <li>
                    <strong className="text-white">
                      Precise & Background Location Data (GPS):
                    </strong>{" "}
                    With explicit runtime permission, the App accesses
                    foreground and background GPS data exclusively to calculate
                    trip distances, record vehicle driving routes, log automatic
                    mileage, and pinpoint fuel stop coordinates. Location data
                    is never shared with third-party advertisers or data
                    brokers.
                  </li>
                  <li>
                    <strong className="text-white">
                      Camera & Storage/Media Access:
                    </strong>{" "}
                    Used solely to allow you to take photos of receipts, upload
                    receipts, or set vehicle avatar profile photos.
                  </li>
                  <li>
                    <strong className="text-white">
                      Analytics & Diagnostics:
                    </strong>{" "}
                    Anonymized crash logs and usage metrics via Google Analytics
                    and Firebase Crashlytics to improve app stability.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-sky-400 pl-4 text-xl font-bold text-white">
                3. Third-Party Services
              </h2>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="px-4 py-3 font-bold">Provider</th>
                        <th className="px-4 py-3 font-bold">Purpose</th>
                        <th className="px-4 py-3 font-bold">
                          Data Shared / Processed
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-slate-300">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-white">
                          Supabase (PRO Tier)
                        </td>
                        <td className="px-4 py-3">Cloud database & avatar storage</td>
                        <td className="px-4 py-3">
                          User ID, email address, synced vehicle logs, mileage,
                          fuel logs, vehicle avatars (receipt photos excluded).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-white">
                          Google Play Billing
                        </td>
                        <td className="px-4 py-3">
                          In-app purchases & subscriptions
                        </td>
                        <td className="px-4 py-3">
                          Purchase tokens and subscription status. Financial/card details are handled directly by Google Play.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-white">
                          Firebase Crashlytics & Analytics
                        </td>
                        <td className="px-4 py-3">Diagnostics & analytics</td>
                        <td className="px-4 py-3">
                          Crash stack traces, device model, OS version, anonymous engagement metrics.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="italic text-xs text-sky-400">
                Note: milepup is completely <strong className="text-white font-semibold">ad-free</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-sky-400 pl-4 text-xl font-bold text-white">
                4. Data Security
              </h2>
              <p>
                All data transmitted between the App, Supabase cloud
                infrastructure, and third-party SDKs is encrypted using
                industry-standard HTTPS / TLS.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-sky-400 pl-4 text-xl font-bold text-white">
                5. User Rights & Account Deletion
              </h2>
              <ul className="space-y-3 pl-4 list-disc marker:text-sky-400">
                <li>
                  <strong className="text-white">Free Tier:</strong>{" "}
                  Uninstalling the application or clearing the application
                  storage in Android Settings permanently deletes all local
                  records.
                </li>
                <li>
                  <strong className="text-white">PRO Tier:</strong> You
                  can request full account and data deletion directly within the
                  App settings or by emailing rexdarelandig@gmail.com. Cloud
                  records are permanently erased within 30 days.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-sky-400 pl-4 text-xl font-bold text-white">
                6. Contact Us
              </h2>
              <p className="text-xs text-slate-300">
                <strong className="text-white">Developer:</strong> Rex Darel Andig
                <br />
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:rexdarelandig@gmail.com"
                  className="text-sky-400 hover:underline"
                >
                  rexdarelandig@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}