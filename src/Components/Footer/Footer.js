import React from 'react';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <div className="footer-pages">
                <h6>adCva</h6>
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/projects" className="footer-link">Projects</Link>
                <Link to="/photography" className="footer-link">Photography</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
            </div>
            <div className="footer-social">
                <a>GitHub</a>
                <a>Linkedin</a>
            </div>
        </div>
    </div>
  )
}

export default Footer