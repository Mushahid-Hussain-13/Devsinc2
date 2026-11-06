import React from 'react';
import './WhatWeBuild.css';

const WhatWeBuild = ({ subtitle, title, items = [] }) => {
  return (
    <section className="what-we-build" aria-label='what we build'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <span className="number">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default WhatWeBuild