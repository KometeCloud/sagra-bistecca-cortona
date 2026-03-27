import { useTranslations } from 'next-intl';

export default function TicketsPage() {
  const t = useTranslations('tickets');

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
      <section className="py-16 bg-[var(--color-crema)]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] text-center mb-8">
            {t('prices')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🥩', label: t('adult'), price: '€35' },
              { icon: '🍔', label: t('children'), price: '€15' },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--color-crema-dark)]"
              >
                <div className="text-4xl mb-2">{p.icon}</div>
                <div className="text-sm font-medium text-[var(--color-terra)] opacity-70 mb-1">{p.label}</div>
                <div className="font-display text-3xl font-bold text-[var(--color-chianti)]">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailor Tickets embed area */}
      <section className="py-16 bg-[#FAF5EC]">
        <div className="max-w-3xl mx-auto px-4">
          {/* Placeholder — sostituire con l'embed Tailor Tickets */}
          <div className="bg-white rounded-3xl border-2 border-dashed border-[var(--color-crema-dark)] p-16 text-center shadow-sm">
            <div className="text-6xl mb-4">🎟</div>
            <h3 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {t('onlineTitle')}
            </h3>
            <p className="text-[var(--color-terra)] opacity-70 mb-6 max-w-md mx-auto">
              {t('onlineText')}
            </p>
            <div className="inline-block bg-[var(--color-crema)] rounded-xl px-6 py-4 text-sm text-[var(--color-terra)] opacity-60 font-mono">
              {/* Il widget Tailor Tickets verrà inserito qui */}
              &lt;!-- Tailor Tickets embed --&gt;
            </div>
            <p className="text-[var(--color-chianti)] font-semibold text-sm mt-6">
              {t('comingSoon')}
            </p>
            <p className="text-[var(--color-terra)] opacity-60 text-sm mt-2">
              {t('contactInfo')}
            </p>
          </div>
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
