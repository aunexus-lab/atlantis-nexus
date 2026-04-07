import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MethodPage from './pages/MethodPage';

const navItems = [
  { id: 'principles', label: 'Principles' },
  { id: 'models', label: 'Models' },
  { id: 'build', label: 'Build' },
  { id: 'loop', label: 'Loop' },
  { id: 'validation', label: 'Validation' },
];

function AppLayout() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollY = window.scrollY + 160;
      for (const sec of [...navItems].reverse()) {
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
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="no-underline flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-gray-900">
              AU Nexus
            </span>
            <span className="text-xs font-medium text-gray-400 hidden sm:inline">Method</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
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
            <a
              href="/plugins.html"
              className="ml-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-white no-underline transition-all duration-200"
              style={{ background: '#C8102E' }}
              onMouseEnter={e => e.currentTarget.style.background = '#9B0B22'}
              onMouseLeave={e => e.currentTarget.style.background = '#C8102E'}
            >
              Plugins ↗
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>
        <MethodPage />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-400">
        <p className="m-0">© 2026 Atlantis University · AU Nexus Method</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
