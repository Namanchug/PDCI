"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { localeLabels, type Locale } from "@/lib/i18n";

const locales: Locale[] = ["en", "hi"];

function getNextHref(pathname: string, searchParams: URLSearchParams, locale: Locale) {
  const params = new URLSearchParams(searchParams.toString());

  if (locale === "en") {
    params.delete("lang");
  } else {
    params.set("lang", locale);
  }

  const search = params.toString();
  return `${pathname}${search ? `?${search}` : ""}`;
}

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = (searchParams.get("lang") === "hi" ? "hi" : "en") as Locale;

  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-navy-800/80 p-1 text-xs text-white shadow-lg shadow-navy-950/20 backdrop-blur">
      {locales.map((locale) => {
        const active = locale === current;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => router.replace(getNextHref(pathname, searchParams, locale))}
            className={`rounded-full px-3 py-1.5 font-semibold transition-all ${
              active
                ? "bg-gold-500 text-navy-950 shadow-sm"
                : "text-gray-300 hover:text-white"
            }`}
            aria-pressed={active}
          >
            {localeLabels[locale]}
          </button>
        );
      })}
    </div>
  );
}