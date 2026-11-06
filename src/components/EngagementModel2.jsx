import React from "react";
import "./EngagementModel2.css";
import PrimaryBtn from "../snippits/PrimaryBtn";

const EngagementModel2 = ({ subtitle, title, items = [] }) => {
  return (
    <section className="engagement2" aria-label="engagement 2">
      <div className="container">
        <div className="hero-header">
          <div>
            <span className="section-tag">{subtitle}</span>

            <h2 className="section-heading">{title}</h2>
          </div>

          <PrimaryBtn url={"#"} text={"Let's Talk"} />
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

export default EngagementModel2;
