import { Sparkles, ArrowUpRight } from 'lucide-react';

const ToothIcon = () => (
  <svg className="size-8 text-primary" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z" />
  </svg>
);

const RootIcon = () => (
  <svg className="size-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 .8-3 2.5 0 .8.3 1.5.8 2L7 12l2.5 1.2c-.5.5-.8 1.2-.8 2C8.7 17.2 10.2 18 12 18s3.3-.8 3.3-2.8c0-.8-.3-1.5-.8-2L17 12l-2.8-4.5c.5-.5.8-1.2.8-2C15 3.8 13.5 3 12 3z" />
  </svg>
);

const services = [
  {
    icon: <Sparkles className="size-8 text-primary" strokeWidth={1.5} />,
    title: 'Veneers & Smile Makeovers',
    desc: 'Elegant, natural-looking smile transformations tailored to each individual with refined aesthetic precision.',
    featured: true,
  },
  {
    icon: <ToothIcon />,
    title: 'Teeth Whitening',
    desc: 'Professional cosmetic whitening designed to create a brighter, confident, naturally polished smile.',
    featured: false,
  },
  {
    icon: <RootIcon />,
    title: 'Advanced Endodontics',
    desc: 'Pain-free, precision-driven root canal treatments focused on comfort and long-term tooth preservation.',
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[var(--color-surface-lowest)] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div data-reveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight tracking-tight max-w-md">
              Signature Services of the Atelier
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Cosmetic and restorative treatments shaped by precision, comfort, and naturally beautiful results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc, featured }, i) => (
            <div
              key={title}
              data-reveal
              style={{ '--reveal-delay': `${i * 0.12}s` } as React.CSSProperties}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                featured
                  ? 'bg-[var(--color-surface-3)] border-primary/30'
                  : 'bg-[var(--color-surface-3)] border-white/5'
              }`}
            >
              {featured && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full px-3 py-1">
                  Popular
                </span>
              )}
              <div className="mb-6">{icon}</div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-200"
              >
                Explore Service
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
