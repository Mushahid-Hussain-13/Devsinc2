import React from 'react';
import './SalesforceDifference.css';

const SalesforceDifference = ({ subtitle, title, items = [] }) => {
  return (
    <section className="salesforce-difference" aria-label='salesforce difference'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <span className="icon">{item.icon}</span>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default SalesforceDifference