import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navSections = [
  { id: 'problema', label: 'El Problema' },
  { id: 'sistema', label: 'El Sistema' },
  { id: 'modelo', label: 'Modelo' },
  { id: 'componentes', label: 'Componentes' },
  { id: 'impacto', label: 'Impacto' },
];

export default function AcademicLabPageEs() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollY = window.scrollY + 160;
      for (const sec of [...navSections].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sec.id);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-white/70 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors text-sm no-underline">
              ← AU Nexus
            </Link>
            <span className="text-gray-300">|</span>
            <span className="font-semibold text-lg tracking-tight">Academic Lab</span>
            <Link
              to="/academic-lab"
              className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors no-underline"
            >
              EN
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
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
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-6 leading-[0.95]">
              Academic Lab
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mb-8">
              Un sistema de respuesta al mercado que lleva programas CE desde señal hasta lanzamiento en días — no en meses.
            </p>

            <blockquote className="border-l-4 border-gray-900 pl-5 py-1 my-8">
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                "No estamos construyendo cursos. Estamos construyendo capacidad de respuesta al mercado."
              </p>
            </blockquote>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-black text-black">70–90%</div>
                <div className="text-sm text-gray-500 mt-1">Reducción en tiempo de lanzamiento</div>
              </div>
              <div>
                <div className="text-3xl font-black text-black">Días</div>
                <div className="text-sm text-gray-500 mt-1">Tiempo de respuesta al mercado</div>
              </div>
              <div>
                <div className="text-3xl font-black text-black">Tiempo real</div>
                <div className="text-sm text-gray-500 mt-1">Alineación con el mercado</div>
              </div>
            </div>
          </div>
        </section>

        {/* El problema real */}
        <section id="problema" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
            El Problema Real
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            La universidad no puede competir en mercados que se mueven más rápido que su capacidad de producir oferta.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { icon: '📉', text: 'Marketing depende de inputs manuales' },
              { icon: '🐌', text: 'Académico produce lento' },
              { icon: '❌', text: 'No hay pipeline' },
              { icon: '🏭', text: 'No hay fábrica de producción' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <blockquote className="border-l-4 border-red-400 pl-5 py-1 bg-red-50 rounded-r-xl pr-5">
            <p className="text-red-700 font-medium">
              "Cuando llegamos al mercado… ya es tarde."
            </p>
          </blockquote>
        </section>

        {/* El Sistema */}
        <section id="sistema" className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
              Lo que realmente construiste
            </h2>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm mb-8">
              <p className="text-xl font-bold text-gray-900 mb-2">
                Motor de Producción CE + Sistema de Respuesta al Mercado
              </p>
              <p className="text-gray-500">
                No es solo diseño. Es un sistema que detecta oportunidades, produce oferta, lanza al mercado y aprende.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Antes */}
              <div className="p-6 border border-gray-200 rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Antes (estado actual)</div>
                <div className="space-y-2 text-sm text-gray-600 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    Idea → reuniones → diseño
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    → aprobación → contenido
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    → landing → campaña
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <span className="text-red-500 font-semibold">⏱️ Meses</span>
                  <span className="text-red-500 font-semibold">📉 Mercado perdido</span>
                </div>
              </div>

              {/* Después */}
              <div className="p-6 border-2 border-gray-900 rounded-2xl bg-gray-900 text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Después (tu sistema)</div>
                <div className="space-y-2 text-sm font-mono text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Señal de mercado → Academic Lab
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    → Landing + Pre-oferta
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    → Captura → Curso → Iteración
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <span className="text-emerald-400 font-semibold">⚡ Días / semanas</span>
                  <span className="text-emerald-400 font-semibold">📈 Mercado capturado</span>
                </div>
              </div>
            </div>

            {/* Imagen del proceso */}
            <div className="mt-10">
              <img
                src="/images/Time2MarketProcess.png"
                alt="Proceso Time-to-Market — Pipeline de Producción CE del Academic Lab"
                className="w-full rounded-2xl border border-gray-200 shadow-sm"
                loading="lazy"
              />
              <p className="text-xs text-center text-gray-400 mt-2">
                Proceso de Time-to-Market: De señal a lanzamiento en días
              </p>
            </div>
          </div>
        </section>

        {/* Modelo */}
        <section id="modelo" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
            El Modelo Estratégico
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Resuelve Dos Guerras Internas</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">1. Marketing vs Académico</p>
                  <p className="text-sm text-gray-500 mb-2">Antes: Marketing espera · Académico retrasa</p>
                  <p className="text-sm font-semibold text-gray-900">→ El sistema produce ambos en paralelo</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">2. Programas Formales vs Mercado</p>
                  <p className="text-sm text-gray-500 mb-2">Antes: Programas largos · Baja conversión</p>
                  <p className="text-sm font-semibold text-gray-900">→ CE como entrada + pathway a degree</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Conexión con AU Nexus</h3>
              <p className="text-gray-600 text-sm mb-4">
                Esto es literalmente <strong>AU Nexus aplicado a oferta académica</strong>:
              </p>
              <ul className="space-y-2">
                {['Orquestación', 'No lineal', 'Evidence-centered', 'Modular'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="mt-6 border-l-4 border-gray-300 pl-4 italic text-gray-500 text-sm">
                "Podemos lanzar el mercado antes de terminar el producto."
                <br />
                <span className="not-italic font-semibold text-gray-700">Eso en educación es radical.</span>
              </blockquote>
            </div>
          </div>

          {/* Imagen del proceso académico */}
          <div className="mt-4">
            <img
              src="/images/AcademicProcess.png"
              alt="Proceso Académico — Pipeline de Diseño y Gobernanza de Programas CE"
              className="w-full rounded-2xl border border-gray-200 shadow-sm"
              loading="lazy"
            />
            <p className="text-xs text-center text-gray-400 mt-2">
              Proceso Académico: Pipeline de Diseño y Gobernanza de Programas CE
            </p>
          </div>
        </section>

        {/* Componentes */}
        <section id="componentes" className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
              Componentes del Sistema
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  num: '01',
                  icon: '📡',
                  title: 'Market Signal Layer',
                  color: 'bg-blue-50 border-blue-100',
                  labelColor: 'text-blue-600',
                  items: ['Tendencias', 'Skills demand', 'Herramientas (Azure, AI, etc.)', 'Inputs de marketing'],
                },
                {
                  num: '02',
                  icon: '🧠',
                  title: 'Academic Lab Engine',
                  color: 'bg-violet-50 border-violet-100',
                  labelColor: 'text-violet-600',
                  items: [
                    'Semantic alignment con programas existentes',
                    'Diseño estructurado',
                    'Pricing / financing',
                    'Alineación acreditación',
                    'Generación de syllabus',
                    'Blueprint Moodle',
                    'Recursos',
                  ],
                },
                {
                  num: '03',
                  icon: '🚀',
                  title: 'Go-to-Market Layer',
                  color: 'bg-emerald-50 border-emerald-100',
                  labelColor: 'text-emerald-600',
                  items: ['Landing page inmediata', 'Publicación en campus', 'Captura de leads / enrollments'],
                  note: 'antes de que el curso esté terminado',
                },
                {
                  num: '04',
                  icon: '🔁',
                  title: 'Iteration Loop',
                  color: 'bg-amber-50 border-amber-100',
                  labelColor: 'text-amber-600',
                  items: ['Feedback real', 'Ajuste de contenido', 'Nuevas variantes CE'],
                },
              ].map((layer) => (
                <div key={layer.num} className={`p-5 rounded-2xl border ${layer.color}`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${layer.labelColor} mb-1`}>
                    Capa {layer.num}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{layer.icon}</span>
                    <h3 className="font-semibold text-gray-900">{layer.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-400 mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {layer.note && (
                    <p className="mt-3 text-xs font-semibold text-gray-500 bg-white/70 px-2 py-1 rounded-lg inline-block">
                      👉 {layer.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Insight clave */}
            <div className="mt-8 p-6 bg-gray-900 text-white rounded-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Insight Clave</p>
              <p className="text-lg font-medium leading-relaxed">
                "El curso deja de ser un producto terminado.
                <br />
                <span className="text-emerald-400">Se convierte en un proceso en evolución."</span>
              </p>
            </div>
          </div>
        </section>

        {/* Impacto */}
        <section id="impacto" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
            Impacto & Posicionamiento
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: '⏱️', metric: '70–90%', label: 'Reducción en tiempo de lanzamiento' },
              { icon: '📈', metric: 'Más', label: 'Campañas simultáneas' },
              { icon: '🎯', metric: 'Mejor', label: 'Alineación con demanda real' },
              { icon: '🔁', metric: 'Continua', label: 'Iteración' },
              { icon: '💰', metric: 'Nuevo', label: 'Pipeline de revenue' },
              { icon: '⚡', metric: 'Velocidad', label: 'Como capacidad académica' },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-2xl font-black text-gray-900">{item.metric}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Posicionamiento final */}
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Posicionamiento Final</p>
            <p className="text-2xl font-black text-gray-900 mb-1">
              Continuing Education Acceleration System (CEAS)
            </p>
            <p className="text-gray-500 text-sm mb-6">Powered by Academic Lab</p>

            <div className="space-y-3">
              {[
                'We are not building courses. We are building market response capability.',
                'Speed is now an academic capability.',
                'Time-to-market is our competitive advantage.',
                'We capture demand before competitors even define the program.',
                'CE is no longer a product line. It is a sensing and response system.',
              ].map((phrase) => (
                <div key={phrase} className="flex items-start gap-3">
                  <span className="text-gray-300 mt-0.5 shrink-0">→</span>
                  <p className="text-sm text-gray-700 italic">"{phrase}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lo que conecta */}
          <div className="p-6 bg-gray-900 text-white rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Por Qué Es Único</p>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              {['No es LMS', 'No es SIS', 'No es Marketing'].map((item) => (
                <div key={item} className="text-sm text-gray-400 line-through">{item}</div>
              ))}
            </div>
            <p className="text-center text-emerald-400 font-semibold text-lg">
              👉 Es el sistema que conecta los tres en tiempo real
            </p>
            <p className="text-center text-gray-400 text-sm mt-2">
              Esto ya no es gobernanza solamente.{' '}
              <strong className="text-white">Esto es ventaja competitiva institucional.</strong>
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
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
