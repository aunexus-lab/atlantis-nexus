import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Section from './components/Section';

// Content Imports (Vite ?raw import)
import heroMd from './content/hero.md?raw';
import principlesMd from './content/principles.md?raw';
import aboutMd from './content/about.md?raw';
import domainsMd from './content/domains.md?raw';
import progressionMd from './content/progression.md?raw';
import msaiMd from './content/msai.md?raw';
import governanceMd from './content/governance.md?raw';

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
          <div className="prose prose-xl prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-black prose-blockquote:text-2xl prose-blockquote:font-light prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-6">
            <Markdown rehypePlugins={[rehypeRaw]}>{heroMd}</Markdown>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-gray-100 pt-12">
            {/* We manually parse principles for the 3-column layout, or just render MD if simpler. 
                 For now, let's keep the nice 3-col layout but feed it from specific small MD files if we wanted, 
                 or just use a single Markdown block. Using the single block for simplicity as requested. */}
            <div className="col-span-3 prose prose-academic">
              <Markdown>{principlesMd}</Markdown>
            </div>
          </div>
        </section>

        {/* WHAT IS NEXUS */}
        <Section id="about" title="What is Atlantis Nexus" content={aboutMd} />

        {/* DOMAINS - Hybrid approach: MD intro + React Grid */}
        <Section id="domains" title="Capability Domains">
          {/* We render the text part via Markdown */}
          <div className="prose prose-academic mb-8">
            <Markdown>{domainsMd}</Markdown>
          </div>

          {/* We keep the grid visual as it's a structural element, not just text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Cognitive Architecture', 'Data Engineering', 'Digital Ethics', 'Systems Thinking', 'Human-Computer Interaction', 'Computational Logic', 'Adaptive Infrastructure'].map((domain) => (
              <div key={domain} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
                <span className="font-medium text-gray-900">{domain}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* LEARNING PROGRESSION */}
        <Section id="progression" title="Learning Progression" content={progressionMd} />

        {/* PROGRAM EXAMPLE */}
        <Section id="msai" title="Program Example: MSAI" content={msaiMd} />

        {/* GOVERNANCE */}
        <Section id="governance" title="Governance & Evolution" content={governanceMd} />

      </main>

      <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-400">
        <p>© 2026 Atlantis Nexus. Academic Reference Model.</p>
      </footer>
    </div >
  );
}

export default App;
