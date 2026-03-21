import React from 'react';
import { motion } from 'framer-motion';

/* ── Premium SVG Icons ─────────────────────────────── */
const icons = {
  context: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  ),
  orchestration: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.828L3 3" />
      <path d="m15 9 6-6" />
      <path d="M16 21h5v-5" />
      <path d="M8 21H3v-5" />
    </svg>
  ),
  artifact: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  systems: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  ),
  human: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  adapt: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6" />
      <path d="M2.5 22v-6h6" />
      <path d="M2.5 15.5A9 9 0 0 1 5.64 5.64" />
      <path d="M21.5 8.5a9 9 0 0 1-3.14 9.86" />
    </svg>
  ),
};

const principles = [
  {
    number: '01',
    title: 'Context over Content',
    description: 'The system responds to the user\'s state, not just displays content.',
    icon: 'context',
  },
  {
    number: '02',
    title: 'Orchestration over Static Flow',
    description: 'Experiences are not linear — they are dynamically decided.',
    icon: 'orchestration',
  },
  {
    number: '03',
    title: 'Artifacts over Features',
    description: 'Complete capabilities are built, not isolated functionalities.',
    icon: 'artifact',
  },
  {
    number: '04',
    title: 'Systems over Interfaces',
    description: 'The value is in the logic, not the UI.',
    icon: 'systems',
  },
  {
    number: '05',
    title: 'Human-in-the-Loop by Design',
    description: 'AI proposes, humans validate when necessary.',
    icon: 'human',
  },
  {
    number: '06',
    title: 'Continuous Adaptation',
    description: 'The system evolves based on behavior and outcomes.',
    icon: 'adapt',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrinciplesSection() {
  return (
    <section id="principles" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-600 mb-4">
            Foundation
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
            Principles
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mb-16">
            These principles are mandatory. Without them, there is no Nexus.
          </p>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {principles.map((p) => (
            <motion.div
              key={p.number}
              variants={item}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
                  {icons[p.icon]}
                </span>
                <span className="text-xs font-bold text-gray-300 tracking-wider">{p.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed m-0">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
