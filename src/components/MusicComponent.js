import React, { useState } from 'react';
import speakerSvg from '../IMG/music-player.svg'
import useSound from 'use-sound';
import sound1 from '../SOUNDS/sound1.mp3';

function MusicComponent() {

  const [play, {stop}]= useSound(sound1);
  const [isPlaying, setIsPlaying]  = useState(false);
  const [buttonText, setButtonText]  = useState('Click To Play!');

  const handleClick = () => { 
    if(isPlaying===false){
      play();
      setIsPlaying(true);
      setButtonText('Click to Stop');
    }else{
      stop();
      setIsPlaying(false);
      setButtonText('Click To Play!');
    }
  }

  return (
    <div className="music-component">
      <h1 className="music-header">SUPERIOR SOUND</h1>
      <p className="music-subtext">Experience live versions of your favorite songs.</p>
      <button className="demo-button"><strong>SEE DEMO</strong></button>
      <div className="audio-container">
        <img src={speakerSvg} alt="speakerSvg"/>
        <button 
          className={`play-music-button ${!isPlaying?" playing":""}`}
          onClick={handleClick}>{buttonText}
        </button>
      </div>
    </div>
  )
}

export default MusicComponent;