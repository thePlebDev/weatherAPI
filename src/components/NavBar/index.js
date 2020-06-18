import React from 'react';
import {Link} from 'react-router-dom';

import './index.css'


const NavBar = ()=>{

  return(
    <div className="nav-header">
      <div className="nav-container">
      <h1 className="logo"> Logo</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Info</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
