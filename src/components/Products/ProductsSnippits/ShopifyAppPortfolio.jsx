import React from 'react';
import './ShopifyAppPortfolio.css';
import { Link } from 'react-router-dom';


const portfolioData = [
  {
    subtitle: "Checkout",
    title: "Checkout Catalyst",
    desc: "Extend and customise Shopify checkout without breaking compliance.",
    lastSpan: "Visit Checkout Catalyst →",
  },
  {
    subtitle: "Payments",
    title: "UnumPay",
    desc: "Payment orchestration across gateways and regions.",
    lastSpan: "Visit UnumPay →",
  },
  {
    subtitle: "Retail",
    title: "Simplified Store Locator",
    desc: "Send online traffic to the right physical store.",
    lastSpan: "Install Simplified Store Locator →",
  },
  {
    subtitle: "Apparel",
    title: "Size Simplicity",
    desc: "Cut apparel returns with size guidance that fits your catalogue.",
    lastSpan: "Install Size Simplicity →",
  },
  {
    subtitle: "Analytics",
    title: "Unified Tracking",
    desc: "One tracking layer across GA4, ads, and server-side events.",
    lastSpan: "Install Unified Tracking →",
  },
  {
    subtitle: "Merchandising",
    title: "Metafield Master",
    desc: "Manage metafields at catalogue scale without a developer.",
    lastSpan: "Install Metafield Master →",
  },
  {
    subtitle: "Operations",
    title: "IVR OrderAlert",
    desc: "Voice and IVR order confirmation for high-COD markets.",
    lastSpan: "Install IVR OrderAlert →",
  },
  {
    subtitle: "Growth",
    title: "Viral Throb",
    desc: "Referral and social growth loops built for Shopify.",
    lastSpan: "Visit Viral Throb →",
  },
  {
    subtitle: "Integration",
    title: "Covalent",
    desc: "Connect Shopify to ERP, billing, and back-office systems.",
    lastSpan: "Install Covalent →",
  },
  {
    subtitle: "Content",
    title: "Flexum CMS",
    desc: "Headless CMS for Shopify powered mobile apps, websites, and kiosks.",
    lastSpan: "Visit Flexum CMS →",
  },
  {
    subtitle: "Fulfilment",
    title: "Check & Ship",
    desc: "Shipping rules, rate logic, and fulfilment validation.",
    lastSpan: "Install Check & Ship →",
  },
  {
    subtitle: "Returns",
    title: "Unified Order Return",
    desc: "Returns and exchanges that do not cost you the customer.",
    lastSpan: "Install Unified Order Return →",
  },
]

const ShopifyAppPortfolio = () => {
  return (
    <section className="shopify-app-portfolio" aria-label='shopify app portfolio'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">The portfolio</span>
          <h2 className="section-heading">The twelve we kept.</h2>
          <p className="section-desc">Each of these came out of a real merchant problem and earned its place on the App Store. Checkout, payments, returns, tracking, content, and logistics.</p>
        </div>

        <ul className="list">
          {portfolioData.map((item, index) => (
            <li className="item" key={index}>
              <span className="subtitle">{item.subtitle}</span>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
              <Link to={"#"} className='link'>{item.lastSpan}</Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default ShopifyAppPortfolio