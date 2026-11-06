import React from 'react'
import './ShopifyMarket.css';

const ShopifyMarket = ({ subtitle, title, description, items = [] }) => {
  return (
    <section className="shopify-market">
      <div className="container">

        <div className="content-left">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{description}</p>
        </div>

        <div className="content-right">
          <ol className='ordered-list'>
          <span className="straight-line"></span>

            {items.map((text, index) => (
              <li className="item" key={index}>
                <div className="ball">
                  <div className="outer-layer"></div>
                  <div className="inner-layer"></div>
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

export default ShopifyMarket