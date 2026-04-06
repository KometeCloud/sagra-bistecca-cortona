import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function OurStoryPage() {
  const t = useTranslations('ourStory');

  const stats = [
    { value: '65', label: t('statsEditions') },
    { value: '60+', label: t('statsYears') },
    { value: '14m', label: t('statsGrill') },
    { value: t('statsCity'), label: 'Toscana' },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-chianti)] to-[var(--color-terra)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[var(--color-fuoco-light)] text-sm font-semibold uppercase tracking-widest">
            ✦ Dal 1960
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-[var(--color-crema)] opacity-80 text-xl font-display italic">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--color-fuoco)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold">{s.value}</div>
                <div className="text-sm opacity-80 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto grid 1 — dopo le stats */}
      <section className="pt-12 pb-0 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7569.webp', alt: 'Sagra della Bistecca' },
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7570.webp', alt: 'Sagra della Bistecca' },
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7571.webp', alt: 'Sagra della Bistecca' },
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7572.webp', alt: 'Sagra della Bistecca' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story content */}
      <section className="py-24 bg-[#FAF5EC]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-8">
            {[t('p1'), t('p2'), t('p3'), t('p4')].map((paragraph, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-chianti)] text-white flex items-center justify-center text-sm font-bold font-display">
                    {i + 1}
                  </div>
                </div>
                <p className="text-[var(--color-terra)] text-lg leading-relaxed opacity-80">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto grid 2 — dopo i paragrafi */}
      <section className="pb-12 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7573.webp', alt: 'Sagra della Bistecca' },
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7574.webp', alt: 'Sagra della Bistecca' },
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7575.webp', alt: 'Sagra della Bistecca' },
              { src: '/immagini/foto/vecchie_foto/webp/IMG_7576.webp', alt: 'Sagra della Bistecca' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--color-crema)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-[var(--color-chianti)] mb-12">
            {t('timelineTitle')}
          </h2>
          <div className="space-y-6">
            {(t.raw('timeline') as { year: string; text: string }[]).map((item) => (
              <div key={item.year} className="flex items-center gap-6 text-left">
                <div className="shrink-0 w-16 text-right">
                  <span className="font-display text-2xl font-bold text-[var(--color-chianti)]">{item.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[var(--color-fuoco)] shrink-0" />
                <p className="text-[var(--color-terra)] opacity-80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
