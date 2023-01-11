import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useTransition, animated } from 'react-spring';

function Nav() {
  const [ mobileMenu, setMobileMenu ] = useState(window.innerWidth > 767 ? true : false);
  const mobileMenuRef = useRef();

  const toogleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  useEffect(() => {
    let mobileNavScreenWidth = () => {
      if (window.innerWidth < 768) {
        setMobileMenu(false);
      } else {
        setMobileMenu(true);
      }
    }

    let closeOutsideClick = (event) => {
      if (!mobileMenuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    }

    window.addEventListener("resize", mobileNavScreenWidth);
    // document.addEventListener("click", closeOutsideClick);

    return() => {
      window.removeEventListener("resize", mobileNavScreenWidth);
      // document.removeEventListener("click", closeOutsideClick);
  }
  }, [mobileMenu]);


  // React Spring.
  const transition = useTransition(mobileMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className='nav-wrapper'>
      <h1 className='page-logo'>Adrian Dobre</h1>
      <button className='mobile-menu-button' onClick={toogleMobileMenu}><TiThMenu /></button>
      {transition((style, mobileMenu) => mobileMenu ? (
        <animated.div style={style} className="nav-list" ref={mobileMenuRef}>
          <button className='mobile-menu-button-close' onClick={toogleMobileMenu}><RiCloseFill /></button>
          <div className='list-group list-group-bold'>
          <Link to="/projects" className='nav-link nav-link-bold'>Projects</Link>
          <Link to="/photography" className='nav-link nav-link-bold'>Photography</Link>
        </div>
        <div className='list-group'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </div>
        <div className='social-media'>
          <Link className='social-media-link'><FaGithub /></Link>
          <Link className='social-media-link'><BsLinkedin /></Link>
        </div>
        </animated.div>
      ) : null)}
    </div>
  )
}

export default Nav;