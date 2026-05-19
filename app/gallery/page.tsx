import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import { galleryItems } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "Gallery",
    title: "A visual snapshot of the work, care, and readiness behind the scenes.",
    body:
      "These cards represent the rhythm of the organization: training, deployment, care, and planning.",
  },
} as const;

export default async function GalleryPage({
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <article key={item.title[locale]} className={`min-h-72 overflow-hidden rounded-[32px] bg-gradient-to-br ${item.accent} p-6 text-white shadow-[0_24px_70px_rgba(13,27,42,0.15)]`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <Camera className="h-5 w-5" />
                </div>
                <div className="mt-40 rounded-[24px] bg-black/20 p-5 backdrop-blur-sm">
                  <h2 className="text-2xl font-black">{item.title[locale]}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/80">{item.description[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{locale === "hi" ? "अगला कदम" : "Next step"}</p>
              <h2 className="mt-3 text-3xl font-black text-navy-900">{locale === "hi" ? "क्या आप इन्हें अपने प्रोजेक्ट में देखना चाहते हैं?" : "Want this kind of work on your project?"}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{locale === "hi" ? "हम आपकी साइट, इवेंट या संस्थान के लिए समान स्तर की तैयारी दिखा सकते हैं।" : "We can bring the same level of readiness to your site, event, or organization."}</p>
            </div>
            <Link href={nav("/contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400">
              {locale === "hi" ? "डेमो/परामर्श बुक करें" : "Book a demo / consultation"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
