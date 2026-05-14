"use client";

import { use, useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock3, PhoneCall, Send, ShieldCheck, Sparkles } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Booking",
    title: "Book a consultation, deployment, or training call.",
    body:
      "Choose a time, tell us what you need, and we will respond with the best path forward.",
    formTitle: "Request a slot",
    successTitle: "Request received",
    successBody: "Our team will confirm the next step and share availability shortly.",
  },
} as const;

const serviceOptions = [
  { value: "consultation", label: "Consultation" },
  { value: "deployment", label: "Security deployment" },
  { value: "training", label: "K9 training" },
  { value: "store", label: "Store / merchandise" },
];

export default function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = use(searchParams);
  const locale = "en";
  const t = copy[locale];
  const nav = (href: string) => href;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-navy-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{t.body}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: CalendarDays, text: "Slot-based" },
              { icon: Clock3, text: "Quick response" },
              { icon: ShieldCheck, text: "Confidential process" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Icon className="h-5 w-5 text-gold-400" />
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="space-y-4 rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">What you can book</p>
            <div className="space-y-4">
              {[
                "Site review",
                "Event coverage",
                "Dog training",
                "Store order",
              ].map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-gold-400" />
                    <span className="font-semibold">{item}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[24px] border border-gold-500/20 bg-gold-500/10 p-5 text-sm leading-7 text-slate-200">
              If you want to move quickly, you can also open the contact page and speak with the team directly.
            </div>
          </aside>

          <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <Send className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-3xl font-black text-navy-900">{t.successTitle}</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">{t.successBody}</p>
                <Link href={nav("/contact")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400">
                  Open contact page
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.formTitle}</p>
                  <h2 className="mt-2 text-3xl font-black text-navy-900">Share your details</h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input required name="name" placeholder="Full name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                  <input required type="email" name="email" placeholder="Email address" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                  <input required name="phone" placeholder="Phone number" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                  <input name="organization" placeholder="Organization / company" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                  <input type="date" name="date" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-gold-500" />
                  <input type="time" name="time" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-gold-500" />
                </div>

                <select name="service" required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-gold-500">
                  <option value="">Choose booking type</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <textarea required name="message" rows={5} placeholder="Briefly describe what you need" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
