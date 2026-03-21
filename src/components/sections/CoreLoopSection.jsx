import React from 'react';
import { motion } from 'framer-motion';

const loopSteps = [
  { label: 'Context', description: 'Capture signals', color: 'text-violet-600', bg: 'bg-violet-50 border-violet-200' },
  { label: 'Decision', description: 'Apply logic', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  { label: 'Action', description: 'Intervene', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { label: 'Feedback', description: 'Observe results', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  { label: 'Adaptation', description: 'Evolve system', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' },
];

export default function CoreLoopSection() {
  return (
    <section id="loop" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gray-100 text-gray-600 mb-4">
            The Nexus Loop
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
            The Core Cycle
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            This loop is the nucleus of Nexus. Every artifact operates within this continuous cycle.
          </p>
        </motion.div>

        {/* Loop visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Steps in a row with arrows */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2">
            {loopSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`flex flex-col items-center gap-2 px-6 py-5 rounded-2xl border ${step.bg} min-w-[130px]`}
                >
                  <span className={`text-lg font-bold ${step.color}`}>{step.label}</span>
                  <span className="text-xs text-gray-500">{step.description}</span>
                </motion.div>
                {i < loopSteps.length - 1 && (
                  <span className="text-gray-300 text-xl font-light hidden md:block">→</span>
                )}
                {i < loopSteps.length - 1 && (
                  <span className="text-gray-300 text-xl font-light block md:hidden">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Return arrow */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
              <span className="text-sm text-gray-400">↩ Adaptation feeds back into Context</span>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16 max-w-xl mx-auto"
        >
          <p className="text-xl text-gray-700 font-light italic leading-relaxed">
            "Every system built with the Nexus Method runs on this loop —
            continuously learning, adapting, and improving."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
