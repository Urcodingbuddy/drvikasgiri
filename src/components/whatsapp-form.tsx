"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "911234567890";

const defaultValues = {
  name: "",
  phone: "",
  treatment: "",
  concern: "",
  preferredDate: "",
};

export function WhatsAppForm() {
  const [values, setValues] = useState(defaultValues);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      "New consultation inquiry",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Treatment interest: ${values.treatment}`,
      `Health concern: ${values.concern}`,
      `Preferred date: ${values.preferredDate || "Not provided"}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
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
          placeholder="+91 98765 43210"
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
          className="luxury-input"
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
          className="luxury-input min-h-28 resize-y"
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
          className="luxury-input"
        />
      </div>

      <button type="submit" className="luxury-button mt-2 w-full justify-center">
        Continue on WhatsApp
      </button>
    </form>
  );
}
