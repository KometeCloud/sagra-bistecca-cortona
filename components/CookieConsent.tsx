'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/navigation';

const GA_ID = 'G-C83KV73JHP';

function loadGA() {
  if (document.querySelector(`script[src*="${GA_ID}"]`)) return;
  const s1 = document.createElement('script');
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s1.async = true;
  document.head.appendChild(s1);

  const s2 = document.createElement('script');
  s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
  document.head.appendChild(s2);
}

interface Props {
  acceptLabel: string;
  rejectLabel: string;
  message: string;
  privacyLabel: string;
}

export default function CookieConsent({ acceptLabel, rejectLabel, message, privacyLabel }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
      loadGA();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted');
    loadGA();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-[var(--color-terra)] text-[var(--color-crema)] rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm opacity-90 flex-1 leading-relaxed">
          {message}{' '}
          <Link href="/privacy" className="underline opacity-70 hover:opacity-100 transition-opacity">
            {privacyLabel}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm px-4 py-2 rounded-xl border border-white/30 hover:border-white/60 transition-colors opacity-70 hover:opacity-100"
          >
            {rejectLabel}
          </button>
          <button
            onClick={accept}
            className="text-sm px-5 py-2 rounded-xl bg-[var(--color-fuoco)] hover:bg-[var(--color-fuoco-light)] text-white font-semibold transition-colors"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
