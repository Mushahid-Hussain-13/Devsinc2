import React from "react";
import '../components/Services.css';

const ServicesItem = ({ serviceURL, svgIcon, serviceTitle, serviceDesc }) => {
  return (
    <li className="service-item">
      <a href={serviceURL}>
        <div className="content">
          <span className="icon">{svgIcon}</span>
          <h3 className="service-title">{serviceTitle}</h3>
          <p className="service-desc">{serviceDesc}</p>
        </div>
      </a>
    </li>
  );
};

export default ServicesItem;
