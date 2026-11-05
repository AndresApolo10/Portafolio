import ThemeToggle from './components/ThemeToggle';
import CompanyMark from './components/CompanyMark';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './Language';
import SocialIcon from './components/SocialIcon';
import { profile } from './data/profile';
import TechLogos from './components/TechLogos';
import SkillIllustration from './components/SkillIllustration';
import PersonalGallery from './components/PersonalGallery';
import ProjectShowcase from './components/ProjectShowcase';
import ProductLinks from './components/ProductLinks';

type IconName = 'arrow' | 'external' | 'download' | 'mail' | 'menu' | 'close' | 'plus' | 'code' | 'layers' | 'cloud' | 'copy';
function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    external: <><path d="M6 18 18 6M6 6h12v12" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></>,
    layers: <><path d="m12 3 10 6-10 6L2 9l10-6ZM2 14l10 6 10-6" /></>,
    cloud: <path d="M6 18a5 5 0 0 1-1-9.9 7 7 0 0 1 13.5-1A5.5 5.5 0 0 1 18 18H6Z" />,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V3H3v13h5" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const brandLogo = `${import.meta.env.BASE_URL}images/brand/aa10-entrelazadas.png`;
const photo = `${import.meta.env.BASE_URL}images/andres-apolo.jpg`;
const mainStack = [
  { name: 'React', logo: 'react.svg' },
  { name: 'React Native', logo: 'react.svg' },
  { name: 'TypeScript', logo: 'typescript.svg' },
  { name: 'Node.js', logo: 'nodejs.svg' },
  { name: 'AWS', logo: 'aws.svg' },
] as const;
const navigation = [['sobre-mi', 'Sobre mí'], ['experiencia', 'Experiencia'], ['proyectos', 'Proyectos'], ['contacto', 'Contacto']] as const;
const skills = [
  { icon: 'frontend', title: 'Frontend & móvil', description: 'Interfaces que se sienten bien, en cualquier pantalla.', items: ['React', 'React Native', 'TypeScript', 'HTML & CSS', 'Redux Toolkit', 'Storybook'] },
  { icon: 'backend', title: 'Backend & datos', description: 'La lógica y las conexiones detrás de cada producto.', items: ['Node.js', 'Express', 'NestJS', 'REST & GraphQL', 'MySQL', 'Sequelize'] },
  { icon: 'cloud', title: 'Cloud & calidad', description: 'Integraciones, servicios y pruebas para seguir mejorando.', items: ['AWS Amplify', 'Lambda', 'AppSync', 'DynamoDB', 'Jest & Testing Library', 'Git & Docker'] },
] as const;

export default function App() {
  const { language, toggleLanguage, t } = useLanguage();
  const cvFile = `Andres_Apolo_CV_${language.toUpperCase()}.pdf`;
  const cv = `${import.meta.env.BASE_URL}cv/${cvFile}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string>('Brightn');
  const [copyMessage, setCopyMessage] = useState('');
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.lang = language;
    setCopyMessage('');
    const description = language === 'en'
      ? 'Andrés Apolo, Full Stack developer in Ecuador. React, React Native, TypeScript, Node.js and AWS. Explore my experience and download my CV.'
      : 'Andrés Apolo, desarrollador Full Stack en Ecuador. React, React Native, TypeScript, Node.js y AWS. Conoce mi experiencia y descarga mi CV.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'en' ? 'en_US' : 'es_EC');
  }, [language]);

  function showExperience(company: string) {
    setExpanded(company);
    window.requestAnimationFrame(() => {
      const id = `experience-${company.replaceAll(' ', '-')}`;
      document.getElementById(`${id}-trigger`)?.focus({ preventScroll: true });
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyMessage(t('Correo copiado'));
    } catch {
      setCopyMessage(`${t('Mi correo es')} ${profile.email}`);
    }
  }

  return <>
    <a className="skip-link" href="#contenido">{t("Saltar al contenido")}</a>
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#inicio" className="brand" aria-label={t("Andrés Apolo, inicio")}><img className="brand-logo" src={brandLogo} alt="" aria-hidden="true" width="336" height="259" /><span>Andrés Apolo</span></a>
        <div className="nav-controls"><ThemeToggle /><button type="button" className="language-toggle" onClick={toggleLanguage} aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'} lang={language === 'en' ? 'es' : 'en'}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/></svg>{language === 'en' ? 'Español' : 'English'}</button><button className="menu-toggle" ref={menuButton} aria-label={t(menuOpen ? 'Cerrar menú' : 'Abrir menú')} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button></div>
        <nav id="main-navigation" aria-label={t("Navegación principal")} className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t(label)}</a>)}
          <a href={cv} hrefLang={language} type="application/pdf" className="nav-cv" download={cvFile} onClick={() => setMenuOpen(false)}>{t("Mi CV")} <Icon name="download" size={16} /></a>
        </nav>
      </div>
    </header>

    <main id="contenido">
      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> FULL STACK DEVELOPER</p>
            <h1>{t("De la interfaz")}<br /><span>{t("al backend.")}</span></h1>
            <p className="hero-description">{t('Soy')} <strong>Andrés Apolo.</strong> {t('Desarrollo aplicaciones web y móviles, y los servicios que las hacen funcionar.')}</p>
            <div className="hero-actions"><a className="button button-primary" href={cv} hrefLang={language} type="application/pdf" download={cvFile}>{t("Descargar mi CV")} <Icon name="download" size={18} /></a><a className="text-link" href="#experiencia">{t("Conoce mi trabajo")} <Icon name="arrow" size={18} /></a></div>
            <p className="hero-location"><span aria-hidden="true">↳</span> {t("Desde Machala, Ecuador.")}</p>
          </div>
          <div className="portrait-composition">
            <div className="portrait-outline" aria-hidden="true" />
            <div className="portrait-card">
              <div className="portrait-topline"><span>{t("UN POCO SOBRE MÍ")}</span><span aria-hidden="true">↗</span></div>
              <img className="portrait" src={photo} alt={t("Retrato de Andrés Apolo")} width="351" height="350" fetchPriority="high" />
              <div className="portrait-caption"><div><strong>Andrés Apolo</strong><span>Full Stack Developer</span></div><span className="portrait-badge" aria-label={t("Desarrollo de software")}><Icon name="code" size={24} /></span></div>
            </div>
            <div className="floating-label"><span className="status-dot" /> Web · Mobile · Cloud</div>
          </div>
        </div>
        <div className="container stack-strip"><p>{t("MI STACK PRINCIPAL")}</p><div>{mainStack.map(item => <span className="stack-technology" key={item.name}><img className={`stack-logo${item.name === 'AWS' ? ' stack-logo-aws' : ''}`} src={`${import.meta.env.BASE_URL}images/tech/${item.logo}`} alt="" aria-hidden="true" width={item.name === 'AWS' ? 36 : 27} height="27" />{item.name}</span>)}</div></div>
      </section>

      <section id="sobre-mi" className="section about-section">
        <div className="container">
          <div className="section-heading about-heading"><p className="eyebrow section-number">{t("01 / SOBRE MÍ")}</p><h2>{t("Una mirada completa")}<br />{t("del producto.")}</h2><p>{t("Mi experiencia conecta interfaces, aplicaciones móviles y lógica de negocio. He trabajado en productos de pagos, comercio electrónico, gestión de fondos y bienestar.")}</p></div>
          <div className="capabilities">{skills.map(skill => <article key={skill.title} className="capability"><span className={`capability-icon illustration-${skill.icon}`}><SkillIllustration kind={skill.icon} /></span><h3>{t(skill.title)}</h3><p>{t(skill.description)}</p><ul className="tag-list">{skill.items.map(item => <li key={item}><TechLogos name={item} /><span>{item}</span></li>)}</ul></article>)}</div>
          <PersonalGallery />
        </div>
      </section>

      <section id="experiencia" className="section experience-section">
        <div className="container experience-layout"><div className="section-heading experience-intro"><p className="eyebrow section-number">{t("02 / EXPERIENCIA")}</p><h2>{t("Construyendo")}<br />{t("en equipo.")}</h2><p>{t("Experiencia en frontend, móvil y backend. Estos son algunos de mis aportes a cada producto.")}</p><a className="text-link" href={cv} hrefLang={language} type="application/pdf" download={cvFile}>{t("Ver mi CV completo")} <Icon name="download" size={17} /></a></div>
          <div className="experience-list">{profile.experience.map(item => {
            const isOpen = expanded === item.company;
            const id = `experience-${item.company.replaceAll(' ', '-')}`;
            return <article key={item.company} className={`experience-item ${isOpen ? 'expanded' : ''}`} id={id}>
              <button className="experience-trigger" aria-expanded={isOpen} aria-controls={`${id}-details`} id={`${id}-trigger`} onClick={() => setExpanded(isOpen ? '' : item.company)}><CompanyMark company={item.company} /><span className="experience-title"><strong>{item.company}</strong><span>{t(item.role)}</span></span><span className="experience-date">{t(item.dates)}</span><span className="expand-icon"><Icon name="plus" size={19} /></span></button>
              <div id={`${id}-details`} className="experience-details" role="region" aria-labelledby={`${id}-trigger`} hidden={!isOpen}><p>{t(item.context)}</p><ul>{item.bullets.map(bullet => <li key={bullet}>{t(bullet)}</li>)}</ul><ProductLinks company={item.company} /></div>
            </article>;
          })}</div>
        </div>
      </section>

      <section id="proyectos" className="section projects-section">
        <div className="container"><div className="section-heading project-heading"><div><p className="eyebrow section-number">{t("03 / PROYECTOS")}</p><h2>{t("Trabajo que toma forma.")}</h2></div><p>{t("Productos web y móviles en los que he participado. Explora sus pantallas y conoce mis aportes.")}</p></div>
          <ProjectShowcase onShowExperience={showExperience} />
          <div className="github-callout"><div><span className="small-label">{t("TAMBIÉN EN GITHUB")}</span><p>{t("Código, proyectos personales y más de mi recorrido.")}</p></div><a href={profile.github} target="_blank" rel="noreferrer" className="text-link">{t("Ver mi GitHub")} <Icon name="external" size={18} /></a></div>
        </div>
      </section>

      <section id="contacto" className="contact-section"><div className="container contact-layout"><div><p className="eyebrow">{t("04 / HABLEMOS")}</p><h2>{t("¿Construimos")}<br />{t("lo que sigue?")}</h2><p>{t("Si buscas un desarrollador Full Stack para tu equipo o quieres conversar sobre un proyecto, escríbeme.")}</p></div><div className="contact-actions"><a href={`mailto:${profile.email}`} className="contact-email">{profile.email} <Icon name="external" size={24} /></a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><SocialIcon name="linkedin" /> LinkedIn</a><a href={profile.x} target="_blank" rel="noreferrer"><SocialIcon name="x" /> X</a><a href={profile.instagram} target="_blank" rel="noreferrer"><SocialIcon name="instagram" /> Instagram</a><a href={cv} hrefLang={language} type="application/pdf" download={cvFile}>{t("Descargar CV")} <Icon name="download" size={16} /></a><button onClick={copyEmail}><Icon name="copy" size={16} /> {t("Copiar correo")}</button></div><p className="copy-status" role="status" aria-live="polite">{copyMessage}</p></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-layout"><a className="brand" href="#inicio"><img className="brand-logo" src={brandLogo} alt="" aria-hidden="true" width="336" height="259" /><span>Andrés Apolo</span></a><span>© {new Date().getFullYear()}</span></div></footer>
  </>;
}
