import React from 'react';

import './index.css';



const AboutText = ()=>{

  return(
    <div className="text-container">
      <h2 className='about-text all-text'>About</h2>
      <p className='all-text'>Neo-Bistro:</p>
      <p className="font-style all-text">
        <em>noun</em>
      </p>
      <p className="font-style all-text">noun: neo-bistro;pluar noun: neo-bistros</p>
      <p className="font-style all-text">
        <em>origin: French</em>
      </p>
      <p className='all-text neo-text'>neo-bistro movement, or bistronomy as it is commonly know, reimagined approachable dining in Paris
        with pared-back dining spaces,relaxed service, and an abiding focus on freshness...
      </p>
      <button className="about-button">Learn More</button>

    </div>
  )
}


export default AboutText
