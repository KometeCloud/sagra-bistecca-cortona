'use client';

import { useState } from 'react';

interface Props {
  labels: {
    name: string;
    email: string;
    phone: string;
    guests: string;
    guestsPlaceholder: string;
    tickets: string;
    yes: string;
    no: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

const GUEST_OPTIONS = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25+'];

const inputClass = 'w-full border border-[var(--color-crema-dark)] rounded-xl px-4 py-3 text-[var(--color-terra)] bg-[#FDFAF5] focus:outline-none focus:border-[var(--color-chianti)] transition-colors';

export default function GroupBookingForm({ labels }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [ticketsBought, setTicketsBought] = useState<'yes' | 'no' | null>(null);

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
          <input type="text" name="name" required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
            {labels.email}
          </label>
          <input type="email" name="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
            {labels.phone}
          </label>
          <input type="tel" name="phone" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
            {labels.guests}
          </label>
          <select name="guests" required className={inputClass}>
            <option value="">{labels.guestsPlaceholder}</option>
            {GUEST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Biglietti già acquistati — SI/NO */}
      <div>
        <p className="block text-sm font-medium text-[var(--color-terra)] mb-2">
          {labels.tickets}
        </p>
        <input type="hidden" name="ticketsPurchased" value={ticketsBought ?? ''} />
        <div className="flex gap-3">
          {(['yes', 'no'] as const).map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setTicketsBought(val)}
              className={`flex-1 py-3 rounded-xl font-semibold border transition-colors text-sm ${
                ticketsBought === val
                  ? 'bg-[var(--color-chianti)] text-white border-[var(--color-chianti)]'
                  : 'bg-[#FDFAF5] text-[var(--color-terra)] border-[var(--color-crema-dark)] hover:border-[var(--color-chianti)]'
              }`}
            >
              {labels[val]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-terra)] mb-1.5">
          {labels.message}
        </label>
        <textarea
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
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
