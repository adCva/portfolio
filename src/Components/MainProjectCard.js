import React from 'react';

function MainProjectCard(props) {
  return (
    <div className={props.reversed ? "main-project-card-container main-project-card-container-reversed" : "main-project-card-container"}>
      <img src="images/DSC0042.jpg" alt="Card" />
      <div className='main-project-card-text-container'>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='card-buttons-container'>
          <a href="#">Code</a>
          <a href="#">Live Page</a>
        </div>
      </div>
    </div>
  )
}

export default MainProjectCard;