export type Locale = "en";

export function getLocale(value?: string | null): Locale {
  return "en";
}

export function localized<T extends Record<Locale, string>>(
  locale: Locale,
  value: T
): string {
  return value[locale];
}

export function withLocale(href: string, locale: Locale): string {
  return href;
}