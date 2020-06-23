import React from 'react'


import Card from '../Card';
import AboutCard from '../AboutCard';
import LocationCard from '../LocationCard';
import BottomStyleBar from '../BottomStyleBar';
import BottomNavBar from '../BottomNavBar';


import './index.css'

const HorizontalCarousel =()=>{




    return(
        <div className="view-port">
              <div className="card-container" >
                  <Card/>
              </div>
              <div className="blue-box">
                <AboutCard />
                <LocationCard />
              </div>
              <BottomStyleBar/>
              <BottomNavBar />
        </div>

    )
}

export default HorizontalCarousel
