import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type Accommodation = {
  name: string;
  stars: number;
  type: string;
  address: string;
  deal: string;
  phone: string;
  website: string;
};

export default function DoveDormirePage() {
  const t = useTranslations('stay');
  const accommodations = t.raw('accommodations') as Accommodation[];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
            ✦ Cortona e dintorni
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-[var(--color-crema)] opacity-80 text-xl font-display italic">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-[var(--color-crema)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[var(--color-terra)] text-lg leading-relaxed opacity-80 mb-6">
            {t('intro')}
          </p>
          <div className="inline-block bg-[var(--color-fuoco)] text-white text-sm font-semibold px-5 py-3 rounded-full">
            {t('ticketInfo')}
          </div>
        </div>
      </section>

      {/* Accommodations grid */}
      <section className="py-20 bg-[#FAF5EC]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((acc) => (
              <div
                key={acc.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--color-crema-dark)] hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Card header */}
                <div className="bg-gradient-to-br from-[var(--color-chianti)] to-[var(--color-terra)] p-6 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-crema)] opacity-70">
                      {acc.type}
                    </span>
                    <span className="bg-[var(--color-fuoco)] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {t('badge')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mt-1">{acc.name}</h3>
                  {acc.stars > 0 && (
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: acc.stars }).map((_, i) => (
                        <span key={i} className="text-[var(--color-oro)] text-sm">★</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  {/* Address */}
                  <div className="flex items-start gap-2 text-sm text-[var(--color-terra)] opacity-70">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-chianti)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {acc.address}
                  </div>

                  {/* Deal */}
                  <div className="bg-[var(--color-crema)] rounded-xl p-3 text-sm text-[var(--color-terra)] font-medium flex items-start gap-2">
                    <span className="text-[var(--color-fuoco)] shrink-0">🎟</span>
                    {acc.deal}
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${acc.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-sm text-[var(--color-terra)] opacity-70 hover:opacity-100 hover:text-[var(--color-chianti)] transition-colors"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {acc.phone}
                  </a>

                  {/* Book button */}
                  <div className="mt-auto">
                    <a
                      href={acc.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-[var(--color-chianti)] hover:bg-[var(--color-chianti-light)] text-white font-semibold py-3 rounded-xl transition-colors"
                    >
                      {t('book')} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA per strutture */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-4">🏨</div>
          <h2 className="font-display text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-[var(--color-crema)] opacity-80 text-lg mb-8">{t('ctaText')}</p>
          <Link
            href="/contacts"
            className="bg-[var(--color-fuoco)] hover:bg-[var(--color-fuoco-light)] text-white font-bold px-8 py-4 rounded-full transition-colors inline-block"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
