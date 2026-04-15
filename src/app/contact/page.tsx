import { WhatsAppForm } from "@/components/whatsapp-form";

export default function ContactPage() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[4fr_5fr]">
      <section className="luxury-panel p-8 sm:p-12">
        <p className="luxury-kicker">Consultation Booking</p>
        <h1 className="mt-4 font-serif-display text-4xl leading-tight text-[#e5e2e1] sm:text-5xl md:text-6xl">
          Send every lead to WhatsApp with the full case summary.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#d0c5b5] sm:text-lg sm:leading-8">
          This flow is built for marketing campaigns. The visitor fills the
          fields once, and your WhatsApp chat opens with all important inquiry
          details already formatted.
        </p>

        <div className="mt-10 grid gap-4">
          <div className="rounded-3xl border border-white/6 bg-[#252525] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#998f81]">
              Clinic Hours
            </p>
            <p className="mt-2 text-lg font-semibold text-[#e5e2e1]">
              Mon to Sat, 10 AM to 7 PM
            </p>
          </div>
          <div className="rounded-3xl border border-white/6 bg-[#252525] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#998f81]">
              Preferred Response
            </p>
            <p className="mt-2 text-lg font-semibold text-[#e5e2e1]">
              WhatsApp first, callback if needed
            </p>
          </div>
          <div className="rounded-3xl border border-white/6 bg-[#252525] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#998f81]">
              Marketing Ready
            </p>
            <p className="mt-2 text-lg font-semibold text-[#e5e2e1]">
              Meta ads, Google ads, and organic landing traffic
            </p>
          </div>
        </div>
      </section>

      <WhatsAppForm />
    </div>
  );
}
