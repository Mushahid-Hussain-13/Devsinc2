import React from "react";
import "./SalesforceSpotlight.css";
import citydownTown from '../../../assets/city-downtown.webp';
import PrimaryBtn from "../../../snippits/PrimaryBtn";

export default function SalesforceSpotlight() {
  return (
    <section className="salesforce">
      <div className="container">
        <div className="salesforce__image" aria-hidden="true">
          <img src={citydownTown} alt="city downtown" />
        </div>

        <div className="salesforce__fade" aria-hidden="true"></div>

        <div className="salesforce__content">
          <p className="salesforce__tag">INDUSTRY SPOTLIGHT</p>
          <h1 className="salesforce__title">
            Reimagining Real Estate with Salesforce and AI
          </h1>
          <p className="salesforce__text">
            See how Devsinc rebuilt a leading MENA broker network's entire
            Salesforce ecosystem, and what that could mean for yours.
          </p>
          <PrimaryBtn text={"Explore Salesforce for Real Estate"} url={""}/>
        </div>
      </div>
    </section>
  );
}