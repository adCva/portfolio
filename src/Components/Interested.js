import React from 'react';
import { Link } from "react-router-dom";

function Interested() {
  return (
    <div className='interested-wrapper'>
        <div className='interested-container'>
            <h1>Interested in doing a project together?</h1>
            <Link to="/contact" className="btn page-btn-light">Contact Me</Link>
        </div>
    </div>
  )
}

export default Interested;