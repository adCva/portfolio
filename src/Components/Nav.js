import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";


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
    <div className="nav-container">
      <h1 className="nav-logo">adCva</h1>
      <button onClick={toogleMobileMenu} className="open-mobile-menu mobile-menu-btn"><HiMenu /></button>
      {transition((style, mobileMenu) => mobileMenu ? (
        <animated.div style={style} className="nav-menu">
          <div className='mobile-inter'>
            <h1 className="nav-logo">adCva</h1>
            <button onClick={toogleMobileMenu} className="close-mobile-menu mobile-menu-btn"><CgClose /></button>
          </div>
          <ul>
            <Link to="/" onClick={closeMobileMenuOnLinkClick} className="link">Home</Link>
            <Link to="/projects" onClick={closeMobileMenuOnLinkClick} className="link">Projects</Link>
            <Link to="/photography" onClick={closeMobileMenuOnLinkClick} className="link">Photography</Link>
            <Link to="/contact" onClick={closeMobileMenuOnLinkClick} className="link">Contact</Link>
          </ul>
        </animated.div>
      ) : null)}
    </div>
  )
}

export default Nav;