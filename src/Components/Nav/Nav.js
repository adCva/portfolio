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

    //window.scrollTo(0, 0);
    
    
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
    <div className="nav-wrapper">
      <div className='nav-container'>
          <h1>adCva</h1>
          <button onClick={toogleMobileMenu} className="mobile-menu-btn">{mobileMenu ? <CgClose /> : <HiMenu />}</button>
          {transition((style, mobileMenu) => mobileMenu ? (
            <animated.div style={style} className="nav-menu">
              <Link to="/" onClick={closeMobileMenuOnLinkClick} className="link">Home</Link>
              <Link to="/projects" onClick={closeMobileMenuOnLinkClick} className="link">Projects</Link>
              <Link to="/photography" onClick={closeMobileMenuOnLinkClick} className="link">Photography</Link>
              <Link to="/contact" onClick={closeMobileMenuOnLinkClick} className="link">Contact</Link>
            </animated.div>
          ) : null)}
          
      </div>
    </div>
  )
}

export default Nav;




