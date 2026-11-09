import React from "react";
import { Link } from "react-router-dom";
import './WhoBuildVoosha.css';

const WhoBuildVoosha = () => {
  return (
    <section className="voosha-build" aria-label="voosha build">
      <div className="container">
        <div className="wrapper-1">
          <div className="elem">
            <span className="section-tag">Who built it</span>
            <h2 className="section-heading">Built by commerce operators.</h2>
          </div>
          <div className="elem">
            <p className="section-desc">
              Voosha did not come from a marketing agency guessing at software.
              Devsinc has spent ten years building Shopify storefronts, checkout
              infrastructure, and payment systems for retail brands, and has
              shipped its own apps to the Shopify App Store. Voosha is what
              happens when the team that handles the transaction turns its
              attention to the traffic.
            </p>
            <Link to={"#"} className="hero-btn">
              More about Devsinc →
            </Link>
          </div>
        </div>

        <div className="wrapper-2">
          <div className="elem">
            <Link to={"#"}>
              <span className="subtitle">Services</span>
              <h3 className="title">Ecommerce and Shopify engineering</h3>
              <p className="desc">
                Storefronts, migrations, and checkout work for retail brands.
              </p>
            </Link>
          </div>
          <div className="elem">
            <Link to={"#"}>
              <span className="subtitle">Product</span>
              <h3 className="title">Checkout Catalyst</h3>
              <p className="desc">
                No-code Shopify checkout customisation, on the App Store.
              </p>
            </Link>
          </div>
          <div className="elem">
            <Link to={"#"}>
              <span className="subtitle">Hub</span>
              <h3 className="title">Devsinc apps for Shopify</h3>
              <p className="desc">
                Every app Devsinc has shipped to the Shopify ecosystem.
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-overlay-color"></div>
      </div>
    </section>
  );
};

export default WhoBuildVoosha;
