import React from 'react'
import '../components/IndustriesServed.css';

const IndustryCard = ({
  image,
  overlayText,
  overlayDesc
}) => {
  return (
    <li className="industry-item">
      <img src={image} alt="industry" className='img-cover'/>
      <div className="text-overlay">
        <h3>{overlayText}</h3>
        <p>{overlayDesc}</p>
      </div>
    </li>
  )
}

export default IndustryCard