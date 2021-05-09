import React, { useState, useEffect, useRef } from 'react';
import bg1 from '../IMG/slideshow-Photo1.png';
import bg2 from '../IMG/slideshow-Photo2.png';
import bg3 from '../IMG/slideshow-photo3.png';
import Navbar from './navbar';

const photos = [bg1, bg2, bg3];
const delay = 10000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => 
      setIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      ), 
      delay
    );
    return () => {};
  }, [index]);

  return ( 
  <div className="slideshow">
    <Navbar/>
    <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
      {photos.map((photo, index) => (
        <img src={photo} className="slide" key={index} alt={index}/>
      ))}
    </div>
    <div className="slideshowDots">
      {photos.map((_, idx) => (
        <div key={idx} className={`slideshowDot${index===idx ? " active": ""}`} onClick={() => {setIndex(idx)}}></div>
      ))}
    </div>
    <div className="button">
      <a href="/pricing" className="btn-mix" data-text="Try it Now">Try it Now</a>
    </div>
    <div className="landing-page-header">
      <h1 className="main-header">INTERACTIVE CONCERT EXPERIENCE</h1>
      <p className="subtext">Experience your favorite artists like never before and from the comfort of your own home</p>
    </div>
  </div>
  )
}
export default Slideshow;