import React from 'react';

import Word from '../../AnimatedComponents/AnimatedNavBar';

import './index.css';

const NavBar = ()=>{
  return(
    <div className="navbar-container">
      <div className="weather">
        <Word/>
      </div>
    </div>
  )
}

export default NavBar
