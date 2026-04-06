import { useTranslations } from 'next-intl';
import GroupBookingForm from '@/components/GroupBookingForm';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return {
    title: isIt ? 'Contatti — Informazioni e Prenotazioni Gruppi' : 'Contacts — Info & Group Bookings',
    description: isIt
      ? 'Contatta la Sagra della Bistecca di Cortona. Prenotazioni gruppi, informazioni sull\'evento, telefono ed email.'
      : 'Contact the Sagra della Bistecca di Cortona. Group bookings, event information, phone and email.',
    alternates: { canonical: `https://sagradellabistecca.com/${locale}/contacts` },
  };
}

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
            <p className="text-[var(--color-terra)] opacity-60 text-sm mt-3">{t('groupsNote')}</p>
          </div>

          <GroupBookingForm
            labels={{
              name: form('name'),
              email: form('email'),
              phone: form('phone'),
              guests: form('guests'),
              guestsPlaceholder: form('guestsPlaceholder'),
              tickets: form('tickets'),
              yes: form('yes'),
              no: form('no'),
              message: form('message'),
              submit: form('submit'),
              sending: form('sending'),
              success: form('success'),
              error: form('error'),
            }}
          />
        </div>
      </section>
    </>
  );
}
