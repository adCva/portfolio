import React from 'react';

function MiscellaneousProjectCard(props) {
  return (
    <div className='misc-card-container'>
      <img src="images/DSC0146.jpg" alt="Misc Card" />
      <div className='misc-card-text-container'>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='card-buttons-container'>
          <a href="#">Code</a>
          <a href="#">Live Page</a>
        </div>
      </div>
    </div>
  )
}

export default MiscellaneousProjectCard;