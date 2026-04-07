'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FaqPage() {
  const t = useTranslations('faq');
  const items = t.raw('items') as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
            {t('badge')}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-[var(--color-crema)] opacity-80 text-xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-16 bg-[#FAF5EC]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-[var(--color-crema-dark)] overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-[var(--color-terra)] text-base leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all ${
                      open === i ? 'bg-[var(--color-chianti)] rotate-45' : 'bg-[var(--color-fuoco)]'
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[var(--color-terra)] opacity-80 text-sm leading-relaxed border-t border-[var(--color-crema-dark)] pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--color-crema)] text-center">
        <p className="text-[var(--color-terra)] opacity-70 text-sm">
          {t('ctaText')}{' '}
          <a
            href="mailto:info@sagradellabistecca.com"
            className="text-[var(--color-chianti)] font-semibold hover:underline"
          >
            info@sagradellabistecca.com
          </a>
        </p>
      </section>
    </>
  );
}
