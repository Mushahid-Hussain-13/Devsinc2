import React from "react";
import "./Services.css";
import PrimaryBtn from "../snippits/PrimaryBtn";
import ServicesItem from "../snippits/ServicesItem";

const Services = () => {
  return (
    <section className="service" aria-label="service section">
      <div className="container">
        <div className="service-header">
          <div>
            <span className="section-tag">Services That Work</span>

            <h2 className="section-heading">
              Engineering rigor meets AI native speed.
            </h2>
          </div>

          <PrimaryBtn url={"/digital-transformation"} text={"View all servcies"} />
        </div>

        <ul className="service-list">
          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"AI & Data Systems"}
            serviceDesc={
              "Data engineering, machine learning, and generative AI built into your product."
            }
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6" rx="1"></rect>
                <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"></path>
              </svg>
            }
          />

          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"Application Engineering"}
            serviceDesc={
              "Custom software, web, and mobile apps built by senior engineers."
            }
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M2 9h20"></path>
                <path d="M5.5 6.5h.01M8.5 6.5h.01"></path>
                <path d="M9 14.5l2 2 4-4"></path>
              </svg>
            }
          />

          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"Solution Implementation"}
            serviceDesc={
              "Salesforce, Dynamics 365, Power Platform, and Shopify, implemented end to end.."
            }
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="3"></rect>
                <rect x="9.5" y="9.5" width="5" height="5" rx="1"></rect>
              </svg>
            }
          />

          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"Advisory & Strategy"}
            serviceDesc={
              "Roadmaps and readiness assessments to plan your next move."
            }
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <circle cx="12" cy="12" r="9.5"></circle>
                <path d="M12 7.5v5.5"></path>
                <path d="M12 16.5h.01"></path>
              </svg>
            }
          />

          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"Cloud & Infrastructure"}
            serviceDesc={
              "Migration, DevSecOps, and cloud platforms built to scale."
            }
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <path d="M17.5 18.5H9a6.5 6.5 0 1 1 6.23-8.36h2.27a4.18 4.18 0 0 1 0 8.36Z"></path>
              </svg>
            }
          />

          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"Product Studio for Startups"}
            serviceDesc={"From validation to a launch-ready MVP in 90 days."}
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <path d="M15.1 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8a6 6 0 0 0-12 0c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 21.5h4"></path>
              </svg>
            }
          />

          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"Game Studio"}
            serviceDesc={
              "Full-cycle game development, from art to multiplayer systems."
            }
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <rect x="2" y="6" width="20" height="12" rx="4"></rect>
                <path d="M6.5 12h3.5M8.25 10.25v3.5"></path>
                <path d="M15 13.5h.01M17.5 10.5h.01"></path>
              </svg>
            }
          />

          <ServicesItem
            serviceURL={"#"}
            serviceTitle={"Staff Augmentation"}
            serviceDesc={"Vetted engineers embedded in your team, on demand."}
            svgIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3A56"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                data-astro-cid-gainicbo=""
              >
                <path d="M15.5 20.5v-1.8a3.7 3.7 0 0 0-3.7-3.7H6.2a3.7 3.7 0 0 0-3.7 3.7v1.8"></path>
                <circle cx="9" cy="7.5" r="3.8"></circle>
                <path d="M21.5 20.5v-1.8a3.7 3.7 0 0 0-2.8-3.58"></path>
                <path d="M16 4a3.7 3.7 0 0 1 0 7.17"></path>
              </svg>
            }
          />
        </ul>
      </div>
    </section>
  );
};

export default Services;
