"use client";

import { ArrowRight } from "lucide-react";
import ContactDetails from "@/components/ContactDetails";
import { openBookingModal } from "@/components/BookingModal";

export default function ContactSection() {
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

        <ContactDetails />
      </div>

      {/* Right — CTA to open the booking popup */}
      <div
        id="book-mobile"
        data-reveal="right"
        style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
        className="bg-[var(--color-surface-2)] border border-white/5 rounded-2xl p-8 flex flex-col justify-center items-center text-center gap-6 min-h-[380px]"
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl text-white tracking-tight mb-2">
            Request an Appointment
          </h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
            Share a few details and Dr. Vikas Giri&apos;s team will get back to you
            shortly to confirm your booking.
          </p>
        </div>
        <button
          onClick={openBookingModal}
          className="group bg-primary text-[#141414] px-8 py-3.5 rounded-full uppercase font-semibold tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none"
        >
          Book Now
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
