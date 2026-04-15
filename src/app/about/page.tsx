const recognitions = [
  "23+ years in cosmetic and restorative dentistry",
  "5000+ completed smile transformations",
  "International patient consultation workflow",
  "Premium treatment planning for veneer and implant cases",
];

export default function AboutPage() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[10fr_9fr]">
      <section className="luxury-panel p-8 sm:p-12">
        <p className="luxury-kicker">About The Doctor</p>
        <h1 className="mt-4 max-w-3xl font-serif-display text-4xl leading-tight text-[#e5e2e1] sm:text-5xl md:text-6xl">
          A cosmetic dentistry brand built around confidence and precision.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#d0c5b5] sm:text-lg sm:leading-8">
          This page is structured for the final doctor story, signature
          approach, recognitions, and authority-building content. It follows the
          same dark editorial system as the Figma homepage so the site feels
          coherent across pages.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#d0c5b5] sm:text-lg sm:leading-8">
          Replace the placeholder copy with the actual profile, certifications,
          treatment philosophy, and any publications or hospital affiliations.
        </p>
      </section>

      <section className="luxury-card p-8 sm:p-10">
        <h2 className="font-serif-display text-2xl text-[#e5e2e1] sm:text-3xl">
          Practice Highlights
        </h2>
        <div className="mt-8 space-y-4">
          {recognitions.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/6 bg-[#252525] px-5 py-5 text-[#d0c5b5]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
