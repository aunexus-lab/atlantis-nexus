import React from 'react';
import useJsonLd from '../hooks/useJsonLd';

import HeroSection from '../components/sections/HeroSection';
import PrinciplesSection from '../components/sections/PrinciplesSection';
import CoreModelsSection from '../components/sections/CoreModelsSection';
import BuildProcessSection from '../components/sections/BuildProcessSection';
import CoreLoopSection from '../components/sections/CoreLoopSection';
import ValidationSection from '../components/sections/ValidationSection';
import IdentitySection from '../components/sections/IdentitySection';
import ClosingSection from '../components/sections/ClosingSection';

export default function MethodPage() {
  useJsonLd(
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'EducationalOrganization',
          '@id': 'https://nexus.atlantisuniversity.edu/#org',
          name: 'Atlantis University',
          url: 'https://www.atlantisuniversity.edu',
          sameAs: ['https://github.com/aunexus-lab'],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://nexus.atlantisuniversity.edu/#website',
          url: 'https://nexus.atlantisuniversity.edu',
          name: 'AU Nexus Method',
          description:
            'A structured methodology for designing, orchestrating, and evolving intelligent academic systems through context-aware decisioning and artifact-based construction.',
          publisher: {
            '@id': 'https://nexus.atlantisuniversity.edu/#org',
          },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://nexus.atlantisuniversity.edu/',
          url: 'https://nexus.atlantisuniversity.edu/',
          name: 'AU Nexus Method — Designing Intelligent Academic Systems',
          description:
            'The AU Nexus Method is a structured methodology with 6 principles, 6 core models, and an 8-step build process for creating context-aware, decision-enabled academic systems.',
          isPartOf: {
            '@id': 'https://nexus.atlantisuniversity.edu/#website',
          },
          about: [
            { '@type': 'Thing', name: 'Context-Aware Systems' },
            { '@type': 'Thing', name: 'Orchestration' },
            { '@type': 'Thing', name: 'Artifact-Based Construction' },
            { '@type': 'Thing', name: 'Intelligent Academic Systems' },
          ],
        },
      ],
    },
    'method'
  );

  return (
    <>
      <HeroSection />

      <div className="border-t border-gray-100" />
      <PrinciplesSection />

      <CoreModelsSection />

      <div className="border-t border-gray-100" />
      <BuildProcessSection />

      <CoreLoopSection />

      <div className="border-t border-gray-100" />
      <ValidationSection />

      <IdentitySection />

      <ClosingSection />
    </>
  );
}
