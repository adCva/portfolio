import React from 'react';
import { Link } from "react-router-dom";

function About() {
  const techIcons = [
    {
      iconPath: "images/icons/javaScript.png",
      alt: "JavaScript"
    },
    {
      iconPath: "images/icons/react.png",
      alt: "ReactJS"
    },
    {
      iconPath: "images/icons/php.png",
      alt: "PHP"
    },
    {
      iconPath: "images/icons/python.png",
      alt: "Python"
    },
    {
      iconPath: "images/icons/java.png",
      alt: "Java"
    },
    {
      iconPath: "images/icons/mysql.png",
      alt: "MySQL"
    },
    {
      iconPath: "images/icons/html.png",
      alt: "HTML"
    },
    {
      iconPath: "images/icons/css.png",
      alt: "CSS"
    },
    {
      iconPath: "images/icons/sass.png",
      alt: "Sass"
    },
    {
      iconPath: "images/icons/lightroom.png",
      alt: "Adobe Lightroom"
    }
  ];


  return (
    <div className='about-container'>
      <div className='about-group'>
        <img src="./images/about.jpg" alt="About" />
        <div className='about-text-container'>
          <h2>About me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className='tech-icons-container'>
            {techIcons.map((el, i) => {
              return (
                <div className='tech-card' >
                 <img src={el.iconPath} alt={el.alt} />
                </div>
              )
            })}
          </div>
    </div>
  )
}

export default About;