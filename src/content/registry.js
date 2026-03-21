/**
 * Content registry for AU Nexus Method.
 *
 * This is the single source of truth for structured content.
 * The dynamic JSON-LD layer reads from here at runtime, keeping
 * the schema in sync with what the user actually sees on the page.
 */

export const siteConfig = {
  url: 'https://nexus.atlantisuniversity.edu',
  name: 'AU Nexus Method',
};

export const principles = [
  'Context over Content',
  'Orchestration over Static Flow',
  'Artifacts over Features',
  'Systems over Interfaces',
  'Human-in-the-Loop by Design',
  'Continuous Adaptation',
];

export const coreModels = [
  'Context Model',
  'Orchestration Model',
  'Artifact Model',
  'Experience Model',
  'Integration Model',
  'Governance Model',
];

export const buildSteps = [
  'Define the Capability',
  'Identify Context Signals',
  'Define Decision Logic',
  'Design the Artifact',
  'Implement Intervention',
  'Deliver Experience',
  'Measure Impact',
  'Iterate',
];

export const validationExamples = [
  { name: 'Student Activation', status: 'Live' },
  { name: 'Course Generation', status: 'Live' },
  { name: 'Governance Dashboards', status: 'In progress' },
];

export const keywords = [
  'nexus method',
  'intelligent academic systems',
  'context-aware decisioning',
  'AI orchestration',
  'artifact-based construction',
  'educational technology',
  'Moodle integration',
  'student activation',
  'learning analytics',
  'academic governance',
];
