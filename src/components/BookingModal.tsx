"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import BookingFormCard from "@/components/BookingFormCard";

type View = "closed" | "form" | "thanks";

const SYNC_EVENT = "booking:sync";

/**
 * Open the booking popup from anywhere (any CTA).
 * Changes the URL to `?book=open` so the GMB manager can track it as a
 * distinct URL via GTM's History Change trigger — without a full page change.
 */
export function openBookingModal() {
  if (typeof window === "undefined") return;
  window.history.pushState({}, "", "?book=open");
  window.dispatchEvent(new Event(SYNC_EVENT));
}

function viewFromUrl(): View {
  if (typeof window === "undefined") return "closed";
  const value = new URLSearchParams(window.location.search).get("book");
  if (value === "open") return "form";
  if (value === "success") return "thanks";
  return "closed";
}

export default function BookingModal() {
  const [view, setView] = useState<View>("closed");

  // Keep the modal in sync with the URL (initial load, back/forward, CTA clicks)
  useEffect(() => {
    const sync = () => setView(viewFromUrl());
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener(SYNC_EVENT, sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(SYNC_EVENT, sync);
    };
  }, []);

  // Lock background scroll while the popup is open
  useEffect(() => {
    if (view === "closed") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [view]);

  const close = useCallback(() => {
    window.history.pushState({}, "", window.location.pathname);
    setView("closed");
  }, []);

  const handleSuccess = useCallback(() => {
    // Distinct URL for the confirmation so it tracks as its own conversion
    window.history.pushState({}, "", "?book=success");
    setView("thanks");
  }, []);

  // Close on Escape
  useEffect(() => {
    if (view === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, close]);

  if (view === "closed") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center overflow-y-auto p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={close}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-md my-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 w-9 h-9 rounded-full bg-[var(--color-surface-3)] border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
        >
          <X className="size-4" />
        </button>

        {view === "form" ? (
          <div>
            <div className="mb-5 text-center sm:text-left px-1">
              <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">
                Get in Touch
              </p>
              <h2 className="text-2xl text-white tracking-tight leading-tight">
                Book Your Consultation
              </h2>
            </div>
            <BookingFormCard onSuccess={handleSuccess} />
          </div>
        ) : (
          <div className="bg-[var(--color-surface-2)] border border-white/5 rounded-2xl text-center py-12 px-6 sm:px-10 flex flex-col items-center justify-center gap-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-1">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-white tracking-tight">
              Booking Request Sent!
            </h2>
            <p className="text-[#d0c5b5] text-sm max-w-sm leading-relaxed">
              Thank you for reaching out. Dr. Vikas Giri&apos;s team will get back to
              you shortly to confirm your booking date and time.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
              <button
                onClick={close}
                className="bg-primary text-[#141414] px-6 py-3 rounded-full uppercase font-semibold tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer border-none"
              >
                Done
              </button>
              <Link
                href="?book=open"
                onClick={(e) => {
                  e.preventDefault();
                  openBookingModal();
                }}
                className="border border-white/10 text-white px-6 py-3 rounded-full uppercase font-semibold tracking-widest text-xs hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                Another Request
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
