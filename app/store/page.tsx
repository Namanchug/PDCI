import Link from "next/link";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import StoreCatalog from "@/components/StoreCatalog";
import { storeProducts } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "PDCI Store",
    title: "A premium catalog for gear, service packages, and branded pieces.",
    body:
      "This is an inquiry-led store section: browse the catalog, filter by category, and contact the team for ordering or custom bundles.",
  },
} as const;

export default async function StorePage({
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
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            {storeProducts.slice(0, 3).map((product) => (
              <article key={product.slug} className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_16px_50px_rgba(13,27,42,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy-900">{product.title[locale]}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{product.description[locale]}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold-600">
                  <Sparkles className="h-4 w-4" />
                  {product.badge[locale]}
                </div>
              </article>
            ))}
          </div>

          <StoreCatalog locale={locale} products={storeProducts} />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gold-500 px-8 py-12 text-navy-950 shadow-[0_24px_70px_rgba(201,168,76,0.24)]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-navy-800">{locale === "hi" ? "ऑर्डर नोट" : "Ordering note"}</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{locale === "hi" ? "कस्टम बंडल चाहिए?" : "Need a custom bundle?"}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-navy-800/80">{locale === "hi" ? "हम gear, packages, और merchandise को एक ही इनक्वायरी में जोड़ सकते हैं।" : "We can combine gear, packages, and merchandise in a single inquiry."}</p>
            </div>
            <Link href={nav("/contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-950 px-6 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02]">
              {locale === "hi" ? "बिक्री टीम से पूछें" : "Talk to sales"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
