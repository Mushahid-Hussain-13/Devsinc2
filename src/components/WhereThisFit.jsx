import React from 'react';
import './WhereThisFit.css';

const WhereThisFit = ({ subtitle, title, desc, items = [] }) => {
  return (
    <section className="where-this-fit">
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{desc}</p>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className={`item ${item.className}`} key={index}>
              <span className="subtitle">{item.subtitle}</span>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
              <span className="last-span">{item.lastSpan}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default WhereThisFit