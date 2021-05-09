import React from 'react';
import PricingLayout from './PricingLayout';
import Perks from './Perks';
import Contact from './Contact';

function PricingPage() {
  return (
    <div className="pricing-page">
      <PricingLayout/>
      <Perks/>
      <Contact/>
    </div>
  );
}

export default PricingPage;