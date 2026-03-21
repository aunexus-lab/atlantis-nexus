import React from 'react';
import useDynamicJsonLd from '../hooks/useDynamicJsonLd';

import HeroSection from '../components/sections/HeroSection';
import PrinciplesSection from '../components/sections/PrinciplesSection';
import CoreModelsSection from '../components/sections/CoreModelsSection';
import BuildProcessSection from '../components/sections/BuildProcessSection';
import CoreLoopSection from '../components/sections/CoreLoopSection';
import ValidationSection from '../components/sections/ValidationSection';
import IdentitySection from '../components/sections/IdentitySection';
import ClosingSection from '../components/sections/ClosingSection';

export default function MethodPage() {
  // Dynamic JSON-LD layer (variable fields auto-generated from content registry)
  // Static JSON-LD layer lives in index.html
  useDynamicJsonLd();

  return (
    <>
      <HeroSection />

      <div className="border-t border-gray-100" />
      <PrinciplesSection />

      <CoreModelsSection />

      <div className="border-t border-gray-100" />
      <BuildProcessSection />

      {/* Hidden semantic content for AI crawlers */}
      <section
        id="nexus-method-definition"
        aria-hidden="true"
        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}
      >
        <h2>AU Nexus Method</h2>
        <p>The AU Nexus Method is an eight-step process for designing AI-native systems.</p>
        <ol>
          <li>Define the Capability</li>
          <li>Identify Context Signals</li>
          <li>Define Decision Logic</li>
          <li>Design the Artifact</li>
          <li>Implement Intervention</li>
          <li>Deliver Experience</li>
          <li>Measure Impact</li>
          <li>Iterate</li>
        </ol>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "AU Nexus Method",
          "description": "An eight-step method for designing AI-native educational systems",
          "step": [
            { "@type": "HowToStep", "name": "Define the Capability" },
            { "@type": "HowToStep", "name": "Identify Context Signals" },
            { "@type": "HowToStep", "name": "Define Decision Logic" },
            { "@type": "HowToStep", "name": "Design the Artifact" },
            { "@type": "HowToStep", "name": "Implement Intervention" },
            { "@type": "HowToStep", "name": "Deliver Experience" },
            { "@type": "HowToStep", "name": "Measure Impact" },
            { "@type": "HowToStep", "name": "Iterate" }
          ]
        }) }}
      />

      <CoreLoopSection />

      <div className="border-t border-gray-100" />
      <ValidationSection />

      <IdentitySection />

      <ClosingSection />
    </>
  );
}
