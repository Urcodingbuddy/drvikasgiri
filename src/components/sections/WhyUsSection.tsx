import Image from 'next/image';

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      {/* Background glow top-right */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-[480px] w-[480px] rounded-full bg-primary/5 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 xl:px-12">

        {/* ── Top bento row ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">

          {/* Headline card — spans 3 cols */}
          <div
            data-reveal="left"
            className="flex flex-col justify-between rounded-3xl border border-white/5 bg-[var(--color-surface-1)] p-8 md:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Choose Us</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white xl:text-4xl 2xl:text-5xl">
                The Precision of a{' '}
                <span className="text-primary">Master,</span>
                <br />
                The Comfort of Home
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
                We leverage 3D imaging and laser dentistry to ensure your journey
                is as smooth as the results we deliver. Our clinic is a sanctuary
                from the typical dental experience.
              </p>
            </div>
            {/* Stat pill row */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { value: '5,000+', label: 'Patients treated' },
                { value: '98%', label: 'Satisfaction rate' },
                { value: '23+', label: 'Years of expertise' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-full border border-white/8 bg-[var(--color-surface-3)] px-4 py-2"
                >
                  <span className="text-sm font-bold text-white">{value}</span>
                  <span className="ml-1.5 text-xs text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinic image card — spans 2 cols */}
          <div
            data-reveal="right"
            style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}
            className="relative overflow-hidden rounded-3xl md:col-span-2 min-h-[260px] md:min-h-0"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe4VWSbYR0txmhkIZBn9v6NAtHq988_V3mZz5h1UYaUZ2tkE5TRR8THU2dVTgjNFknxBQxGQ3HcuaLwQgGCMjtJLDe4JFZckgUNNKjbxln4hUxr7x57viuvEp8xDSzyCs20_h9JPDDppWl_Crbp7IviRqvsi9gCQv6vhgZfYHiJhIxBvbuioRu8Vs91jmD3J5RC_JUDWXfLPFYK5l52bTOSOkxK5-6CcHu7ngAVOyUODhUy-_4NFN14BW1DBdIFOUy7bZu4LmFrVE"
              alt="Modern dental clinic interior"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Label pinned to bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Our Clinic
              </p>
              <p className="mt-0.5 text-sm font-bold text-white">
                State-of-the-Art Facility
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
