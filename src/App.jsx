import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Section from './components/Section';

// Content Imports (Vite ?raw import)
import heroMd from './content/hero.md?raw';
import principlesMd from './content/principles.md?raw';
import aboutMd from './content/about.md?raw';
import domainsMd from './content/domains.md?raw';
import progressionMd from './content/progression.md?raw';
import projectsMd from './content/projects.md?raw';

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
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-32">

        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center md:text-left">
          <div className="text-center md:text-left">
            <Markdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-black mb-8" {...props} />,
                p: ({ node, ...props }) => <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl" {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 border-l-4 border-gray-900 pl-6 my-8" {...props} />
              }}
            >
              {heroMd}
            </Markdown>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-gray-100 pt-12">
            {/* We manually parse principles for the 3-column layout, or just render MD if simpler. 
                 For now, let's keep the nice 3-col layout but feed it from specific small MD files if we wanted, 
                 or just use a single Markdown block. Using the single block for simplicity as requested. */}
            <div className="col-span-3 text-left">
              <Markdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-black mb-2" {...props} />,
                  p: ({ node, ...props }) => <p className="text-gray-600 font-light leading-relaxed" {...props} />
                }}
              >{principlesMd}</Markdown>
            </div>
          </div>
        </section>

        {/* WHAT IS NEXUS */}
        <Section id="about" title="What is Atlantis Nexus" content={aboutMd} />

        {/* DOMAINS - Hybrid approach: MD intro + React Grid */}
        <Section id="domains" title="Capability Domains" content={domainsMd}>
          {/* We keep the grid visual as it's a structural element, not just text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-gray-100">
            {['Cognitive Architecture', 'Data Engineering', 'Digital Ethics', 'Systems Thinking', 'Human-Computer Interaction', 'Computational Logic', 'Adaptive Infrastructure'].map((domain) => (
              <div key={domain} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
                <span className="font-medium text-gray-900">{domain}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* LEARNING PROGRESSION */}
        <Section id="progression" title="Learning Progression" content={progressionMd} />

        {/* PROJECTS */}
        <Section id="projects" title="Projects & Artifacts" content={projectsMd} />

      </main>

      <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-400">
        <p>© 2026 Atlantis Nexus. Academic Reference Model.</p>
      </footer>
    </div >
  );
}

export default App;
