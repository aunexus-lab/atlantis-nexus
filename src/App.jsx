import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FrameworkPage from './pages/FrameworkPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/framework" element={<FrameworkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

/* ── Landing Layout (header + footer wrapping LandingPage) ── */
function LandingLayout() {
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
            <Link to="/framework" className="text-gray-900 font-semibold hover:text-black transition-colors no-underline">
              Framework →
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-32">
        <LandingPage />
      </main>

      <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-400">
        <p>© 2026 Atlantis Nexus. Academic Reference Model.</p>
      </footer>
    </div>
  );
}

export default App;
