import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-100 text-violet-700">
              AU Nexus Method
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-gray-900 mb-8"
          >
            A methodology for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
              intelligent academic
            </span>
            systems.
          </motion.h1>

          {/* Formal definition */}
          <motion.blockquote
            variants={fadeUp}
            className="border-l-4 border-violet-400 pl-6 my-10 max-w-3xl"
          >
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed italic">
              "The AU Nexus Method is a structured methodology for designing, orchestrating,
              and evolving intelligent academic systems through context-aware decisioning
              and artifact-based construction."
            </p>
          </motion.blockquote>

          {/* Problem statement */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-500 font-light max-w-2xl mb-12"
          >
            Traditional academic systems are static, fragmented, and don't react to context.
            Nexus introduces systems that interpret, decide, act, and evolve.
          </motion.p>

          {/* Method structure preview */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            {[
              { label: 'Principles', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { label: 'Models', color: 'bg-violet-50 text-violet-700 border-violet-200' },
              { label: 'Build Process', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
              { label: 'Artifacts', color: 'bg-amber-50 text-amber-700 border-amber-200' },
            ].map((item) => (
              <span
                key={item.label}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${item.color}`}
              >
                {item.label}
              </span>
            ))}
            <span className="flex items-center text-gray-400 text-sm font-light ml-1">
              ← 4 layers of the method
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle gradient decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.15) 0%, transparent 60%)',
        }}
      />
    </section>
  );
}
