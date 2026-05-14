"use client";

import { use, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageSquareMore, Sparkles } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import { offices } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Talk to the team behind the platform.",
    body:
      "For quotes, site reviews, store orders, or deployment planning, reach out and we will point you to the fastest path.",
    formTitle: "Send a message",
    successTitle: "Message sent",
    successBody: "We will review your request and respond as soon as possible.",
    officesTitle: "Office locations",
  },
} as const;

const serviceOptions = [
  { value: "narcotics", label: "Narcotics detection" },
  { value: "explosive", label: "Explosive detection" },
  { value: "patrol", label: "Patrol & guard" },
  { value: "store", label: "Store order" },
  { value: "booking", label: "Booking / consultation" },
];

export default function ContactPage({
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
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href={nav("/booking")} className="rounded-full bg-gold-500 px-5 py-3 font-bold text-navy-950 transition-transform hover:scale-[1.02]">
              {locale === "hi" ? "बुकिंग खोलें" : "Open booking"}
            </Link>
            <a href="https://wa.me/911234567890" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white/10">
              {locale === "hi" ? "WhatsApp चैट" : "WhatsApp chat"}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
              <h2 className="text-2xl font-black">{locale === "hi" ? "त्वरित संपर्क" : "Quick contact"}</h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 text-gold-400" />
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <a href="tel:+911234567890" className="hover:text-gold-400">+91 12345 67890</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 text-gold-400" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a href="mailto:info@policedogcentreindia.com" className="hover:text-gold-400">info@policedogcentreindia.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 text-gold-400" />
                  <div>
                    <div className="font-semibold text-white">Hours</div>
                    <p>{locale === "hi" ? "सोम - शनि: 9:00 AM - 6:00 PM" : "Mon - Sat: 9:00 AM - 6:00 PM"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.officesTitle}</p>
              <div className="mt-6 space-y-4">
                {offices.map((office) => (
                  <div key={office.email} className="rounded-[24px] border border-slate-100 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-gold-500" />
                      <div>
                        <h3 className="text-lg font-bold text-navy-900">{office.city[locale]}</h3>
                        <p className="mt-1 text-sm leading-7 text-slate-600">{office.address}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-700">{office.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            {submitted ? (
              <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 text-center shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-3xl font-black text-navy-900">{t.successTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{t.successBody}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button onClick={() => setSubmitted(false)} className="rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02]">
                    {locale === "hi" ? "और संदेश भेजें" : "Send another"}
                  </button>
                  <Link href={nav("/services")} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-slate-50">
                    {locale === "hi" ? "सेवाएँ देखें" : "View services"}
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.formTitle}</p>
                <h2 className="mt-2 text-3xl font-black text-navy-900">{locale === "hi" ? "अपनी ज़रूरत बताएँ" : "Tell us what you need"}</h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <input required name="name" placeholder={locale === "hi" ? "पूरा नाम" : "Full name"} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                  <input required type="email" name="email" placeholder={locale === "hi" ? "ईमेल पता" : "Email address"} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                  <input required name="phone" placeholder={locale === "hi" ? "फोन नंबर" : "Phone number"} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                  <input name="organization" placeholder={locale === "hi" ? "संगठन / कंपनी" : "Organization / company"} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <select name="service" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-gold-500">
                    <option value="">{locale === "hi" ? "सेवा चुनें" : "Choose a service"}</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label[locale]}
                      </option>
                    ))}
                  </select>
                  <input type="text" name="subject" placeholder={locale === "hi" ? "विषय" : "Subject"} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />
                </div>

                <textarea required name="message" rows={6} placeholder={locale === "hi" ? "अपनी आवश्यकता का संक्षिप्त विवरण" : "Briefly describe what you need"} className="mt-5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500" />

                <button type="submit" disabled={loading} className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60">
                  <MessageSquareMore className="h-4 w-4" />
                  {loading ? (locale === "hi" ? "भेजा जा रहा है..." : "Sending...") : locale === "hi" ? "संदेश भेजें" : "Send message"}
                </button>
              </form>
            )}

            <div className="rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{locale === "hi" ? "त्वरित विकल्प" : "Quick actions"}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Link href={nav("/booking")} className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <div className="flex items-center gap-3 text-gold-400">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-semibold">{locale === "hi" ? "बुकिंग" : "Booking"}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{locale === "hi" ? "कॉल या अपॉइंटमेंट बुक करें" : "Book a call or appointment"}</p>
                </Link>
                <a href="https://wa.me/911234567890" className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <div className="flex items-center gap-3 text-gold-400">
                    <MessageSquareMore className="h-4 w-4" />
                    <span className="font-semibold">WhatsApp</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{locale === "hi" ? "तुरंत चैट शुरू करें" : "Start a quick chat"}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
