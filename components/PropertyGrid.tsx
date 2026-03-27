'use client';

import { useState } from 'react';
import type { Property } from '@/lib/fetchIlCasale';

type Props = {
  properties: Property[];
  bookLabel: string;
};

export default function PropertyGrid({ properties, bookLabel }: Props) {
  const sources = Array.from(new Set(properties.map((p) => p.source)));
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? properties.filter((p) => p.source === active) : properties;

  return (
    <>
      {/* Filtro struttura */}
      {sources.length > 1 && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActive(null)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
              active === null
                ? 'bg-[var(--color-chianti)] text-white border-[var(--color-chianti)]'
                : 'bg-white text-[var(--color-terra)] border-[var(--color-crema-dark)] hover:border-[var(--color-chianti)]'
            }`}
          >
            Tutte le strutture
          </button>
          {sources.map((src) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                active === src
                  ? 'bg-[var(--color-chianti)] text-white border-[var(--color-chianti)]'
                  : 'bg-white text-[var(--color-terra)] border-[var(--color-crema-dark)] hover:border-[var(--color-chianti)]'
              }`}
            >
              {src}
            </button>
          ))}
        </div>
      )}

      {/* Griglia */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((prop) => (
          <div
            key={`${prop.source}-${prop.id}`}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--color-crema-dark)] hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Immagine */}
            <div className="relative h-52 overflow-hidden bg-[var(--color-crema)]">
              {prop.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">
                  🏡
                </div>
              )}

              {/* Badge struttura — sinistra */}
              <span className="absolute top-3 left-3 bg-[var(--color-terra)] text-white text-xs font-bold px-2.5 py-1 rounded-full opacity-80">
                {prop.source}
              </span>

              {/* Occupancy — destra */}
              {prop.adults > 0 && (
                <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  👥 {prop.adults}
                  {prop.children > 0 && ` · 🧒 ${prop.children}`}
                </span>
              )}
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col flex-1 gap-3">
              <h3 className="font-display text-xl font-bold text-[var(--color-chianti)]">
                {prop.name}
              </h3>

              {prop.description && (
                <p className="text-sm text-[var(--color-terra)] opacity-70 leading-relaxed flex-1">
                  {prop.description}
                  {prop.description.length >= 220 ? '…' : ''}
                </p>
              )}

              <a
                href={prop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-[var(--color-chianti)] hover:bg-[var(--color-chianti-light)] text-white font-semibold py-3 rounded-xl transition-colors mt-auto"
              >
                {bookLabel} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
