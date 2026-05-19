import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import { faqItems } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "FAQ",
    title: "Clear answers for planning, procurement, and deployment.",
    body:
      "If you are comparing services or thinking about a custom setup, start here.",
  },
} as const;

export default async function FaqPage({
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question[locale]} className="group rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_16px_50px_rgba(13,27,42,0.08)] transition-colors open:bg-white">
                <summary className="flex cursor-pointer list-none items-start gap-4 text-lg font-bold text-navy-900">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                  <span>{item.question[locale]}</span>
                </summary>
                <p className="mt-4 pl-9 text-sm leading-7 text-slate-600">{item.answer[locale]}</p>
              </details>
            ))}
          </div>

          <aside className="rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{locale === "hi" ? "अभी भी सवाल?" : "Still have questions?"}</p>
            <h2 className="mt-3 text-3xl font-black">{locale === "hi" ? "टीम से सीधे बात करें" : "Talk to the team directly"}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{locale === "hi" ? "हम सही सेवा, सही पैकेज और सही अगले कदम चुनने में मदद करेंगे।" : "We will help you choose the right service, package, and next step."}</p>
            <Link href={nav("/contact")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400">
              {locale === "hi" ? "संपर्क करें" : "Contact us"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
