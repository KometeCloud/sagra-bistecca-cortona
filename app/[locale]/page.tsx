import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient (placeholder until real image) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1A0A] via-[#6B1414] to-[#2C1A0A]" />

        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #E8621A33 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #8B1A1A44 0%, transparent 40%)`,
          }}
        />

        {/* Flame pattern top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-chianti)] via-[var(--color-fuoco)] to-[var(--color-oro)]" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block text-[var(--color-fuoco-light)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              ✦ Cortona · Toscana ✦
            </span>
          </div>

          <h1 className="font-display text-white mb-4">
            <span className="block text-[var(--color-fuoco-light)] text-5xl md:text-7xl font-bold leading-none">
              {t('edition')}
            </span>
            <span className="block text-4xl md:text-6xl font-bold leading-tight mt-2">
              {t('title')}
            </span>
          </h1>

          <p className="text-[var(--color-crema)] text-xl md:text-2xl mt-4 mb-2 font-display italic">
            {t('subtitle')}
          </p>

          <div className="flex items-center justify-center gap-3 mt-6 mb-10">
            <div className="h-px w-16 bg-[var(--color-fuoco)] opacity-60" />
            <span className="text-[var(--color-crema-dark)] text-lg font-semibold tracking-wide">
              {t('dates')}
            </span>
            <div className="h-px w-16 bg-[var(--color-fuoco)] opacity-60" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/tickets"
              className="bg-[var(--color-fuoco)] hover:bg-[var(--color-fuoco-light)] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-[0_0_30px_rgba(232,98,26,0.5)] tracking-wide"
            >
              🎟 {t('cta')}
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white/40 hover:border-white text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
            >
              {t('learnMore')}
            </Link>
          </div>

          <p className="text-[var(--color-crema)] opacity-60 text-sm mt-8 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t('location')}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── ABOUT: LA BISTECCA ─── */}
      <section className="py-24 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
                ✦ La protagonista
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
              <div className="bg-gradient-to-br from-[var(--color-chianti)] to-[var(--color-terra)] rounded-2xl p-10 text-center text-white shadow-2xl">
                <div className="text-8xl mb-4">🥩</div>
                <div className="font-display text-6xl font-bold text-[var(--color-fuoco-light)]">750g</div>
                <div className="text-[var(--color-crema)] mt-2 text-lg">Bistecca Chianina</div>
                <div className="mt-6 pt-6 border-t border-white/20 text-sm text-[var(--color-crema-dark)] opacity-80">
                  Cotta al raro · Solo sale grosso
                </div>
              </div>
              {/* Decorative element */}
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
            ✦ Il simbolo della sagra
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
              { value: '14m+', label: 'La griglia più grande d\'Italia' },
              { value: '65°', label: 'Edizione 2026' },
              { value: '1960', label: 'Anno di fondazione' },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 rounded-xl p-6 bg-white/5">
                <div className="font-display text-4xl font-bold text-[var(--color-fuoco-light)]">
                  {stat.value}
                </div>
                <div className="text-[var(--color-crema)] opacity-70 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREZZI PREVIEW ─── */}
      <section className="py-24 bg-[var(--color-crema)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
            ✦ Il menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-chianti)] mt-3 mb-12">
            Semplice come la tradizione
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🥩',
                name: 'Menu Bistecca',
                price: '€35',
                items: ['Bistecca Chianina 750/800g', 'Contorno a scelta', '1L acqua + pane'],
              },
              {
                icon: '🍔',
                name: 'Menu Bambini',
                price: '€15',
                items: ['Hamburger Chianina 140g', 'Patatine fritte', 'Bibita o acqua'],
              },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-crema-dark)] hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{m.icon}</div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-terra)] mb-1">{m.name}</h3>
                <div className="text-3xl font-bold text-[var(--color-chianti)] mb-4">{m.price}</div>
                <ul className="text-sm text-[var(--color-terra)] opacity-70 space-y-1">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[var(--color-fuoco)]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="border-2 border-[var(--color-chianti)] text-[var(--color-chianti)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-chianti)] hover:text-white transition-all"
            >
              Vedi il menu completo
            </Link>
            <Link
              href="/tickets"
              className="bg-[var(--color-chianti)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-chianti-light)] transition-colors"
            >
              🎟 Acquista biglietti
            </Link>
          </div>
        </div>
      </section>

      {/* ─── LOCATION + STORIA ─── */}
      <section className="py-24 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Location */}
          <div className="flex flex-col">
            <span className="text-[var(--color-fuoco)] text-sm font-semibold uppercase tracking-widest">
              ✦ Dove siamo
            </span>
            <h2 className="font-display text-3xl font-bold text-[var(--color-chianti)] mt-3 mb-4">
              {t('locationTitle')}
            </h2>
            <p className="text-[var(--color-terra)] leading-relaxed opacity-80 mb-4">
              {t('locationText')}
            </p>
            <div className="mt-auto flex items-center gap-2 text-[var(--color-salvia)] font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Giardini del Parterre, Cortona (AR)
            </div>
          </div>

          {/* History teaser */}
          <div className="bg-gradient-to-br from-[var(--color-chianti)] to-[var(--color-terra)] rounded-2xl p-8 text-white">
            <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
              ✦ La nostra storia
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
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-4">🔥</div>
          <h2 className="font-display text-4xl font-bold mb-4">
            Ti aspettiamo a Cortona
          </h2>
          <p className="text-[var(--color-crema)] opacity-80 text-lg mb-8">
            Prenota il tuo posto alla sagra più amata della Toscana
          </p>
          <Link
            href="/tickets"
            className="bg-[var(--color-fuoco)] hover:bg-[var(--color-fuoco-light)] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-[0_0_40px_rgba(232,98,26,0.5)] inline-block"
          >
            🎟 Acquista i biglietti
          </Link>
        </div>
      </section>
    </>
  );
}
