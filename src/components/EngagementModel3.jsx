import React from "react";
import "./EngagementModel3.css";
import PrimaryBtn from "../snippits/PrimaryBtn";

const EngagementModel3 = ({ subtitle, title, desc, items = [] }) => {
  return (
    <section className="engagement3" aria-label="engagement 3">
      <div className="container">
        <div className="hero-header">
          <div>
            <span className="section-tag">{subtitle}</span>

            <h2 className="section-heading">{title}</h2>

            {desc && <p className="section-desc">{desc}</p>}
          </div>

          <PrimaryBtn url={"#"} text={"Let's Talk"} className={"first-btn"} />
        </div>

        <div className="service-list">
          {items.map((item, index) => (
            <li className="service-item" key={index}>
              <div className="top">
                <span className="subtitle">{item.subtitle}</span>
                <span className="number">{item.number}</span>
              </div>
              <h3 className="title">{item.title}</h3>
              <p>{item.desc}</p>
              <span className="span">{item.lastSpan}</span>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModel3;
