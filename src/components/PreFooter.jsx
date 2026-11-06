import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./PreFooter.css";
import SecondaryBtn from "../snippits/SecondaryBtn";

const PreFooter = ({ subtitle, title, description, queryList = [] }) => {
  const [phone, setPhone] = useState("");

  return (
    <section className="prefooter" aria-label="pre footer">
      <div className="container">
        <div className="content-left">
          <span className="section-tag">{subtitle}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-desc">{description}</p>

          <ul className="query-list">
            {queryList.map((text, index) => (
              <li className="item" key={index}>
                <span className="icon">✓</span>
                <span className="text">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-right">
          <form className="form">
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="first name">First name</label>
                <input type="text" placeholder="Enter first name" />
              </div>
              <div className="input-field">
                <label htmlFor="last name">Last name</label>
                <input type="text" placeholder="Enter last name" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="company">Company</label>
                <input type="text" placeholder="Company" />
              </div>
              <div className="input-field">
                <label htmlFor="first name">What brings you here today?</label>
                <select className="chooses">
                  <option value={"strategy"}>Need a strategy or roadmap</option>
                  <option value={"techincal"}>Need technical due diligence</option>
                  <option value={"readiness"}>Need an AI readiness assessments</option>
                  <option value={"advisory"}>Need ongoing advisory</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="email">Work email</label>
                <input type="email" placeholder="you@company.com" />
              </div>
              <div className="input-field">
                <label htmlFor="phone">Phone number</label>
                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  className="phone-field"
                  inputProps={{ name: "phoneNo" }}
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="textarea">
                The decision you're trying to make
              </label>
              <textarea
                className="textarea"
                placeholder="Tell us the outcome you need and what is in the way today"
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
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
