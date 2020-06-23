import React from 'react';

import './index.css';


const HoursCard = ()=>{

  return(
    <div className="hours-card-container">
      <h2 className="hours-card-h2">Hours</h2>
      <p className="location-style-all">Dine in</p>
      <p>Monday & Thursday - Saturday: 5 - 10.30Pm</p>
      <p>Sunday: 5 - 9.30PM</p>
      <p>Sunday Lunch: 11.30 - 2PM</p>
      <br/>
      <p className="location-style-all">closed Tuesday & Wednesday</p>
      <p>"Bee Home" Carry Out</p>
      <p>Thursday - Monday: 4.30-8PM</p>

    </div>
  )
}

export default HoursCard;
