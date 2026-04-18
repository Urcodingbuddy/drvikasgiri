import { CalendarDays, Award, Microscope } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  {
    icon: CalendarDays,
    title: '23+ Years in Practice',
    desc: 'Started in 2001 — seen it all, fixed most of it.',
  },
  {
    icon: Award,
    title: 'International Fellowships',
    desc: 'Fellow of the Royal College of Surgery, Liverpool and the International Council for Dental Research.',
  },
  {
    icon: Microscope,
    title: 'Implant Specialist',
    desc: 'Over 3,000 implants placed. No shortcuts, no surprises.',
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-1)] py-16 md:py-24">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:px-6 md:grid-cols-2 xl:gap-16 xl:px-12">

        {/* ── LEFT: Image ── */}
        <div data-reveal="left" className="relative">
          {/* Decorative corner frame */}
          <div className="absolute -left-3 -top-3 z-10 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-primary/60" />
          <div className="absolute -bottom-3 -right-3 z-10 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-primary/60" />

          {/* Image wrapper */}
          <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface-3)]">
            <div className="aspect-[3/4] w-full relative">
              <Image
                src="/dental_treatment.png"
                alt="Dr. Vikas Giri providing advanced cosmetic dental care"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* Bottom fade overlay */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--color-surface-3)] to-transparent" />
            </div>
          </div>

          {/* Floating credential badge */}
          <div className="absolute right-2 md:-right-4 bottom-6 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/70 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15">
              <Award className="size-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">Credentials</p>
              <p className="text-sm font-bold text-white">RCS Liverpool Fellow</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div data-reveal="right" className="flex flex-col gap-5">

          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              About the Doctor
            </p>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h2 className="text-3xl leading-tight tracking-tight text-white xl:text-4xl">
              Crafting Smiles,{' '}
              <span className="text-primary">Restoring</span>{' '}
              Confidence
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Dr. Vikas Giri has spent more than two decades refining the balance
              between clinical precision and aesthetic dentistry. With a strong
              focus on veneers, smile design, and advanced restorative care, he
              creates naturally beautiful results tailored to each patient.
            </p>
          </div>

          <div
            data-reveal
            style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}
            className="flex flex-wrap gap-3"
          >
            {['Hindi (Native)', 'English (Proficient)', 'Speaker at Dentathon, New Delhi'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-3">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <li
                key={title}
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-[var(--color-surface-3)] px-4 py-3 transition-colors duration-200 hover:border-primary/30"
                data-reveal
                style={{ '--reveal-delay': `${0.15 + i * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                  <Icon className="size-4 text-primary" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white">{title}</h4>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
                <div className="ml-auto shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <svg className="size-4 text-primary" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="group flex items-center gap-2 rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-[#141414] shadow-lg transition-colors duration-200 hover:bg-[var(--color-primary-hover)]">
              Book Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 -960 960 960"
                fill="#141414"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </button>
            <button className="text-sm font-semibold text-gray-400 underline-offset-4 transition-colors hover:text-white hover:underline">
              View credentials
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
