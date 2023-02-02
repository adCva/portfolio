import React from 'react';
import { Link } from "react-router-dom";

function Interested() {
  return (
    <div className='interested-wrapper'>
      <div className='interested-container'>
          <h3>Interested in doing a project together?</h3>
          <Link to="/contact" className="interested-btn">Contact Me</Link>
      </div>
    </div>
  )
}

export default Interested;