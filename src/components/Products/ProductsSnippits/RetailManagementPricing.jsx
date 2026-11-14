import React from 'react';
import './RetailManagementPricing.css';
import PrimaryBtn from '../../../snippits/PrimaryBtn';

const RetailManagementPricing = () => {
  return (
    <section className="retail-management-pricing" id='pricing'>
      <div className="container">
        <span className="section-tag text-teal">Pricing</span>
        <h2 className="section-heading">Plans built around how you sell.</h2>
        <p className="section-desc">Tell us about your stores and we'll get back to you with a plan that fits.</p>
        <PrimaryBtn url="/contact" text="Get in touch for pricing"/>
      </div>
    </section>
  )
}

export default RetailManagementPricing