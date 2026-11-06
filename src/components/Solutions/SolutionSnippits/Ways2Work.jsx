import React from 'react';
import './Ways2Work.css';
import { Link } from 'react-router-dom';

const Ways2Work = ({ subtitle, title, desc, items = [] }) => {
  return (
    <section className="ways-to-work">
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{desc}</p>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className={`item ${item.className}`} key={index}>
              <span className="icon">{item.icon}</span>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>

              <Link to={item.btnUrl} className={`hero-btn ${item.className}`}>
                {item.btnText}
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-dc5y4d4d=""><path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dc5y4d4d=""></path></svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Ways2Work