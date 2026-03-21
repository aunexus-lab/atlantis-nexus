import React from 'react';
import { motion } from 'framer-motion';

/* ── Premium SVG Icons ─────────────────────────────── */
const IsNotIcon = ({ type }) => {
  const cls = "w-5 h-5 text-red-300";
  const map = {
    lms: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    ai: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="9.5" cy="16" r="1" fill="currentColor" />
        <circle cx="14.5" cy="16" r="1" fill="currentColor" />
        <path d="M8 11V7a4 4 0 1 1 8 0v4" />
      </svg>
    ),
    plugin: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  };
  return map[type] || null;
};

const isNot = [
  { label: 'LMS', icon: 'lms' },
  { label: 'AI tool', icon: 'ai' },
  { label: 'Plugin', icon: 'plugin' },
];

const produces = [
  'Activation systems',
  'Adaptive learning systems',
  'Governance systems',
  'Academic creation systems',
  'Institutional intervention systems',
];

export default function IdentitySection() {
  return (
    <section id="identity" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
            What makes Nexus unique
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* What it is NOT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-red-100 bg-red-50/50"
          >
            <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-6">
              Nexus is not
            </h3>
            <div className="space-y-4">
              {isNot.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <IsNotIcon type={item.icon} />
                  <span className="text-gray-500 line-through decoration-red-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What it IS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-emerald-100 bg-emerald-50/50"
          >
            <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-6">
              Nexus is
            </h3>
            <blockquote className="text-xl font-semibold text-gray-900 leading-snug m-0">
              A system for building systems
            </blockquote>
          </motion.div>
        </div>

        {/* What it produces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 text-center">
            When applied correctly, you can build
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {produces.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-50 border border-gray-200 text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
