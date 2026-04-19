'use client';

import { useEffect, useRef, useState } from 'react';

const navLinks = ['Home', 'Service', 'About', 'Credentials', 'Why Us', 'Gallery', 'Testimonial', 'Contact'];

const navToSection: Record<string, string> = {
  Home: 'home',
  Service: 'service',
  About: 'about',
  Credentials: 'credentials',
  'Why Us': 'why-us',
  Gallery: 'gallery',
  Testimonial: 'testimonial',
  Contact: 'contact',
};

const sectionToNav: Record<string, string> = Object.fromEntries(
  Object.entries(navToSection).map(([k, v]) => [v, k])
);

export default function Navigation() {
  const [active, setActive] = useState('Home');
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [snap, setSnap] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isManualNav = useRef(false);

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
  }, [active, isMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isManualNav.current) {
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
    // Snap pill instantly to target, bypassing the slide animation
    const container = containerRef.current;
    const targetButton = buttonRefs.current[link];
    if (container && targetButton) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = targetButton.getBoundingClientRect();
      setSnap(true);
      setIndicator({ left: buttonRect.left - containerRect.left, width: buttonRect.width, opacity: 1 });
      requestAnimationFrame(() => requestAnimationFrame(() => setSnap(false)));
    }

    setActive(link);
    setMenuOpen(false);
    isManualNav.current = true;
    const id = navToSection[link];
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    let scrollTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isManualNav.current = false;
        window.removeEventListener('scroll', onScroll);
      }, 150);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  };

  if (isMobile === null) {
    return null;
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      style={{ animation: 'fadeDown 0.6s ease-out both', willChange: 'transform' }}
    >
      <div className="mx-4 mt-4">
        {!isMobile ? (
          <div
            ref={containerRef}
            className="relative max-w-5xl mx-auto flex items-center justify-between rounded-full border border-white/10 bg-black/90 px-2 py-1.5 shadow-2xl backdrop-blur-sm pointer-events-auto"
          >
            <div
              className={`absolute bottom-1.5 top-1.5 rounded-full bg-primary shadow-lg ${snap ? '' : 'transition-all duration-300 ease-out'}`}
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
            />
            <div className="relative z-10 flex items-center gap-1">
              {navLinks.slice(0, 4).map((link) => (
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
              {navLinks.slice(4).map((link) => (
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
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/90 px-4 py-2.5 shadow-2xl backdrop-blur-sm pointer-events-auto">
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
              className={`mt-2 rounded-2xl border border-white/10 bg-[#0a0a0a]/98 backdrop-blur-sm pointer-events-auto overflow-hidden transition-all duration-300 ease-out ${
                menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-3 pt-3 pb-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-primary/70 px-2 mb-2">Navigation</p>
                <div className="space-y-0.5">
                  {navLinks.map((link, index) => (
                    <button
                      key={link}
                      onClick={() => handleNav(link)}
                      className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 ${
                        active === link
                          ? 'bg-primary text-[#141414]'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-bold tabular-nums w-4 ${active === link ? 'text-[#141414]/50' : 'text-primary/60'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-semibold">{link}</span>
                      </div>
                      {active === link && (
                        <svg className="size-3" viewBox="0 -960 960 960" fill="currentColor">
                          <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 pt-2">
                <div className="h-px w-full bg-white/5 mb-3" />
                <button
                  onClick={() => { setMenuOpen(false); document.getElementById('book-mobile')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="group w-full flex items-center justify-between rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-semibold text-[#141414] shadow-lg"
                >
                  <span>Book Consultation</span>
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-black/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-[15px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 -960 960 960" fill="white">
                      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
