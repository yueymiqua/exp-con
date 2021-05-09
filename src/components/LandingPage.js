import React from 'react';
import Slideshow from './Slideshow';
import MusicComponent from './MusicComponent';
import PerksDarkTheme from './Perks-dark-theme';
import Contact from './Contact';
import FrontRowSeats from './FrontRowSeats';

function LandingPage() {
  return (
    <div className="landing-page">
      <Slideshow/>
      <MusicComponent/>
      <FrontRowSeats/>
      <PerksDarkTheme/>
      <Contact/>
    </div>
  );
}

export default LandingPage;