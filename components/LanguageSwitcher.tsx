'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === 'it' ? 'en' : 'it';
    router.push(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full border border-[var(--color-chianti)] text-[var(--color-chianti)] hover:bg-[var(--color-chianti)] hover:text-white transition-all duration-200"
      aria-label="Cambia lingua / Switch language"
    >
      <span className={locale === 'it' ? 'font-bold' : 'opacity-60'}>IT</span>
      <span className="opacity-40 mx-0.5">|</span>
      <span className={locale === 'en' ? 'font-bold' : 'opacity-60'}>EN</span>
    </button>
  );
}
