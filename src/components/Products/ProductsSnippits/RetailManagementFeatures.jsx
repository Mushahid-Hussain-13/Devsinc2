import React from 'react';
import './RetailManagementFeatures.css';

const features = [
  {
    title: "Cloud-first POS",
    desc: "Real-time sync across every till and outlet. Runs on web or as a native desktop app, no hardware lock-in.",
  },
  {
    title: "Native Shopify sync",
    desc: "Products, prices, stock, and orders move both ways continuously. Not a nightly CSV.",
  },
  {
    title: "Loyalty and coupons",
    desc: "Points redemption and coupon validation built into the checkout flow, with zero third-party dependencies.",
  },
  {
    title: "Thermal receipts and PDF",
    desc: "One-click printing for 58mm and 80mm printers, plus instant PDF.",
  },
  {
    title: "Offline-ready desktop app",
    desc: "Windows and macOS installers with offline mode. Keep selling without internet, sync on reconnect.",
  },
  {
    title: "Built for throughput",
    desc: "Full keyboard operation, numeric pad for cash, barcode scanner ready, hold and recall orders at the counter.",
  }
]

const RetailManagementFeatures = () => {
  return (
    <section className="retail-management-features" aria-label='retail management features'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Key features</span>
          <h2 className="section-heading">Everything a modern counter needs, on day one.</h2>
        </div>

        <ul className="list">
          {features.map((item, index) => (
            <li className="item" key={index}>
              <span className="number">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="title">{item.title}</h3>
              <p className="section-desc">{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default RetailManagementFeatures