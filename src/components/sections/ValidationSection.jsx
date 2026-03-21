import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const validations = [
  {
    id: 'activation',
    title: 'Student Activation',
    status: 'Live',
    statusColor: 'bg-emerald-100 text-emerald-700',
    description: 'Detects inactive students, classifies risk, and triggers re-engagement interventions automatically.',
    flow: [
      { step: 'Context', detail: 'Student inactive > 48h detected via Moodle signals' },
      { step: 'Decision', detail: 'Risk classification: medium (48h) or high (72h)' },
      { step: 'Action', detail: 'Trigger personalized nudge, notify advisor' },
      { step: 'Experience', detail: 'In-LMS notification + email + dashboard flag' },
      { step: 'Metric', detail: 'Re-engagement rate, time-to-return' },
    ],
    tools: ['NexusSIS', 'CampusMCP', 'Moodle'],
  },
  {
    id: 'courses',
    title: 'Course Generation',
    status: 'Live',
    statusColor: 'bg-emerald-100 text-emerald-700',
    description: 'Automates course creation, section linking, and student enrollment from the SIS semester tree.',
    flow: [
      { step: 'Context', detail: 'New semester → SIS sections available' },
      { step: 'Decision', detail: 'Match sections to Moodle courses, identify gaps' },
      { step: 'Action', detail: 'Create courses, link sections, provision users via Entra ID' },
      { step: 'Experience', detail: 'LinkClass admin dashboard with enrollment preview' },
      { step: 'Metric', detail: 'Enrollment accuracy, setup time reduction' },
    ],
    tools: ['NexusSIS', 'LinkClass', 'Entra ID'],
  },
  {
    id: 'governance',
    title: 'Governance Dashboards',
    status: 'In progress',
    statusColor: 'bg-amber-100 text-amber-700',
    description: 'Provides institutional visibility into financial status, attendance compliance, and academic operations.',
    flow: [
      { step: 'Context', detail: 'Aggregate student financial + attendance + enrollment data' },
      { step: 'Decision', detail: 'Flag anomalies: unpaid balances, attendance drops, hold groups' },
      { step: 'Action', detail: 'Surface alerts to operations, auto-enforce hold policies' },
      { step: 'Experience', detail: 'FinStatus blocks, attendance grids, audit logs' },
      { step: 'Metric', detail: 'Inquiry reduction, compliance rate' },
    ],
    tools: ['NexusSIS', 'FinStatus', 'Attendance Tracker'],
  },
];

export default function ValidationSection() {
  const [activeValidation, setActiveValidation] = useState('activation');
  const active = validations.find((v) => v.id === activeValidation);

  return (
    <section id="validation" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-50 text-amber-600 mb-4">
            Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
            Validation
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mb-4">
            Validation is the proof that the AU Nexus Method works in real conditions.
            These are not the method — they are evidence that the method works.
          </p>
        </motion.div>

        {/* Validation tabs */}
        <div className="flex flex-wrap gap-3 mb-8 mt-8">
          {validations.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveValidation(v.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border ${
                activeValidation === v.id
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              {v.title}
            </button>
          ))}
        </div>

        {/* Active validation detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{active.title}</h3>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${active.statusColor}`}>
                  {active.status}
                </span>
              </div>
              <p className="text-gray-500 m-0">{active.description}</p>
            </div>

            {/* Flow through the Nexus Loop */}
            <div className="p-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
                How the Nexus Loop applies
              </h4>
              <div className="space-y-4">
                {active.flow.map((f, i) => (
                  <motion.div
                    key={f.step}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-20 shrink-0 text-xs font-bold text-gray-400 uppercase tracking-wider pt-1">
                      {f.step}
                    </span>
                    <span className="w-px h-5 bg-gray-200 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{f.detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools used */}
            <div className="px-8 pb-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">
                  Built with
                </span>
                {active.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
