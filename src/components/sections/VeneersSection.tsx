"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sets = [
  {
    before: {
      src: "/conversions/veneers_before_01.png",
      alt: "Before veneers — patient 1",
    },
    after: {
      src: "/conversions/veneers_after_01.png",
      alt: "After veneers — patient 1",
    },
  },
  {
    before: {
      src: "/conversions/veneers_before_02.png",
      alt: "Before veneers — patient 2",
    },
    after: {
      src: "/conversions/veneers_after_02.png",
      alt: "After veneers — patient 2",
    },
  },
  {
    before: {
      src: "/conversions/veneers_before_03.png",
      alt: "Before veneers — patient 3",
    },
    after: {
      src: "/conversions/veneers_after_03.png",
      alt: "After veneers — patient 3",
    },
  },
  {
    before: {
      src: "/conversions/veneers_before_04.png",
      alt: "Before veneers — patient 4",
    },
    after: {
      src: "/conversions/veneers_after_04.png",
      alt: "After veneers — patient 4",
    },
  },
  {
    before: {
      src: "/conversions/veneers_before_05.png",
      alt: "Before veneers — patient 5",
    },
    after: {
      src: "/conversions/veneers_after_05.png",
      alt: "After veneers — patient 5",
    },
  }
];

export default function VeneersSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % sets.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    startTimer();
  };

  return (
    <section className="bg-[var(--color-surface-lowest)] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Left — info panel */}
          <div data-reveal="left" className="lg:sticky lg:top-28">
            <p className="text-primary text-xs  uppercase tracking-[0.2em] mb-3">
              Veneers Focus
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight tracking-tight max-w-lg">
              The Art of Veneers
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400">
              Veneers and smile design sit at the center of Dr. Vikas
              Giri&apos;s cosmetic practice. The approach is built around
              naturally beautiful, harmonious smiles tailored to each individual
              rather than artificial, one-shape-fits-all results.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-primary/20 bg-primary/8 px-5 py-5">
                <p className="text-[10px]  uppercase tracking-[0.22em] text-primary">
                  Signature Approach
                </p>
                <p className="mt-2 text-base leading-relaxed tracking-tight text-white">
                  Precision planning, refined aesthetics, and smile design that
                  preserves a natural sense of character.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Smile Makeovers",
                  "Natural Proportions",
                  "Cosmetic Precision",
                  "Tailored Design",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/6 bg-[var(--color-surface-3)] px-4 py-4 text-sm text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — carousel */}
          <div
            data-reveal="right"
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
            className="self-start lg:pt-12"
          >
            {/* Slide track */}
            <div className="overflow-hidden rounded-[2rem]">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {sets.map((set, i) => (
                  <div key={i} className="min-w-full">
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      {/* Before */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/8 bg-[var(--color-surface-3)]">
                        <Image
                          src={set.before.src}
                          alt={set.before.alt}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 50vw, 28vw"
                          priority={i === 0}
                        />
                        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px]  uppercase tracking-[0.2em] text-gray-300 backdrop-blur-sm">
                          Before
                        </span>
                      </div>

                      {/* After */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/30 bg-[var(--color-surface-3)]">
                        <Image
                          src={set.after.src}
                          alt={set.after.alt}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 50vw, 28vw"
                          priority={i === 0}
                        />
                        <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-black/60 px-3 py-1 text-[10px]  uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots + label */}
            <div className="mt-5 flex items-center justify-center gap-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Patient {active + 1} of {sets.length}
              </p>
              <div className="flex items-center gap-2">
                {sets.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to patient ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-primary w-6 h-2"
                        : "bg-white/20 hover:bg-white/40 w-2 h-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
