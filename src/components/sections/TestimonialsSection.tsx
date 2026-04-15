const testimonials = [
  {
    quote:
      'The attention to detail is remarkable. Dr. Vikas explained every step, and the result was far beyond my expectations. Truly a dental atelier.',
    name: 'Julian Thorne',
    role: 'Architect',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnHgX1Tn8wQii-uI7180HTqWAkZ8a04zLhj8swfVj5xFMpoPpnb6qc92E389gh5aOl4E38CIMFRH4vzs8_GlNKCCHt4PPuP61m-7Vvx9mQmbgH0mvAJfsS4BjsVxSZSvw3KrFqpTcohWmHpUh2T9CAH-nwparvF0DpkQt0OsOqTD_l-b2bO7ZwTRSqkp4zb68ALe1uca5mCj7mskOhgxGjVXyMn9afpTUncsw5TprVD9TZWYiECOD7mR7xPplDSgxwTTpffeCkEqU',
  },
  {
    quote:
      "I used to fear dentists, but the calm atmosphere here changed everything. My smile looks so natural. Best decision I've made for my confidence.",
    name: 'Elena Rossi',
    role: 'Gallery Owner',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjx1lS3Kb0_KOh6drXUnxUJh6t9MhcrVcn3FTci7C1Cm0lvdLK27c5x84o8QFOvbnID7tVRAqV1y4vKyeuFIEdbOKyzveL7UUNMW-vHYjYUWreWT3b_2SccMDsmFWhWpZfGz6IWsybKe4ryw53MYdwQKx8kkByGa6850p7AcPcwu6IhTD_yCbC4uf95WFs_3mv1M-cKyhjdORYXhaSUuoswmXDxBZ9FMEjFhev9baJ_WHC2umWMF3mpVZ5aoh7Ipp1BtP2A8VHTNs',
  },
  {
    quote:
      "Excellence redefined. The clinic is beautiful and the treatment was virtually painless. Dr. Vikas is a master of his craft.",
    name: 'Marcus Chen',
    role: 'Creative Director',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-HQgghzdtf7kazKyqQv4Iea-E4qJcVO167IhGFLxkQY8R80gEO8FDjcShtV3bXcjnZknvTIAT-Nm9uFCUlKDWEtTGmHzVXG5Y7EH8KcX-pz7TwuRybChFBLWopao6Ogf1fjaPN3YyOHRFW4ed1kqRzBi8xWJLXrs7Av3yDgyjyVxGThZ7HY8cJH1_dTAYetgnml2QlcffoOYeJuR03z1jtGXWbtQ-KmS-P60BnufQj3djPT40PqdlUHHdx-7TcAgdmqVmbYB3gLQ',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="size-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      <div data-reveal className="text-center mb-16">
        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Patient Stories
        </p>
        <h2 className="text-4xl font-bold text-white">What They Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, role, avatar }, i) => (
          <div
            key={name}
            data-reveal
            style={{ '--reveal-delay': `${i * 0.12}s` } as React.CSSProperties}
            className="relative bg-[var(--color-surface-3)] border border-white/5 rounded-2xl p-8"
          >
            {/* Large quote mark */}
            <span className="absolute top-5 right-6 text-6xl font-black text-primary/10 leading-none select-none">
              &ldquo;
            </span>

            <Stars />

            <p className="text-gray-400 italic text-sm leading-relaxed mb-8 relative z-10">
              &ldquo;{quote}&rdquo;
            </p>

            <div>
              <div className="font-semibold text-sm text-white">{name}</div>
              <div className="text-[10px] text-primary uppercase tracking-widest mt-0.5">
                {role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
