import Link from "next/link";
import { Award, CheckCircle2, Eye, Shield, Target, Users } from "lucide-react";
import { getLocale, withLocale } from "@/lib/i18n";
import { certifications, team, timeline, values } from "@/lib/site-content";

const copy = {
  en: {
    eyebrow: "About PDCI",
    title: "A modern K9 organization with discipline at its core.",
    body:
      "From training and deployment to consultation and aftercare, we manage K9 security as a complete operating system rather than a one-off service.",
    mission: "Mission",
    missionBody:
      "Deliver dependable, certified, and calm security presence through expertly trained dogs and handlers.",
    vision: "Vision",
    visionBody:
      "Set the benchmark for premium K9 operations in India through service quality, responsiveness, and trust.",
    journey: "Journey",
    values: "Values",
    team: "Leadership",
    certs: "Certifications",
  },
} as const;

export default async function AboutPage({
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
            <Link href="/contact" className="rounded-full bg-gold-500 px-5 py-3 font-bold text-navy-950 transition-transform hover:scale-[1.02]">
              Contact team
            </Link>
            <Link href="/services" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white/10">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
            <div className="flex items-center gap-3 text-gold-600">
              <Shield className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">{t.mission}</p>
            </div>
            <h2 className="mt-4 text-3xl font-black text-navy-900">{t.missionBody}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Our team delivers solutions that are clear, calm, and immediately operational.
            </p>
          </article>

          <article className="rounded-[32px] border border-gold-500/20 bg-gold-500 p-8 text-navy-950 shadow-[0_24px_70px_rgba(201,168,76,0.24)]">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">{t.vision}</p>
            </div>
            <h2 className="mt-4 text-3xl font-black">{t.visionBody}</h2>
            <p className="mt-4 text-sm leading-7 text-navy-900/80">
              We bring trust, polish, and measurable outcomes to every project.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.journey}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-black text-gold-300">{item.year}</div>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.values}</p>
          <h2 className="mt-2 text-3xl font-black text-navy-900">What we stand for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-[24px] border border-white/70 bg-white/85 p-6 shadow-[0_16px_50px_rgba(13,27,42,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(13,27,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.team}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="rounded-[24px] border border-slate-100 bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{member.name}</h3>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-600">{member.role}</div>
                <div className="mt-2 text-sm font-semibold text-slate-500">{member.experience}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-navy-950 p-8 text-white shadow-[0_24px_70px_rgba(6,13,21,0.25)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.certs}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {certifications.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
