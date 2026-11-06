import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import Navbar from "../Navbar.jsx";
import "./ContactHero.css";
import microsoft from "../../assets/billGates.svg";
import shopify from "../../assets/shopify.svg";
import salesforce from "../../assets/salesforce.webp";
import amazon from "../../assets/amazon.webp";
import SecondaryBtn from "../../snippits/SecondaryBtn.jsx";

const ContactHero = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className="contact-page" aria-label="contact hero section">
      <Navbar />

      <div className="contact-container">
        <div className="elem1">
          <span className="section-tag">Contact us</span>
          <h2 className="heading">
            Let's build something worth shipping
          </h2>
          <p className="section-desc">
            We build AI into the workflows that decide your margins, not around
            them. Tell us where the work slows down.
          </p>

          <div className="our-client">
            <span className="section-tag">Partnered by</span>
            <div>
              <img src={microsoft} alt="microsoft logo" loading="lazy" width={120} />
              <img src={shopify} alt="shopify logo" loading="lazy" width={100} />
              <img src={salesforce} alt="salesforce logo" loading="lazy" width={50} />
              <img src={amazon} alt="amazon logo" loading="lazy" width={50} />
            </div>
          </div>
        </div>
        <div className="elem2">
          <form className="form">
            <div className="child-elem1">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  className="input-field"
                  placeholder="First Name *"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  className="input-field"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Business email*"
                required
              />
              <div className="input-group">
                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  className="phone-field"
                  inputProps={{ name: "phoneNo" }}
                  placeholder="Phone number"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="companyName"
                  className="input-field"
                  placeholder="Company *"
                  required
                />

                <select name="looking_for" required>
                  <option value="looking_for" disabled selected>
                    I am looking for *
                  </option>
                  <optgroup label="Services">
                    <option value="Digital Transformation">
                      Digital Transformation
                    </option>
                    <option value="AI &amp; Data Systems">
                      AI &amp; Data Systems
                    </option>
                    <option value="Application Engineering">
                      Application Engineering
                    </option>
                    <option value="Cloud &amp; Infrastructure">
                      Cloud &amp; Infrastructure
                    </option>
                    <option value="Payment as a Service">
                      Payment as a Service
                    </option>
                    <option value="Advisory &amp; Strategy">
                      Advisory &amp; Strategy
                    </option>
                    <option value="Product Studio for Startups">
                      Product Studio for Startups
                    </option>
                    <option value="Game Studio">Game Studio</option>
                    <option value="Staff Augmentation">
                      Staff Augmentation
                    </option>
                    <option value="Blockchain and Cryptography">
                      Blockchain and Cryptography
                    </option>
                    <option value="Architectural Visualization">
                      Architectural Visualization
                    </option>
                  </optgroup>
                  <optgroup label="Solutions">
                    <option value="Ecommerce (Shopify)">
                      Ecommerce (Shopify)
                    </option>
                    <option value="Microsoft Dynamics 365">
                      Microsoft Dynamics 365
                    </option>
                    <option value="Microsoft Power Platform">
                      Microsoft Power Platform
                    </option>
                    <option value="Salesforce">Salesforce</option>
                  </optgroup>
                  <optgroup label="Products">
                    <option value="UnumPay">UnumPay</option>
                    <option value="Voosha">Voosha</option>
                    <option value="Shopify Apps">Shopify Apps</option>
                  </optgroup>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <textarea
                name="message-box"
                className="textarea"
                rows={4}
                placeholder="Tell us more about your project"
              ></textarea>
            </div>

            <div className="child-elem2">
              <p className="section-desc">
                To process your request, we need your permission to store and process your personal data. Please check the box below to confirm your consent:
              </p>
              <label htmlFor="essential agreements" className="essentials">
                <input type="checkbox" required/>
                <span>I agree to allow Devsinc to store and process my personal data. <span className="text-teal">*</span></span>
              </label>
              <label htmlFor="essential agreements" className="essentials">
                <input type="checkbox" required/>
                <span>I agree to receive other communications from Devsinc. <span className="text-teal">*</span></span>
              </label>
              <p className="section-desc">
                We care about your privacy. Learn how we handle your data in our <a href="#">Privacy Policy.</a>
              </p>

              <SecondaryBtn url={"#"} text={"Submit"}/>
            </div>
          </form>

          <div className="career-explore-child">
            <a href="#" className="career-explore-link">
              <span className="svgIcon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7.5" width="18" height="12" rx="2"></rect><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"></path><path d="M3 12.5h18"></path></svg>
              </span>
              <span className="link-details">
                <span className="title">Explore Careers</span>
                <span className="subtitle">Apply for open roles</span>
              </span>
              <span className="arrow-icon">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" class="shrink-0 text-ring transition group-hover:text-white group-hover:translate-x-0.5"><path d="M3 8 H12.5 M9 4.5 L12.5 8 L9 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </a>
            <a href="#" className="career-explore-link">
              <span className="svgIcon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12.5l3.8-3.8a2.2 2.2 0 0 1 3.1 0l.9.9"></path><path d="M21 12.5l-3.8-3.8a2.2 2.2 0 0 0-3.1 0l-.9.9"></path><path d="M9.5 11.3l3.6 3.6a1.7 1.7 0 0 1 0 2.4 1.7 1.7 0 0 1-2.4 0l-.5-.5"></path><path d="M6.8 14l2.3 2.3a1.7 1.7 0 0 0 2.4 0"></path><path d="M17.2 14l-1.7 1.7"></path></svg>
              </span>
              <span className="link-details">
                <span className="title">Partner With Us</span>
                <span className="subtitle">Join our partner program</span>
              </span>
              <span className="arrow-icon">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" class="shrink-0 text-ring transition group-hover:text-white group-hover:translate-x-0.5"><path d="M3 8 H12.5 M9 4.5 L12.5 8 L9 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
