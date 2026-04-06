import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import HeroVideo from '@/components/HeroVideo';

export default function HomePage() {
  const t = useTranslations('home');
  const tMenu = useTranslations('menu');

  return (
    <>
      {/* ─── HERO ─── */}
      <HeroVideo
        edition={t('edition')}
        title={t('title')}
        subtitle={t('subtitle')}
        dates={t('dates')}
        location={t('location')}
        cta={t('cta')}
        learnMore={t('learnMore')}
      />

      {/* ─── ABOUT: LA BISTECCA ─── */}
      <section className="py-24 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
                {t('protagonistaBadge')}
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-chianti)] mt-3 mb-6 leading-tight">
                {t('aboutTitle')}
              </h2>
              <p className="text-[var(--color-terra)] text-lg leading-relaxed opacity-80">
                {t('aboutText')}
              </p>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/2] relative">
                <Image
                  src="/immagini/foto/foto_1200x800/webp/carne_cruda_4.webp"
                  alt="Bistecca Chianina"
                  fill
                  className="object-cover scale-[1.2]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/20 to-transparent pt-24 pb-6 px-6 text-white">
                  <div className="font-display text-2xl font-bold text-[var(--color-fuoco-light)]">750g</div>
                  <div className="text-[var(--color-crema)] text-sm mt-1">{t('steakCardDesc')}</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-fuoco)] rounded-full opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--color-chianti)] rounded-full opacity-15" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── LA GRIGLIA ─── */}
      <section className="py-24 bg-[var(--color-terra)] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(232,98,26,0.3) 10px, rgba(232,98,26,0.3) 11px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
            {t('grillBadge')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
            {t('grillTitle')}
          </h2>
          <p className="text-[var(--color-crema)] text-lg max-w-2xl mx-auto leading-relaxed opacity-80 mb-12">
            {t('grillText')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '14m+', label: t('grillStatLabel') },
              { value: '65°', label: t('editionLabel') },
              { value: '1960', label: t('foundedLabel') },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 rounded-xl p-6 bg-white/5">
                <div className="font-display text-4xl font-bold text-[var(--color-fuoco-light)]">
                  {stat.value}
                </div>
                <div className="text-[var(--color-crema)] opacity-70 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Foto griglia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-10">
            {[
              { src: '/immagini/foto/foto_1200x800/webp/griglia_1.webp', alt: 'La griglia della sagra' },
              { src: '/immagini/foto/foto_1200x800/webp/grilia_2.webp', alt: 'La griglia più grande d\'Italia' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREZZI PREVIEW ─── */}
      <section className="py-24 bg-[var(--color-crema)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
            {t('menuBadge')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-chianti)] mt-3 mb-12">
            {t('menuSectionTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                photo: '/immagini/foto/foto_1200x800/webp/bistecca_1.webp',
                alt: 'Bistecca Chianina',
                name: t('steakMenuName'),
                desc: tMenu('steakDescription'),
                price: tMenu('steakPrice'),
                items: [t('steakMenuItem1'), t('steakMenuItem2'), t('steakMenuItem3')],
              },
              {
                photo: '/immagini/foto/foto_1200x800/webp/burgher_1.webp',
                alt: 'Hamburger Chianina',
                name: t('childrenMenuName'),
                desc: tMenu('childrenDescription'),
                price: tMenu('childrenPrice'),
                items: [t('childrenMenuItem1'), t('childrenMenuItem2'), t('childrenMenuItem3')],
              },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[var(--color-crema-dark)] hover:shadow-xl transition-shadow">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={m.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white text-center">
                    <h3 className="font-display text-3xl font-bold">{m.name}</h3>
                    <p className="text-[var(--color-crema)] opacity-80 mt-1 text-sm">{m.desc}</p>
                    <div className="text-5xl font-bold text-[var(--color-fuoco-light)] mt-2">{m.price}</div>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[var(--color-fuoco)] text-lg mt-0.5">✓</span>
                        <span className="text-[var(--color-terra)] font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="border-2 border-[var(--color-chianti)] text-[var(--color-chianti)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-chianti)] hover:text-white transition-all"
            >
              {t('viewFullMenu')}
            </Link>
            <Link
              href="/tickets"
              className="bg-[var(--color-chianti)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-chianti-light)] transition-colors"
            >
              {t('buyTicketsBtn')}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── LOCATION + STORIA ─── */}
      <section className="py-24 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Location */}
          <div className="relative rounded-2xl overflow-hidden text-white">
            <Image
              src="/immagini/foto/foto_1200x800/webp/persone_2.webp"
              alt="Ospiti alla sagra"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10" />
            <div className="relative p-8">
              <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
                {t('locationBadge')}
              </span>
              <h2 className="font-display text-3xl font-bold mt-3 mb-4">
                {t('locationTitle')}
              </h2>
              <p className="text-[var(--color-crema)] opacity-80 leading-relaxed mb-6">
                {t('locationText')}
              </p>
              <a
                href="https://maps.google.com/?q=Giardini+del+Parterre+Cortona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-fuoco-light)] hover:text-white font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Giardini del Parterre, Cortona (AR)
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* History teaser */}
          <div className="relative rounded-2xl overflow-hidden text-white">
            <Image
              src="/immagini/foto/vecchie_foto/webp/old-grill.webp"
              alt="La griglia storica della sagra"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10" />
            <div className="relative p-8">
              <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
                {t('ourStoryBadge')}
              </span>
              <h2 className="font-display text-3xl font-bold mt-3 mb-4">
                {t('historyTitle')}
              </h2>
              <p className="text-[var(--color-crema)] opacity-80 leading-relaxed mb-6">
                {t('historyText')}
              </p>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-[var(--color-fuoco-light)] hover:text-white font-semibold transition-colors"
              >
                {t('historyLink')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-4">🔥</div>
          <h2 className="font-display text-4xl font-bold mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-[var(--color-crema)] opacity-80 text-lg mb-8">
            {t('ctaDesc')}
          </p>
          <Link
            href="/tickets"
            className="bg-[var(--color-fuoco)] hover:bg-[var(--color-fuoco-light)] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-[0_0_40px_rgba(232,98,26,0.5)] inline-block"
          >
            {t('ctaBuyTickets')}
          </Link>
        </div>
      </section>
    </>
  );
}
