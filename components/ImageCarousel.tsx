"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  heightClass?: string;
  sizes?: string;
}

export default function ImageCarousel({
  images,
  alt,
  heightClass = "h-48",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className={`relative ${heightClass} w-full overflow-hidden`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — photo ${i + 1}`}
          fill
          loading={i === 0 ? "eager" : "lazy"}
          className={`object-cover transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0"
            }`}
          sizes={sizes}
        />
      ))}

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute top-2 right-2 z-10 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-medium text-white">
            {current + 1} / {total}
          </div>

          <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${i === current ? "w-4 bg-white" : "w-1.5 bg-white/45"
                  }`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
