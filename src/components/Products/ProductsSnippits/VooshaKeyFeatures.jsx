import React, { useState } from 'react';
import './VooshaKeyFeatures.css';
import { VooshaData } from '../../../hooks/tabsData';

const VooshaKeyFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = VooshaData[activeIndex];

  return (
    <section className="voosha-key-features" aria-label='voosha key features'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Inside the platform</span>
          <h2 className="section-heading">The attribution is not a promise. It is a screen.</h2>
        </div>

        <div className="tab-btns">
          {VooshaData.map((tab, index) => (
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

            <figure className="img-holder" style={{ '--width': 800, '--height': 350 }}>
              <img src={data.img} alt="features" width={800} height={350} className="img-cover" />
            </figure>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VooshaKeyFeatures