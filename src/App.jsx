import React from 'react';
import Section from './components/Section';

function App() {
  return (
    <div className="bg-academic-bg min-h-screen font-sans text-academic-text selection:bg-gray-200">

      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-lg tracking-tight">Atlantis Nexus</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#domains" className="hover:text-black transition-colors">Domains</a>
            <a href="#progression" className="hover:text-black transition-colors">Progression</a>
            <a href="#governance" className="hover:text-black transition-colors">Governance</a>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-32">

        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-black leading-[1.1]">
            An academic capability framework <br className="hidden md:block" />
            <span className="text-gray-400">for coherent digital learning.</span>
          </h1>

          <div className="bg-academic-paper p-8 rounded-xl border border-gray-100 my-12 text-left">
            <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic border-l-4 border-gray-300 pl-6 my-4">
              "Atlantis Nexus is an academic reference model that aligns learning intent, digital capabilities, and evidence production across programs."
            </blockquote>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-16 border-t border-gray-100 pt-12">
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-2">Capability-first</h3>
              <p className="text-academic-sub text-sm">Focus on what students can DO, not just what tools they use.</p>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-2">Evidence-centered</h3>
              <p className="text-academic-sub text-sm">Learning is validated through tangible production artifacts.</p>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-2">Replaceable tools</h3>
              <p className="text-academic-sub text-sm">Technology changes; academic intent remains constant.</p>
            </div>
          </div>
        </section>

        {/* WHAT IS NEXUS */}
        <Section id="about" title="What is Atlantis Nexus">
          <p>
            Atlantis Nexus serves as a <strong>public conceptual framework</strong> and an institutional anchor for digital learning initiatives. It is not a platform manual or technical documentation, but rather the "living whitepaper" that defines our academic approach.
          </p>
          <ul className="list-disc pl-5 space-y-2 my-6 text-gray-600">
            <li><strong>Why it exists:</strong> To solve the fragmentation of digital tools and academic outcomes.</li>
            <li><strong>Core academic principles:</strong> It establishes a common language for faculty, accrediting bodies, and partners.</li>
            <li><strong>Relation to programs:</strong> Provides the structural backbone for degrees like MSAI.</li>
          </ul>
        </Section>

        {/* DOMAINS */}
        <Section id="domains" title="Capability Domains">
          <p className="mb-8">
            The framework is structured around <strong>7 Nexus Domains</strong>. These are not software categories, but areas of digital capability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Cognitive Architecture', 'Data Engineering', 'Digital Ethics', 'Systems Thinking', 'Human-Computer Interaction', 'Computational Logic', 'Adaptive Infrastructure'].map((domain) => (
              <div key={domain} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
                <span className="font-medium text-gray-900">{domain}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* LEARNING PROGRESSION */}
        <Section id="progression" title="Learning Progression">
          <p>
            Capabilities are not binary; they evolve through stages of <strong>academic maturity</strong>.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-10 px-4 py-8 bg-academic-paper rounded-lg border border-dashed border-gray-300">
            <div className="text-center"><div className="font-bold text-gray-900">Foundation</div><div className="text-xs text-gray-500 mt-1">Understanding concepts</div></div>
            <div className="text-gray-300">→</div>
            <div className="text-center"><div className="font-bold text-gray-900">Applied</div><div className="text-xs text-gray-500 mt-1">Using tools in context</div></div>
            <div className="text-gray-300">→</div>
            <div className="text-center"><div className="font-bold text-gray-900">Advanced</div><div className="text-xs text-gray-500 mt-1">Complex synthesis</div></div>
            <div className="text-gray-300">→</div>
            <div className="text-center"><div className="font-bold text-gray-900">Evidence</div><div className="text-xs text-gray-500 mt-1">Production & Portfolio</div></div>
          </div>
        </Section>

        {/* PROGRAM EXAMPLE */}
        <Section id="msai" title="Program Example: MSAI">
          <p>
            The <strong>Master of Science in Artificial Intelligence (MSAI)</strong> demonstrates Nexus in action.
            It maps specific courses to Nexus domains, ensuring that every credit hour contributes to a broader capability profile.
          </p>
          <div className="mt-6 p-6 bg-blue-50/50 border border-blue-100 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Operational Model</h4>
            <p className="text-blue-800/80 text-sm">
              Nexus transforms from a theoretical framework to an operational model by defining exactly what evidence is required for a "Capstone" signal.
            </p>
          </div>
        </Section>

        {/* GOVERNANCE */}
        <Section id="governance" title="Governance & Evolution">
          <p>
            To maintain academic trust, Nexus separates <strong>academic governance</strong> from <strong>platform implementation</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="font-semibold text-black mb-2">For Deans & Committees</h4>
              <p className="text-sm text-gray-600">Provides a stable reference that survives software vendor changes.</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">For Accreditors</h4>
              <p className="text-sm text-gray-600">Demonstrates clear alignment between learning outcomes and evidential artifacts.</p>
            </div>
          </div>
        </Section>

      </main>

      <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-400">
        <p>© 2026 Atlantis Nexus. Academic Reference Model.</p>
      </footer>
    </div>
  );
}

export default App;
