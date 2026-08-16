export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_#ffe0b8,_#f8f5ef_48%,_#e6eef6)]" />
      <div className="pointer-events-none absolute -top-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#f5b77d]/45 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#6da8d6]/35 blur-3xl animate-pulse [animation-delay:700ms]" />

      <main className="w-full max-w-3xl rounded-[2rem] border border-white/60 bg-white/70 p-7 shadow-[0_20px_80px_-40px_rgba(43,55,73,0.55)] backdrop-blur sm:p-12">
        <p className="mb-6 inline-flex rounded-full border border-[#2f5f86]/25 bg-[#2f5f86]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2f5f86]">
          Coming Soon
        </p>

        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#122438] sm:text-6xl">
          A smarter home for your auto logs is almost here.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#2a4460] sm:text-lg">
          We are building a cleaner way to capture trips, expenses, and service history in one timeline. Launching soon with early access for the first wave.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@example.com?subject=Early%20access%20request"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#153a5a] px-6 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0f2e49]"
          >
            Request Early Access
          </a>
          <a
            href="mailto:hello@example.com?subject=Partnership%20inquiry"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#153a5a]/30 bg-white/60 px-6 text-sm font-semibold tracking-wide text-[#153a5a] transition-colors duration-200 hover:bg-white"
          >
            Partner With Us
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-[#16395a]/15 bg-white/65 px-3 py-4">
            <p className="text-2xl font-semibold text-[#112a42]">24/7</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#46698d]">
              Cloud Sync
            </p>
          </div>
          <div className="rounded-2xl border border-[#16395a]/15 bg-white/65 px-3 py-4">
            <p className="text-2xl font-semibold text-[#112a42]">1 App</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#46698d]">
              Total Records
            </p>
          </div>
          <div className="rounded-2xl border border-[#16395a]/15 bg-white/65 px-3 py-4">
            <p className="text-2xl font-semibold text-[#112a42]">0 Chaos</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#46698d]">
              Clean Timeline
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
