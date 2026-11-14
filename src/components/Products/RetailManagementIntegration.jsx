import React from 'react';
import './RetailManagementIntegration.css';

const integrationData = [
  {
    title: "Shopify",
    label: "NATIVE",
    description: "Two-way sync of catalogue, inventory, orders, and customers. The omnichannel journeys above run on it."
  },
  {
    title: "Card terminals",
    label: "PAYMENTS",
    description: "Cash, card, and split tenders on one transaction, with cashier session reconciliation at close."
  },
  {
    title: "UnumPay",
    label: "DEVSINC",
    description: "Multi-gateway payment orchestration from the same team, for merchants who need more than one processor."
  },
  {
    title: "Thermal printers",
    label: "HARDWARE",
    description: "58mm and 80mm receipt printers, cash drawers, and USB barcode scanners, no proprietary hardware required."
  },
  {
    title: "Accounting exports",
    label: "REPORTING",
    description: "Sales, tax, and inventory data out as Excel, CSV, or PDF for whatever your accountant already uses."
  },
  {
    title: "Custom APIs",
    label: "ENTERPRISE",
    description: "ERP, marketplace, or delivery-partner connections built by the Devsinc team on the Enterprise plan."
  },
]

const RetailManagementIntegration = () => {
  return (
    <section className="retail-management-integration" aria-label='retail management integration'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Integrations</span>
          <h2 className="section-heading">Connects to the rest of the counter, and the rest of the stack.</h2>
        </div>

        <ul className="list">
          {integrationData.map((item, index) => (
            <li className="item" key={index}>
              <div>
                <h3 className="title">{item.title}</h3>
                <span className="tag">{item.label}</span>
              </div>
              <p className="section-desc">{item.description}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default RetailManagementIntegration