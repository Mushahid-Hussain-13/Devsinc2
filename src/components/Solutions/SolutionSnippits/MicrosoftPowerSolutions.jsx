import React, { useState } from 'react';
import './MicrosoftPowerSolutions.css';
import { tabsData } from '../../../hooks/tabsData.js';

const MicrosoftPowerSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = tabsData[activeIndex];

  return (
    <section className="microsoft-power-solutions" aria-label='microsoft power solutions'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Our Solution Areas</span>
          <h2 className="section-heading">Where we put the platform to work.</h2>
        </div>

        <div className="tab-content-btns" role='tablist'>
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              role='tab'
              aria-selected={activeIndex === index}
              className={`tab-btn ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="icon">
                <img src={tab.icon} alt="ecosystem" width={15} height={15} />
              </span>
              <span className="text">{tab.label}</span>
            </button>
          ))}
        </div>


        <div className="tab-content-cards">
          <div
            key={data.id}
            className={`tab-content tab-content-${activeIndex + 1}`}
          >
            <div className="content-left">
              <div className="elem1">
                <span className="left-img">
                  <img src={data.icon} alt="" width={20} height={20} />
                </span>
                <span className="subtitle-text">{data.title}</span>
              </div>

              <p className="section-desc">{data.description}</p>

              <div className="elem2">
                <p className="query-title">What we deliver</p>
                <ul className="query-list">
                  {data.deliverables.map((item) => (
                    <li className="item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="content-right">
              <div className="elem1">
                <span className="title">
                  <img src={data.icon} alt="" width={25} height={25} />
                  <span className="text">{data.label}</span>
                </span>
                <span className="live">{data.status}</span>
              </div>

              <div className="elem2">
                <div className="progress-bar-list">
                  {data.stats.map((s) => (
                    <div className="progress-bar-item" key={s.label}>
                      <div className="text-wala-elem">
                        <span className="text">{s.label}</span>
                        <span className="percentage">{s.value}</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${s.width}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="elem3">
                <p className="text">{data.footerText}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default MicrosoftPowerSolutions