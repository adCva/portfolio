import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (
    <div className='about-wrapper'>
        <div className='about-container'>
            <img src="./images/DSC3621.jpg" alt="About" />
            <div className='about-text'>
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='about-text-btn-container'>
                    <Link to="/projects">Projects</Link>
                    <Link to="/photography">Photography</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About