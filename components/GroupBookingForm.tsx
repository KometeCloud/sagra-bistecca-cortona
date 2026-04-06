'use client';

import { useState } from 'react';

interface Props {
  labels: {
    name: string;
    email: string;
    phone: string;
    guests: string;
    tickets: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

export default function GroupBookingForm({ labels }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0f9a2909-489c-4c11-9c9a-fe74ae044ace',
          subject: 'Prenotazione Gruppo — Sagra della Bistecca',
          ...data,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-crema-dark)] text-center">
        <div className="text-5xl mb-4">✓</div>
        <p className="text-[var(--color-terra)] font-semibold text-lg">{labels.success}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-crema-dark)] space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
            {labels.name}
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
            {labels.email}
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
            {labels.phone}
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
            {labels.guests}
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
          {labels.tickets}
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
          {labels.message}
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">{labels.error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[var(--color-chianti)] hover:bg-[var(--color-chianti-light)] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-lg"
      >
        {status === 'sending' ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
