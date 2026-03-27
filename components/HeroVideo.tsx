'use client';

import { useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';

interface HeroVideoProps {
  edition: string;
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  cta: string;
  learnMore: string;
}

export default function HeroVideo({
  edition,
  title,
  subtitle,
  dates,
  location,
  cta,
  learnMore,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-video.webm" type="video/webm" />
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Flame pattern top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-chianti)] via-[var(--color-fuoco)] to-[var(--color-oro)]" />

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-6 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 transition-all backdrop-blur-sm"
        aria-label={muted ? 'Attiva audio' : 'Disattiva audio'}
      >
        {muted ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-4-4m4 4l4-4M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block text-[var(--color-fuoco-light)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            ✦ Cortona · Toscana ✦
          </span>
        </div>

        <h1 className="font-display text-white mb-4">
          <span className="block text-[var(--color-fuoco-light)] text-5xl md:text-7xl font-bold leading-none">
            {edition}
          </span>
          <span className="block text-4xl md:text-6xl font-bold leading-tight mt-2">
            {title}
          </span>
        </h1>

        <p className="text-[var(--color-crema)] text-xl md:text-2xl mt-4 mb-2 font-display italic">
          {subtitle}
        </p>

        <div className="flex items-center justify-center gap-3 mt-6 mb-10">
          <div className="h-px w-16 bg-[var(--color-fuoco)] opacity-60" />
          <span className="text-[var(--color-crema-dark)] text-lg font-semibold tracking-wide">
            {dates}
          </span>
          <div className="h-px w-16 bg-[var(--color-fuoco)] opacity-60" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/tickets"
            className="bg-[var(--color-fuoco)] hover:bg-[var(--color-fuoco-light)] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-[0_0_30px_rgba(232,98,26,0.5)] tracking-wide"
          >
            🎟 {cta}
          </Link>
          <Link
            href="/menu"
            className="border-2 border-white/40 hover:border-white text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
          >
            {learnMore}
          </Link>
        </div>

        <p className="text-[var(--color-crema)] opacity-60 text-sm mt-8 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
