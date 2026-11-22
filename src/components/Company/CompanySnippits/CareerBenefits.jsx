import React from 'react';
import './CareerBenefits.css';

const benefitData = [
  {
    title: "Health & Wellness",
    listItem: [
      "Outpatient (OPD) & inpatient (IPD) coverage",
      "Wellness discounts",
      "Gym & fitness allowance",
      "Paid parental leave",
    ]
  },
  {
    title: "Growth & Learning",
    listItem: [
      "Certification reimbursement",
      "Internal mobility program",
      "Mentorship matching",
      "Conference sponsorship",
    ]
  },
  {
    title: "Everyday Perks",
    listItem: [
      "Fuel & commute allowance",
      "Hybrid work",
      "Workations",
      "Equity",
    ]
  },
]

const CareerBenefits = () => {
  return (
    <section className="career-benefits" aria-label='career benefits'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Benefits</span>
          <h2 className="section-heading">Where great careers take shape</h2>
        </div>

        <ul className="list">
          {benefitData.map((item, index) => (
            <li className="item" key={index}>
              <h3 className="title">{item.title}</h3>
              <ul className="query-list">
                {item.listItem.map((text, index) => (
                  <li className="list-item" key={index}>
                    <span className="icon">✓</span>
                    <span className="text">{text}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default CareerBenefits