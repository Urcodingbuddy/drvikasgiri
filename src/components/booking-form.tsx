"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { validatePhoneNumber } from "@/utils/validation";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  treatment: "",
  concern: "",
  preferredDate: "",
};

export function BookingForm() {
  const [values, setValues] = useState(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    if (!validatePhoneNumber(values.phone)) {
      setError("Please enter a valid phone number. UAE numbers should be 9 or 10 digits (e.g., 050 123 4567).");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "e788c4aa-f838-4001-81dc-bf4271c85874";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.treatment,
          message: `Health Concern: ${values.concern}\nPreferred Date: ${values.preferredDate || "Not provided"}`,
          subject: `An Appointment for ${values.treatment} by ${values.name}`,
          from_name: "Dr. Vikas Giri Website Ad Flow",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setValues(defaultValues);
      } else {
        setError(result.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="luxury-card flex flex-col items-center justify-center text-center gap-6 p-8 sm:p-12 min-h-[450px] animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#ECB044]/10 border border-[#ECB044]/20 flex items-center justify-center mb-1">
          <svg className="w-8 h-8 text-[#ECB044]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif-display text-2xl text-[#e5e2e1] tracking-tight">Booking Request Sent!</h3>
        <p className="text-[#d0c5b5] text-sm max-w-sm leading-relaxed">
          Thank you for reaching out. Dr. Vikas Giri's team will get back to you shortly to confirm your booking date and time.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="luxury-button mt-4 justify-center cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="luxury-card flex flex-col gap-4 p-6 sm:p-8" onSubmit={handleSubmit}>
      <div>
        <label className="luxury-label" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          required
          value={values.name}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
          className="luxury-input"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="luxury-label" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={values.email}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
          className="luxury-input"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="luxury-label" htmlFor="phone">
          Phone number
        </label>
        <input
          id="phone"
          required
          value={values.phone}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
          className="luxury-input"
          placeholder="+971 50 000 0000"
        />
      </div>

      <div>
        <label className="luxury-label" htmlFor="treatment">
          Treatment interest
        </label>
        <select
          id="treatment"
          required
          value={values.treatment}
          onChange={(event) =>
            setValues((current) => ({ ...current, treatment: event.target.value }))
          }
          className="luxury-input cursor-pointer"
        >
          <option value="">Select treatment</option>
          <option value="Smile Makeover">Smile Makeover</option>
          <option value="Porcelain Veneers">Porcelain Veneers</option>
          <option value="Dental Implants">Dental Implants</option>
          <option value="Whitening">Whitening</option>
          <option value="General Consultation">General Consultation</option>
        </select>
      </div>

      <div>
        <label className="luxury-label" htmlFor="concern">
          Health concern
        </label>
        <textarea
          id="concern"
          required
          value={values.concern}
          onChange={(event) =>
            setValues((current) => ({ ...current, concern: event.target.value }))
          }
          className="luxury-input min-h-24 resize-none"
          placeholder="Briefly describe symptoms or consultation need"
        />
      </div>

      <div>
        <label className="luxury-label" htmlFor="preferredDate">
          Preferred date
        </label>
        <input
          id="preferredDate"
          type="date"
          value={values.preferredDate}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              preferredDate: event.target.value,
            }))
          }
          className="luxury-input cursor-pointer"
        />
      </div>

      {error && (
        <p className="text-xs font-medium text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg text-center">
          {error}
        </p>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="luxury-button mt-2 w-full justify-center flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-none"
      >
        {isSubmitting && <Loader2 className="animate-spin size-4" />}
        {isSubmitting ? "Submitting..." : "Send Booking Request"}
      </button>
    </form>
  );
}
