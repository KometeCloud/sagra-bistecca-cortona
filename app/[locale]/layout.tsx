import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import type { Metadata } from 'next';

const BASE_URL = 'https://sagradellabistecca.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        it: `${BASE_URL}/it`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      alternateLocale: locale === 'it' ? 'en_US' : 'it_IT',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: locale === 'it' ? '65° Sagra della Bistecca di Cortona' : '65th Sagra della Bistecca di Cortona',
    description: locale === 'it'
      ? 'La Sagra della Bistecca di Cortona: bistecca Chianina cotta al sangue, la griglia più grande d\'Italia.'
      : 'The Sagra della Bistecca di Cortona: Chianina beef cooked rare, Italy\'s largest grill.',
    startDate: '2026-08-11',
    endDate: '2026-08-15',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Giardini del Parterre',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Giardini del Parterre',
        addressLocality: 'Cortona',
        addressRegion: 'AR',
        postalCode: '52044',
        addressCountry: 'IT',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Sagra della Bistecca di Cortona',
      url: 'https://sagradellabistecca.com',
    },
    image: 'https://sagradellabistecca.com/immagini/foto/foto_1200x800/webp/bistecca_1.webp',
    url: 'https://sagradellabistecca.com',
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CookieConsent
        acceptLabel={locale === 'it' ? 'Accetta tutto' : 'Accept all'}
        rejectLabel={locale === 'it' ? 'Solo necessari' : 'Necessary only'}
        message={locale === 'it'
          ? 'Utilizziamo cookie analitici (Google Analytics) per migliorare il sito. Puoi accettare o rifiutare.'
          : 'We use analytics cookies (Google Analytics) to improve the site. You can accept or decline.'}
        privacyLabel={locale === 'it' ? 'Privacy Policy' : 'Privacy Policy'}
      />
    </NextIntlClientProvider>
  );
}
