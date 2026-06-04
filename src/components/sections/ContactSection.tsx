"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { validatePhoneNumber } from "@/utils/validation";

const contactInfo = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+971 58 104 9475",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@drvikasgiri.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai Silicon Oasis, UAE",
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 am – 8:00 pm" },
  { day: "Saturday", time: "8:00 am – 8:00 pm" },
  { day: "Sunday", time: "10:00 am – 6:00 pm" },
];

const services = [
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal",
  "Laser Dentistry",
  "Pediatric Dentistry",
  "Other",
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!validatePhoneNumber(phone)) {
      setError("Please enter a valid phone number. UAE numbers should be 9 or 10 digits (e.g., 050 123 4567).");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Web3Forms endpoint reads key from NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name,
          email,
          phone,
          service,
          message,
          subject: `An Appointment for ${service} by ${name}`,
          from_name: "Dr. Vikas Giri Website",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(result.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden grid md:grid-cols-2 gap-10 md:gap-16">
      {/* Left — contact info */}
      <div data-reveal="left">
        <p className="text-primary text-xs  uppercase tracking-[0.2em] mb-3">
          Get in Touch
        </p>
        <h2 className="text-4xl tracking-tight text-white mb-12 leading-tight">
          Book Your Consultation
        </h2>

        <div className="space-y-8">
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              id={label === "Location" ? "book-mobile" : undefined}
              className="flex items-start gap-5"
            >
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

          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="size-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                Opening Hours
              </div>
              <div className="space-y-1.5">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between gap-6 text-sm"
                  >
                    <span className="text-gray-400">{day}</span>
                    <span className="text-white shrink-0">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div
        id="booking-form"
        data-reveal="right"
        style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
        className="bg-[var(--color-surface-2)] border border-white/5 rounded-2xl p-8"
      >
        {success ? (
          <div className="text-center py-12 px-4 flex flex-col items-center justify-center gap-6 min-h-[380px] animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-1 animate-scale">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-white tracking-tight">Booking Request Sent!</h3>
            <p className="text-[#d0c5b5] text-sm max-w-sm leading-relaxed">
              Thank you for reaching out. Dr. Vikas Giri's team will get back to you shortly to confirm your booking date and time.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-primary text-[#141414] px-6 py-3 rounded-full uppercase font-semibold tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
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
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest block">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[var(--color-surface-1)] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest block">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+971 50 000 0000"
                  required
                  className="w-full bg-[var(--color-surface-1)] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest block">
                Service Interested In
              </label>
              <div className="relative">
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
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest block">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your dental goals or concerns..."
                className="w-full bg-[var(--color-surface-1)] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              />
            </div>

            {error && (
              <p className="text-xs font-medium text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-[#141414] py-3.5 rounded-full uppercase font-semibold tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all duration-200 mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              {isSubmitting && <Loader2 className="animate-spin size-4" />}
              {isSubmitting ? "Submitting..." : "Send Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
