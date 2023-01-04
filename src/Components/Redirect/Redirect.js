import React from 'react';
import { Link } from "react-router-dom";

function Redirect() {
  return (
    <div className='redirect-wrapper'>
        <div className='redirect-container'>
            <h1>Interested in doing a project together?</h1>
            <Link to="/contact" className="btn">Contact Me</Link>
        </div>
    </div>
  )
}

export default Redirect;