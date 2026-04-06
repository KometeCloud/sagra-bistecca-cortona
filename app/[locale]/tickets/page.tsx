import { useTranslations } from 'next-intl';
import Script from 'next/script';
import Image from 'next/image';

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
          <h3 className="font-display text-2xl font-bold text-[var(--color-chianti)] text-center mb-8">
            {t('onlineTitle')}
          </h3>
          <div className="bg-white rounded-3xl shadow-sm border border-[var(--color-crema-dark)] p-6 overflow-hidden">
            {/* Ticket Tailor Widget */}
            <div className="tt-widget">
              <div className="tt-widget-fallback">
                <p>
                  <a
                    href="https://www.tickettailor.com/checkout/new-session/store/59501/chk/8cb6?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-chianti)] underline font-semibold"
                  >
                    Clicca qui per acquistare i biglietti
                  </a>
                </p>
              </div>
            </div>
            <Script
              src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
              data-url="https://www.tickettailor.com/checkout/new-session/store/59501/chk/8cb6?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
              data-type="inline"
              data-inline-minimal="true"
              data-inline-show-logo="false"
              data-inline-bg-fill="false"
              data-inline-inherit-ref-from-url-param=""
              data-inline-ref="website_widget"
              strategy="lazyOnload"
            />
          </div>
          <p className="text-[var(--color-terra)] opacity-60 text-sm text-center mt-4">
            {t('contactInfo')}
          </p>
        </div>
      </section>

      {/* At the gate */}
      <section className="py-16 bg-[var(--color-crema)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🚪</div>
          <h3 className="font-display text-2xl font-bold text-[var(--color-terra)] mb-3">
            {t('gateTitle')}
          </h3>
          <p className="text-[var(--color-terra)] opacity-70">{t('gateText')}</p>
        </div>
      </section>
    </>
  );
}
