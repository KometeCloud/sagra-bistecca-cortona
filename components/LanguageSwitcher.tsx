'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

type Props = { scrolled?: boolean };

export default function LanguageSwitcher({ scrolled = false }: Props) {
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
      className={`flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-full border transition-all duration-200 ${
        scrolled
          ? 'border-gray-400 text-gray-500 hover:bg-gray-100'
          : 'border-gray-400 text-gray-300 hover:bg-white/10'
      }`}
      aria-label="Cambia lingua / Switch language"
    >
      <span className={locale === 'it' ? 'font-bold' : 'opacity-60'}>IT</span>
      <span className="opacity-40 mx-0.5">|</span>
      <span className={locale === 'en' ? 'font-bold' : 'opacity-60'}>EN</span>
    </button>
  );
}
