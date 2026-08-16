import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Autolog",
  description:
    "Privacy Policy for AutoLog: Vehicle & Gas Tracker by Rex Darel Andig.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-16 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#ffe0b8,#f8f5ef_48%,#e6eef6)]" />
      <div className="pointer-events-none absolute -top-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#f5b77d]/45 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#6da8d6]/35 blur-3xl animate-pulse [animation-delay:700ms]" />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <section className="rounded-4xl border border-white/60 bg-[#12324d]/94 p-8 text-white shadow-[0_20px_80px_-40px_rgba(43,55,73,0.55)] backdrop-blur sm:p-10">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7e8f6]">
            Legal
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-[#d7e8f6]">
            AutoLog: Vehicle & Gas Tracker
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-[#b7d2e8] sm:flex-row sm:flex-wrap sm:gap-6">
            <span>Developer: Rex Darel Andig</span>
            <span>Effective Date: August 16, 2026</span>
            <a
              href="mailto:rexdarelandig@gmail.com"
              className="transition-colors hover:text-white"
            >
              Contact: rexdarelandig@gmail.com
            </a>
          </div>
        </section>

        <article className="rounded-4xl border border-white/60 bg-white/72 p-7 shadow-[0_20px_80px_-40px_rgba(43,55,73,0.45)] backdrop-blur sm:p-10">
          <div className="space-y-10 text-[15px] leading-7 text-[#29435e] sm:text-base">
            <p>
              This Privacy Policy describes how Rex Darel Andig (&quot;Developer,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores,
              and protects your information when you use the mobile
              application<strong> AutoLog: Vehicle & Gas Tracker</strong> (the
              &quot;Application&quot; or &quot;App&quot;).
            </p>

            <section className="space-y-4">
              <h2 className="border-l-4 border-[#2f5f86] pl-4 text-2xl font-semibold tracking-tight text-[#122438]">
                1. Overview & Data Architecture
              </h2>
              <ul className="space-y-3 pl-6 marker:text-[#2f5f86] list-disc">
                <li>
                  <strong className="text-[#122438]">
                    Free Tier (Local Storage Only):
                  </strong>{" "}
                  No account creation is required. All vehicle specifications,
                  logs, fuel entries, receipt images, and trip data remain
                  strictly on your local device storage. We do not transmit or
                  store your data on external servers in this tier.
                </li>
                <li>
                  <strong className="text-[#122438]">
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
              <h2 className="border-l-4 border-[#2f5f86] pl-4 text-2xl font-semibold tracking-tight text-[#122438]">
                2. Information We Collect & Image Policy
              </h2>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#46698d]">
                  A. Information You Provide
                </h3>
                <ul className="space-y-3 pl-6 marker:text-[#2f5f86] list-disc">
                  <li>
                    <strong className="text-[#122438]">
                      Vehicle Information:
                    </strong>{" "}
                    Make, model, year, trim, mileage/odometer readings,
                    maintenance history, optional license plate numbers, and
                    vehicle avatar profile photos.
                  </li>
                  <li>
                    <strong className="text-[#122438]">
                      Fuel & Financial Records:
                    </strong>{" "}
                    Gas fill-up logs, unit fuel prices, total spent, fuel
                    volume, station notes, and receipt images.
                  </li>
                  <li>
                    <strong className="text-[#122438]">
                      Account Information (PRO Only):
                    </strong>{" "}
                    Email address and login credentials for cloud
                    authentication.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[#e6b86d]/45 bg-[#fff4de]/80 px-5 py-5 text-[#5a4525] shadow-[0_16px_50px_-35px_rgba(155,103,24,0.85)]">
                <p className="font-semibold text-[#7b5715]">
                  Receipt vs. Avatar Photo Policy:
                </p>
                <ul className="mt-3 space-y-3 pl-6 marker:text-[#c07f19] list-disc">
                  <li>
                    <strong>Gas & Maintenance Receipt Photos:</strong> All
                    receipt photos remain <strong>strictly stored on your local
                    device only</strong> and are <strong>never uploaded to the
                    cloud</strong> (even for PRO users).
                  </li>
                  <li>
                    <strong>Vehicle Avatar Profile Photos:</strong> Vehicle
                    avatar photos for PRO users are stored in secure cloud
                    storage (Supabase) to sync your vehicle profile across
                    devices. For Free Tier users, avatars remain local only.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#46698d]">
                  B. Automatically Collected Information & Device Permissions
                </h3>
                <ul className="space-y-3 pl-6 marker:text-[#2f5f86] list-disc">
                  <li>
                    <strong className="text-[#122438]">
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
                    <strong className="text-[#122438]">
                      Camera & Storage/Media Access:
                    </strong>{" "}
                    Used solely to allow you to take photos of receipts, upload
                    receipts, or set vehicle avatar profile photos.
                  </li>
                  <li>
                    <strong className="text-[#122438]">
                      Analytics & Diagnostics:
                    </strong>{" "}
                    Anonymized crash logs and usage metrics via Google Analytics
                    and Firebase Crashlytics to improve app stability.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-[#2f5f86] pl-4 text-2xl font-semibold tracking-tight text-[#122438]">
                3. Third-Party Services
              </h2>
              <div className="overflow-hidden rounded-3xl border border-[#d5dfeb] bg-white/65">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-[#12324d] text-white">
                        <th className="px-4 py-3 font-semibold">Provider</th>
                        <th className="px-4 py-3 font-semibold">Purpose</th>
                        <th className="px-4 py-3 font-semibold">
                          Data Shared / Processed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#d5dfeb] align-top">
                        <td className="px-4 py-3 font-semibold text-[#122438]">
                          Supabase (PRO Tier)
                        </td>
                        <td className="px-4 py-3">Cloud database & avatar storage</td>
                        <td className="px-4 py-3">
                          User ID, email address, synced vehicle logs, mileage,
                          fuel logs, vehicle avatars (receipt photos excluded).
                        </td>
                      </tr>
                      <tr className="border-t border-[#d5dfeb] align-top bg-[#f7fafc]/80">
                        <td className="px-4 py-3 font-semibold text-[#122438]">
                          Google Play Billing
                        </td>
                        <td className="px-4 py-3">
                          In-app purchases & subscriptions
                        </td>
                        <td className="px-4 py-3">
                          Purchase tokens and subscription status.
                          Financial/card details are handled directly by Google
                          Play.
                        </td>
                      </tr>
                      <tr className="border-t border-[#d5dfeb] align-top">
                        <td className="px-4 py-3 font-semibold text-[#122438]">
                          Firebase Crashlytics & Analytics
                        </td>
                        <td className="px-4 py-3">Diagnostics & analytics</td>
                        <td className="px-4 py-3">
                          Crash stack traces, device model, OS version,
                          anonymous engagement metrics.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="italic text-[#3b5d7c]">
                Note: AutoLog is completely <strong>ad-free</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-[#2f5f86] pl-4 text-2xl font-semibold tracking-tight text-[#122438]">
                4. Data Security
              </h2>
              <p>
                All data transmitted between the App, Supabase cloud
                infrastructure, and third-party SDKs is encrypted using
                industry-standard HTTPS / TLS.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-[#2f5f86] pl-4 text-2xl font-semibold tracking-tight text-[#122438]">
                5. User Rights & Account Deletion
              </h2>
              <ul className="space-y-3 pl-6 marker:text-[#2f5f86] list-disc">
                <li>
                  <strong className="text-[#122438]">Free Tier:</strong>{" "}
                  Uninstalling the application or clearing the application
                  storage in Android Settings permanently deletes all local
                  records.
                </li>
                <li>
                  <strong className="text-[#122438]">PRO Tier:</strong> You
                  can request full account and data deletion directly within the
                  App settings or by emailing rexdarelandig@gmail.com. Cloud
                  records are permanently erased within 30 days.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-[#2f5f86] pl-4 text-2xl font-semibold tracking-tight text-[#122438]">
                6. Children&apos;s Privacy
              </h2>
              <p>
                AutoLog is intended for use by licensed vehicle operators and
                does not knowingly collect personal data from children under the
                age of 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="border-l-4 border-[#2f5f86] pl-4 text-2xl font-semibold tracking-tight text-[#122438]">
                7. Contact Us
              </h2>
              <p>
                <strong className="text-[#122438]">Developer:</strong> Rex
                Darel Andig
                <br />
                <strong className="text-[#122438]">Email:</strong>{" "}
                <a
                  href="mailto:rexdarelandig@gmail.com"
                  className="text-[#153a5a] underline decoration-[#153a5a]/30 underline-offset-4 transition-colors hover:text-[#0f2e49]"
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