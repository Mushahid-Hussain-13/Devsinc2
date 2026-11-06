import React from "react";
import "../components/Footer.css";

const FooterCard = ({ img, countryName, address }) => {
  return (
    <div className="child">
      <span>
        <img src={img} alt="our offices" width={25} /> {countryName}
      </span>
      <address>{address}</address>
    </div>
  );
};

export default FooterCard;
