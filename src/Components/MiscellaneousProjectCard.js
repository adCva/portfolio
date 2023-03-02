import React from 'react';

function MiscellaneousProjectCard(props) {
  return (
    <div className='misc-card-container'>
      <img src={props.imagePath} alt="Misc Card" />
      <div className='misc-card-text-container'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className='card-buttons-container'>
          <a href={props.code} target="_blank" rel='noreferrer'>Code</a>
          {props.page === "#" ? (
            null
          ) : (
            <a href={props.page} target="_blank" rel='noreferrer'>Live Page</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default MiscellaneousProjectCard;