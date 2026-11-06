import React from 'react';
import './ShopifyKeyChallanges.css';

const ShopifyKeyChallanges = ({ subtitle, title, description, items = [] }) => {
  return (
    <section className="shopify-key-challanges" aria-label='key challanges'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          {description && <p className='section-desc'>{description}</p>}
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <div>
                <span className="icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default ShopifyKeyChallanges