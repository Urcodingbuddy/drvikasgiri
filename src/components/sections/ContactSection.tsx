'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+971 58 104 9475',
  },
  {
    icon: Phone,
    label: 'Call',
    value: '+971 0581049475',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@drvikas.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '1200 Luxury Lane, Suite 400\nBeverly Hills, CA 90210',
  },
];

const services = [
  'Teeth Whitening',
  'Dental Implants',
  'Root Canal',
  'Laser Dentistry',
  'Pediatric Dentistry',
  'Other',
];

export default function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden grid md:grid-cols-2 gap-10 md:gap-16">
      {/* Left — contact info */}
      <div data-reveal="left">
        <p 
        className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Get in Touch
        </p>
        <h2
        className="text-4xl font-bold text-white mb-12 leading-tight">
          Visit the Atelier
        </h2>

        <div className="space-y-8">
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="size-4 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                  {label}
                </div>
                <div className="text-white whitespace-pre-line">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div
        data-reveal="right"
        style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}
        className="bg-[var(--color-surface-2)] border border-white/5 rounded-2xl p-8"
      >
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
            const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

            const text = `Hello Dr. Vikas,\n\nMy name is ${name}.\nI am interested in: ${service}.\n\n${message}\n\nLooking forward to hearing from you.`;
            const url = `https://wa.me/971581049475?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
          }}
        >
          <div className="space-y-1.5">
            <label className="text-[10px] text-gray-500 uppercase tracking-widest block">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              required
              className="w-full bg-[var(--color-surface-1)] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-gray-500 uppercase tracking-widest block">
              Service Interested In
            </label>
            <select
              name="service"
              className="w-full bg-[var(--color-surface-1)] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors text-sm appearance-none cursor-pointer"
            >
              {services.map((s) => (
                <option key={s} value={s} className="bg-[#1c1b1b]">
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-gray-500 uppercase tracking-widest block">
              Message
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your goals..."
              className="w-full bg-[var(--color-surface-1)] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-[#141414] py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all duration-200 mt-2"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
