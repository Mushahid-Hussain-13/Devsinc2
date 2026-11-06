import React from "react";
import "./ClientReviews.css";
import ClientReviewsCard from "../snippits/ClientReviewsCard";
import review1 from "../assets/review-1.webp";
import review2 from "../assets/review-2.webp";
import review3 from "../assets/review-3.webp";
import artGradient from "../assets/art-gradient.webp";

const ClientReviews = () => {
  return (
    <section className="client-reviews" aria-label="client reviews">
      <div className="container">
        <img
          src={artGradient}
          alt="art gradient for background"
          loading="lazy"
          className="bg-img-star"
        />

        <div className="client-reviews-header">
          <span className="span">Client Voices</span>

          <h2 className="section-heading">
            Trusted with the work that matters most
          </h2>
        </div>

        <ul className="reviews-card-list">
          <ClientReviewsCard
            cardText={
              "“Managing over AED 12 billion in property sales through a broker network spanning 100+ countries, we needed one place for our brokers to check deal status instead of calling us all day. Devsinc's Sales Cloud and Experience Cloud implementation solved exactly that, giving us one view of every deal and letting partners self-serve on status.”"
            }
            cardTitle={"Raed Hechmi"}
            cardSubtitle={"Operations Manager, Fam"}
            cardImage={review1}
            cardAlt={"Master Agency"}
          />
          <ClientReviewsCard
            cardText={
              "“As a regulated payments platform moving money across 150+ currencies to 85+ countries, speed and compliance can't slip. Devsinc's Service Cloud implementation brought every support request, email, chat, and in-app, into one unified place, with automatic routing that gets each case to the right person immediately. That's cut our average resolution time significantly, giving our support function the consistency our customers expect.”"
            }
            cardTitle={"Michael"}
            cardSubtitle={"Technical Lead, Hubpay"}
            cardImage={review2}
            cardAlt={"hubpay"}
          />
          <ClientReviewsCard
            cardText={
              "“We have had a wonderful experience working with Devsinc on our Salesforce Sales Cloud, Service Cloud, and Experience Cloud implementation. In professional services, our reputation depends on how well we manage relationships over time, and this gave us the visibility to do that consistently. We've found Devsinc reliable, communicative, knowledgeable, and full of integrity. We have delivered 5+ projects successfully, with more planned for the future.”"
            }
            cardTitle={"Dana Ress"}
            cardSubtitle={"CTO, Redpoint"}
            cardImage={review3}
            cardAlt={"CTO, Redpoint"}
          />
        </ul>
      </div>
    </section>
  );
};

export default ClientReviews;
