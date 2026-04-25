const MI = ({
  icon,
  className,
}: {
  icon: string | { d: string; vb?: string };
  className?: string;
}) => {
  const isObj = typeof icon !== "string";
  const d = isObj ? icon.d : icon;
  const vb = isObj && icon.vb ? icon.vb : "0 0 24 24";
  return (
    <svg
      className={className}
      viewBox={vb}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
};

// Google Material Icons paths
const icons = {
  auto_awesome:
    "M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",
  light_mode:
    "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06c-.39-.39-1.03-.39-1.41 0zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0z",
  medical_services:
    "M20 6h-2.18c.07-.31.18-.62.18-.99C18 3.34 16.66 2 15.01 2c-.88 0-1.66.36-2.23.93L12 3.67l-.78-.74C10.64 2.36 9.86 2 8.99 2 7.34 2 6 3.34 6 4.99c0 .38.11.69.18 1.01H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM15.01 4c.55 0 .99.45.99 1.01 0 .56-.44 1.01-.99 1.01-.56 0-1.01-.45-1.01-1.01S14.45 4 15.01 4zM9 4.99C9 4.45 9.45 4 9.99 4c.56 0 1.01.45 1.01.99C11 5.55 10.55 6 9.99 6 9.45 6 9 5.55 9 4.99zM17 14h-4v4h-2v-4H7v-2h4V8h2v4h4v2z",
  bolt: "M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z",
  health_and_safety:
    "M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z",
  child_care:
    "M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z",
  event_available:
    "M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z",
  content_cut:
    "M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z",
  spa: "M15.5 3C13.66 3 12 3.83 11 5.17 10 3.83 8.34 3 6.5 3 3.42 3 1 5.42 1 8.5c0 3.77 3.4 6.86 8.55 11.53L11 21.35l1.45-1.32C17.6 15.36 21 12.27 21 8.5 21 5.42 18.58 3 15.5 3zm-4.4 15.55l-.1.1-.1-.1C6.41 14.24 3 11.39 3 8.5 3 6.5 4.5 5 6.5 5c1.54 0 3.04.99 3.56 2.36h1.88C12.46 5.99 13.96 5 15.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.41 5.74-8.4 10.05z",
  check_circle:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  join_right: {
    d: "M640-200q-27 0-52.5-5T538-219q58-49 90-117t32-144q0-76-32-144t-90-117q24-9 49.5-14t52.5-5q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-320 0q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q27 0 52.5 5t49.5 14q-17 14-32 30.5T362-676q-10-2-20.5-3t-21.5-1q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280q11 0 21.5-1t20.5-3q13 18 28 34.5t32 30.5q-24 9-49.5 14t-52.5 5Zm160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z",
    vb: "0 -960 960 960",
  },
  crown:
    "M5 19h14v2H5zm7-2L5.7 5.6l4.8 2.4L12 4l1.5 4 4.8-2.4L12 17z",
};

const core = [
  {
    icon: icons.auto_awesome,
    label: "01",
    title: "Veneers & Smile Makeovers",
    desc: "Customized, natural-looking smile transformations tailored to each individual with refined aesthetic precision.",
    tag: "Signature",
  },
  {
    icon: icons.light_mode,
    label: "02",
    title: "Teeth Whitening & Cosmetic Enhancements",
    desc: "Aesthetic improvements designed to create brighter, confident, naturally polished smiles.",
    tag: "Popular",
  },
];

const advanced = [
  {
    icon: icons.medical_services,
    title: "Endodontics",
    sub: "Root Canal Treatment",
    desc: "Pain-free, precision-based procedures.",
  },
  {
    icon: icons.bolt,
    title: "Laser Dentistry",
    sub: null,
    desc: "Minimally invasive, modern dental treatments.",
  },
  {
    icon: icons.join_right,
    title: "Aligners",
    sub: null,
    desc: "Precise alignment and restorative solutions for seamless smiles.",
  },
  {
    icon: icons.crown,
    title: "Prosthodontics",
    sub: "Crown & Bridge",
    desc: "Expert restoration of damaged or missing teeth with lifelike crowns, bridges, and prosthetics - crafted for lasting function and aesthetic harmony.",
  },
  {
    icon: icons.health_and_safety,
    title: "General & Preventive Care",
    sub: null,
    desc: "Routine checkups and long-term dental maintenance.",
  },
  {
    icon: icons.child_care,
    title: "Pediatric Dentistry",
    sub: null,
    desc: "Gentle, child-friendly dental care.",
  },
  {
    icon: icons.event_available,
    title: "Preventive Dental Care",
    sub: null,
    desc: "Routine checkups and preventive maintenance.",
  },
  {
    icon: icons.content_cut,
    title: "Oral Surgery",
    sub: "Specialized",
    desc: "Treatment of complex dental and surgical conditions.",
  },
  {
    icon: icons.spa,
    title: "Periodontics",
    sub: "Specialized",
    desc: "Gum health and treatment of periodontal diseases.",
  },
];

const highlights = [
  "Personalized consultations",
  "Pain-free techniques",
  "Long-lasting, natural results",
];

export default function ServicesSection() {
  return (
    <section className="bg-[var(--color-surface-lowest)] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* ── Header ── */}
        <div
          data-reveal
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12 md:mb-16"
        >
          <div>
            <p className="text-primary text-xs  uppercase tracking-[0.2em] mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight tracking-tight max-w-md">
              Signature Services of the Atelier
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Cosmetic and restorative treatments shaped by precision, comfort,
            and naturally beautiful results.
          </p>
        </div>

        {/* ── Core Services ── */}
        <div className="mb-10">
          <p className="text-[9px]  uppercase tracking-[0.3em] text-primary/50 mb-4 pl-1">
            Core Services
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {core.map(({ icon, label, title, desc, tag }, i) => (
              <div
                key={title}
                data-reveal
                style={
                  { "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties
                }
                className="group relative overflow-hidden rounded-[1.5rem] border border-primary/20 bg-[linear-gradient(140deg,rgba(191,145,75,0.13)_0%,rgba(14,14,14,0.98)_55%)] p-6 md:p-8 transition-all duration-300 hover:border-primary/35"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative flex flex-col h-full gap-5">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 border border-primary/15">
                      <MI icon={icon} className="size-5 text-primary" />
                    </div>
                    <span className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-[9px]  uppercase tracking-[0.22em] text-primary">
                      {tag}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px]  text-primary/40 tracking-widest mb-1.5">
                      {label}
                    </p>
                    <h3 className="text-base md:text-lg  text-white leading-snug tracking-tight mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Advanced Treatments ── */}
        <div className="mb-4">
          <p className="text-[9px]  uppercase tracking-[0.3em] text-primary/50 mb-4 pl-1">
            Advanced Dental Treatments
          </p>
          <div className="rounded-[1.5rem] border border-white/6 bg-[var(--color-surface-2)] overflow-hidden divide-y divide-white/5">
            {advanced.map(({ icon, title, sub, desc }, i) => (
              <div
                key={title}
                data-reveal
                style={
                  { "--reveal-delay": `${i * 0.06}s` } as React.CSSProperties
                }
                className="group flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-200">
                  <MI icon={icon} className="size-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-white leading-snug">
                      {title}
                    </p>
                    {sub && (
                      <span className="text-[9px]  uppercase tracking-[0.18em] text-primary/60 border border-primary/20 rounded-full px-2 py-0.5">
                        {sub}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {desc}
                  </p>
                </div>
                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary/50">
                  <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience Highlights ── */}
        <div
          data-reveal
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 rounded-[1.5rem] border border-white/6 bg-[var(--color-surface-2)] px-6 py-5 md:px-8"
        >
          <p className="text-[9px]  uppercase tracking-[0.28em] text-primary/50 sm:w-40 shrink-0">
            Our Promise
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:divide-x sm:divide-white/8 w-full">
            {highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-2.5 sm:px-6 first:sm:pl-0"
              >
                <MI
                  icon={icons.check_circle}
                  className="size-3.5 text-primary shrink-0"
                />
                <p className="text-xs text-gray-300">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
