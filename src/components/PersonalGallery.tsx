import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../Language';

const moments = [
  { file: 'familia', title: 'Mi familia', description: 'Una parte esencial de mi vida.', alt: 'Un momento de graduación compartido en familia.', fit: 'cover', position: '50% 42%' },
  { file: 'futbol', title: 'El fútbol, hoy', description: 'Una pasión que sigo viviendo en la cancha.', alt: 'Andrés jugando al fútbol con su equipo.', fit: 'contain', position: 'center' },
  { file: 'running', title: 'Salir a correr', description: 'Disfrutar del deporte, un paso a la vez.', alt: 'Andrés entrenando al aire libre en una pista de atletismo.', fit: 'cover', position: '50% 40%' },
  { file: 'preparacion-running', title: 'Antes de empezar', description: 'Siempre hay tiempo para moverse.', alt: 'Andrés atándose las zapatillas antes de hacer deporte.', fit: 'contain', position: 'center' },
  { file: 'futbol-infancia', title: 'Desde pequeño', description: 'El fútbol me acompaña desde niño.', alt: 'Recuerdo de infancia con uniforme de fútbol y un trofeo.', fit: 'contain', position: 'center' },
] as const;

function Arrow({ backwards = false }: { backwards?: boolean }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{transform:backwards?'rotate(180deg)':undefined}}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
}

export default function PersonalGallery() {
  const { t } = useLanguage();
  const track = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const lightboxOpen = selected !== null;
  const pageCount = Math.ceil(moments.length / perPage);
  const firstVisible = Math.min(page * perPage, Math.max(0, moments.length - perPage));

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let previousVisible = 0;
    const observer = new ResizeObserver(() => {
      const card = element.firstElementChild as HTMLElement | null;
      if (!card) return;
      const visible = Math.max(1, Math.round(element.clientWidth / card.offsetWidth));
      if (visible === previousVisible) return;
      previousVisible = visible;
      setPerPage(visible);
      element.scrollTo({left:0,behavior:'instant'});
      setPage(0);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightboxOpen || !dialog.current) return;
    const currentDialog = dialog.current;
    const previousOverflow = document.body.style.overflow;
    currentDialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      currentDialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen]);

  function goToPage(next: number) {
    const element = track.current;
    if (!element) return;
    const target = element.children[Math.max(0, Math.min(next, pageCount - 1)) * perPage] as HTMLElement | undefined;
    if (!target) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollTo({left:target.offsetLeft - (element.firstElementChild as HTMLElement).offsetLeft,behavior:reduced?'instant':'smooth'});
  }

  function syncPage() {
    const element = track.current;
    if (!element || !element.children[1]) return;
    const step = (element.children[1] as HTMLElement).offsetLeft - (element.children[0] as HTMLElement).offsetLeft;
    setPage(Math.min(pageCount-1,Math.max(0,Math.round(element.scrollLeft / (step * perPage)))));
  }

  return <section className="personal-section" aria-labelledby="personal-title">
    <div className="personal-heading">
      <div><p className="eyebrow section-number">{t("UN POCO MÁS DE MÍ")}</p><h3 id="personal-title">{t("Familia, running")}<br />{t("y mucho fútbol.")}</h3></div>
      <p>{t("Mi familia es una parte esencial de mi vida. Fuera del código, amo el deporte: disfruto salir a correr y sigo jugando al fútbol, una pasión que me acompaña desde niño.")}</p>
    </div>
    <div className="gallery-toolbar"><p>{t("Algunos momentos de mi vida")}<span className="swipe-hint"> · {t('Desliza para explorar')}</span></p><div className="gallery-arrows"><button type="button" aria-label={t("Fotos anteriores")} aria-controls="personal-photos" disabled={page===0} onClick={()=>goToPage(page-1)}><Arrow backwards /></button><button type="button" aria-label={t("Más fotos")} aria-controls="personal-photos" disabled={page===pageCount-1} onClick={()=>goToPage(page+1)}><Arrow /></button></div></div>
    <ul className="personal-photos" id="personal-photos" ref={track} onScroll={syncPage} aria-label={t("Galería de fotos personales")} tabIndex={0} onKeyDown={event=>{
      if(event.target!==event.currentTarget)return;
      if(event.key==='ArrowRight'){event.preventDefault();goToPage(page+1);}
      if(event.key==='ArrowLeft'){event.preventDefault();goToPage(page-1);}
      if(event.key==='Home'){event.preventDefault();goToPage(0);}
      if(event.key==='End'){event.preventDefault();goToPage(pageCount-1);}
    }}>
      {moments.map((moment,index)=><li key={moment.file} className="moment-card"><button type="button" className="moment-image" onClick={()=>setSelected(index)} aria-label={`${t('Ampliar foto:')} ${t(moment.title)}`}><img src={`${import.meta.env.BASE_URL}images/personal/${moment.file}.webp`} alt={t(moment.alt)} loading="lazy" decoding="async" width="600" height="600" style={{objectFit:moment.fit,objectPosition:moment.position}} /><span className="photo-expand" aria-hidden="true">↗</span></button><div className="moment-caption"><h4>{t(moment.title)}</h4><p>{t(moment.description)}</p></div></li>)}
    </ul>
    <div className="gallery-pagination"><p aria-live="polite" aria-atomic="true">{String(firstVisible+1).padStart(2,'0')}{perPage>1 && `–${String(Math.min(firstVisible+perPage,moments.length)).padStart(2,'0')}`} <span>/ {String(moments.length).padStart(2,'0')}</span></p><div aria-label={t("Páginas de la galería")}>{Array.from({length:pageCount},(_,index)=><button key={index} type="button" aria-label={`${t('Ver grupo')} ${index+1} ${t('de')} ${pageCount}`} aria-current={page===index?'true':undefined} onClick={()=>goToPage(index)}><span /></button>)}</div></div>
    <dialog className="photo-dialog" ref={dialog} aria-labelledby="photo-title" onCancel={()=>setSelected(null)} onClose={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)setSelected(null);}} onKeyDown={event=>{
      if(selected===null)return;
      if(event.key==='ArrowRight'&&selected<moments.length-1){event.preventDefault();setSelected(selected+1);}
      if(event.key==='ArrowLeft'&&selected>0){event.preventDefault();setSelected(selected-1);}
    }}>
      {selected!==null && <div className="photo-dialog-content"><div className="photo-dialog-heading"><div><h3 id="photo-title">{t(moments[selected].title)}</h3><p>{t(moments[selected].description)}</p></div><button type="button" className="photo-close" aria-label={t("Cerrar foto")} onClick={()=>setSelected(null)} autoFocus><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg></button></div><img className="photo-full" src={`${import.meta.env.BASE_URL}images/personal/${moments[selected].file}.webp`} alt={t(moments[selected].alt)} /><div className="photo-dialog-controls"><button type="button" disabled={selected===0} onClick={()=>setSelected(selected-1)} aria-label={t("Foto anterior")}><Arrow backwards /></button><span>{selected+1} / {moments.length}</span><button type="button" disabled={selected===moments.length-1} onClick={()=>setSelected(selected+1)} aria-label={t("Foto siguiente")}><Arrow /></button></div></div>}
    </dialog>
  </section>;
}
