import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function MenuPage() {
  const t = useTranslations('menu');

  const steakItems = t.raw('steakItems') as string[];
  const childrenItems = t.raw('childrenItems') as string[];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
            ✦ La cucina della sagra
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-[var(--color-crema)] opacity-80 text-xl font-display italic">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Menus */}
      <section className="py-20 bg-[#FAF5EC]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Steak Menu */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[var(--color-crema-dark)] hover:shadow-xl transition-shadow">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/immagini/foto/foto_1200x800/webp/bistecca_1.webp"
                  alt="Bistecca Chianina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white text-center">
                  <h2 className="font-display text-3xl font-bold">{t('steakTitle')}</h2>
                  <p className="text-[var(--color-crema)] opacity-80 mt-1 text-sm">{t('steakDescription')}</p>
                  <div className="text-5xl font-bold text-[var(--color-fuoco-light)] mt-2">{t('steakPrice')}</div>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {steakItems.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[var(--color-fuoco)] text-lg mt-0.5">✓</span>
                      <span className="text-[var(--color-terra)] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Children Menu */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[var(--color-crema-dark)] hover:shadow-xl transition-shadow">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/immagini/foto/foto_1200x800/webp/burgher_1.webp"
                  alt="Hamburger Chianina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white text-center">
                  <h2 className="font-display text-3xl font-bold">{t('childrenTitle')}</h2>
                  <p className="text-[var(--color-crema)] opacity-80 mt-1 text-sm">{t('childrenDescription')}</p>
                  <div className="text-5xl font-bold text-[var(--color-crema)] mt-2">{t('childrenPrice')}</div>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {childrenItems.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[var(--color-salvia)] text-lg mt-0.5">✓</span>
                      <span className="text-[var(--color-terra)] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Gate info */}
          <div className="mt-10 bg-[var(--color-crema)] border border-[var(--color-crema-dark)] rounded-2xl p-6 text-center">
            <p className="text-[var(--color-terra)] opacity-70">{t('gateInfo')}</p>
          </div>
        </div>
      </section>

      {/* Group reservations */}
      <section className="py-20 bg-[var(--color-crema)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
            ✦ Gruppi
          </span>
          <h2 className="font-display text-3xl font-bold text-[var(--color-chianti)] mt-3 mb-4">
            {t('groupsTitle')}
          </h2>
          <p className="text-[var(--color-terra)] opacity-80 mb-2">{t('groupsText')}</p>
          <p className="text-[var(--color-chianti)] font-semibold text-sm">
            ⚠ {t('groupsNote')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="border-2 border-[var(--color-chianti)] text-[var(--color-chianti)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-chianti)] hover:text-white transition-all"
            >
              Prenota il tuo tavolo
            </Link>
            <Link
              href="/tickets"
              className="bg-[var(--color-chianti)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-chianti-light)] transition-colors"
            >
              🎟 {t('buyButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
