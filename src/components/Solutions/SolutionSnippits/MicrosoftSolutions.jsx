import React from 'react'
import './MicrosoftSolutions.css';

const MicrosoftSolutions = ({ subtitle, title, description, items = [] }) => {
  return (
    <section className="microsoft-solution" aria-label='microsoft solution'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{description}</p>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <span className="icon">{item.icon}</span>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-desc">{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default MicrosoftSolutions