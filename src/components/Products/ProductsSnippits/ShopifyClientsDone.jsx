import React from 'react';
import './ShopifyClientsDone.css';

const ShopifyClientsDone = ({ clientsData = [] }) => {
  return (
    <section className="shopify-client-done" aria-label='shopify client done'>
      <div className="container">

        <ul className="list">
          {clientsData.map((item, index) => (
            <li className="item" key={index}>
              <h2>{item.text}</h2>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default ShopifyClientsDone