import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navSections = [
  { id: 'problem', label: 'The Problem' },
  { id: 'system', label: 'The System' },
  { id: 'model', label: 'Model' },
  { id: 'components', label: 'Components' },
  { id: 'impact', label: 'Impact' },
];

export default function AcademicLabPage() {
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
              to="/academic-lab-es"
              className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors no-underline"
            >
              ES
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
              CE Revenue Acceleration Engine
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-6 leading-[0.95]">
              Academic Lab
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mb-8">
              A market response system that takes CE programs from signal to launch in days — not months.
            </p>

            <blockquote className="border-l-4 border-gray-900 pl-5 py-1 my-8">
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                "We are not building courses. We are building market response capability."
              </p>
            </blockquote>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-black text-black">70–90%</div>
                <div className="text-sm text-gray-500 mt-1">Launch time reduction</div>
              </div>
              <div>
                <div className="text-3xl font-black text-black">Days</div>
                <div className="text-sm text-gray-500 mt-1">Market response time</div>
              </div>
              <div>
                <div className="text-3xl font-black text-black">Real‑time</div>
                <div className="text-sm text-gray-500 mt-1">Market alignment</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Real Problem */}
        <section id="problem" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
            The Real Problem
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The university cannot compete in markets that move faster than its capacity to produce offerings.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { icon: '📉', text: 'Marketing depends on manual inputs' },
              { icon: '🐌', text: 'Academic production is slow' },
              { icon: '❌', text: 'No pipeline' },
              { icon: '🏭', text: 'No production engine' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <blockquote className="border-l-4 border-red-400 pl-5 py-1 bg-red-50 rounded-r-xl pr-5">
            <p className="text-red-700 font-medium">
              "When we reach the market… it's already too late."
            </p>
          </blockquote>
        </section>

        {/* The System */}
        <section id="system" className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
              What Academic Lab Really Is
            </h2>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm mb-8">
              <p className="text-xl font-bold text-gray-900 mb-2">
                CE Production Engine + Market Response System
              </p>
              <p className="text-gray-500">
                Not just design. A system that detects opportunities, produces offerings, launches to market, and learns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="p-6 border border-gray-200 rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Before (Current State)</div>
                <div className="space-y-2 text-sm text-gray-600 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    Idea → meetings → design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    → approval → content
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    → landing → campaign
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <span className="text-red-500 font-semibold">⏱️ Months</span>
                  <span className="text-red-500 font-semibold">📉 Market lost</span>
                </div>
              </div>

              {/* After */}
              <div className="p-6 border-2 border-gray-900 rounded-2xl bg-gray-900 text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">After (Your System)</div>
                <div className="space-y-2 text-sm font-mono text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Market signal → Academic Lab
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    → Landing + Pre-offer
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    → Capture → Course → Iterate
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <span className="text-emerald-400 font-semibold">⚡ Days / weeks</span>
                  <span className="text-emerald-400 font-semibold">📈 Market captured</span>
                </div>
              </div>
            </div>

            {/* Process image */}
            <div className="mt-10">
              <img
                src="/images/Time2MarketProcess.png"
                alt="Time-to-Market Process — Academic Lab CE Production Pipeline"
                className="w-full rounded-2xl border border-gray-200 shadow-sm"
                loading="lazy"
              />
              <p className="text-xs text-center text-gray-400 mt-2">
                Time-to-Market Process: From signal to launch in days
              </p>
            </div>
          </div>
        </section>

        {/* Model */}
        <section id="model" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
            The Strategic Model
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Resolves Two Internal Wars</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">1. Marketing vs Academic</p>
                  <p className="text-sm text-gray-500 mb-2">Before: Marketing waits · Academic delays</p>
                  <p className="text-sm font-semibold text-gray-900">→ The system produces both in parallel</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">2. Formal Programs vs Market</p>
                  <p className="text-sm text-gray-500 mb-2">Before: Long programs · Low conversion</p>
                  <p className="text-sm font-semibold text-gray-900">→ CE as entry + pathway to degree</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Connection with AU Nexus</h3>
              <p className="text-gray-600 text-sm mb-4">
                This is literally <strong>AU Nexus applied to academic offerings</strong>:
              </p>
              <ul className="space-y-2">
                {['Orchestration', 'Non-linear', 'Evidence-centered', 'Modular'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="mt-6 border-l-4 border-gray-300 pl-4 italic text-gray-500 text-sm">
                "We can launch to market before finishing the product."
                <br />
                <span className="not-italic font-semibold text-gray-700">This is radical in education.</span>
              </blockquote>
            </div>
          </div>

          {/* Academic process image */}
          <div className="mt-4">
            <img
              src="/images/AcademicProcess.png"
              alt="Academic Process — CE Program Design and Governance Pipeline"
              className="w-full rounded-2xl border border-gray-200 shadow-sm"
              loading="lazy"
            />
            <p className="text-xs text-center text-gray-400 mt-2">
              Academic Process: CE Program Design and Governance Pipeline
            </p>
          </div>
        </section>

        {/* Components */}
        <section id="components" className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
              System Components
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  num: '01',
                  icon: '📡',
                  title: 'Market Signal Layer',
                  color: 'bg-blue-50 border-blue-100',
                  labelColor: 'text-blue-600',
                  items: ['Trends', 'Skills demand', 'Tools (Azure, AI, etc.)', 'Marketing inputs'],
                },
                {
                  num: '02',
                  icon: '🧠',
                  title: 'Academic Lab Engine',
                  color: 'bg-violet-50 border-violet-100',
                  labelColor: 'text-violet-600',
                  items: [
                    'Semantic alignment with existing programs',
                    'Structured design',
                    'Pricing / financing',
                    'Accreditation alignment',
                    'Syllabus generation',
                    'Moodle Blueprint',
                    'Resources',
                  ],
                },
                {
                  num: '03',
                  icon: '🚀',
                  title: 'Go-to-Market Layer',
                  color: 'bg-emerald-50 border-emerald-100',
                  labelColor: 'text-emerald-600',
                  items: ['Immediate landing page', 'Campus publication', 'Lead / enrollment capture'],
                  note: 'Before the course is finished',
                },
                {
                  num: '04',
                  icon: '🔁',
                  title: 'Iteration Loop',
                  color: 'bg-amber-50 border-amber-100',
                  labelColor: 'text-amber-600',
                  items: ['Real feedback', 'Content adjustment', 'New CE variants'],
                },
              ].map((layer) => (
                <div key={layer.num} className={`p-5 rounded-2xl border ${layer.color}`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${layer.labelColor} mb-1`}>
                    Layer {layer.num}
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

            {/* Key insight */}
            <div className="mt-8 p-6 bg-gray-900 text-white rounded-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Insight</p>
              <p className="text-lg font-medium leading-relaxed">
                "The course stops being a finished product.
                <br />
                <span className="text-emerald-400">It becomes an evolving process."</span>
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-gray-200 pb-2 mb-8">
            Impact & Positioning
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: '⏱️', metric: '70–90%', label: 'Reduction in launch time' },
              { icon: '📈', metric: 'More', label: 'Simultaneous campaigns' },
              { icon: '🎯', metric: 'Better', label: 'Alignment with real demand' },
              { icon: '🔁', metric: 'Continuous', label: 'Iteration cycle' },
              { icon: '💰', metric: 'New', label: 'Revenue pipeline' },
              { icon: '⚡', metric: 'Speed', label: 'As academic capability' },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-2xl font-black text-gray-900">{item.metric}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Final positioning */}
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Final Positioning</p>
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

          {/* What it connects */}
          <div className="p-6 bg-gray-900 text-white rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Why This Is Unique</p>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              {['Not LMS', 'Not SIS', 'Not Marketing'].map((item) => (
                <div key={item} className="text-sm text-gray-400 line-through">{item}</div>
              ))}
            </div>
            <p className="text-center text-emerald-400 font-semibold text-lg">
              👉 The system that connects the three in real time
            </p>
            <p className="text-center text-gray-400 text-sm mt-2">
              This is no longer just governance. This is <strong className="text-white">institutional competitive advantage.</strong>
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
          <Link to="/academic-lab-es" className="text-gray-400 hover:text-gray-700 no-underline text-xs transition-colors">Ver en Español</Link>
          <span className="text-gray-200">·</span>
          <Link to="/privacy" className="text-gray-400 hover:text-gray-700 no-underline text-xs transition-colors">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
