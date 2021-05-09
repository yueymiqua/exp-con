import React, {useState} from 'react';
import frontrow1 from '../IMG/frontrow1.png';
import frontrow2 from '../IMG/frontrow2.png';
import frontrow3 from '../IMG/frontrow3.png';

function FrontRowSeats() {
  
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseOver = () => {
    setIsHidden(false);
  }

  const handleMouseLeave = () => {
    setIsHidden(true);
  }

  return (
    <div className="front-row-seats-container">
      <div className="front-row-header">FRONT ROW SEATS
        <div className="front-row-description">Experience concerts up close</div>
        <div className="front-row-description">and personal</div>
        <button className="front-row-button" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}><strong><a href="/pricing" className="go-to-pricing">TRY IT NOW</a></strong></button>
      </div>
      <div className={`front-row-photos`}></div>
        <div className={`front-row-1 ${isHidden?" hide":""}`}>
          <img src={frontrow1} alt="front-row-1"/>
        </div>
        <div className={`front-row-2 ${isHidden?" hide":""}`}>
          <img src={frontrow2} alt="front-row-2"/>
        </div>
        <div className={`front-row-3 ${isHidden?" hide":""}`}>
          <img src={frontrow3} alt="front-row-3"/>
        </div>
    </div>
  )
}

export default FrontRowSeats;