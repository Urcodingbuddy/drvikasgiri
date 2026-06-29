"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { validatePhoneNumber } from "@/utils/validation";

const services = [
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal",
  "Laser Dentistry",
  "Pediatric Dentistry",
  "Other",
];

export default function BookingFormCard({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        form.reset();
        // Hand off to the modal, which swaps to the thank-you view + changes the URL
        onSuccess();
      } else {
        setError(result.message || "Failed to submit request. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--color-surface-2)] border border-white/5 rounded-2xl p-8">
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
    </div>
  );
}
