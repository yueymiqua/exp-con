import React from 'react';
import Navbar from './navbar';
import PricingLayout from './PricingLayout';
import Perks from './Perks';
import Contact from './Contact';

function PricingPage() {
  return (
    <div className="pricing-page">
      <Navbar/>
      <PricingLayout/>
      <Perks/>
      <Contact/>
    </div>
  );
}

export default PricingPage;