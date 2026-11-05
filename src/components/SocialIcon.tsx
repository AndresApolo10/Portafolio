type Network = 'linkedin' | 'x' | 'instagram';

export default function SocialIcon({ name }: { name: Network }) {
  if (name === 'instagram') return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{name === 'x' ? <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.4-8.5L.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z"/> : <path d="M5.4 7.8H1.8V22h3.6V7.8ZM3.6 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM22.2 13.6c0-4.3-2.3-6.3-5.3-6.3a4.6 4.6 0 0 0-4.1 2.2V7.8H9.2V22h3.6v-7.9c0-2.1 1.2-3.3 2.9-3.3 1.6 0 2.8 1.1 2.8 3.3V22h3.7v-8.4Z"/>}</svg>;
}
