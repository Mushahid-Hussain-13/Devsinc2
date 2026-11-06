import React from 'react';
import './ShopifyTheme.css';

const ShopifyTheme = ({ subtitle, title, description, items = [] }) => {
  return (
    <section className="shopify-theme" aria-label='shopify theme & desgin'>
      <div className="container">

        <div className="content-left">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{description}</p>
        </div>

        <div className="content-right">
          <ol className='ordered-list'>
            <span className="straight-line" aria-hidden='true'></span>

            {items.map((text, index) => (
              <li className="item" key={index}>
                <div className="ball">
                  <span className="outer-ball"></span>
                  <span className="inner-ball"></span>
                </div>
                <div className="content">
                  <span className="number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text">{text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}

export default ShopifyTheme