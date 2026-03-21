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

      <CoreLoopSection />

      <div className="border-t border-gray-100" />
      <ValidationSection />

      <IdentitySection />

      <ClosingSection />
    </>
  );
}
