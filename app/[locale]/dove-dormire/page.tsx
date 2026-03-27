import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { fetchProperty } from '@/lib/fetchProperty';

const PROPERTY_IDS = [22586, 21370, 22578];

export default async function DoveDormirePage() {
  const t = await getTranslations('stay');

  const properties = (
    await Promise.all(PROPERTY_IDS.map((id) => fetchProperty(id)))
  ).filter(Boolean);

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

      {/* Properties grid */}
      <section className="py-20 bg-[#FAF5EC]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((prop) => (
              <div
                key={prop!.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--color-crema-dark)] hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Immagine */}
                {prop!.image && (
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prop!.image}
                      alt={prop!.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-[var(--color-fuoco)] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {t('badge')}
                    </span>
                  </div>
                )}

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-display text-xl font-bold text-[var(--color-chianti)]">
                    {prop!.name}
                  </h3>

                  <p className="text-sm text-[var(--color-terra)] opacity-70 leading-relaxed flex-1">
                    {prop!.description}
                  </p>

                  {/* Convenzione */}
                  <div className="bg-[var(--color-crema)] rounded-xl p-3 text-sm text-[var(--color-terra)] font-medium flex items-start gap-2">
                    <span className="text-[var(--color-fuoco)] shrink-0">🎟</span>
                    {t('deal')}
                  </div>

                  {/* CTA */}
                  <a
                    href={prop!.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-[var(--color-chianti)] hover:bg-[var(--color-chianti-light)] text-white font-semibold py-3 rounded-xl transition-colors mt-auto"
                  >
                    {t('book')} →
                  </a>
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
