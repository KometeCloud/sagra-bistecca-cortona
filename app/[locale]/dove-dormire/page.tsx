import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { fetchAllProperties } from '@/lib/fetchIlCasale';
import PropertyGrid from '@/components/PropertyGrid';

export default async function DoveDormirePage() {
  const t = await getTranslations('stay');
  const properties = await fetchAllProperties();

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
          <p className="text-[var(--color-terra)] text-lg leading-relaxed opacity-80">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* Properties grid con filtro */}
      <section className="py-20 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-4">
          <PropertyGrid
            properties={properties}
            bookLabel={t('book')}
          />
        </div>
      </section>

      {/* CTA per strutture */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-4">🏡</div>
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
