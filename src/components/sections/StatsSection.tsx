const stats = [
  { value: '23+', label: 'Years Experience' },
  { value: '5000+', label: 'Patients Served' },
  { value: '1200+', label: 'Surgeries Performed' },
  { value: '15+', label: 'Global Awards' },
];

export default function StatsSection() {
  return (
    <section className="border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              data-reveal="scale"
              style={{ '--reveal-delay': `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">
                {value}
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
