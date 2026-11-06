import React, { useState } from "react";
import "./CreationSteps.css";

const CreationSteps = ({ subtitle, title, description1, description2, label, steps = [] }) => {
  return (
    <section className="creation-steps" aria-label="creation steps we follow">
      <div className="container">
        <div className="content-left">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{description1}</p>
          <p className="section-desc">{description2}</p>
        </div>

        <div className="content-right">
          <div className="top-elem">
            <span className="section-tag text-teal">{label}</span>
            <span className="line"></span>
          </div>

          <ul className="steps">
            {steps.map((step, index) => (
              <li className="step" key={index}>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CreationSteps;
