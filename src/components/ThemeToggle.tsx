import { useEffect, useState } from 'react';
import { useLanguage } from '../Language';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const dark = theme === 'dark';
  const label = t(dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0e1b25' : '#18394e');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* The toggle also works without storage. */ }
  }, [theme, dark]);

  return <button type="button" className="theme-toggle" onClick={() => setTheme(dark ? 'light' : 'dark')} aria-label={label} title={label} aria-pressed={dark}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dark ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></> : <path d="M20.9 13.1A9 9 0 0 1 10.9 3a9 9 0 1 0 10 10.1Z" />}
    </svg>
  </button>;
}
