import React from 'react'

function PageIntro(props) {
  return (
    <div className='page-intro-container'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default PageIntro