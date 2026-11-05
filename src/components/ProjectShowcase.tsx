import { useLanguage } from '../Language';
import { projects } from '../data/projects';
import TechLogos from './TechLogos';
import CompanyMark from './CompanyMark';
import ProductLinks from './ProductLinks';

const imagePath = (file: string) => `${import.meta.env.BASE_URL}images/projects/${file}`;
function OutwardArrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>;
}
function Phone({ file, caption, secondary = false }: { file: string; caption: string; secondary?: boolean }) {
  return <div className={`device-phone${secondary ? ' secondary-phone' : ''}`}><img src={imagePath(file)} alt={caption} loading="lazy" decoding="async" /></div>;
}
function Laptop({ file, caption, address }: { file: string; caption: string; address: string }) {
  return <div className="device-laptop"><div className="laptop-display"><div className="browser-strip" aria-hidden="true"><span className="browser-dots">● ● ●</span><span>{address}</span><span>↗</span></div><img src={imagePath(file)} alt={caption} loading="lazy" decoding="async" /></div><div className="laptop-base" /></div>;
}

export default function ProjectShowcase({ onShowExperience }: { onShowExperience: (company: string) => void }) {
  const { t } = useLanguage();

  return <div className="project-grid showcase-grid">{projects.map(project => <article className={`project-card showcase-card project-${project.id}`} key={project.id}>
    <div className={`project-stage stage-${project.id} stage-${project.kind}${project.images.length === 1 && project.kind === 'mobile' ? ' stage-single-phone' : ''}`}>
      <span className="stage-platform">{t(project.platform)}</span>
      <div className="device-scene">
        {project.kind === 'desktop' ? <Laptop file={project.images[0].file} caption={t(project.images[0].caption)} address={project.address ?? ''} /> : project.kind === 'mixed' ? <><Laptop file={project.images[0].file} caption={t(project.images[0].caption)} address={project.address ?? ''} /><Phone file={project.images[1].file} caption={t(project.images[1].caption)} /></> : <>{project.images.length > 1 && <Phone file={project.images[1].file} caption={t(project.images[1].caption)} secondary />}<Phone file={project.images[0].file} caption={t(project.images[0].caption)} /></>}
      </div>
      <span className="stage-source">{t(project.id === 'helper' ? 'Vista demo · Datos de ejemplo' : ['brightn', 'deuna'].includes(project.id) ? 'Capturas de la app' : 'Imágenes públicas del producto')}</span>
    </div>
    <div className="project-body">
      <div className="project-title-row"><div className="project-title-brand"><CompanyMark company={project.company} /><h3>{project.company}</h3></div><span>{t(project.dates)}</span></div>
      <p>{t(project.description)}</p>
      <ul className="tag-list">{project.stack.map(tech => <li key={tech}><TechLogos name={tech} /><span>{tech}</span></li>)}</ul>
      {project.contributions ? <details className="project-inline-contributions"><summary>{t('Explorar mis aportes')}</summary><ul>{project.contributions.map(item => <li key={item}>{t(item)}</li>)}</ul></details> : <div className="project-card-actions"><button type="button" className="text-link" onClick={() => onShowExperience(project.company)}>{t('Explorar mis aportes')} <OutwardArrow /></button></div>}
      <ProductLinks company={project.company} />
    </div>
  </article>)}</div>;
}
