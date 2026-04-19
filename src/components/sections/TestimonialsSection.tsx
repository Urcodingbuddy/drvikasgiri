'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote:
      'Exceptional care and attention to detail. A genuinely seamless and reassuring experience. Highly recommend!',
    name: 'Moswain Welsh Antao',
  },
  {
    quote:
      'I had my whitening done today with Dr. Vikas, and I just want to sincerely thank him for his professionalism and attention to detail. He was incredibly kind, made me feel comfortable throughout the entire process, and truly took the time to ensure I got the best possible result. I really appreciate the care and effort he put into everything.',
    name: 'Ayette Mezni',
  },
];

function Stars() {
  return (
    <div className="mb-5 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="size-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const LIMIT = 107;

function QuoteText({ quote }: { quote: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > LIMIT;
  const displayed = isLong && !expanded ? quote.slice(0, LIMIT).trimEnd() : quote;

  return (
    <p className="relative z-10 mb-10 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-[1.35rem]">
      &ldquo;{displayed}
      {isLong && !expanded && (
        <>
          {'... '}
          <button
            onClick={() => setExpanded(true)}
            className="text-primary underline-offset-2 hover:underline text-base font-medium"
          >
            read more
          </button>
        </>
      )}
      {expanded && <>&rdquo;</>}
      {!expanded && !isLong && <>&rdquo;</>}
    </p>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      <div data-reveal className="mb-12 text-center">
        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Patient Stories
        </p>
        <h2 className="text-4xl tracking-tight text-white">What They Say</h2>
      </div>

      <div
        data-reveal
        className="rounded-[2rem] border border-white/6 bg-[var(--color-surface-3)] p-5 md:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/8 bg-[var(--color-surface-1)] p-5 md:p-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                Patient Rating
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-white">4.9</span>
                <span className="mb-1.5 text-sm text-gray-400">/ 5</span>
              </div>
              <div className="mt-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-500">120+ verified patient reviews</p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Show previous review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition-colors duration-200 hover:border-primary/30 hover:text-primary"
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Show next review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition-colors duration-200 hover:border-primary/30 hover:text-primary"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          <article className="relative rounded-[1.5rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(191,145,75,0.1),rgba(17,17,17,0.94)_35%,rgba(17,17,17,1)_100%)] p-7 md:p-10">
            <span className="absolute right-6 top-5 select-none text-6xl font-black leading-none text-primary/10">
              &ldquo;
            </span>

            <Stars />

            <QuoteText key={activeIndex} quote={activeTestimonial.quote} />

            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-base font-medium tracking-tight text-white">
                  {activeTestimonial.name}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-primary">
                  Review Placeholder
                </div>
              </div>

              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      index === activeIndex ? 'w-10 bg-primary' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
