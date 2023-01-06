import React from 'react';


function ProjectCard(props) {
  return (
    <div className='projectCard-wrapper'>
        <div className="projectCard-container">
            <img src="./images/DSC3621.jpg" alt="Project Image" className={props.reverse ? "card-image card-image-reverse" : "card-image"} />
            <div className='projectCard-text'>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='projectCard-buttons'>
                    <a className='page-btn-light'>Code</a>
                    <a className='page-btn-light'>Live</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard