import React from 'react';

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
          <p>I am a passionate software developer who loves challenges and solving problems. I started with programing because I have a deep desire to understand how things work, are made and can be improved. I have experience with JavaScript, React, PHP, MySQL, CSS, and SCSS, as well as a good understanding of Python and Django. My current focus is on mastering the latest web development technologies and the ones that I already know. Looking to the future, I am excited to continue my journey in software development and to expand my knowledge to new areas such as Java and C++ (and maybe even C#).</p>
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