"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Exceptional care and attention to detail. A genuinely seamless and reassuring experience. Highly recommend!",
    name: "Moswain Welsh Antao",
  },
  {
    quote:
      "I had my whitening done today with Dr. Vikas, and I just want to sincerely thank him for his professionalism and attention to detail. He was incredibly kind, made me feel comfortable throughout the entire process, and truly took the time to ensure I got the best possible result. I really appreciate the care and effort he put into everything.",
    name: "Ayette Mezni",
  },
  {
    quote:
      "My overall experience is very good. He is quite knowledgeable and having long experiences. He is quite familiar with modern techniques.",
    name: "Dharmendra Routray",
  },
  {
    quote:
      "I recently completed my aligner treatment with Dr. Vikas, and I couldn't be happier with the results! From day one, the entire process was smooth, professional, and completely stress-free. What really stands out is the technology used at the clinic and Dr. Vikas's genuine passion for his work. He makes sure you are comfortable throughout every appointment, and his attention to detail is reflected in the perfect results I'm seeing now. If you are looking for top-tier dental care in Dubai, I highly recommend visiting him. You definitely won't be disappointed!",
    name: "Plaksha",
  },
  {
    quote:
      "I had a wonderful experience with Dr. Vikas Giri. He took the time to explain the entire process, which made me feel at ease during every appointment. The results of my treatment are excellent and I highly recommend his services to anyone in Dubai looking for a reliable dentist.",
    name: "Rajesh Kumar",
  },
  {
    quote:
      "Fantastic experience with Dr. Vikas! They treated my 6-year-old for a descaling procedure and were professional, gentle, and very efficient. The office has a great atmosphere for kids. My son actually enjoyed his visit — which is a huge win for any parent!",
    name: "Santhosh Kumar",
  },
  {
    quote:
      "So happy to have one experienced yet vocal Dentist Dr Vikas Giri in our surrounding. He has given me all the knowledge required well in advance and was available throughout the treatment. Highly recommend.",
    name: "Aprajita Dewan",
  },
  {
    quote:
      "Thank you for your professionalism and gentle care — you made the experience truly comfortable.",
    name: "Niks Sharma",
  },
  {
    quote:
      "I got both my children's treatment done through Dr. Vikas. I found him to be extremely kind and caring. And also very good with his work. My daughter has got her teeth aligned through the use of invisible tooth aligners designed by Dr. Vikas. Highly recommended especially for crooked teeth.",
    name: "Abhilasha Goswami",
  },
  {
    quote:
      "Dr. Vikas was incredibly kind and patient with my daughter, Thwisha, while she was getting a tooth extracted. What could have been a scary experience for a child was completely stress-free because of how gentle and caring the doctor was. Highly recommended.",
    name: "Ayyanar Karthick",
  },
  {
    quote:
      "Dr Vikas is an amazing dentist and someone our entire family trusts completely. Extremely patient, gentle and reassuring especially with children. The quality of care, cleanliness of the clinic and overall experience are excellent. Highly recommend him for anyone looking for a trusted and skilled dentist.",
    name: "Jayasree Santhosh",
  },
  {
    quote:
      "If you are looking for a dentist who is both highly skilled and incredibly kind, Dr. Vikas Giri is the one to see. He treated me with great care and professionalism during my recent visit. It's rare to find a doctor who makes you feel so at ease during dental work. Thank you, Dr. Vikas, for the wonderful care!",
    name: "Bennet Joshua",
  },
];

function Stars() {
  return (
    <div className="mb-5 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="size-4 text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
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
  const displayed =
    isLong && !expanded ? quote.slice(0, LIMIT).trimEnd() : quote;

  return (
    <p className="relative z-10 mb-10 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-[1.35rem]">
      &ldquo;{displayed}
      {isLong && !expanded && (
        <>
          {"... "}
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
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      <div data-reveal className="mb-12 text-center">
        <p className="text-primary text-xs  uppercase tracking-[0.2em] mb-3">
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
              <p className="text-[10px]  uppercase tracking-[0.24em] text-primary">
                Patient Rating
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl  tracking-tight text-white">4.9</span>
                <span className="mb-1.5 text-sm text-gray-400">/ 5</span>
              </div>
              <div className="mt-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="size-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-500">
                120+ verified patient reviews
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Show previous review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition-colors duration-200 hover:border-primary/30 hover:text-primary"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Show next review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition-colors duration-200 hover:border-primary/30 hover:text-primary"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </span>
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
              <div className="text-base font-medium tracking-tight text-white">
                {activeTestimonial.name}
              </div>
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      index === activeIndex
                        ? "w-10 bg-primary"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
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
