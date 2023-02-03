import React from 'react';

function MainProjectCard(props) {
  return (
    <div className={props.reversed ? "main-project-card-container main-project-card-container-reversed" : "main-project-card-container"}>
      <img src={props.imagePath} alt="Card" />
      <div className='main-project-card-text-container'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className='card-buttons-container'>
          <a href={props.gitHub}>Code</a>
          <a href={props.livePage} className='dark-btn'>Live Page</a>
        </div>
      </div>
    </div>
  )
}

export default MainProjectCard;