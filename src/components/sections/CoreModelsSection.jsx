import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const models = [
  {
    id: 'context',
    title: 'Context Model',
    subtitle: 'Defines what information matters',
    color: 'violet',
    items: [
      { label: 'User state', detail: 'activity, progress' },
      { label: 'Academic state', detail: 'course, performance' },
      { label: 'Behavioral signals', detail: 'engagement patterns' },
      { label: 'System state', detail: 'events, triggers' },
      { label: 'Institutional rules', detail: 'policies, constraints' },
    ],
  },
  {
    id: 'orchestration',
    title: 'Orchestration Model',
    subtitle: 'Defines how decisions are made',
    color: 'violet',
    items: [
      { label: 'Triggers', detail: 'e.g. inactivity detected' },
      { label: 'Rules', detail: 'e.g. >48h → risk' },
      { label: 'AI-assisted decisions', detail: 'optional intelligence layer' },
      { label: 'Workflows', detail: 'action sequences' },
    ],
  },
  {
    id: 'artifact',
    title: 'Artifact Model',
    subtitle: 'Defines what is built and how',
    color: 'violet',
    items: [
      { label: 'Purpose', detail: 'clear objective' },
      { label: 'Inputs', detail: 'context data' },
      { label: 'Logic', detail: 'decision rules' },
      { label: 'Actions', detail: 'interventions' },
      { label: 'Interface', detail: 'optional UI' },
      { label: 'Metrics', detail: 'success measurement' },
    ],
  },
  {
    id: 'experience',
    title: 'Experience Model',
    subtitle: 'Defines how the system interacts with users',
    color: 'violet',
    items: [
      { label: 'Nudges', detail: 'subtle prompts' },
      { label: 'Dashboards', detail: 'data visibility' },
      { label: 'Recommendations', detail: 'personalized guidance' },
      { label: 'Automations', detail: 'background actions' },
    ],
  },
  {
    id: 'integration',
    title: 'Integration Model',
    subtitle: 'Defines how systems connect',
    color: 'violet',
    items: [
      { label: 'LMS', detail: 'Moodle' },
      { label: 'SIS', detail: 'Student Information System' },
      { label: 'Analytics', detail: 'data pipelines' },
      { label: 'Messaging', detail: 'notifications' },
      { label: 'AI', detail: 'language models, reasoning' },
    ],
  },
  {
    id: 'governance',
    title: 'Governance Model',
    subtitle: 'Defines control and evolution',
    color: 'violet',
    items: [
      { label: 'Ownership', detail: 'who is responsible' },
      { label: 'Traceability', detail: 'audit trail' },
      { label: 'Quality control', detail: 'standards' },
      { label: 'Evolution', detail: 'versioning, iteration' },
    ],
  },
];

const colorMap = {
  violet: {
    badge: 'bg-violet-100 text-violet-700',
    activeBorder: 'border-violet-300',
    activeBg: 'bg-violet-50',
    dot: 'bg-violet-500',
    tab: 'bg-violet-600 text-white',
    tabInactive: 'text-violet-600 hover:bg-violet-50',
  },
};

export default function CoreModelsSection() {
  const [activeModel, setActiveModel] = useState('context');
  const active = models.find((m) => m.id === activeModel);
  const colors = colorMap.violet;

  return (
    <section id="models" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-50 text-violet-600 mb-4">
            Heart of the Method
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
            Core Models
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mb-12">
            Six interconnected models that define how intelligent academic systems
            are structured, connected, and governed.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {models.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModel(m.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-none ${
                activeModel === m.id ? colors.tab : colors.tabInactive
              }`}
            >
              {m.title.replace(' Model', '')}
            </button>
          ))}
        </div>

        {/* Active model detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-2xl border ${colors.activeBorder} ${colors.activeBg}`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{active.title}</h3>
              <p className="text-gray-500 m-0">{active.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {active.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100"
                >
                  <span className={`w-2 h-2 rounded-full ${colors.dot} mt-2 shrink-0`} />
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                    <span className="text-gray-400 text-sm ml-2">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Model count */}
        <p className="text-center text-sm text-gray-400 mt-6">
          {models.findIndex((m) => m.id === activeModel) + 1} of {models.length} models
        </p>
      </div>
    </section>
  );
}
