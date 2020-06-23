import React from 'react';

import HoursCard from '../HoursCard';
import StyledLocationCard from '../LocationStyleCard';

import './index.css';



const LocationCard =()=>{


  return(
    <div className="location-card-container">
      <div className="location">
        <StyledLocationCard/>
      </div>
      <div className="about">
        <HoursCard/>
      </div>
    </div>
  )
}

export default LocationCard;
