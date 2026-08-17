import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoLog | Smart Vehicle & Gas Mileage Tracker",
  description:
    "AutoLog automatically logs trips, scans gas receipts with AI, tracks maintenance, and manages expenses for up to 5 vehicles with Pro tier.",
  keywords: [
    "AutoLog",
    "Gas Tracker",
    "Trip Tracker",
    "Mileage Log",
    "AI Receipt Scanner",
    "Vehicle Expense Manager",
    "Car Maintenance Reminders",
  ],
  openGraph: {
    title: "AutoLog: Vehicle and Gas Tracker",
    description:
      "AI Scanner for gas receipts, GPS trip tracker, service reminders, and multi-vehicle expense management.",
    images: ["/app-mockup.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
