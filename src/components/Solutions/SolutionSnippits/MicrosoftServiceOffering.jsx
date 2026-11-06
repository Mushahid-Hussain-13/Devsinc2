import React from 'react'
import './MicrosoftServiceOffering.css';

const MicrosoftServiceOffering = ({ subtitle, title, items = [] }) => {
  return (
    <section className="microsoft-service-offering" aria-label='microsoft service offering'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
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

export default MicrosoftServiceOffering