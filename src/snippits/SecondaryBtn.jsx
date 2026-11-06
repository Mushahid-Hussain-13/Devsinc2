import React from "react";
import { Link } from "react-router-dom";
import "../components/Contact/ContactHero.css";

const SecondaryBtn = ({ url, text }) => {
  return (
    <Link to={url} className="secondary-btn">
      {text}
    </Link>
  );
};

export default SecondaryBtn;
