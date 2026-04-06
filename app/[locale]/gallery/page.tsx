import { useTranslations } from 'next-intl';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  const t = useTranslations('gallery');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
            {t('photoBadge')}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-[var(--color-crema)] opacity-80 text-xl font-display italic">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Instagram embed area */}
      <section className="py-20 bg-[#FAF5EC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
            ✦ Instagram
          </span>
          <h2 className="font-display text-3xl font-bold text-[var(--color-chianti)] mt-3 mb-4">
            {t('instagramTitle')}
          </h2>
          <p className="text-[var(--color-terra)] opacity-70 mb-2">{t('instagramText')}</p>
          <a
            href="https://instagram.com/sagrabisteccacortona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-chianti)] font-semibold text-lg hover:text-[var(--color-fuoco)] transition-colors mb-12"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            {t('instagramHandle')}
          </a>

          <GalleryGrid />

          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full rounded-2xl shadow-lg mt-3"
          >
            <source src="/video/cortona_video.webm" type="video/webm" />
            <source src="/video/cortona_video.mp4" type="video/mp4" />
          </video>

          <p className="text-[var(--color-terra)] opacity-50 text-sm mt-8">
            Segui{' '}
            <a
              href="https://instagram.com/sagrabisteccacortona"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-chianti)] hover:underline"
            >
              @sagrabisteccacortona
            </a>{' '}
            per tutte le foto e gli aggiornamenti in tempo reale
          </p>
        </div>
      </section>

      {/* Facebook */}
      <section className="py-16 bg-[var(--color-crema)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold text-[var(--color-terra)] mb-3">
            Anche su Facebook
          </h3>
          <a
            href="https://facebook.com/sagrabisteccacortona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166FE5] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
            sagrabisteccacortona
          </a>
        </div>
      </section>
    </>
  );
}
