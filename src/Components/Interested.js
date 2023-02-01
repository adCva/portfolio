import React from 'react';
import { Link } from "react-router-dom";

function Interested() {
  return (
    <div className='interested-wrapper'>
      <div className='interested-container'>
          <h2>Interested in doing a project together?</h2>
          <Link to="/contact" className="interested-btn">Contact Me</Link>
      </div>
    </div>
  )
}

export default Interested;