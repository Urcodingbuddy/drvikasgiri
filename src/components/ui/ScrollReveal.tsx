'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = (el: Element) => {
      // Skip elements already visible
      if (!el.classList.contains('is-visible')) io.observe(el);
    };

    // Observe all current [data-reveal] elements
    document.querySelectorAll('[data-reveal]').forEach(observe);

    // Also watch for elements added later (client-component hydration)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.hasAttribute('data-reveal')) observe(node);
            node.querySelectorAll('[data-reveal]').forEach(observe);
          }
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
