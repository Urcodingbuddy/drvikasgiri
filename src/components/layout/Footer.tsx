'use client';

import { useEffect, useRef } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const textRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const dot = dotRef.current;
    if (!text || !dot) return;

    const trigger = () => {
      text.classList.add('pen-writing');
      dot.classList.add('pen-dot-move');
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) trigger(); },
      { threshold: 0, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(text);

    // Fallback: fire immediately if already partially in view
    const rect = text.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) trigger();

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-background pt-16 pb-10 overflow-hidden">
      {/* Big cursive name — handwriting reveal */}
      <div className="flex justify-center mb-10">
        <div className="relative inline-block">
          <span
            ref={textRef}
            className="pen-text text-primary leading-none select-none whitespace-nowrap"
            style={{ fontFamily: 'var(--font-cursive)', fontSize: 'clamp(3.2rem, 14.4vw, 14.4vw)' }}
          >
            Dr. Vikas
          </span>
          <span ref={dotRef} className="pen-dot" />
        </div>
      </div>
    </footer>
  );
}
