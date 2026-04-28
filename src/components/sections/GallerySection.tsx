"use client";

import Image from "next/image";
import { useState } from "react";

const images = Array.from({ length: 9 }, (_, i) => ({
  src: `/Gallery/gallery_image_${String(i + 1).padStart(2, "0")}.png`,
  alt: `Dr. Vikas Giri dental clinic — photo ${i + 1}`,
}));

const desktopStagger: Record<number, string> = {
  0: "",
  1: "md:mt-12",
  2: "md:mt-6",
};
const mobileStagger: Record<number, string> = { 0: "", 1: "mt-6" };

const MOBILE_INITIAL = 2;

export default function GallerySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div data-reveal className="text-center mb-12">
          <p className="text-primary text-xs  uppercase tracking-[0.2em] mb-3">
            Our Space
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight tracking-tight text-white"
            style={{ fontFamily: "var(--font-cursive)" }}
          >
            The Atelier Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => {
            const hiddenOnMobile = !expanded && i >= MOBILE_INITIAL;

            return (
              <div
                key={img.src}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${(i % 3) * 0.1}s`,
                  } as React.CSSProperties
                }
                className={`group relative overflow-hidden rounded-2xl ${mobileStagger[i % 2]} ${desktopStagger[i % 3]} ${hiddenOnMobile ? "hidden md:block" : ""}`}
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i < 3}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Show more / less — mobile only */}
        <div className="flex justify-center mt-6 md:hidden">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[var(--color-surface-2)] px-6 py-2.5 text-xs  uppercase tracking-widest text-white transition-colors duration-200 hover:border-primary/30 hover:text-primary"
          >
            {expanded
              ? "Show Less"
              : `Show More (${images.length - MOBILE_INITIAL} photos)`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`size-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
