'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const PHOTOS = [
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_1.webp', alt: 'Bistecca sulla griglia' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_2.webp', alt: 'Cottura alla griglia' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_3.webp', alt: 'Bistecca sulla brace' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_4.webp', alt: 'Bistecca in cottura' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_5.webp', alt: 'Bistecca sulla griglia 5' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_6.webp', alt: 'Bistecca sulla griglia 6' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_7.webp', alt: 'Bistecca sulla griglia 7' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_8.webp', alt: 'Bistecca sulla griglia 8' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_ingriglia_10.webp', alt: 'Bistecca sulla griglia 10' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_cruda_1.webp', alt: 'Bistecca Chianina' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_cruda_2.webp', alt: 'Carne Chianina 2' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_cruda_3.webp', alt: 'Carne Chianina 3' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_cruda_4.webp', alt: 'Carne Chianina 4' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_cruda_5.webp', alt: 'Carne Chianina 5' },
  { src: '/immagini/foto/foto_1200x800/webp/carne_cruda_6.webp', alt: 'Carne Chianina 6' },
  { src: '/immagini/foto/foto_1200x800/webp/griglia_1.webp', alt: 'La griglia della sagra' },
  { src: '/immagini/foto/foto_1200x800/webp/grilia_2.webp', alt: 'La griglia più grande d\'Italia' },
  { src: '/immagini/foto/foto_1200x800/webp/hostess_1.webp', alt: 'Staff della sagra' },
  { src: '/immagini/foto/foto_1200x800/webp/hostess_2.webp', alt: 'Staff della sagra 2' },
  { src: '/immagini/foto/foto_1200x800/webp/persone_2.webp', alt: 'Ospiti alla sagra' },
  { src: '/immagini/foto/foto_1200x800/webp/persone_3.webp', alt: 'Atmosfera della sagra' },
  { src: '/immagini/foto/foto_1200x800/webp/persone_4.webp', alt: 'Ospiti alla sagra 2' },
  { src: '/immagini/foto/foto_1200x800/webp/pesone_1.webp', alt: 'Persone alla sagra' },
  { src: '/immagini/foto/foto_1200x800/webp/bar_1.webp', alt: 'Il bar della sagra' },
  { src: '/immagini/foto/foto_1200x800/webp/bistecca_1.webp', alt: 'Bistecca Chianina' },
  { src: '/immagini/foto/foto_1200x800/webp/burgher_1.webp', alt: 'Hamburger Chianina' },
  { src: '/immagini/foto/foto_1200x800/webp/dolci_1.webp', alt: 'Dolci della sagra' },
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const isOpen = lightboxIndex !== null;

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + PHOTOS.length) % PHOTOS.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % PHOTOS.length));
  }, []);

  const close = useCallback(() => {
    setLightboxIndex(null);
    setAutoPlay(false);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isOpen || !autoPlay) return;
    const timer = setTimeout(next, 3000);
    return () => clearTimeout(timer);
  }, [isOpen, autoPlay, lightboxIndex, next]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, next, prev, close]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setLightboxIndex(i)}
            className="aspect-square relative overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fuoco)]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Image container */}
          <div
            className="relative w-full max-w-5xl mx-4 aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[lightboxIndex].src}
              alt={PHOTOS[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors"
            aria-label="Precedente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors"
            aria-label="Successiva"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors"
            aria-label="Chiudi"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Autoplay toggle */}
          <button
            onClick={(e) => { e.stopPropagation(); setAutoPlay((v) => !v); }}
            className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${autoPlay ? 'bg-[var(--color-fuoco)] text-white' : 'bg-white/10 text-white hover:bg-white/25'}`}
          >
            {autoPlay ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                Pausa
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Slideshow
              </>
            )}
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </>
  );
}
