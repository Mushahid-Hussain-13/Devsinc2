import React from 'react';
import './RetailManagementProblem.css';


const problems = [
  {
    label: "Pain",
    title: "The website says in stock. The shelf disagrees.",
    description: "Stock is one number in one system. A till sale and an online order draw from the same position, in real time.",
  },
  {
    label: "Pain",
    title: "Loyalty costs extra, so nobody runs it.",
    description: "Points, coupons, and customer history are part of the till, not a subscription on top of a subscription.",
  },
  {
    label: "Pain",
    title: "Setup takes weeks and a technician on site.",
    description: "Cloud-first. Create an account, import the catalogue, print a receipt the same day.",
  },
  {
    label: "Pain",
    title: "The internet drops and the counter stops.",
    description: "The desktop build keeps ringing up sales offline and reconciles automatically when the line returns.",
  },
  {
    label: "Pain",
    title: "Every branch reports differently.",
    description: "Multi-outlet is native: separate locations and brands, one consolidated view of sales, stock, and staff.",
  },
  {
    label: "Pain",
    title: "Enterprise POS is priced for enterprises.",
    description: "Quarterly PKR pricing with no setup fee, sized for a single counter and still there at fifty.",
  },
]

const RetailManagementProblem = () => {
  return (
    <section className="retail-management-problem" aria-label='retail management problem'>
      <div className="container">

        <div className="wrapper-1">
          <div className="content content-left">
            <span className="section-tag">The problem</span>
            <h2 className="section-heading">POS built before ecommerce.</h2>
          </div>

          <div className="content content-right">
            <p className="section-desc">
              The systems on most counters today were designed before ecommerce mattered. Online came later, so it was attached with a nightly export. Loyalty came later, so it was sold as a plugin. Multi-location came later, so it became a spreadsheet somebody reconciles on Monday.
            </p>

            <div className="elem">
              <span className="section-tag">Bilto's position</span>
              <h3 className="title">
                Build the counter for a merchant who already sells in more than one place. Shopify, stock across locations, and the customer record all live in the same system, so there is nothing to reconcile at the end of the day.
              </h3>
            </div>
          </div>
        </div>

        <div className="wrapper-2">
          {problems.map((item, index) => (
            <li
              key={index}
              className="item"
            >
              <span className="label">{item.label}</span>
              <h3 className="title">{item.title}</h3>
              <span className="line"></span>
              <p className="desc">{item.description}</p>
            </li>
          ))}
        </div>

      </div>
    </section>
  )
}

export default RetailManagementProblem