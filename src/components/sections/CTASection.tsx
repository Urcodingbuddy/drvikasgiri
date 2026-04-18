export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      <div data-reveal="scale" className="relative bg-[var(--color-surface-3)] border border-white/5 rounded-2xl px-6 md:px-8 py-14 md:py-20 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative z-10">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Ready to Begin?
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-4 md:mb-5 leading-tight tracking-tight">
            Book Your Appointment Today
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
            Your transformation begins with a conversation. Experience dental
            artistry tailored to your identity.
          </p>
          <button className="bg-primary text-[#141414] px-10 md:px-12 py-3.5 md:py-4 rounded-full font-bold uppercase tracking-[0.15em] text-sm hover:shadow-[0_0_40px_rgba(236,176,68,0.35)] active:scale-95 transition-all duration-200">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
