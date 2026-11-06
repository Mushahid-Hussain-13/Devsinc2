import React from "react";
import "./IndustriesServed2.css";

const IndustriesServed2 = ({ subtitle, title, items = [] }) => {
  return (
    <section className="industry2-served">
      <div className="container">
        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="industries2-list">
          {items.map((item, index) => (
            <li className="list-item" key={index}>
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IndustriesServed2;
