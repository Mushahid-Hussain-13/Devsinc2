import React from "react";
import "../components/CaseStudy.css";

const CaseStudyCard = ({ image, cardText, title, subtitle, spanText }) => {
  return (
    <li className="case-study-item">
      <a href="#">
        <div
          className="card-banner img-holder"
          style={{ "--width": "520", "--height": "270" }}
        >
          <img
            src={image}
            width={520}
            height={270}
            alt="Team meeting in a modern office boardroom"
            className="img-cover"
          />

          <span className="card-text">{cardText}</span>
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <span className="subtitle">{subtitle}</span>
          <span className="span">{spanText}</span>
        </div>
      </a>
    </li>
  );
};

export default CaseStudyCard;
