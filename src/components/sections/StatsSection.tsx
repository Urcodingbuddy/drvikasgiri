'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 23,   suffix: '+', label: 'Years Experience' },
  { target: 5000, suffix: '+', label: 'Patients Served' },
  { target: 1200, suffix: '+', label: 'Surgeries Performed' },
  { target: 15,   suffix: '+', label: 'Global Awards' },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ target, suffix, label, delay }: {
  target: number; suffix: string; label: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(target, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal="scale"
      style={{ '--reveal-delay': `${delay}s` } as React.CSSProperties}
    >
      <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map(({ target, suffix, label }, i) => (
            <StatCard
              key={label}
              target={target}
              suffix={suffix}
              label={label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
