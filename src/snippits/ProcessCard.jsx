import React from 'react'

const ProcessCard = ({ number, title, desc }) => {
  return (
    <li className="process-item">
      <span className="text-teal">{number}</span>
      <h3>{title}</h3>
      <p className="section-desc">{desc}</p>
    </li>
  )
}

export default ProcessCard