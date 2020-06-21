import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';


const NavBar = ()=>{

  return(

      <div>
        <div className="headers">1111 11th street nw, washington, dc 20009 (111) 111 1111</div>
        <div className="nav-container">
        <h1 className="logo"> Logo</h1>

            <ul className="ul-container">
              <li><Link className="nav-links" to="/">"Bee Home"</Link></li>
              <li><Link className="nav-links"  to="/">Carry Out</Link></li>
              <li><Link className="nav-links" to="/">Our Story</Link></li>
              <li><Link className="nav-links"  to="/">Private Events</Link></li>
              <li><Link className="nav-links"  to="/">Gift Cards</Link></li>
              <li className="dropdown">
                <Link className="nav-links"  to="/">Contact</Link>
                <div className='dropdown-content'>
                  <Link className="dropdown-links"  to="/">Twitter</Link>
                  <Link className="dropdown-links"  to="/">Instagram</Link>
                  <Link className="dropdown-links"  to="/">Only Fans</Link>
                </div>
              </li>
                <li>
                  <Link className="nav-links orders" to="/">
                      <span className="order-text">
                      Order Now
                      </span>
                  </Link>
                </li>
            </ul>
        </div>
        </div>

  )
}

export default NavBar
