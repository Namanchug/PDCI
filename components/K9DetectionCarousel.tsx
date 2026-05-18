"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const ORIGINALS = [
  "/k9-detection/k9-1.jpg",
  "/k9-detection/k9-2.jpg",
  "/k9-detection/k9-3.jpg",
  "/k9-detection/k9-4.jpg",
  "/k9-detection/k9-5.jpg",
  "/k9-detection/k9-6.jpg",
];

const SLIDES = [ORIGINALS[ORIGINALS.length - 1], ...ORIGINALS, ORIGINALS[0]];

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

export default function K9DetectionCarousel() {
  const [index, setIndex] = useState(1);
  const [animating, setAnimating] = useState(true);

  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resettingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

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

  useEffect(() => {
    resetAutoplayTimer();
    return clearAutoplayTimer;
  }, [resetAutoplayTimer, clearAutoplayTimer]);

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

  const dotIdx =
    index === 0
      ? ORIGINALS.length - 1
      : index === SLIDES.length - 1
        ? 0
        : index - 1;

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="K9 detection photo gallery"
      style={{
        position: "relative",
        height: "clamp(300px, 52vh, 620px)",
        overflow: "hidden",
        background: "#f7f5f0",
        userSelect: "none",
      }}
    >
      {/* Track */}
      <div
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
              key={`k9-slide-${i}`}
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
                  ? "0 25px 80px rgba(0,0,0,0.55), 0 0 40px rgba(212,169,77,0.18)"
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

      {/* Edge vignette */}
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

      {/* Prev arrow */}
      <button
        type="button"
        onClick={() => { goPrev(); resetAutoplayTimer(); }}
        aria-label="Previous slide"
        style={{
          position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
          zIndex: 10, width: 44, height: 44, borderRadius: "50%",
          border: "1px solid rgba(15,23,42,0.08)", background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)", color: "#16233a",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", transition: "background 180ms ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,1)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.92)")}
      >
        <span style={{ fontSize: 26, lineHeight: 1, marginRight: 2, userSelect: "none" }}>‹</span>
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={() => { goNext(); resetAutoplayTimer(); }}
        aria-label="Next slide"
        style={{
          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
          zIndex: 10, width: 44, height: 44, borderRadius: "50%",
          border: "1px solid rgba(15,23,42,0.08)", background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)", color: "#16233a",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", transition: "background 180ms ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,1)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.92)")}
      >
        <span style={{ fontSize: 26, lineHeight: 1, marginLeft: 2, userSelect: "none" }}>›</span>
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: 7, zIndex: 10,
        }}
      >
        {ORIGINALS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => { goToReal(i); resetAutoplayTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === dotIdx ? "true" : undefined}
            style={{
              height: 7, borderRadius: 4, border: "none", padding: 0, cursor: "pointer",
              width: i === dotIdx ? 26 : 7,
              background: i === dotIdx
                ? "linear-gradient(90deg, #D4A94D, #F0D28B)"
                : "rgba(15,23,42,0.16)",
              boxShadow: i === dotIdx ? "0 0 16px rgba(212,169,77,0.45)" : "none",
              transition: "width 320ms cubic-bezier(0.4,0,0.2,1), background 320ms ease, box-shadow 320ms ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
