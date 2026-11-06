import React from 'react'

const EngagementCard = ({
  subtitle,
  number,
  title,
  desc,
  lastSpan
}) => {
  return (
    <li className="service-item">
      <div className="top">
        <span className="subtitle">{subtitle}</span>
        <span className="number">{number}</span>
      </div>
      <h3 className='title'>{title}</h3>
      <p>{desc}</p>
      <span className="span">{lastSpan}</span>
    </li>
  )
}

export default EngagementCard