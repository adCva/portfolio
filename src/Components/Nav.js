import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav-wrapper'>
      <div className='nav-container'>
        <h1>Adrian Dobre</h1>
        <input type="checkbox" id="nav_toggle" className="nav-toggle"></input>
        <nav>
          <ul>
            <li><Link to="/" className='nav-page-link'>Home</Link></li>
            <li><Link to="/projects" className='nav-page-link'>Projects</Link></li>
            <li><Link to="/photography" className='nav-page-link'>Photography</Link></li>
            <li><Link to="/contact" className='nav-page-link'>Contact</Link></li>
          </ul>
        </nav>
        <label for="nav_toggle" className='nav-toggle-label'><span></span></label>
      </div>
    </div>
  )
}

export default Nav;