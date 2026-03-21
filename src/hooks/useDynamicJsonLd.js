import { useEffect } from 'react';
import {
  siteConfig,
  principles,
  coreModels,
  buildSteps,
  validationExamples,
  keywords,
} from '../content/registry';

/**
 * Generates the dynamic JSON-LD layer from the content registry.
 *
 * This layer contains fields that change with content:
 * - description, dateModified, keywords
 * - hasPart (sections), learningResourceType
 * - teaches (principles + models)
 * - competencyRequired
 *
 * The static layer (in index.html) provides:
 * - @context, @type, @id, name, url
 * - isPartOf, publisher, about, educationalLevel
 */
function buildDynamicSchema() {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/`,
        description:
          'The AU Nexus Method is a structured methodology with 6 principles, 6 core models, and an 8-step build process for creating context-aware, decision-enabled academic systems.',
        dateModified: now,
        keywords: keywords.join(', '),
        learningResourceType: 'Methodology / Reference Framework',
        teaches: [
          ...principles.map((p) => ({
            '@type': 'DefinedTerm',
            name: p,
            inDefinedTermSet: 'AU Nexus Principles',
          })),
          ...coreModels.map((m) => ({
            '@type': 'DefinedTerm',
            name: m,
            inDefinedTermSet: 'AU Nexus Core Models',
          })),
        ],
        hasPart: [
          {
            '@type': 'WebPageElement',
            name: 'Principles',
            description: `${principles.length} foundational principles: ${principles.join(', ')}`,
          },
          {
            '@type': 'WebPageElement',
            name: 'Core Models',
            description: `${coreModels.length} interconnected models: ${coreModels.join(', ')}`,
          },
          {
            '@type': 'HowTo',
            name: 'Build Process',
            description: `${buildSteps.length}-step process for building intelligent academic systems`,
            step: buildSteps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s,
            })),
          },
          {
            '@type': 'WebPageElement',
            name: 'Validation',
            description: `Real-world implementations: ${validationExamples.map((v) => v.name).join(', ')}`,
          },
        ],
        competencyRequired: [
          'Understanding of academic systems',
          'Familiarity with LMS platforms',
          'Basic knowledge of AI/ML concepts',
        ],
      },
      // Validation examples as CreativeWork
      ...validationExamples.map((v) => ({
        '@type': 'CreativeWork',
        name: v.name,
        isPartOf: { '@id': `${siteConfig.url}/` },
        creativeWorkStatus: v.status,
        author: { '@id': `${siteConfig.url}/#org` },
      })),
    ],
  };
}

/**
 * Injects the dynamic JSON-LD layer into <head>.
 * Called once on mount. Complements the static layer in index.html.
 */
export default function useDynamicJsonLd() {
  useEffect(() => {
    const id = 'ld-dynamic';
    // Remove existing if hot-reloaded
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(buildDynamicSchema());
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);
}
