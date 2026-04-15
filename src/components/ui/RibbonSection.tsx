'use client';

import { useEffect, useRef, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const services = [
  'Endodontics',
  'Laser Dentistry',
  'General & Preventive Care',
  'Pediatric Dentistry',
  'Preventive Dental Care',
  'Teeth Whitening',
  'Cosmetics',
  'Oral Surgery',
];

// Duplicate for seamless loop
const ribbon = [...services, ...services];

// px per frame at 60fps — tweak for speed
const SPEED = 2.5;

function ToothIcon({ flipped: _ }: { flipped: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="flex-shrink-0 inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22px"
        viewBox="0 -960 960 960"
        width="22px"
        fill="#141414"
      >
        <path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z" />
      </svg>
    </span>
  );
}

export default function RibbonSection() {
  const [toothFlipped, setToothFlipped] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const posRef   = useRef(0);        // current translateX in px
  const dirRef   = useRef(-1);       // -1 = left (scroll down), +1 = right (scroll up)
  const rafRef   = useRef<number>(0);

  // RAF loop — never touches React state, always 60fps
  useEffect(() => {
    const tick = () => {
      const track = trackRef.current;
      if (track) {
        const half = track.scrollWidth / 2;
        posRef.current += dirRef.current * SPEED;

        // Wrap seamlessly
        if (posRef.current <= -half) posRef.current += half;
        if (posRef.current >= 0)     posRef.current -= half;

        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Scroll direction — only flips dirRef, minimal state update for tooth
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y === lastY) return;
      const isDown = y > lastY;
      lastY = y;

      const next = isDown ? -1 : 1;
      if (next !== dirRef.current) {
        dirRef.current = next;
        setToothFlipped(!isDown);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-primary py-[18px]">
      <div
        ref={trackRef}
        style={{ display: 'flex', width: 'max-content', willChange: 'transform' }}
      >
        {ribbon.map((service, i) => (
          <div key={i} className="flex items-center gap-5 flex-shrink-0 px-6">
            <span
              className={`${poppins.className} text-[1.2rem] font-semibold text-[#141414] whitespace-nowrap tracking-wide select-none`}
            >
              {service}
            </span>
            <ToothIcon flipped={toothFlipped} />
          </div>
        ))}
      </div>
    </div>
  );
}
