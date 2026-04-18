'use client';

import { useEffect, useRef, useState } from 'react';

const navLinks = ['Home', 'About', 'Service', 'Testimonial', 'Contact'];

const navToSection: Record<string, string> = {
  Home: 'home',
  About: 'about',
  Service: 'service',
  Testimonial: 'testimonial',
  Contact: 'contact',
};

const sectionToNav: Record<string, string> = Object.fromEntries(
  Object.entries(navToSection).map(([k, v]) => [v, k])
);

export default function Navigation() {
  const [active, setActive] = useState('Home');
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const syncViewport = () => setIsMobile(media.matches);

    syncViewport();
    media.addEventListener('change', syncViewport);

    return () => media.removeEventListener('change', syncViewport);
  }, []);

  useEffect(() => {
    function updateIndicator() {
      const container = containerRef.current;
      const activeButton = buttonRefs.current[active];
      if (!container || !activeButton) return;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      setIndicator({ left: buttonRect.left - containerRect.left, width: buttonRect.width, opacity: 1 });
    }
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = sectionToNav[entry.target.id];
            if (label) setActive(label);
          }
        });
      },
      { threshold: 0.4 }
    );
    Object.values(navToSection).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (link: string) => {
    setActive(link);
    setMenuOpen(false);
    const id = navToSection[link];
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isMobile === null) {
    return null;
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      style={{ animation: 'fadeDown 0.6s ease-out both' }}
    >
      <div className="mx-4 mt-4">
        {!isMobile ? (
          <div
            ref={containerRef}
            className="relative max-w-5xl mx-auto flex items-center justify-between rounded-full border border-white/10 bg-black/85 px-2 py-1.5 shadow-2xl backdrop-blur-md pointer-events-auto"
          >
            <div
              className="absolute bottom-1.5 top-1.5 rounded-full bg-primary shadow-lg transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
            />
            <div className="relative z-10 flex items-center gap-1">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link}
                  ref={(el) => { buttonRefs.current[link] = el; }}
                  onClick={() => handleNav(link)}
                  className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${active === link ? 'text-[#141414]' : 'text-gray-300 hover:text-white'}`}
                >{link}</button>
              ))}
            </div>
            <div
              className="relative z-10 flex items-center justify-center px-4 cursor-pointer"
              onClick={() => handleNav('Home')}
            >
              <span className="text-3xl text-primary" style={{ fontFamily: 'var(--font-cursive)' }}>Dr. Vikas</span>
            </div>
            <div className="relative z-10 flex items-center gap-1">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link}
                  ref={(el) => { buttonRefs.current[link] = el; }}
                  onClick={() => handleNav(link)}
                  className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${active === link ? 'text-[#141414]' : 'text-gray-300 hover:text-white'}`}
                >{link}</button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/85 px-4 py-2.5 shadow-2xl backdrop-blur-md pointer-events-auto">
              <div className="cursor-pointer" onClick={() => handleNav('Home')}>
                <span className="text-2xl text-primary" style={{ fontFamily: 'var(--font-cursive)' }}>Dr. Vikas</span>
              </div>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </button>
            </div>

            <div
              className={`mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md pointer-events-auto overflow-hidden transition-all duration-300 ease-out ${
                menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid grid-cols-3 gap-1 p-3">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleNav(link)}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                      active === link ? 'bg-primary text-[#141414]' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >{link}</button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
