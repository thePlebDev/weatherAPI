import React from 'react';

import AboutText from '../AboutText';
import AboutImage from '../AboutImage';

import './index.css'


const About = ()=>{


  return(
    <div className="about-container">
      <div className="text">
        <AboutText/>
      </div>
      <div className="image">
        <AboutImage/>
      </div>
    </div>
  )
}


export default About
