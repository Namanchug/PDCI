"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Target,
  Eye,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Globe,
  MapPin,
  Mail,
  Zap,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    title: "Tracking & Trailing Dogs",
    description:
      "Crime scene investigation and suspect tracking through scent work across urban and rural terrain, supporting law enforcement in missing person recovery.",
    href: "/k9-security-services#tracking-trailing",
  },
  {
    title: "Explosive Detection",
    description:
      "Structured explosive detection sweeps for venues, transport hubs, and critical infrastructure. Certified under MHA K9 PET protocol with >90% accuracy.",
    href: "/k9-security-services#explosive-detection",
  },
  {
    title: "Narcotics Detection",
    description:
      "Discreet K9 screening for controlled substances in vehicles, baggage, cargo, airports, and sensitive facilities.",
    href: "/k9-security-services#narcotics-detection",
  },
  {
    title: "Patrol Dogs",
    description:
      "Handler-led patrol teams for visible deterrence, access control, and rapid response. Advanced Assault K9 configuration available for high-risk operations.",
    href: "/k9-security-services#patrol-dogs",
  },
  {
    title: "Event Security Dogs",
    description:
      "K9 support for concerts, rallies, festivals, and VIP gatherings with pre-event sweeps, perimeter checks, and crowd management.",
    href: "/k9-security-services#event-security",
  },
  {
    title: "Behaviour Assessment & Selection",
    description:
      "Scientific evaluation using the MHA-aligned K9 BAT model for selection of pups and adult dogs suited to specific police and security roles.",
    href: "/k9-security-services#behaviour-assessment",
  },
  {
    title: "Proficiency Evaluation & Certification",
    description:
      "Independent third-party K9 PET certification as per MHA AKLAN SOP, with annual accreditation valid for 12 months and six-monthly audit support.",
    href: "/k9-security-services#proficiency-evaluation",
  },
  {
    title: "Pet Dog Training / Boarding & Behaviour Modification",
    description:
      "Science-based obedience training, behaviour modification, and professional boarding for companion dogs at police K9 facility standards.",
    href: "/k9-security-services#pet-dog-training",
  },
];

const whyUs = [
  {
    title: "Government Certified",
    description:
      "All our K9 teams are certified by recognized Indian government and law enforcement agencies.",
    icon: Award,
  },
  {
    title: "Expert Handlers",
    description:
      "Our handlers are ex-military and ex-police professionals with decades of operational experience.",
    icon: Users,
  },
  {
    title: "Rigorous Training",
    description:
      "Every dog undergoes 6–12 months of intensive specialized training before deployment.",
    icon: Shield,
  },
  {
    title: "Pan-India Presence",
    description:
      "Operations across India with rapid deployment capability within 24 hours.",
    icon: CheckCircle,
  },
];

// ─── Carousel setup ────────────────────────────────────────────────────────────

const ORIGINALS = [
  "/home-page-banner/banner-1.jpg",
  "/home-page-banner/banner-2.jpg",
  "/home-page-banner/banner-3.jpg",
  "/home-page-banner/banner-4.jpg",
  "/home-page-banner/banner-5.jpg",
  "/home-page-banner/banner-6.jpg",
  "/home-page-banner/banner-7.jpg",
  "/home-page-banner/banner-8.jpg",
  "/home-page-banner/banner-9.jpg",
  "/home-page-banner/banner-10.jpg",
  "/home-page-banner/banner-11.jpg",
  "/home-page-banner/banner-12.jpg",
  "/home-page-banner/banner-13.jpg",
  "/home-page-banner/banner-14.jpg",
];

const SLIDES = [
  ORIGINALS[ORIGINALS.length - 1],
  ...ORIGINALS,
  ORIGINALS[0],
];

const SLIDE_W = 72;
const GAP = 0.8;
const SLIDE_SPAN = SLIDE_W + GAP;
const TRACK_CENTER_OFFSET = ((SLIDES.length - 1) / 2) * SLIDE_SPAN;
const DURATION = 1600;
const AUTOPLAY_DELAY = 6500;

function getTranslateX(idx: number): string {
  const vw = TRACK_CENTER_OFFSET - idx * SLIDE_SPAN;
  return `calc(-50% + ${vw}vw)`;
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function HomePage() {

  const [index, setIndex] = useState(1);
  const [animating, setAnimating] = useState(true);

  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resettingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);


  // ── Navigation helpers ──────────────────────────────────────────────────────

  const goNext = useCallback(() => {
    setAnimating(true);
    setIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setAnimating(true);
    setIndex((prev) => prev - 1);
  }, []);

  const goToReal = useCallback((realIdx: number) => {
    setAnimating(true);
    setIndex(realIdx + 1);
  }, []);

  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current !== null) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const resetAutoplayTimer = useCallback(() => {
    clearAutoplayTimer();
    autoplayTimerRef.current = setInterval(goNext, AUTOPLAY_DELAY);
  }, [clearAutoplayTimer, goNext]);

  // ── Auto-play ───────────────────────────────────────────────────────────────

  useEffect(() => {
    resetAutoplayTimer();
    return clearAutoplayTimer;
  }, [resetAutoplayTimer, clearAutoplayTimer]);

  // ── Re-enable animation after invisible reset ───────────────────────────────

  useEffect(() => {
    if (!animating && resettingRef.current) {
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimating(true);
          resettingRef.current = false;
        })
      );
      return () => cancelAnimationFrame(raf);
    }
  }, [animating]);

  // ── Infinite-loop boundary detection ───────────────────────────────────────

  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    if (e.propertyName !== "transform") return;

    if (index === SLIDES.length - 1) {
      resettingRef.current = true;
      setAnimating(false);
      setIndex(1);
    } else if (index === 0) {
      resettingRef.current = true;
      setAnimating(false);
      setIndex(ORIGINALS.length);
    }
  }

  // ── Touch / swipe ───────────────────────────────────────────────────────────

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 48) {
      dx < 0 ? goNext() : goPrev();
      resetAutoplayTimer();
    }
  }

  // ── Dot active index ────────────────────────────────────────────────────────

  const dotIdx =
    index === 0
      ? ORIGINALS.length - 1
      : index === SLIDES.length - 1
        ? 0
        : index - 1;

  return (
    // Global page wrapper  -  noise texture + branded text selection
    <div
      className="selection:bg-[#D4A94D] selection:text-black"
      style={{
        backgroundImage: `radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)`,
        backgroundSize: "4px 4px",
      }}
    >

      {/* ━━━ CINEMATIC CAROUSEL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label="Image gallery"
        style={{
          position: "relative",
          height: "clamp(420px, 72vh, 820px)",
          overflow: "hidden",
          background: "#f7f5f0",
          userSelect: "none",
        }}
      >
        {/* ── Track ── */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            display: "flex",
            alignItems: "stretch",
            gap: `${GAP}vw`,
            transform: `translateX(${getTranslateX(index)})`,
            transition: animating
              ? `transform ${DURATION}ms cubic-bezier(0.77, 0, 0.18, 1)`
              : "none",
            willChange: "transform",
          }}
        >
          {SLIDES.map((src, i) => {
            const isActive = i === index;

            return (
              <div
                key={`slide-${i}`}
                style={{
                  position: "relative",
                  height: "100%",
                  flexShrink: 0,
                  width: `${SLIDE_W}vw`,
                  opacity: isActive ? 1 : 0.55,
                  transform: `scale(${isActive ? 1 : 0.94})`,
                  filter: isActive ? "none" : "blur(1px)",
                  transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms ease, filter ${DURATION}ms ease`,
                  boxShadow: isActive
                    ? "0 25px 80px rgba(0,0,0,0.18), 0 0 40px rgba(212,169,77,0.12)"
                    : "none",
                  transformOrigin: "center center",
                }}
              >
                <img
                  src={src}
                  alt=""
                  loading={isActive ? "eager" : "lazy"}
                  aria-hidden="true"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Edge vignette ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(247,245,240,0.92) 0%, transparent 15%, transparent 85%, rgba(247,245,240,0.92) 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* ── Prev arrow ── */}
        <button
          type="button"
          onClick={() => {
            goPrev();
            resetAutoplayTimer();
          }}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(15,23,42,0.08)",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(10px)",
            color: "#16233a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 26, lineHeight: 1 }}>
            ‹
          </span>
        </button>

        {/* ── Next arrow ── */}
        <button
          type="button"
          onClick={() => {
            goNext();
            resetAutoplayTimer();
          }}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(15,23,42,0.08)",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(10px)",
            color: "#16233a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 26, lineHeight: 1 }}>
            ›
          </span>
        </button>

        {/* ── Dot indicators ── */}
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 7,
            zIndex: 10,
          }}
        >
          {ORIGINALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                goToReal(i);
                resetAutoplayTimer();
              }}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === dotIdx ? "true" : undefined}
              style={{
                height: 7,
                borderRadius: 4,
                border: "none",
                padding: 0,
                cursor: "pointer",
                width: i === dotIdx ? 26 : 7,
                background:
                  i === dotIdx
                    ? "linear-gradient(90deg, #D4A94D, #F0D28B)"
                    : "rgba(15,23,42,0.16)",
                boxShadow:
                  i === dotIdx
                    ? "0 0 16px rgba(212,169,77,0.45)"
                    : "none",
                transition:
                  "width 320ms cubic-bezier(0.4,0,0.2,1), background 320ms ease, box-shadow 320ms ease",
              }}
            />
          ))}
        </div>
      </section>


      {/* ━━━ ABOUT PREVIEW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span
                className="font-semibold text-sm tracking-widest uppercase"
                style={{ color: "#9f7b35" }}
              >
                Who We Are
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mt-2 mb-6"
                style={{ color: "#0b1726" }}
              >
                Police Dog Centre India
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  At Police Dog Centre India, we provide specialized training and consultancy
                  to police and law enforcement organizations  -  replacing coercive methods
                  with modern operant conditioning protocols grounded in science and data.
                </p>
                <p>
                  Led by Col (Dr) PK Chug (Retd)  -  India's foremost military and police K9
                  trainer with 25+ years of operational service  -  PDCI sets the national
                  standard for working-dog training, certification, and deployment.
                </p>
              </div>

              {/* Motto strip */}
              <div
                className="mt-8 px-6 py-4 rounded-xl font-bold text-sm tracking-wide"
                style={{
                  background: "linear-gradient(90deg, #c9a45a, #f1dcab)",
                  color: "#0b1726",
                }}
              >
                Our Motto  -  Deter &bull; Detect &bull; Defend &bull; Dominate
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { icon: Award, label: "Govt. Certified" },
                  { icon: Shield, label: "Ex-Military Handlers" },
                  { icon: Users, label: "Pan-India Operations" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2" style={{ color: "#0b1726" }}>
                    <Icon className="w-4 h-4" style={{ color: "#9f7b35" }} />
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: "#0b1726",
                    color: "#c9a45a",
                    boxShadow: "0 8px 30px rgba(11,23,38,0.18)",
                  }}
                >
                  Learn About PDCI
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 25px 70px rgba(11,23,38,0.14)" }}
            >
              <Image
                src="/about-who-we-are.jpg"
                alt="PDCI handler training a Belgian Malinois"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ STATS STRIP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        style={{
          background: "linear-gradient(90deg, #0b1726 0%, #16233a 100%)",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "25+", label: "Years Operational Experience" },
              { value: "1000+", label: "K9 Handlers Trained" },
              { value: "6", label: "Elite NSG Commands" },
              { value: "5", label: "National Accreditations" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-3xl sm:text-4xl font-black mb-1"
                  style={{
                    background: "linear-gradient(to bottom, #f1dcab, #c9a45a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#94a3b8" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ━━━ SERVICES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: `
            radial-gradient(circle at top left, rgba(15,23,42,0.03), transparent 30%),
            radial-gradient(circle at bottom right, rgba(15,23,42,0.03), transparent 35%),
            #eef2f6
          `,
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="font-semibold text-sm tracking-widest uppercase"
              style={{ color: "#9f7b35" }}
            >
              Operational Capabilities
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2"
              style={{ color: "#0b1726" }}
            >
              Professional K9 Security Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: "#475569" }}>
              Comprehensive K9 deployments spanning detection, tracking, patrol, event security, assessment, certification, and companion dog training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group relative overflow-hidden p-7 transition-all duration-500 rounded-xl flex flex-col"
                style={{
                  background: "linear-gradient(180deg, #ffffff, #f3f7fb)",
                  border: "1px solid rgba(15,23,42,0.06)",
                  boxShadow: "0 8px 30px rgba(16,24,40,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 18px 50px rgba(16,24,40,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(16,24,40,0.06)";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(201,164,90,0.12), transparent 40%)",
                  }}
                />
                <div
                  className="font-black mb-5 leading-none"
                  style={{
                    fontSize: "3rem",
                    background: "linear-gradient(to bottom, rgba(201,164,90,0.95), rgba(159,123,53,0.6))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="mb-4 transition-all duration-500"
                  style={{
                    width: "2rem",
                    height: "1px",
                    background: "rgba(201,164,90,0.30)",
                  }}
                />
                <h3
                  className="font-bold text-sm mb-3 uppercase tracking-wider transition-colors duration-300 group-hover:text-[#9f7b35]"
                  style={{ color: "#0b1726", letterSpacing: "0.08em" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#334155" }}>
                  {service.description}
                </p>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(201,164,90,0.15)" }}>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "#9f7b35" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#c9a45a")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9f7b35")}
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/k9-security-services"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(to right, #c9a45a, #f1dcab)",
                color: "#16233a",
                boxShadow: "0 10px 40px rgba(201,164,90,0.28)",
              }}
              onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 16px 55px rgba(201,164,90,0.42)")
              }
              onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 10px 40px rgba(201,164,90,0.28)")
              }
            >
              Explore Full Service Range
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ FORENSIC K9 EDUCATION PREVIEW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b1726 0%, #16233a 60%, #1e3050 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span
                className="font-semibold text-sm tracking-widest uppercase"
                style={{ color: "#c9a45a" }}
              >
                Academia & Science
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-white">
                Forensic K9 Education
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
                In collaboration with the National Forensic Sciences University (NFSU)  -  a
                Ministry of Home Affairs institution  -  PDCI offers India&rsquo;s first
                Professional Diploma in Canine Forensics (PDCF). Six successful batches,
                nearly 150 forensic and police K9 experts trained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: GraduationCap, label: "6-Month Hybrid Diploma" },
                  { icon: BookOpen, label: "NFSU University Certified" },
                  { icon: Globe, label: "International Curriculum" },
                  { icon: Users, label: "150+ Experts Trained" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,164,90,0.15)" }}
                  >
                    <Icon className="w-4 h-4 shrink-0" style={{ color: "#c9a45a" }} />
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/forensic-k9-education"
                className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(to right, #c9a45a, #f1dcab)",
                  color: "#0b1726",
                  boxShadow: "0 10px 40px rgba(201,164,90,0.25)",
                }}
              >
                Explore the Programme
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Key subjects */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,164,90,0.18)",
              }}
            >
              <div className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#c9a45a" }}>
                Programme Highlights
              </div>
              <ul className="space-y-3">
                {[
                  "Fundamentals of Police Service K9s",
                  "Canine Behaviour & Personality",
                  "Modern Police & Military Dog Training",
                  "Canine Forensic Odorology & Scent Management",
                  "Explosive, Narcotics & Cadaver Detection",
                  "Emerging Technologies  -  RASCO, Vapour Wake",
                  "K9 Proficiency Evaluation & Certification",
                  "Court Admissibility of Canine Evidence",
                ].map((subj) => (
                  <li key={subj} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a45a" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>{subj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SEMINARS & WORKSHOPS PREVIEW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: "#f9f6f1",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="font-semibold text-sm tracking-widest uppercase"
              style={{ color: "#9f7b35" }}
            >
              Knowledge Transfer
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2"
              style={{ color: "#0b1726" }}
            >
              Seminars &amp; Workshops
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: "#475569" }}>
              Hands-on K9 workshops with Central Armed Police Forces, state police, and
              participation in national and international seminars worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                org: "NSG",
                fullName: "National Security Guard",
                badge: "Counter-Terrorism",
                location: "NSG Centre, Manesar, Haryana",
                desc: "Elite K9 workshop for NSG Black Cats. Showcased the revolutionary K9 Vision System (KVS)  -  training Assault Dogs on a Wireless Command System using Remote Radio Controlled devices.",
              },
              {
                org: "Indian Army",
                fullName: "Indian Army / RVC",
                badge: "Defence",
                location: "RVC Centre, Meerut Cantonment",
                desc: "Advanced K9 workshop covering Military Working Dog (MWD) doctrines, drone integration with K9 units, and the pioneering Canine Remote Delivery System (CRDS).",
              },
              {
                org: "CRPF",
                fullName: "Central Reserve Police Force",
                badge: "CAPF",
                location: "CRPF Academy, New Delhi",
                desc: "Comprehensive workshop on modern detection and patrol K9 techniques, operant conditioning protocols, and MHA AKLAN SOP compliance for frontline security.",
              },
            ].map((w) => (
              <div
                key={w.org}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(15,23,42,0.07)",
                  boxShadow: "0 8px 30px rgba(16,24,40,0.06)",
                }}
              >
                {/* Badge header */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ background: "#0b1726" }}
                >
                  <div>
                    <div className="text-xl font-black" style={{ color: "#c9a45a" }}>{w.org}</div>
                    <div className="text-xs" style={{ color: "#94a3b8" }}>{w.fullName}</div>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "rgba(201,164,90,0.15)", color: "#c9a45a" }}
                  >
                    {w.badge}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-3 text-xs" style={{ color: "#9f7b35" }}>
                    <MapPin className="w-3 h-3" />
                    {w.location}
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#475569" }}>
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/k9-seminars-workshops"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(to right, #c9a45a, #f1dcab)",
                color: "#16233a",
                boxShadow: "0 10px 40px rgba(201,164,90,0.28)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 55px rgba(201,164,90,0.42)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 40px rgba(201,164,90,0.28)")
              }
            >
              View All Workshops
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ ACCREDITATIONS PREVIEW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="font-semibold text-sm tracking-widest uppercase"
              style={{ color: "#9f7b35" }}
            >
              Verified Credentials
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2"
              style={{ color: "#0b1726" }}
            >
              Accreditations &amp; Recognition
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: "#475569" }}>
              Nationally and internationally recognised  -  PDCI holds accreditations from
              QCI (GeM), KCI, NFSU, ICODD (USA), and Florida International University.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                badge: "NFSU",
                icon: BookOpen,
                title: "Affiliated Institution & Collaborating Partner",
                issuedBy: "National Forensic Sciences University",
                subtext: "Ministry of Home Affairs, Govt. of India",
                highlight: "NFSU Affiliated",
              },
              {
                badge: "QCI / GeM",
                icon: ShieldCheck,
                title: "Accredited Police K9 Centre",
                issuedBy: "Quality Council of India (QCI)",
                subtext: "Government e-Marketplace (GeM)",
                highlight: "ISO 9001:2015",
              },
              {
                badge: "ICODD",
                icon: Globe,
                title: "Advisory Board Member & Assessor",
                issuedBy: "International Commission on Detector Dogs",
                subtext: "USA  -  International Body",
                highlight: "International",
              },
            ].map((acc) => {
              const Icon = acc.icon;
              return (
                <div
                  key={acc.badge}
                  className="rounded-2xl p-7 flex flex-col"
                  style={{
                    background: "linear-gradient(180deg, #f9f6f1, #ffffff)",
                    border: "1px solid rgba(201,164,90,0.20)",
                    boxShadow: "0 8px 30px rgba(16,24,40,0.05)",
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(201,164,90,0.12)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#9f7b35" }} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "#0b1726", color: "#c9a45a" }}
                    >
                      {acc.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#0b1726" }}>
                    {acc.title}
                  </h3>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#9f7b35" }}>
                    {acc.issuedBy}
                  </div>
                  <div className="text-xs mb-4" style={{ color: "#94a3b8" }}>
                    {acc.subtext}
                  </div>
                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg"
                      style={{ background: "rgba(201,164,90,0.10)", color: "#9f7b35" }}
                    >
                      <CheckCircle className="w-3 h-3" />
                      {acc.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/accreditations"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "#0b1726",
                color: "#c9a45a",
                boxShadow: "0 8px 30px rgba(11,23,38,0.20)",
              }}
            >
              View All Accreditations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ CONTACT CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b1726 0%, #16233a 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="font-semibold text-sm tracking-widest uppercase"
            style={{ color: "#c9a45a" }}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-white">
            Ready to Deploy a K9 Team?
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#94a3b8" }}>
            Whether you need explosive detection for an event, a patrol team for your facility,
            or a certification audit  -  our team is ready within 24 hours across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(to right, #c9a45a, #f1dcab)",
                color: "#0b1726",
                boxShadow: "0 10px 40px rgba(201,164,90,0.30)",
              }}
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
