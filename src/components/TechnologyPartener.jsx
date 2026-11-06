import React from 'react';
import './TechnologyPartener.css';
import microsoft from '../assets/billGates.svg';
import shopify from '../assets/shopify.svg';
import salesforce from '../assets/salesforce.webp';
import amazon from '../assets/amazon.webp';


const TechnologyPartener = () => {
  return (
    <section className="technology-parteners" aria-label='technology parteners'>
      <div className="container">

        <div className="elem">
          <span className="section-tag">Technology Partners</span>

          <h2 className="section-heading">Platforms we build on</h2>
        </div>

        <ul className="logo-list">
          <li className="item">
            <img src={microsoft} alt="microsoft logo" className="logo microsoft" />
          </li>
          <li className="item">
            <img src={salesforce} alt="saleforce-logo logo" className="logo saleforce-logo"/>
          </li>
          <li className="item">
            <img src={shopify} alt="shopify logo" className="logo shopify" />
          </li>
          <li className="item">
            <img src={amazon} alt="amazon logo" className="logo amazon" />
          </li>
        </ul>

      </div>
    </section>
  )
}

export default TechnologyPartener