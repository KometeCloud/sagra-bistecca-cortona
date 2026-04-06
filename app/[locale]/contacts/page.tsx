import { useTranslations } from 'next-intl';

export default function ContactsPage() {
  const t = useTranslations('contacts');
  const form = useTranslations('contacts.form');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
            ✦ Scrivici
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-[var(--color-crema)] opacity-80 text-xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[var(--color-crema)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '📞',
                label: t('phone'),
                primary: t('phoneNumber'),
                secondary: t('phoneHours'),
                href: `tel:${t('phoneNumber').replace(/\s/g, '')}`,
              },
              {
                icon: '✉️',
                label: t('email'),
                primary: t('emailAddress'),
                secondary: null,
                href: `mailto:${t('emailAddress')}`,
              },
              {
                icon: '📍',
                label: t('location'),
                primary: 'Giardini del Parterre',
                secondary: 'Cortona (AR), Toscana',
                href: 'https://maps.google.com/?q=Giardini+del+Parterre+Cortona',
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === t('location') ? '_blank' : undefined}
                rel={c.label === t('location') ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--color-crema-dark)] hover:shadow-md hover:border-[var(--color-chianti)] transition-all group"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-fuoco)] mb-1">{c.label}</div>
                <div className="font-semibold text-[var(--color-terra)] group-hover:text-[var(--color-chianti)] transition-colors">
                  {c.primary}
                </div>
                {c.secondary && (
                  <div className="text-sm text-[var(--color-terra)] opacity-60 mt-1">{c.secondary}</div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Group reservation form */}
      <section className="py-20 bg-[#FAF5EC]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
              {t('groupsBadge')}
            </span>
            <h2 className="font-display text-3xl font-bold text-[var(--color-chianti)] mt-3 mb-2">
              {t('groupsTitle')}
            </h2>
            <p className="text-[var(--color-terra)] opacity-70">{t('groupsSubtitle')}</p>
          </div>

          <form
            action={`mailto:${t('emailAddress')}`}
            method="GET"
            className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-crema-dark)] space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
                  {form('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
                  {form('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
                  {form('phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
                  {form('guests')}
                </label>
                <input
                  type="number"
                  name="guests"
                  min="10"
                  required
                  className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
                {form('tickets')}
              </label>
              <input
                type="number"
                name="ticketsPurchased"
                min="0"
                className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
                {form('message')}
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-chianti)] hover:bg-[var(--color-chianti-light)] text-white font-bold py-4 rounded-xl transition-colors text-lg"
            >
              {form('submit')}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
