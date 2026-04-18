"use client";

import Image from "next/image";

const quoteWords = [
  "Where",
  "expertise",
  "meets",
  "elegance,",
  "and",
  "every",
  "smile",
  "is",
  "designed",
  "to",
  "perfection.",
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-1 flex-col items-center overflow-hidden bg-background pb-0 pt-32">
      {/* Top Hello Bubble */}
      <div
        className="relative inline-flex items-center"
        style={{ animation: "fadeDown 0.5s ease-out 0.1s both" }}
      >
        <div className="z-10 rounded-full border border-gray-700/50 bg-neutral-900 px-8 py-2">
          <span className="text-gray-200 font-semibold text-sm">Hello!</span>
        </div>
        {/* Golden sparks */}
        <svg
          className="absolute -right-3 -top-2 z-0 size-10 rotate-12"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 2 L14 7"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M22 6 L18.5 9.5"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M26 14 L21 14"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Headline area */}
      <div
        className="relative mt-8 shrink-0 px-4 text-center"
        style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}
      >
        <h1 className="relative mb-2 inline-block text-center text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
          <span className="text-primary">Dr. Vikas Giri</span>
          <br />
          Veneers &amp; Cosmetic Dentist
          {/* Bottom left cyan vector slashes relative to the text */}
          <div
            className="absolute -left-12 bottom-2 hidden -rotate-12 opacity-90 md:block"
          >
            <svg className="size-10" viewBox="0 0 48 48" fill="none">
              <path
                d="M12 40 L30 12"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M24 44 L42 16"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M38 46 L46 34"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </h1>
      </div>

      {/* Mobile-only quote + stats */}
      <div
        className="lg:hidden mt-3 px-8 flex flex-col items-center gap-3"
        style={{ animation: "fadeUp 0.6s ease-out 0.35s both" }}
      >
        <p className="text-center text-sm leading-relaxed text-gray-400">
          &ldquo;{quoteWords.join(' ')}&rdquo;
        </p>
        <div className="flex items-center gap-2">
          <p className="text-white text-2xl font-extrabold tracking-tight">23+ Years</p>
          <span className="text-gray-600">·</span>
          <p className="text-gray-400 text-sm font-medium">Experience</p>
          <span className="text-gray-600">·</span>
          <div className="flex gap-0.5">
            {[0,1,2,3,4].map((i) => (
              <svg key={i} className="size-4" viewBox="0 0 24 24" fill="#FFC107">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout container (Quote - Doctor - Experience) */}
      <div className="relative mx-auto mt-6 flex min-h-0 w-full max-w-7xl flex-1 items-end justify-center px-6 -mb-1 lg:justify-between lg:px-12 xl:px-20">
        {/* LEFT: Quote Block — side panel on lg+, hidden on mobile (shown above) */}
        <div
          className="z-20 mb-[15vh] hidden w-72 lg:block"
          style={{ animation: "slideInLeft 0.7s ease-out 0.4s both" }}
        >
          <h2 className="text-primary text-7xl font-sans font-black leading-none mb-1 opacity-90">
            &ldquo;
          </h2>
          <p className="max-w-72 text-lg leading-relaxed text-gray-400">
            {quoteWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="inline-block animate-[fadeUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.45 + index * 0.04}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>

        {/* CENTER: Doctor Semicircle - Scales perfectly proportional to available height */}
        <div
          className="relative flex h-full w-full max-w-xl shrink-0 aspect-[12/13] flex-col items-center justify-end lg:max-w-2xl"
          style={{ animation: "fadeUp 0.7s ease-out 0.3s both" }}
        >
          {/* Cyan Dome SVG Background provided by user */}
          <div className="pointer-events-none absolute -inset-x-16 -bottom-16 z-0 h-[110%] origin-bottom scale-[1.4] md:inset-x-0 md:h-[90%] md:scale-110">
            <Image
              src="/semi-circle.svg"
              alt="Background"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Doctor Image */}
          <div
            className="pointer-events-none relative -bottom-16 z-10 h-[95%] w-[90%] origin-bottom scale-[1.4] md:scale-[1.2]"
          >
            <Image
              src="/doctor.png"
              alt="Dr. Vikas Giri — Veneers and Cosmetic Dentist"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-contain object-bottom drop-shadow-2xl"
              priority
              style={{ animation: "heroRise 0.4s ease-out 0.15s" }}
            />
          </div>

          {/* Glassmorphic CTA Pill - overlays doctor image */}
          <div
            className="absolute bottom-[8%] left-1/2 z-20 flex w-max -translate-x-1/2 items-center rounded-full border border-white/10 bg-black/55 p-1.5 shadow-2xl backdrop-blur-2xl"
            style={{ animation: "fadeUp 0.6s ease-out 0.8s both" }}
          >
            <button className="group flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-[#141414] shadow-lg md:px-8 md:py-3 md:text-base lg:px-10">
              View Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 md:size-6 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                viewBox="0 -960 960 960"
                fill="#141414"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </button>
            <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white md:px-8 md:py-3 md:text-base lg:px-10">
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* RIGHT: Experience stats */}
        <div
          className="z-20 mb-[20vh] hidden w-52 flex-col items-start text-left lg:flex lg:items-end lg:text-right"
          style={{ animation: "slideInRight 0.7s ease-out 0.4s both" }}
        >
          {/* Gold Stars */}
          
          <p className="text-white text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight">
            23+ Years
          </p>
          <p className="text-gray-400 font-medium text-lg tracking-wide">
            Experience
          </p>
          <div className="flex gap-1 mb-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className="size-6"
                viewBox="0 0 24 24"
                fill="#FFC107"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
