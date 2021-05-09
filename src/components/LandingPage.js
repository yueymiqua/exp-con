import React from 'react';
import Slideshow from './Slideshow';
import MusicComponent from './MusicComponent';

function LandingPage() {
  return (
    <div className="landing-page">
      <Slideshow/>
      <MusicComponent/>
    </div>
  );
}

export default LandingPage;