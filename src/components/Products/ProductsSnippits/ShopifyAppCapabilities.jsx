import React from 'react';
import './ShopifyAppCapabilities.css';

const ShopifyAppCapabilities = ({ subtitle, title, items = [] }) => {
  return (
    <section className="shopify-app-capabilities" aria-label='shopify app capabilities'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className={`item ${item.className}`} key={index}>
              <span className="number">{String(index + 1).padStart(2, "0")}</span>
              <h3 className='title'>{item.title}</h3>
              <p className='desc'>{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default ShopifyAppCapabilities