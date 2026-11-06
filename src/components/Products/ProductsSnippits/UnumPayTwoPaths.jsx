import React from "react";
import './UnumPayTwoPaths.css';
import { Link } from "react-router-dom";

const UnumPayTwoPaths = () => {
  return (
    <section className="unum-pay-paths" aria-label="shopify app paths">
      <div className="container">
        <div className="hero-header">
          <span className="section-tag">Getting started</span>
          <h2 className="section-heading">
            Two ways to get set up.
          </h2>
        </div>

        <div className="wrapper">
          <div className="content">
            <span className="subtitle">Self-serve</span>
            <h3 className="title">You need a private app when</h3>
            <p className="desc">
              Install from the Shopify App Store and connect your gateways directly in the dashboard. No developer, no sales call.
            </p>
            <Link to={"#"} className="link">
              Install on Shopify ↗
            </Link>
          </div>
          <div className="content">
            <span className="subtitle">Assisted setup</span>
            <h3 className="title">Talk to the UnumPay team</h3>
            <p className="desc">
              For merchants juggling multiple regional gateways or migrating from another payment app, the team helps map the setup before you install.
            </p>
            <Link to={"#"} className="link">
              Explore Unumpay ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnumPayTwoPaths;
