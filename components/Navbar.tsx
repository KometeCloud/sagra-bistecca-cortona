'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: t('home') },
    { href: '/menu', label: t('menu') },
    { href: '/our-story', label: t('ourStory') },
    { href: '/gallery', label: t('gallery') },
    { href: '/contacts', label: t('contacts') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/immagini/loghi/LOGO-SAGRA-GENERICO.webp"
            alt="Logo Sagra della Bistecca"
            style={{ width: 48, height: 48, objectFit: 'contain' }}
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-display text-xl font-bold tracking-wide transition-colors ${
                scrolled ? 'text-[var(--color-chianti)]' : 'text-white drop-shadow-md'
              }`}
            >
              Sagra della Bistecca
            </span>
            <span
              className={`text-xs tracking-widest uppercase transition-colors ${
                scrolled ? 'text-[var(--color-fuoco)]' : 'text-[var(--color-crema)]'
              }`}
            >
              Cortona · 65ª Edizione
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-fuoco)] ${
                scrolled ? 'text-[var(--color-terra)]' : 'text-white drop-shadow'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side: lang + dove dormire + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher scrolled={scrolled} />
          <Link
            href="/dove-dormire"
            className="border border-[var(--color-oro)] text-[var(--color-oro)] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[var(--color-oro)] hover:text-white transition-colors"
          >
            {t('whereToStay')}
          </Link>
          <Link
            href="/tickets"
            className="bg-[var(--color-chianti)] text-white text-sm font-semibold px-4 py-2 rounded-full border border-white hover:bg-[var(--color-chianti-light)] transition-colors"
          >
            {t('buyTickets')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${scrolled ? 'text-[var(--color-chianti)]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-[var(--color-crema-dark)] px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[var(--color-terra)] font-medium py-1 border-b border-[var(--color-crema-dark)]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/dove-dormire"
              className="border border-[var(--color-oro)] text-[var(--color-oro)] font-semibold py-2 px-4 rounded-full text-sm text-center"
              onClick={() => setOpen(false)}
            >
              {t('whereToStay')}
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher scrolled />
              <Link
                href="/tickets"
                className="bg-[var(--color-chianti)] text-white text-sm font-semibold px-4 py-2 rounded-full border border-white"
                onClick={() => setOpen(false)}
              >
                {t('buyTickets')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
