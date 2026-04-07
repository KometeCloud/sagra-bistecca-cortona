import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="bg-[var(--color-terra)] text-[var(--color-crema)]">
      {/* Top decorative band */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-chianti)] via-[var(--color-fuoco)] to-[var(--color-oro)]" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Sagra della Bistecca
            </h3>
            <p className="text-sm text-[var(--color-crema-dark)] mb-3">{t('edition')}</p>
            <Image
              src="/immagini/loghi/logo_asd.webp"
              alt="ASD Sagra della Bistecca"
              width={137}
              height={150}
              className="opacity-90"
            />
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-fuoco)] mb-4">
              {t('navTitle')}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: nav('home') },
                { href: '/menu', label: nav('menu') },
                { href: '/tickets', label: nav('tickets') },
                { href: '/dove-dormire', label: nav('whereToStay') },
                { href: '/gallery', label: nav('gallery') },
                { href: '/our-story', label: nav('ourStory') },
                { href: '/contacts', label: nav('contacts') },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="opacity-70 hover:opacity-100 hover:text-[var(--color-fuoco-light)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-fuoco)] mb-4">
              {t('followUs')}
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com/sagrabisteccacortona"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-chianti)] hover:border-[var(--color-chianti)] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/sagrabisteccacortona"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-chianti)] hover:border-[var(--color-chianti)] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
            <div className="text-sm space-y-1 opacity-70">
              <p>+39 0575 1596831</p>
              <p>info@sagradellabistecca.com</p>
            </div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-fuoco)] mt-6 mb-3">
              {t('locationTitle')}
            </h4>
            <p className="text-sm opacity-60 flex items-start gap-1">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-fuoco)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t('location')}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs opacity-40 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} Sagra della Bistecca di Cortona · {t('rights')}</span>
          <span className="hidden sm:inline">·</span>
          <Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
