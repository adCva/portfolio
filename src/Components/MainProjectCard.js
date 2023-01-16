import React from 'react';
import { Link } from "react-router-dom";

function MainProjectCard(props) {
  return (
    <div className='main-project-card-container'>
      <img src="images/DSC0042.jpg" alt="Card" />
      <div className='main-project-card-text-container'>
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

export default MainProjectCard;