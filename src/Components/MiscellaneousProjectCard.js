import React from 'react';
import { Link } from "react-router-dom";

function MiscellaneousProjectCard(props) {
  return (
    <div className='misc-card-container'>
      <img src="images/DSC0146.jpg" alt="Misc Card" />
      <div className='misc-card-text-container'>
        <h2>Title</h2>
        <p>Description</p>
        <div className='card-buttons-container'>
          <Link to="">Code</Link>
          <Link to="">Live Page</Link>
        </div>
      </div>
    </div>
  )
}

export default MiscellaneousProjectCard;