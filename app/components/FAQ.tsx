"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the AI Gas Receipt Scanner work?",
      a: "With AutoLog Pro, simply open the scanner camera and snap a photo of any paper gas receipt or pump screen. Our AI parses station name, gallons/liters, price per gallon, total cost, and automatically assigns the fill-up to the selected vehicle."
    },
    {
      q: "What is the difference between the Free tier and Pro tier?",
      a: "Free tier supports 1 vehicle with full background GPS trip logging, basic expense tracking, and standard service reminders. Pro tier unlocks up to 5 vehicles in your garage, AI gas receipt scanning, auto vehicle recognition, expense analytics, and unlimited PDF/CSV exports."
    },
    {
      q: "Does automatic GPS trip tracking drain my phone battery?",
      a: "No! AutoLog uses ultra-low-power accelerometer algorithms to detect vehicle motion before enabling active GPS, ensuring minimal background battery consumption."
    },
    {
      q: "Can I export my mileage and vehicle maintenance reports?",
      a: "Yes! Pro users can generate official IRS-compliant mileage CSV/PDF logs as well as complete vehicle maintenance history reports for tax filing or resale documentation."
    },
    {
      q: "When is the iOS (Apple App Store) version launching?",
      a: "AutoLog for Android is available now on Google Play! The iOS version is currently in closed beta and launching on the App Store soon. You can join the early access waitlist above."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            Frequently Asked Questions
          </h2>
          <p className="text-3xl font-extrabold text-white sm:text-4xl">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-white hover:text-sky-400 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-xl text-sky-400 ml-4 font-mono">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-sm text-slate-300 border-t border-white/5 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
