import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Target } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import { services } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "Detailed K9 services",
    title: "Every service is structured, certified, and deployable.",
    body:
      "This page gives a deeper look at how each PDCI service works in practice, what it includes, and where it fits best.",
    process: "Deployment process",
    useCases: "Best-fit scenarios",
  },
} as const;

const process = [
  {
    step: "01",
    title: "Assess",
    description: "We review your risks, timing, and terrain before deployment.",
  },
  {
    step: "02",
    title: "Design",
    description: "We match the right dog, handler, and protocol to your use case.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "The team arrives ready with documentation and operational direction.",
  },
  {
    step: "04",
    title: "Review",
    description: "We monitor results and adjust the plan as conditions change.",
  },
];

export default async function K9ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const locale = "en";
  const t = copy[locale];
  const nav = (href: string) => href;

  return (
    <>
      <section className="bg-navy-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{t.body}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href={nav("/contact")} className="rounded-full bg-gold-500 px-5 py-3 font-bold text-navy-950 transition-transform hover:scale-[1.02]">
              {locale === "hi" ? "इनक्वायरी भेजें" : "Send enquiry"}
            </Link>
            <Link href={nav("/store")} className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white/10">
              {locale === "hi" ? "स्टोर देखें" : "Explore store"}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6">
            {services.map((service, index) => (
              <article key={service.title[locale]} className="overflow-hidden rounded-[32px] border border-white/70 bg-white/85 shadow-[0_20px_60px_rgba(13,27,42,0.08)]">
                <div className="grid gap-0 lg:grid-cols-[0.36fr_0.64fr]">
                  <div className="bg-navy-950 p-8 text-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-3xl">
                      {service.icon}
                    </div>
                    <h2 className="mt-6 text-2xl font-black">{service.title[locale]}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{service.description[locale]}</p>
                  </div>

                  <div className="space-y-6 p-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.useCases}</p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {[
                          locale === "hi" ? "कॉर्पोरेट परिसर" : "Corporate campuses",
                          locale === "hi" ? "उच्च-जोखिम इवेंट" : "High-risk events",
                          locale === "hi" ? "इन्फ्रास्ट्रक्चर साइट्स" : "Infrastructure sites",
                          locale === "hi" ? "इमरजेंसी रिस्पॉन्स" : "Emergency response",
                        ].map((item) => (
                          <div key={item} className="rounded-2xl border border-slate-100 bg-white p-4 text-sm text-slate-600">
                            <Target className="mb-2 h-4 w-4 text-gold-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-navy-900">{locale === "hi" ? "मुख्य क्षमताएँ" : "Key capabilities"}</h3>
                      <ul className="mt-4 grid gap-3 md:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature[locale]} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                            {feature[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">
                      <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-navy-900">{locale === "hi" ? "उपयुक्त नस्लें" : "Recommended breeds"}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{service.breeds[locale]}</p>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 ? <div className="h-px bg-slate-100" /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.process}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step) => (
              <article key={step.step} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-black text-gold-300">{step.step}</div>
                <h3 className="mt-3 text-lg font-bold">{step.title[locale]}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{step.description[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{locale === "hi" ? "अगला कदम" : "Next step"}</p>
              <h2 className="mt-2 text-3xl font-black text-navy-900">{locale === "hi" ? "अपनी तैनाती योजना शुरू करें" : "Start your deployment plan"}</h2>
            </div>
            <Link href={nav("/booking")} className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400">
              {locale === "hi" ? "बुकिंग खोलें" : "Open booking"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
