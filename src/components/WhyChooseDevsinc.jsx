import React from 'react';
import './WhyChooseDevsinc.css';

const WhyChooseDevsinc = ({ subtitle, title, items = [] }) => {
  return (
    <section className="why-choose-devsinc" aria-label='why choose devsinc'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item">
              <span className="number">
                {String(index + 1).padStart(2, "0")}
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

export default WhyChooseDevsinc