import React from 'react';
import './DigitalInsights.css';
import PrimaryBtn from '../snippits/PrimaryBtn';
import { Link } from 'react-router-dom';

const DigitalInsights = ({ subtitle, title, btnText, items = [] }) => {
  return (
    <section className="digital-insights">
      <div className="container">

        <div className="hero-header">
          <div>
            <span className="section-tag">{subtitle}</span>
            <h2 className="section-heading">{title}</h2>
          </div>

          <PrimaryBtn text={btnText} url={"#"}/>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <Link to={"#"}>
                <figure className="img-holder" style={{ '--width': 500, '--height': 240 }}>
                  <img src={item.image} alt="blog image" className='img-cover' width={500} height={240}/>
                </figure>
                <div className="wrapper">
                  <div className="elem1">
                    <span className="label">{item.label}</span>
                    <span className="label-text">{item.labelText}</span>
                  </div>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>

                  <span className="link-text">{item.linkText} →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default DigitalInsights