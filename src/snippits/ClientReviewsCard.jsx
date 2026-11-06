import React from "react";
import '../components/ClientReviews.css';

const ClientReviewsCard = ({
  cardText,
  cardTitle,
  cardSubtitle,
  cardImage,
  cardAlt
}) => {
  return (
    <li className="reviews-card-item">
      <div className="content">
        <div className="card-elem-1">
          <svg
            width="34"
            height="26"
            viewBox="0 0 34 26"
            fill="none"
            aria-hidden="true"
            class="shrink-0"
            data-astro-cid-gainicbo=""
          >
            <path
              d="M0 26V13.6C0 6.1 4.4 1 11.6 0v5.2c-3.7.9-5.6 3.5-5.7 7.1H13V26H0Z"
              fill="#17BAB0"
              data-astro-cid-gainicbo=""
            ></path>
            <path
              d="M21 26V13.6C21 6.1 25.4 1 32.6 0v5.2c-3.7.9-5.6 3.5-5.7 7.1H34V26H21Z"
              fill="#17BAB0"
              data-astro-cid-gainicbo=""
            ></path>
          </svg>

          <p className="card-text">{cardText}</p>
        </div>

        <div className="card-elem">
          <div>
            <h4>{cardTitle}</h4>
            <p>{cardSubtitle}</p>
          </div>

          <img
            src={cardImage}
            alt={cardAlt}
            loading="lazy"
            width={90}
            height={90}
          />
        </div>
      </div>
    </li>
  );
};

export default ClientReviewsCard;
