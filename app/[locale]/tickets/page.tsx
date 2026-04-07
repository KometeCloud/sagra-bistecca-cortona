import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TicketWidget from '@/components/TicketWidget';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return {
    title: isIt ? 'Biglietti — Acquista Online' : 'Tickets — Buy Online',
    description: isIt
      ? 'Acquista i biglietti per la 65° Sagra della Bistecca di Cortona. 11-15 Agosto 2026. Menu bistecca €39, menu bambini €18.'
      : 'Buy tickets for the 65th Sagra della Bistecca di Cortona. 11-15 August 2026. Steak menu €39, children\'s menu €18.',
    alternates: { canonical: `https://sagradellabistecca.com/${locale}/tickets` },
  };
}

export default function TicketsPage() {
  const t = useTranslations('tickets');
  const tMenu = useTranslations('menu');
  const steakItems = tMenu.raw('steakItems') as string[];
  const childrenItems = tMenu.raw('childrenItems') as string[];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
            ✦ Prenota il tuo posto
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-[var(--color-crema)] opacity-80 text-xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Prices summary */}
      <section className="py-16 bg-[#FAF5EC]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] text-center mb-8">
            {t('prices')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Steak */}
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
                  <h2 className="font-display text-3xl font-bold">{tMenu('steakTitle')}</h2>
                  <p className="text-[var(--color-crema)] opacity-80 mt-1 text-sm">{tMenu('steakDescription')}</p>
                  <div className="text-5xl font-bold text-[var(--color-fuoco-light)] mt-2">{tMenu('steakPrice')}</div>
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

            {/* Children */}
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
                  <h2 className="font-display text-3xl font-bold">{tMenu('childrenTitle')}</h2>
                  <p className="text-[var(--color-crema)] opacity-80 mt-1 text-sm">{tMenu('childrenDescription')}</p>
                  <div className="text-5xl font-bold text-[var(--color-crema)] mt-2">{tMenu('childrenPrice')}</div>
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
        </div>
      </section>

      {/* Tailor Tickets widget */}
      <section className="py-16 bg-[#FAF5EC]">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-display text-2xl font-bold text-[var(--color-chianti)] text-center mb-6">
            {t('onlineTitle')}
          </h3>
          <div className="bg-[var(--color-crema)] border border-[var(--color-crema-dark)] rounded-2xl px-6 py-5 mb-8 text-sm text-[var(--color-terra)] leading-relaxed space-y-3">
            {t('onlineNote').split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-[var(--color-crema-dark)] p-6 overflow-hidden">
            <TicketWidget />
          </div>
          <p className="text-[var(--color-terra)] opacity-60 text-sm text-center mt-4">
            {t('contactInfo')}
          </p>
        </div>
      </section>

      {/* At the gate */}
      <section className="py-16 bg-[var(--color-crema)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🎟️</div>
          <h3 className="font-display text-2xl font-bold text-[var(--color-terra)] mb-3">
            {t('gateTitle')}
          </h3>
          <p className="text-[var(--color-terra)] opacity-70">{t('gateText')}</p>
        </div>
      </section>
    </>
  );
}
