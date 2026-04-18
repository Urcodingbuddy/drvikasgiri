import Image from 'next/image';

const comparisonPoints = [
  {
    label: 'Before',
    title: 'Smile Concerns',
    image: '/conversions/veneers_before_01.png',
    points: ['Discoloration', 'Chips or worn edges', 'Asymmetry', 'Confidence hesitation'],
  },
  {
    label: 'After',
    title: 'Smile Design Outcome',
    image: '/conversions/veneers_after_01.png',
    points: ['Balanced proportions', 'Refined brightness', 'Natural harmony', 'Confident presence'],
  },
];

export default function VeneersSection() {
  return (
    <section className="bg-[var(--color-surface-lowest)] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div data-reveal="left" className="lg:sticky lg:top-28">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Veneers Focus
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight tracking-tight max-w-lg">
              The Art of Veneers
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400">
              Veneers and smile design sit at the center of Dr. Vikas Giri&apos;s
              cosmetic practice. The approach is built around naturally beautiful,
              harmonious smiles tailored to each individual rather than artificial,
              one-shape-fits-all results.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-primary/20 bg-primary/8 px-5 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  Signature Approach
                </p>
                <p className="mt-2 text-base leading-relaxed tracking-tight text-white">
                  Precision planning, refined aesthetics, and smile design that
                  preserves a natural sense of character.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'Smile Makeovers',
                  'Natural Proportions',
                  'Cosmetic Precision',
                  'Tailored Design',
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

          <div
            data-reveal="right"
            style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}
            className="self-start"
          >
            <div className="w-[64%] mx-auto rounded-[2rem] border border-white/6 bg-[var(--color-surface-3)] p-4 md:p-5 space-y-4">
              {comparisonPoints.map(({ label, title, image, points }, index) => (
                <article
                  key={label}
                  data-reveal
                  style={{ '--reveal-delay': `${0.12 + index * 0.08}s` } as React.CSSProperties}
                  className={`w-full rounded-[1.5rem] border overflow-hidden ${
                    label === 'After'
                      ? 'border-primary/25 bg-[linear-gradient(180deg,rgba(191,145,75,0.08),rgba(26,24,21,0.96))]'
                      : 'border-white/8 bg-[var(--color-surface-1)]'
                  }`}
                >
                  <div className="relative w-full aspect-[3.84/1.3] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${label} — ${title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
                      {label}
                    </span>
                  </div>

                  <div className="px-5 py-4 text-center">
                    <h3 className="text-sm font-semibold tracking-tight text-white mb-3">{title}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {points.map((point) => (
                        <span
                          key={point}
                          className="text-[11px] text-gray-400 border border-white/8 rounded-full px-3 py-1"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
