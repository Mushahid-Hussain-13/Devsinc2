import React from "react";
import "./IndustriesServed.css";
import PrimaryBtn from "../snippits/PrimaryBtn";
import IndustryCard from "../snippits/IndustryCard";

const IndustriesServed = ({
  subtitle,
  title,
  btnText,
  btnUrl,
  industries = [],
}) => {
  return (
    <section className="industries-served" aria-label="industries we serve">
      <div className="container">
        <div className="hero-header">
          <div>
            <span className="section-tag">{subtitle}</span>
            <h2 className="section-heading">{title}</h2>
          </div>

          <PrimaryBtn url={btnUrl} text={btnText} />
        </div>

        <ul className="industries-list">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              image={industry.image}
              overlayText={industry.text}
              overlayDesc={industry.desc}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IndustriesServed;
