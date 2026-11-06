import { ArrowUpRight } from "lucide-react";
import React from "react";
import './UnumpayIdea.css';
import { Link } from "react-router-dom";

const UnumpayIdea = () => {
  return (
    <section className="unumpay-idea" aria-label="unumoay idea">
      <div className="container">
        <h2 className="section-heading text-center">
          Ready to accept every payment your customers prefer?
        </h2>
        <p className="section-desc text-center">
          Join 2,500+ Shopify merchants. Free to install. No credit card. No
          developer required.
        </p>

        <div className="btn-wrapper">
          <Link to={"#"} className="hero-btn purple-btn">
            <span className="text">Install on Shopify</span>
            <span className="icon">
              <ArrowUpRight size={17} />
            </span>
          </Link>
          <Link to={"#"} className="hero-btn">
            <span className="text">Explore UnumPay</span>
            <span className="icon">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnumpayIdea;
