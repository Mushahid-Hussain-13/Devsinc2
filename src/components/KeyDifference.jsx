import React from 'react'
import './KeyDifference.css';

const KeyDifference = ({ subtitle, title, differences = [] }) => {
  return (
    <section className="difference" aria-label='key difference'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag text-teal">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="difference-list">
          {differences.map((difference, index) => (
            <li className="difference-item" key={index}>
              <span className="icon">{difference.icon}</span>
              <h3 className="title">{difference.heading}</h3>
              <p className="desc">{difference.description}</p>
          </li>
          ))}
        </ul>

        <div className="bg-overlay-color"></div>

      </div>
    </section>
  )
}

export default KeyDifference