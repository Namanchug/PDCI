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
  Star,
} from "lucide-react";

const services = [
  {
    title: "Narcotics Detection",
    description:
      "Discreet K9 screening for controlled substances in vehicles, baggage, cargo, and sensitive facilities.",
  },
  {
    title: "Explosive Detection",
    description:
      "Structured explosive detection sweeps for venues, transport hubs, and critical infrastructure.",
  },
  {
    title: "Patrol & Perimeter Security",
    description:
      "Handler-led patrol teams for visible deterrence, access control, and rapid response support.",
  },
  {
    title: "Event Security",
    description:
      "K9 support for concerts, rallies, festivals, and VIP gatherings with pre-event sweeps and perimeter checks.",
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

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Head of Security",
    text: "PDCI has been an invaluable partner for our site security needs. Their K9 teams are highly professional and effective.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Event Director, Grand Events India",
    text: "We've used PDCI for multiple large-scale events. Their explosive detection teams give us confidence to host safely.",
    rating: 5,
  },
  {
    name: "Col. (Retd.) Arun Verma",
    role: "Security Consultant",
    text: "The quality of training and discipline of PDCI handlers is on par with the best K9 units I've seen globally.",
    rating: 5,
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


  const leaderProfile = {
    name: "Col (Dr) P K Chug (Retd)",
    title: "India's Pioneer in Military & Police K9 Operations",
    imageSrc: "/col-p-k-chug.jpg",
    imageAlt: "Col (Dr) P K Chug (Retd)",
    paragraphs: [
      "Colonel PK Chug is the leading Military and Police K9 Trainer of India who has pioneered enormous work in developing the subject of 'Working Dogs' in the country based on contemporary dog training techniques and introducing the 'Operant Conditioning' to the Police K9 training in India.",
      "He is a former Colonel of the Indian Army (Remount Veterinary Corps - RVC) with an enriching 25 years military service of outstanding order where he was conferred Honours and Awards in nearly every assignment. He had commanded the 'Specialized Army Dog Units' with the Army and Special Forces including his last command of the most prestigious K9 Unit of elite NSG Black Cats. He is known for introducing multiple innovative & inexpensive dog training aids, effective military doctrines and tactically sound solutions to augment the performance of Military and Police Service K9s (PSKs). His command of NSG's K9 Unit, was exemplary for the security organizations where he established the concept of 'Assault K9' in highly risky building interventions, imparted sense of directional training to his dogs for the first time in the world using 'K9 Vision System' while training off-leash sending them away from Handlers directing through wireless radio communications.",
      "He also introduced revolutionary concepts of Canine Remote Delivery System (CRDS), Laser Guided Detection & Patrol K9s and successfully integrated 'Dogs with Drones' for tactical advantages during highly sensitive and risky special operations. After voluntary retirement from active military service, Col Chug was entrusted with pan India responsibility of 'Mainstreaming and Augmentation of Police K9s in the Country' as Head of the newly established 'MHA Police K9 Cell' under the Ministry of Home Affairs (MHA), Government of India for 03 years during which he contributed immensely in standardization of Police K9 standards and best practices. He conducted series of 'Police K9 Workshops', Started 'MHA's Annual National Police K9 Seminars' and Publication of 'National Police K9 Journal' as its founding Editor every six months in vernacular language",
    ],
  };

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
    // Global page wrapper — noise texture + branded text selection
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


      {/* ━━━ LEADERSHIP PROFILE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: `
            radial-gradient(circle at top left, rgba(201,164,90,0.07), transparent 28%),
            radial-gradient(circle at bottom right, rgba(15,23,42,0.03), transparent 35%),
            #eef2f6
          `,
          borderTop: "1px solid rgba(201,164,90,0.12)",
          borderBottom: "1px solid rgba(201,164,90,0.08)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:items-center">
            {/* Image card */}
            <div
              className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[2rem] lg:mx-0"
              style={{
                background: "linear-gradient(145deg, #ffffff, #f3f7fb)",
                boxShadow:
                  "0 18px 40px rgba(16,24,40,0.06), 0 0 0 1px rgba(201,164,90,0.10)",
              }}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={leaderProfile.imageSrc}
                  alt={leaderProfile.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain object-center"
                  style={{ objectPosition: "center 14%", transform: "translateY(-18px)" }}
                />
              </div>
              <div
                className="absolute inset-x-4 bottom-4 rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(201,164,90,0.10)",
                }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.35em]"
                  style={{ color: "#9f7b35" }}
                >
                  Military K9 Leadership
                </p>
                <p className="mt-1 text-sm font-semibold" style={{ color: "#0b1726" }}>
                  {leaderProfile.name}
                </p>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <div>
                <span
                  className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{
                    background: "rgba(201,164,90,0.12)",
                    color: "#9f7b35",
                    border: "1px solid rgba(201,164,90,0.18)",
                  }}
                >
                  Founder & Chief Trainer
                </span>

                {/* Gold accent line */}
                <div
                  className="mt-6 mb-4"
                  style={{
                    width: "5rem",
                    height: "2px",
                    background: "linear-gradient(to right, #c9a45a, transparent)",
                  }}
                />

                <h2
                  className="text-3xl font-bold sm:text-4xl"
                  style={{ color: "#0b1726" }}
                >
                  {leaderProfile.name}
                </h2>
                <p className="mt-2 text-lg font-semibold" style={{ color: "#9f7b35" }}>
                  {leaderProfile.title}
                </p>
              </div>

              <div className="space-y-4 text-base leading-8" style={{ color: "#475569" }}>
                {leaderProfile.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Structured K9 deployments for detection, perimeter control, and
              event support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



            {services.map((service, i) => (
              <div
                key={service.title}
                className="group relative overflow-hidden p-8 transition-all duration-500 rounded-xl"
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
                {/* Ambient glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(201,164,90,0.12), transparent 40%)",
                  }}
                />

                {/* Number */}
                <div
                  className="font-black mb-6 leading-none"
                  style={{
                    fontSize: "3.5rem",
                    background: "linear-gradient(to bottom, rgba(201,164,90,0.95), rgba(159,123,53,0.6))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Divider */}
                <div
                  className="mb-5 transition-all duration-500"
                  style={{
                    width: "2rem",
                    height: "1px",
                    background: "rgba(201,164,90,0.30)",
                  }}
                />

                <h3
                  className="font-bold text-base mb-3 uppercase tracking-wider transition-colors duration-300 group-hover:text-[#9f7b35]"
                  style={{ color: "#0b1726", letterSpacing: "0.08em" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
                  {service.description}
                </p>
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

      {/* CTA section removed per request */}
    </div>
  );
}