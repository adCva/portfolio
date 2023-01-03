import React from 'react';
import { Link } from "react-router-dom";


function Intro() {
  return (
    <div className="intro-wrapper">
        <div className="intro-container">
            <img src="./images/DSC0042.jpg" alt="Intro"/>
            <div className="intro-text">
                <h1>Hello, I am etc </h1>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default Intro