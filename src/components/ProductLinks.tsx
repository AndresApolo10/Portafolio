import { companyLinks } from '../data/profile';
import { useLanguage } from '../Language';

export default function ProductLinks({ company }: { company: string }) {
  const { t } = useLanguage();
  const links = companyLinks[company];
  if (!links?.length) return null;
  return <div className="experience-links">{links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${company}: ${t(link.label)}`}>{t(link.label)} <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a>)}</div>;
}
