import React from "react";
import "./SoftwareChallanges.css";

const SoftwareChallanges = ({ subtitle, title, problems = [] }) => {
  return (
    <section className="software-challanges" aria-label="software challanges">
      <div className="container">
        <div className="elem">
          <span className="section-tag">{subtitle}</span>

          <h2 className="section-heading">{title}</h2>
        </div>

        <ul className="list">
          {problems.map((problem, index) => (
            <li className={`item ${problem.className}`} key={index}>
              <span className={`subtitle ${problem.subtitleClass}`}>
                {problem.subtitle}
              </span>
              <h3 className="title">{problem.title}</h3>
              <p className="desc">{problem.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftwareChallanges;
