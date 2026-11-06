import React from "react";

const PodcastItemCard = ({ cardImg, cardImgAlt, cardTitle, cardHeading, cardInfo1, cardInfo2 }) => {
  return (
    <li className="podcast-item">
      <a href="#" className="content">
        <div className="img-holder">
          <img
            src={cardImg}
            alt={cardImgAlt}
            className="img-cover"
          />

          <span className="card-text">{cardTitle}</span>
        </div>

        <div className="card-content">
          <h3>{cardHeading}</h3>
          <span className="span">
            {cardInfo1} <br /> {cardInfo2}
          </span>
        </div>
      </a>
    </li>
  );
};

export default PodcastItemCard;
