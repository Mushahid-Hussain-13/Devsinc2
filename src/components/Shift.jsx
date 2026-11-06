import React, { useState } from "react";
import { motion } from "framer-motion";
import BlueRightArrow from "../snippits/BlueRightArrow.jsx";
import "./Shift.css";

const Shift = () => {
  // Mobile active card state: 'legacy' (default)
  const [activeCard, setActiveCard] = useState("legacy");

  return (
    <section className="shift-section">
      <div className="shift-container">
        {/* Life Side Content */}
        <div className="shift-content">
          <span className="section-tag">The Shift</span>
          <h2 className="section-heading">
            The shift to AI native operations is already here.
          </h2>
          <p className="section-desc">
            Most partners still sell capacity. We enable the people, technology,
            and operating model to become AI-native, so AI is owned across the
            business, embedded in delivery, and ultimately tied to measurable
            outcomes.
          </p>
        </div>

        {/* Right Side Cards Container */}
        <div className="cards-wrapper">
          {/* Card 1: Legacy Model */}
          <div
            className={`card legacy-card
                      ${
                        activeCard === "legacy" ? "show-mobile" : "hide-mobile"
                      }`}
          >
            <div className="card-header">
              <span className="card-badge">Legacy model</span>

              {/* Mobile Right Arrow Button */}
              <button
                className="mobile-arrow-btn"
                aria-label="Next Card"
                onClick={() => setActiveCard("ai")}
              >
                <BlueRightArrow />
              </button>
            </div>

            <h3 className="card-title">Buy capacity</h3>

            <ul className="card-list">
              <li>
                <span className="icon minus-icon">-</span>
                <span>Timelines set by headcount, not tooling</span>
              </li>
              <li>
                <span className="icon minus-icon">-</span>
                <span>
                  Each vendor delivers a slice, you own the integration
                </span>
              </li>
              <li>
                <span className="icon minus-icon">-</span>
                <span>Disconnected systems can't feed AI</span>
              </li>
            </ul>
          </div>

          {/* Center Card Arrow (Desktop Only) */}
          <div className="desktop-arrow">
            <BlueRightArrow />
          </div>

          {/* Card 2: AI Native Model */}
          <div
            className={`card ai-card
                          ${
                            activeCard === "ai" ? "show-mobile" : "hide-mobile"
                          }`}
          >
            <div className="card-header header-reverse-mobile">
              <span className="card-badge teal-text">AI native model</span>

              <button
                className="mobile-arrow-btn"
                aria-label="Previous Card"
                onClick={() => setActiveCard("legacy")}
              >
                <BlueRightArrow />
              </button>
            </div>

            <h3 className="card-title">Buy outcomes</h3>

            <ul className="card-list">
              <li>
                <span className="icon check-icon">&#10003;</span>
                <span>
                  AI tooling embedded in delivery cuts timelines in half
                </span>
              </li>
              <li>
                <span className="icon check-icon">&#10003;</span>
                <span>One team, discovery through integration and support</span>
              </li>
              <li>
                <span className="icon check-icon">&#10003;</span>
                <span>Priced and measured against the business outcome</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shift;
