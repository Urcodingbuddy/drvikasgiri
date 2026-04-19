import { Award, GraduationCap, Mic, ShieldCheck, Stethoscope } from 'lucide-react';

const primaryCredential = {
  label: 'Lead Fellowship',
  title: 'Royal College of Surgery, Liverpool (UK)',
  summary:
    'A core marker of international clinical standing and one of the strongest trust signals in Dr. Vikas Giri’s profile.',
};

const supportingCredentials = [
  {
    icon: ShieldCheck,
    label: 'Research Fellowship',
    detail: 'International Council for Dental Research',
  },
  {
    icon: GraduationCap,
    label: 'Degree',
    detail: 'BDS — Subharti Dental College, India',
  },
  {
    icon: Stethoscope,
    label: 'Advanced Training',
    detail: 'Endodontics, Implantology & Maxillofacial Rehabilitation',
  },
  {
    icon: Mic,
    label: 'Speaker',
    detail: 'Dentathon, New Delhi',
  },
];

export default function CredentialsSection() {
  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            data-reveal="left"
            className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(191,145,75,0.14),rgba(14,14,14,0.96)_36%,rgba(14,14,14,1)_100%)] p-8 md:p-10"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                Credentials
              </p>
              <h2 className="max-w-xl text-3xl leading-tight tracking-tight text-white md:text-4xl">
                Professional Credentials
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                The profile is anchored by internationally recognized fellowships,
                advanced clinical certifications, and more than two decades of
                cosmetic and restorative dental experience.
              </p>

              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-black/25 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 mb-4">
                  <Award className="size-5 text-primary" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                    {primaryCredential.label}
                  </p>
                  <h3 className="mt-2 text-xl leading-snug tracking-tight text-white md:text-2xl">
                    {primaryCredential.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {primaryCredential.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal="right" style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Supporting Credentials
              </p>
            </div>

            <div className="space-y-4">
              {supportingCredentials.map(({ icon: Icon, label, detail }, i) => (
                <article
                  key={`${label}-${detail}`}
                  data-reveal
                  style={{ '--reveal-delay': `${0.12 + i * 0.08}s` } as React.CSSProperties}
                  className="rounded-[1.5rem] border border-white/6 bg-[var(--color-surface-3)] px-5 py-5 transition-colors duration-200 hover:border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-4 text-primary" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                        {label}
                      </p>
                      <p className="mt-2 text-base leading-relaxed tracking-tight text-white">
                        {detail}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
