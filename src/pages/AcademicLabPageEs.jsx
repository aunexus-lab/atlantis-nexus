import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ── SVG Icon Library ───────────────────────────────── */
const Icon = ({ name, className = 'w-5 h-5' }) => {
  const s = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    signal:   <svg {...s}><path d="M2 12h2m16 0h2M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>,
    brain:    <svg {...s}><path d="M12 2a4 4 0 0 1 4 4c0 .34-.04.67-.1 1A4 4 0 0 1 20 11c0 1.5-.82 2.8-2.03 3.5A4 4 0 0 1 14 18H10a4 4 0 0 1-3.97-3.5A4 4 0 0 1 4 11a4 4 0 0 1 4.1-4c-.06-.33-.1-.66-.1-1a4 4 0 0 1 4-4z"/></svg>,
    rocket:   <svg {...s}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5-3-3-.5.5zM12 2S7 6 7 13l4 4c7 0 11-5 11-5S19 2 12 2z"/><circle cx="14.5" cy="9.5" r="1.5" fill="currentColor" stroke="none"/></svg>,
    loop:     <svg {...s}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
    trending: <svg {...s}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    alert:    <svg {...s}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    factory:  <svg {...s}><path d="M2 20V8l6-4v5l6-4v5l6-4v14H2z"/><path d="M6 20v-6h4v6"/></svg>,
    pipeline: <svg {...s}><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M3 14h18M7 20h10"/></svg>,
    zap:      <svg {...s}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    check:    <svg {...s}><polyline points="20 6 9 17 4 12"/></svg>,
    clock:    <svg {...s}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    target:   <svg {...s}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    refresh:  <svg {...s}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
    dollar:   <svg {...s}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    link:     <svg {...s}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    x:        <svg {...s}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    arrow:    <svg {...s}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  };
  return icons[name] ?? null;
};

const navSections = [
  { id: 'problema',    label: 'El Problema' },
  { id: 'sistema',     label: 'El Sistema'  },
  { id: 'modelo',      label: 'Modelo'      },
  { id: 'componentes', label: 'Componentes' },
  { id: 'impacto',     label: 'Impacto'     },
];

const problemItems = [
  { icon: 'trending', text: 'Marketing depende de inputs manuales' },
  { icon: 'clock',    text: 'Académico produce lento'              },
  { icon: 'pipeline', text: 'No hay pipeline'                      },
  { icon: 'factory',  text: 'No hay fábrica de producción'         },
];

const layers = [
  {
    num: '01', icon: 'signal', title: 'Market Signal Layer',
    color: 'bg-blue-50 border-blue-100', label: 'text-blue-600',
    items: ['Tendencias', 'Skills demand', 'Herramientas (Azure, AI, etc.)', 'Inputs de marketing'],
  },
  {
    num: '02', icon: 'brain', title: 'Academic Lab Engine',
    color: 'bg-violet-50 border-violet-100', label: 'text-violet-600',
    items: ['Semantic alignment con programas existentes', 'Diseño estructurado', 'Pricing / financing', 'Alineación acreditación', 'Generación de syllabus', 'Blueprint Moodle', 'Recursos'],
  },
  {
    num: '03', icon: 'rocket', title: 'Go-to-Market Layer',
    color: 'bg-emerald-50 border-emerald-100', label: 'text-emerald-600',
    items: ['Landing page inmediata', 'Publicación en campus', 'Captura de leads / enrollments'],
    note: 'Antes de que el curso esté terminado',
  },
  {
    num: '04', icon: 'loop', title: 'Iteration Loop',
    color: 'bg-amber-50 border-amber-100', label: 'text-amber-600',
    items: ['Feedback real', 'Ajuste de contenido', 'Nuevas variantes CE'],
  },
];

const impactItems = [
  { icon: 'clock',    metric: '70–90%',     label: 'Reducción en tiempo de lanzamiento' },
  { icon: 'trending', metric: 'Más',        label: 'Campañas simultáneas'               },
  { icon: 'target',   metric: 'Mejor',      label: 'Alineación con demanda real'        },
  { icon: 'refresh',  metric: 'Continua',   label: 'Iteración'                          },
  { icon: 'dollar',   metric: 'Nuevo',      label: 'Pipeline de revenue'                },
  { icon: 'zap',      metric: 'Velocidad',  label: 'Como capacidad académica'           },
];

export default function AcademicLabPageEs() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 160;
      for (const s of [...navSections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) { setActiveSection(s.id); return; }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white/70 backdrop-blur-sm'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors text-sm no-underline">← AU Nexus</Link>
            <span className="text-gray-300">|</span>
            <span className="font-semibold text-lg tracking-tight">Academic Lab</span>
            <Link to="/academic-lab" className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors no-underline">EN</Link>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navSections.map(item => (
              <a key={item.id} href={`#${item.id}`} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${activeSection === item.id ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-red-600 mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-pulse" />
              Motor de Aceleración de Ingresos CE
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-6 leading-[0.95]">Academic Lab</h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mb-8">
              Un sistema de respuesta al mercado que lleva programas CE desde señal hasta lanzamiento en días — no en meses.
            </p>
            <blockquote className="border-l-4 border-gray-900 pl-5 py-1 my-8">
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                "No estamos construyendo cursos. Estamos construyendo capacidad de respuesta al mercado."
              </p>
            </blockquote>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
              <div><div className="text-3xl font-black text-black">70–90%</div><div className="text-sm text-gray-500 mt-1">Reducción en tiempo de lanzamiento</div></div>
              <div><div className="text-3xl font-black text-black">Días</div><div className="text-sm text-gray-500 mt-1">Tiempo de respuesta al mercado</div></div>
              <div><div className="text-3xl font-black text-black">Tiempo real</div><div className="text-sm text-gray-500 mt-1">Alineación con el mercado</div></div>
            </div>
          </div>
        </section>

        {/* El problema */}
        <section id="problema" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">El Problema Real</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            La universidad no puede competir en mercados que se mueven más rápido que su capacidad de producir oferta.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {problemItems.map(item => (
              <div key={item.text} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-gray-400 shrink-0"><Icon name={item.icon} className="w-5 h-5" /></span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <blockquote className="border-l-4 border-red-400 pl-5 py-3 bg-red-50 rounded-r-xl pr-5">
            <p className="text-red-700 font-medium">"Cuando llegamos al mercado… ya es tarde."</p>
          </blockquote>
        </section>

        {/* El Sistema */}
        <section id="sistema" className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">Lo que realmente construiste</h2>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm mb-8">
              <p className="text-xl font-bold text-gray-900 mb-2">Motor de Producción CE + Sistema de Respuesta al Mercado</p>
              <p className="text-gray-500">No es solo diseño. Es un sistema que detecta oportunidades, produce oferta, lanza al mercado y aprende.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Antes */}
              <div className="p-6 border border-gray-200 rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Antes (estado actual)</div>
                <div className="space-y-2 text-sm text-gray-600 font-mono">
                  {['Idea → reuniones → diseño', '→ aprobación → contenido', '→ landing → campaña'].map(t => (
                    <div key={t} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />{t}</div>
                  ))}
                </div>
                <div className="mt-4 flex gap-6 text-sm">
                  <span className="flex items-center gap-1.5 text-red-500 font-semibold"><Icon name="clock" className="w-4 h-4" /> Meses</span>
                  <span className="flex items-center gap-1.5 text-red-500 font-semibold"><Icon name="alert" className="w-4 h-4" /> Mercado perdido</span>
                </div>
              </div>
              {/* Después */}
              <div className="p-6 border-2 border-gray-900 rounded-2xl bg-gray-900 text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Después (tu sistema)</div>
                <div className="space-y-2 text-sm font-mono text-gray-300">
                  {['Señal de mercado → Academic Lab', '→ Landing + Pre-oferta', '→ Captura → Curso → Iteración'].map(t => (
                    <div key={t} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />{t}</div>
                  ))}
                </div>
                <div className="mt-4 flex gap-6 text-sm">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold"><Icon name="zap" className="w-4 h-4" /> Días / semanas</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold"><Icon name="trending" className="w-4 h-4" /> Mercado capturado</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <img src="/images/Time2MarketProcess.png" alt="Proceso Time-to-Market — Pipeline de Producción CE del Academic Lab" className="w-full rounded-2xl border border-gray-200 shadow-sm" loading="lazy" />
              <p className="text-xs text-center text-gray-400 mt-2">Proceso de Time-to-Market: De señal a lanzamiento en días</p>
            </div>
          </div>
        </section>

        {/* Modelo */}
        <section id="modelo" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">El Modelo Estratégico</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Resuelve Dos Guerras Internas</h3>
              <div className="space-y-4">
                {[
                  { title: '1. Marketing vs Académico', before: 'Marketing espera · Académico retrasa', after: 'El sistema produce ambos en paralelo' },
                  { title: '2. Programas Formales vs Mercado', before: 'Programas largos · Baja conversión', after: 'CE como entrada + pathway a degree' },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-white border border-gray-200 rounded-xl">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">{item.title}</p>
                    <p className="text-sm text-gray-400 mb-2">Antes: {item.before}</p>
                    <p className="text-sm font-semibold text-gray-900 flex items-center gap-1.5"><Icon name="arrow" className="w-4 h-4 text-gray-400" />{item.after}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Conexión con AU Nexus</h3>
              <p className="text-gray-600 text-sm mb-4">Esto es literalmente <strong>AU Nexus aplicado a oferta académica</strong>:</p>
              <ul className="space-y-2">
                {['Orquestación', 'No lineal', 'Evidence-centered', 'Modular'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500"><Icon name="check" className="w-4 h-4" /></span>{item}
                  </li>
                ))}
              </ul>
              <blockquote className="mt-6 border-l-4 border-gray-300 pl-4 italic text-gray-500 text-sm">
                "Podemos lanzar el mercado antes de terminar el producto."<br />
                <span className="not-italic font-semibold text-gray-700">Eso en educación es radical.</span>
              </blockquote>
            </div>
          </div>
          <div className="mt-4">
            <img src="/images/AcademicProcess.png" alt="Proceso Académico — Pipeline de Diseño y Gobernanza de Programas CE" className="w-full rounded-2xl border border-gray-200 shadow-sm" loading="lazy" />
            <p className="text-xs text-center text-gray-400 mt-2">Proceso Académico: Pipeline de Diseño y Gobernanza de Programas CE</p>
          </div>
        </section>

        {/* Componentes */}
        <section id="componentes" className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">Componentes del Sistema</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {layers.map(layer => (
                <div key={layer.num} className={`p-5 rounded-2xl border ${layer.color}`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${layer.label} mb-1`}>Capa {layer.num}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={layer.label}><Icon name={layer.icon} className="w-5 h-5" /></span>
                    <h3 className="font-semibold text-gray-900">{layer.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {layer.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-400 mt-0.5 shrink-0"><Icon name="check" className="w-3.5 h-3.5" /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {layer.note && <p className="mt-3 text-xs font-semibold text-gray-500 bg-white/70 px-2 py-1 rounded-lg inline-flex items-center gap-1"><Icon name="arrow" className="w-3 h-3" /> {layer.note}</p>}
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gray-900 text-white rounded-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Insight Clave</p>
              <p className="text-lg font-medium leading-relaxed">
                "El curso deja de ser un producto terminado.<br />
                <span className="text-emerald-400">Se convierte en un proceso en evolución."</span>
              </p>
            </div>
          </div>
        </section>

        {/* Impacto */}
        <section id="impacto" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">Impacto & Posicionamiento</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {impactItems.map(item => (
              <div key={item.label} className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all">
                <span className="text-gray-400 mb-3 block"><Icon name={item.icon} className="w-5 h-5" /></span>
                <div className="text-2xl font-black text-gray-900">{item.metric}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Posicionamiento Final</p>
            <p className="text-2xl font-black text-gray-900 mb-1">Continuing Education Acceleration System (CEAS)</p>
            <p className="text-gray-500 text-sm mb-6">Powered by Academic Lab</p>
            <div className="space-y-3">
              {[
                'We are not building courses. We are building market response capability.',
                'Speed is now an academic capability.',
                'Time-to-market is our competitive advantage.',
                'We capture demand before competitors even define the program.',
                'CE is no longer a product line. It is a sensing and response system.',
              ].map(phrase => (
                <div key={phrase} className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1 shrink-0"><Icon name="arrow" className="w-4 h-4" /></span>
                  <p className="text-sm text-gray-700 italic">"{phrase}"</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-gray-900 text-white rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Por Qué Es Único</p>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              {['No es LMS', 'No es SIS', 'No es Marketing'].map(item => (
                <div key={item} className="flex items-center justify-center gap-1.5 text-sm text-gray-500">
                  <Icon name="x" className="w-3.5 h-3.5 text-red-400" />{item}
                </div>
              ))}
            </div>
            <p className="text-center text-emerald-400 font-semibold text-lg flex items-center justify-center gap-2">
              <Icon name="link" className="w-5 h-5" /> El sistema que conecta los tres en tiempo real
            </p>
            <p className="text-center text-gray-400 text-sm mt-2">
              Esto ya no es gobernanza solamente. <strong className="text-white">Esto es ventaja competitiva institucional.</strong>
            </p>
          </div>
        </section>

      </main>

      <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-400">
        <p className="m-0">© 2026 Atlantis University · Academic Lab</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link to="/" className="text-gray-400 hover:text-gray-700 no-underline text-xs transition-colors">AU Nexus Method</Link>
          <span className="text-gray-200">·</span>
          <Link to="/academic-lab" className="text-gray-400 hover:text-gray-700 no-underline text-xs transition-colors">View in English</Link>
          <span className="text-gray-200">·</span>
          <Link to="/privacy" className="text-gray-400 hover:text-gray-700 no-underline text-xs transition-colors">Privacidad</Link>
        </div>
      </footer>
    </div>
  );
}
