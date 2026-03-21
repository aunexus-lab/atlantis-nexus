import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ── Premium SVG Icons ─────────────────────────────── */
const StepIcon = ({ type }) => {
  const cls = "w-7 h-7";
  const iconMap = {
    capability: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    signals: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h2" />
        <path d="M6 8v8" />
        <path d="M10 4v16" />
        <path d="M14 6v12" />
        <path d="M18 10v4" />
        <path d="M22 12h-2" />
      </svg>
    ),
    logic: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M12 18v4" />
        <path d="M12 10v8" />
        <path d="M8 22h8" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    design: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    intervention: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    experience: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    measure: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    iterate: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6" />
        <path d="M2.5 22v-6h6" />
        <path d="M2.5 15.5A9 9 0 0 1 5.64 5.64" />
        <path d="M21.5 8.5a9 9 0 0 1-3.14 9.86" />
      </svg>
    ),
  };
  return iconMap[type] || null;
};

const steps = [
  {
    number: 1,
    title: 'Define the Capability',
    question: 'What do you want to achieve?',
    example: 'Increase student daily engagement',
    icon: 'capability',
  },
  {
    number: 2,
    title: 'Identify Context Signals',
    question: 'What data do you need?',
    example: 'Last access, progress, course enrollment',
    icon: 'signals',
  },
  {
    number: 3,
    title: 'Define Decision Logic',
    question: 'How do you decide?',
    example: 'IF inactivity > 48h → medium risk\nIF inactivity > 72h → high risk',
    icon: 'logic',
  },
  {
    number: 4,
    title: 'Design the Artifact',
    question: 'What are the inputs, logic, outputs, and interactions?',
    example: 'Inputs → Logic → Output → Interaction',
    icon: 'design',
  },
  {
    number: 5,
    title: 'Implement Intervention',
    question: 'How does the system act?',
    example: 'Show message, send notification, change experience',
    icon: 'intervention',
  },
  {
    number: 6,
    title: 'Deliver Experience',
    question: 'Where does it live?',
    example: 'Moodle block, dashboard, email, portal',
    icon: 'experience',
  },
  {
    number: 7,
    title: 'Measure Impact',
    question: 'What do you measure?',
    example: 'DAU, engagement rate, completion rate',
    icon: 'measure',
  },
  {
    number: 8,
    title: 'Iterate',
    question: 'What improves?',
    example: 'Rules, signals, personalization, AI integration',
    icon: 'iterate',
  },
];

export default function BuildProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="build" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-50 text-emerald-600 mb-4">
            The Operational Core
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
            Build Process
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mb-16">
            The process that makes the method actionable. Eight steps from capability
            definition to continuous iteration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Timeline sidebar */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gray-200 hidden lg:block" />

            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 shrink-0 cursor-pointer border-none ${
                    activeStep === i
                      ? 'bg-emerald-50 border-emerald-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                      activeStep === i
                        ? 'bg-emerald-600 text-white'
                        : i < activeStep
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`text-sm font-medium whitespace-nowrap transition-colors ${
                      activeStep === i ? 'text-emerald-800' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-emerald-600">
                <StepIcon type={steps[activeStep].icon} />
              </span>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Step {steps[activeStep].number}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              {steps[activeStep].question}
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Example
              </span>
              <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap m-0 leading-relaxed">
                {steps[activeStep].example}
              </pre>
            </div>

            {/* Step navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border-none ${
                  activeStep === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                ← Previous
              </button>
              <span className="text-sm text-gray-400">{activeStep + 1} / {steps.length}</span>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border-none ${
                  activeStep === steps.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                Next →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
