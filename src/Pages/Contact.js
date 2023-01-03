import React from 'react';
import Nav from "../Components/Nav/Nav";
import Footer from '../Components/Footer/Footer';


function Contact() {
  return (
    <div>
        <Nav />
        <div className='contact-wrapper'>
          <div className='contact-container'>
            <div className="get-in-touch-container">
              <h1>Get In Touch</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className='get-in-touch-buttons'>
                <a>GitHub</a>
                <a>Linkedin</a>
              </div>
            </div>
            <div className='contact-me-mail'>
              <h1>Contact Me</h1>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact