import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <div className="footer-pages">
                <h6 className='footer-logo'>AD</h6>
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/portfolio" className="footer-link">Portfolio</Link>
                <Link to="/gallery" className="footer-link">Gallery</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
            </div>
            <div className="footer-social">
                <a href='https://github.com/adCva' target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/adrian-dobre-902303213/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer;