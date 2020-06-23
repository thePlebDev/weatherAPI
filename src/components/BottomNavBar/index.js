import React from 'react';

import './index.css';


const BottomNavBar =()=>{


  return(
    <div className="bottom-nav-bar">

    <div className="leftLinks">
      <div className="bottom-nav-links-all bottom-nav"><i class="fab fa-facebook-square fa-2x"></i></div>
      <div className="bottom-nav-links-all bottom-nav"><i class="fab fa-twitter fa-2x"></i></div>
      <div className="bottom-nav-links-all bottom-nav"><i class="fab fa-instagram fa-2x"></i></div>
    </div>

      <div className="rightLinks">
        <div className="bottom-nav-links-all">Michelin Guide 2020</div>
        <div className="bottom-nav-links-all">Careers</div>
        <div className="bottom-nav-links-all">Buzz</div>
        <div className='bottom-nav-background'>
          <div className="bottom-nav-links-all email-signup">Email SignUp</div>
        </div>
      </div>
    </div>
  )
}

export default BottomNavBar
