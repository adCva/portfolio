import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTransition, animated } from 'react-spring';


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
          <img src="./images/logo.svg" alt="Logo" />
          <img src={mobileMenu ? "./images/close-menu.svg" : "./images/menu.svg"} alt="Hamburgur" onClick={toogleMobileMenu} className="hamburgur-icon" />
          {transition((style, mobileMenu) => mobileMenu ? (
            <animated.div style={style} className="nav-menu">
                  <ul>
                    <li><Link to="/" onClick={closeMobileMenuOnLinkClick}>Home</Link></li>
                    <li><Link to="/stories" onClick={closeMobileMenuOnLinkClick}>Stories</Link></li>
                    <li><Link to="/features" onClick={closeMobileMenuOnLinkClick}>Features</Link></li>
                    <li><Link to="/pricing" onClick={closeMobileMenuOnLinkClick}>Pricing</Link></li>
                  </ul>
              </animated.div>
          ) : null)}
      </div>
    </div>
  )
}

export default Nav;




