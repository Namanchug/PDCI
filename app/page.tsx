import Link from "next/link";
import { ArrowRight, BadgeCheck, Shield, Sparkles, Star, Target } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import { faqItems, galleryItems, services, stats, storeProducts, testimonials, values } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "India's premium K9 command center",
    title: "Protecting people, sites, and reputations with elite K9 teams.",
    body:
      "Police Dog Centre India blends operational discipline, luxury presentation, and mobile response capability for organizations that need security to feel precise and modern.",
    primary: "Explore Services",
    secondary: "Book a Consultation",
    storeTitle: "Featured Store Picks",
    storeBody: "Gear, security retainers, and branded merchandise selected for teams that need practical, premium equipment.",
    whyTitle: "Why PDCI",
    whyBody: "Certified handlers, responsive deployment, and polished client service from start to finish.",
    galleryTitle: "Field moments",
    testimonialsTitle: "Trusted by clients",
    faqTitle: "Quick answers",
    ctaTitle: "Build a security plan that feels as professional as it performs.",
    ctaBody: "Use the store, services, booking, and contact sections to move from browsing to action in one session.",
  },
} as const;

export default async function HomePage({
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
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.22),transparent_30%),linear-gradient(135deg,#060d15_0%,#0d1b2a_40%,#1a2e45_100%)] animate-shimmer-slow" />
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl animate-float-slow" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
              <Shield className="h-4 w-4" />
              {t.eyebrow}
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {t.body}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={nav("/services")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400"
              >
                {t.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={nav("/booking")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                {t.secondary}
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label[locale]} className="glass-card rounded-2xl p-4 text-center text-slate-100 shadow-[0_16px_40px_rgba(6,13,21,0.18)]">
                  <div className="text-3xl font-black text-gold-300">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-300">{stat.label[locale]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-8 rounded-[32px] border border-white/10 bg-white/5 blur-0" />
            <div className="relative glass-card w-full max-w-md rounded-[32px] p-6 shadow-[0_30px_90px_rgba(6,13,21,0.35)] animate-fade-up">
              <div className="rounded-[28px] bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 p-6 text-white shadow-inner">
                <p className="text-xs uppercase tracking-[0.32em] text-gold-400">Live readiness</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Deployment mode", value: "24x7" },
                    { label: "Team status", value: "Ready" },
                    { label: "Security level", value: "Elite" },
                    { label: "Coverage", value: "Pan-India" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</div>
                      <div className="mt-2 text-xl font-bold">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-gold-500/20 bg-gold-500/10 p-4 text-sm text-gold-100">
                  <div className="flex items-center gap-2 font-semibold text-gold-300">
                    <BadgeCheck className="h-4 w-4" /> Certified handlers
                  </div>
                  <p className="mt-2 leading-6 text-slate-200">
                    Alerts, status, and deployment decisions are handled through one clear process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-8 bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[32px] border border-white/60 bg-white/80 p-4 shadow-[0_20px_60px_rgba(13,27,42,0.08)] md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <article key={service.title[locale]} className="rounded-[24px] border border-slate-100 bg-white p-5 transition-transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-xl text-white">{service.icon}</div>
              <h2 className="mt-4 text-lg font-bold text-navy-900">{service.title[locale]}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Services</p>
              <h2 className="mt-2 text-3xl font-black text-navy-900 sm:text-4xl">Our core services</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">Every service is designed around a clear outcome, a certified team, and a premium client experience.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.title[locale]} className="group rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_16px_50px_rgba(13,27,42,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(13,27,42,0.12)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-2xl text-white transition-transform group-hover:scale-105">
                    {service.icon}
                  </div>
                  <Sparkles className="h-5 w-5 text-gold-500 opacity-80" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{service.title[locale]}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description[locale]}</p>
                <Link href={nav("/k9-security-services")} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-600 transition-colors hover:text-gold-500">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.storeTitle}</p>
            <h2 className="mt-3 text-3xl font-black">{t.storeBody}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {storeProducts.slice(0, 3).map((product) => (
                <div key={product.slug} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-gold-300">{product.categoryLabel[locale]}</div>
                  <div className="mt-2 text-lg font-bold">{product.title[locale]}</div>
                  <div className="mt-3 text-sm text-slate-300">{product.price[locale]}</div>
                </div>
              ))}
            </div>
            <Link href={nav("/store")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400">
              Open store
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.whyTitle}</p>
            <h2 className="mt-3 text-3xl font-black text-navy-900">{t.whyBody}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <article key={value.title[locale]} className="rounded-[24px] border border-slate-100 bg-white p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">{value.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{value.description[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.24)]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.galleryTitle}</p>
              <h2 className="mt-2 text-3xl font-black">{locale === "hi" ? "काम का माहौल" : "Behind the work"}</h2>
            </div>
            <Link href={nav("/gallery")} className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
              {locale === "hi" ? "गैलरी खोलें" : "View gallery"}
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {galleryItems.slice(0, 3).map((item) => (
              <div key={item.title[locale]} className={`min-h-48 rounded-[28px] bg-gradient-to-br ${item.accent} p-5 shadow-lg`}>
                <div className="mt-24 rounded-2xl bg-black/20 p-4 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white">{item.title[locale]}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/80">{item.description[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.testimonialsTitle}</p>
            <h2 className="mt-2 text-3xl font-black text-navy-900">{locale === "hi" ? "ग्राहक क्या कहते हैं" : "What clients say"}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-[24px] border border-slate-100 bg-white p-5">
                  <div className="flex gap-1 text-gold-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{testimonial.text[locale]}</p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <div className="text-sm font-bold text-navy-900">{testimonial.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{testimonial.role[locale]}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.faqTitle}</p>
            <h2 className="mt-2 text-3xl font-black text-navy-900">{locale === "hi" ? "त्वरित प्रश्न" : "Quick questions"}</h2>
            <div className="mt-8 space-y-4">
              {faqItems.slice(0, 3).map((item) => (
                <details key={item.question[locale]} className="group rounded-[24px] border border-slate-100 bg-slate-50 p-5 transition-colors open:bg-white">
                  <summary className="cursor-pointer list-none text-base font-bold text-navy-900">
                    {item.question[locale]}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer[locale]}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-gold-500 px-8 py-12 text-navy-950 shadow-[0_24px_70px_rgba(201,168,76,0.24)]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-navy-800">Ready to start</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.ctaTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-navy-800/80">{t.ctaBody}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href={nav("/booking")} className="inline-flex items-center justify-center rounded-full bg-navy-950 px-6 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02]">
                {locale === "hi" ? "बुकिंग करें" : "Book now"}
              </Link>
              <Link href={nav("/contact")} className="inline-flex items-center justify-center rounded-full border border-navy-950/20 bg-white/30 px-6 py-4 text-sm font-bold text-navy-950 transition-colors hover:bg-white/50">
                {locale === "hi" ? "संपर्क करें" : "Contact us"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
