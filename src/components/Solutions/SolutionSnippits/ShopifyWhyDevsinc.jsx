import React from 'react';
import './ShopifyWhyDevsinc.css';

const ShopifyWhyDevsinc = ({ subtitle, title, items = [] }) => {
  return (
    <section className="shopify-why-devsinc" aria-label='why devsinc'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>

          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <span className="icon">
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

export default ShopifyWhyDevsinc