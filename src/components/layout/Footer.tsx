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
      { threshold: 0.2 }
    );

    observer.observe(text);

    // Fallback: if already in view on mount, fire immediately
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
            style={{ fontFamily: 'var(--font-cursive)', fontSize: 'clamp(4rem, 18vw, 18vw)' }}
          >
            Dr. Vikas
          </span>
          <span ref={dotRef} className="pen-dot" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-white/5 mb-8" />

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          © {currentYear} Dr. Vikas Giri. All rights reserved.
        </p>

        {/* Social */}
        <div className="flex gap-5">
          <a href="https://www.threads.com/@vikassgiri" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-gray-500 hover:text-primary transition-colors duration-200">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 192 192">
              <path d="M141.537 88.988c-.87-.404-1.71-.786-2.561-1.151-1.482-27.307-16.403-42.94-41.457-43.1h-.14c-15 0-27.453 6.397-35.124 17.966l13.779 9.452c5.73-8.695 14.724-10.548 21.347-10.548h.073c8.25.052 14.474 2.451 18.503 7.128 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.625-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.52 9.792 5.398 18.216 13.733 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.457-.683 22.23-5.436 29.048-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.17-40.059-7.485-51.275-21.743C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.631-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.171 40.526 7.521 52.171 21.848 5.71 7.025 10.015 15.861 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0H96.947C68.871.192 47.229 9.618 32.71 28.046 19.982 44.43 13.424 67.387 13.209 95.999L13.209 96l.001.001c.215 28.612 6.772 51.569 19.5 67.953 14.519 18.428 36.161 27.854 64.237 28.046h.122c24.96-.173 42.555-6.708 57.049-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-19.944-24.723-25.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.462-16.735 1.966-.113 3.895-.168 5.79-.168 6.235 0 12.068.606 17.371 1.766-1.978 24.702-13.58 28.713-23.803 29.272Z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/vikassgiri/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary transition-colors duration-200">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
