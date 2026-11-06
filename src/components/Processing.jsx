import React from 'react';
import './Processing.css';
import PrimaryBtn from '../snippits/PrimaryBtn';


const Processing = ({ subtitle, title, btnText = undefined, btnUrl = undefined, items = [] }) => {
  return (
    <section className="processing" aria-label='processing'>
      <div className="container">

        <div className="hero-header">
          <div>
            <span className="section-tag">{subtitle}</span>
            <h2 className="section-heading">{title}</h2>
          </div>

          {btnText && <PrimaryBtn url={btnUrl} text={btnText}/>}
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <div className="top">
                <span className="text-teal">{item.number}</span>
                <h3>{item.title}</h3>
              </div>
              <p className="section-desc">{item.desc}</p>
              <span className="span">{item.lastSpan}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Processing