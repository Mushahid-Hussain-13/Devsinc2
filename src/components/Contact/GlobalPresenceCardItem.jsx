import React from 'react'

const GlobalPresenceCardItem = ({ img, alt, text }) => {
  return (
    <li className="global-presence-item">
      <img src={img} alt={alt} className='img-cover'/>
      <div className="overlay-text">
        <span>{text}</span>
      </div>
    </li>
  )
}

export default GlobalPresenceCardItem