import React from 'react'


import Card from '../Card';
import AboutCard from '../AboutCard'


import './index.css'

const HorizontalCarousel =()=>{




    return(
        <div className="view-port">
              <div className="card-container" >
                  <Card/>
              </div>
              <div className="blue-box">
                <AboutCard />
              </div>

        </div>
    )
}

export default HorizontalCarousel
