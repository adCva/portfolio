import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Nav() {
  const [ mobileMenu, setMobileMenu ] = useState(window.innerWidth > 767 ? true : false);

  const toogleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }


  const closeMobileMenuOnLinkClick = () => {
    if (window.innerWidth > 767) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }


  useEffect(() => {
    let mobileNavScreenWidth = () => {
      if (window.innerWidth < 768) {
        setMobileMenu(false);
      } else {
        setMobileMenu(true);
      }
    }
    
    
    window.addEventListener("resize", mobileNavScreenWidth);
    
    return() => {
        window.removeEventListener("resize", mobileNavScreenWidth);
    }
  });


    // React Spring.
    const transition = useTransition(mobileMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


  return (
    <div className='nav-wrapper'>
      <div className="nav-container">
        <h1 className="nav-logo">AD</h1>
        <button onClick={toogleMobileMenu} className="open-mobile-menu mobile-menu-btn"><HiMenu /></button>
        {transition((style, mobileMenu) => mobileMenu ? (
          <animated.div style={style} className="nav-menu">

            <div className='mobile-inter'>
              <h1 className="nav-logo white-logo">AD</h1>
              <button onClick={toogleMobileMenu} className="close-mobile-menu mobile-menu-btn"><CgClose /></button>
            </div>

            <ul>
              <li>
                <Link to="/" onClick={closeMobileMenuOnLinkClick} className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={closeMobileMenuOnLinkClick} className="nav-link">Portfolio</Link>
              </li>
              <li>
                <Link to="/gallery" onClick={closeMobileMenuOnLinkClick} className="nav-link">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMobileMenuOnLinkClick} className="nav-link">Contact</Link>
              </li>
            </ul>

            <div className='mobile-menu-social-icons-container'>
              <a href="https://github.com/adCva"><FaGithub/></a>
              <a href="https://www.linkedin.com/in/adrian-dobre-902303213/" ><FaLinkedin/></a>
            </div>

          </animated.div>
        ) : null)}
      </div>
    </div>
  )
}

export default Nav;