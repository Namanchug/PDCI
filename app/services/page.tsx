import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Target } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import { services } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "Services hub",
    title: "A curated overview of every service we offer.",
    body:
      "Use this page to compare what PDCI does, how each offering differs, and where each one fits best.",
  },
} as const;

export default async function ServicesPage({
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
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title[locale]} className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_16px_50px_rgba(13,27,42,0.08)] transition-transform hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-2xl text-white">{service.icon}</div>
                <h2 className="mt-5 text-xl font-bold text-navy-900">{service.title[locale]}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description[locale]}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-gold-600">
                  {locale === "hi" ? "विस्तृत पेज" : "Detailed page"}
                  <Sparkles className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{locale === "hi" ? "प्रक्रिया" : "Process"}</p>
            <h2 className="mt-3 text-3xl font-black">{locale === "hi" ? "सेवा कैसे दी जाती है" : "How service delivery works"}</h2>
            <div className="mt-8 space-y-4">
              {[
                { title: locale === "hi" ? "जाँच" : "Assess", body: locale === "hi" ? "हम उपयोग केस और जोखिम का मूल्यांकन करते हैं।" : "We review use cases and risk." },
                { title: locale === "hi" ? "योजना" : "Plan", body: locale === "hi" ? "डॉग, हैंडलर और टाइमलाइन का मिलान करते हैं।" : "We match the dog, handler, and timeline." },
                { title: locale === "hi" ? "तैनाती" : "Deploy", body: locale === "hi" ? "टीम दस्तावेज़ के साथ सक्रिय होती है।" : "The team activates with documentation." },
                { title: locale === "hi" ? "समीक्षा" : "Review", body: locale === "hi" ? "हम परिणामों के आधार पर समायोजन करते हैं।" : "We adjust based on results." },
              ].map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-500 text-sm font-black text-navy-950">0{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-300">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{locale === "hi" ? "कहाँ उपयोग करें" : "Best fit"}</p>
            <h2 className="mt-3 text-3xl font-black text-navy-900">{locale === "hi" ? "सही सेवा को सही जगह से जोड़ें" : "Match the right service to the right setting"}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { icon: Shield, title: locale === "hi" ? "परिधि सुरक्षा" : "Perimeter security" },
                { icon: Target, title: locale === "hi" ? "इवेंट प्रवेश" : "Event entry" },
                { icon: Sparkles, title: locale === "hi" ? "कस्टम रिटेनर" : "Custom retainer" },
                { icon: ArrowRight, title: locale === "hi" ? "ट्रेनिंग ट्रैक" : "Training track" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[24px] border border-slate-100 bg-white p-5">
                    <Icon className="h-5 w-5 text-gold-500" />
                    <div className="mt-4 text-lg font-bold text-navy-900">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {locale === "hi"
                        ? "यह सेवा उन संगठनों के लिए उपयुक्त है जो परिणाम और प्रस्तुति दोनों चाहते हैं।"
                        : "This service suits organizations that want results and presentation in equal measure."}
                    </p>
                  </div>
                );
              })}
            </div>
            <Link href={nav("/k9-security-services")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400">
              {locale === "hi" ? "विस्तृत सेवाएँ पढ़ें" : "Read the detailed service page"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
