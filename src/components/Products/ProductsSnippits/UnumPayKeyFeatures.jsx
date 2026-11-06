import React, { useState } from 'react'
import './UnumPayKeyFeatures.css';
import { unumPayData } from '../../../hooks/tabsData.js';

const UnumPayKeyFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = unumPayData[activeIndex];

  return (
    <section className="unumpay-key-features" aria-label='unumpay key features'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Key Features</span>
          <h2 className="section-heading">Everything you need to manage Shopify payments.</h2>
        </div>

        <div className="tab-btns">
          {unumPayData.map((tab, index) => (
            <button
              key={tab.id}
              role='tab'
              className={`tab-btn ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
          ))}
        </div>

        <div className="tab-content-wrapper">
          <div className="tab-content" key={data.id}>
            <div className="content">
              <h3 className="title">{data.label}</h3>
              <p className="desc">{data.description}</p>

              <ul className="query-list">
                {data.queryList.map((query, index) => (
                  <li className="query" key={index}>{query}</li>
                ))}
              </ul>
            </div>

            <figure className="img-holder" style={{ '--width': 600, '--height': 350 }}>
              <img src={data.img} alt="features" width={600} height={350} className="img-cover" />
            </figure>
          </div>
        </div>

      </div>
    </section>
  )
}

export default UnumPayKeyFeatures