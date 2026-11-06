import React from 'react';
import './ShopifyProcessSteps.css';

const ShopifyProcessSteps = ({ subtitle = 'Our process', title, desc, steps = defaultSteps }) => {
  return (
    <section className="shopify-process" aria-label='shopify process steps'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{desc}</p>
        </div>

        <ol className="steps">
          <span className="track" aria-hidden='true'>
            <span className="dot"></span>
          </span>

          {steps.map((step, index) => (
            <li className="step" key={index}>
              <div className="circle">
                <span className="icon">{step.icon}</span>
                <span className="badge">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="step-text">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

export default ShopifyProcessSteps