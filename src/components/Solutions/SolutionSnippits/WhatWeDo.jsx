import React from 'react';
import './WhatWeDo.css';
import PrimaryBtn from '../../../snippits/PrimaryBtn';

const WhatWeDo = ({ subtitle, title, description, items = [] }) => {
  return (
    <section className="what-we-do" aria-label='what we do'>
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
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>

        <PrimaryBtn text={"Talk to a Shopify Expert"} url={"/"}/>

      </div>
    </section>
  )
}

export default WhatWeDo