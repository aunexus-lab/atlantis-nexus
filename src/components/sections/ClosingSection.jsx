import React from 'react';
import { motion } from 'framer-motion';

export default function ClosingSection() {
  return (
    <section id="closing" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #f5f3ff 0%, #eff6ff 30%, #ecfdf5 60%, #fafafa 100%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Transformation */}
          <div className="mb-16">
            <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-8">
              The AU Nexus Method transforms
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
              <div className="px-6 py-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <code className="text-sm text-gray-500 font-mono">
                  Ideas → Features → Fragmented Systems
                </code>
              </div>
              <span className="text-2xl text-gray-300">→</span>
              <div className="px-6 py-4 rounded-xl bg-gray-900 border border-gray-900 shadow-lg">
                <code className="text-sm text-white font-mono">
                  Method → Artifacts → Systems → Ecosystem
                </code>
              </div>
            </div>
          </div>

          {/* Final quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-4">
              Nexus is not what we built.
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-emerald-500">
                It is how we build.
              </span>
            </p>
          </motion.blockquote>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#hero"
              className="px-8 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors no-underline"
            >
              Read the Method ↑
            </a>
            <a
              href="https://github.com/aunexus-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-white text-gray-700 text-sm font-semibold border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all no-underline"
            >
              Explore on GitHub →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
