import React from 'react';
import './CompanyStory.css';

const data = [
  {
    date: "2008",
    label: "Founding · Lahore",
    title: "Where it started",
    desc: "Devsinc opens its doors in Lahore, Punjab, now the company's Global Delivery Center and head office."
  },
  {
    date: "2022",
    label: "Growth · Scaling delivery",
    title: "Second delivery center",
    desc: "An Islamabad delivery center opens to support growing client demand, expanding technical capacity across Pakistan."
  },
  {
    date: "2023",
    label: "Global · Regional offices",
    title: "Going international",
    desc: "Devsinc establishes regional offices in the United States, United Arab Emirates, United Kingdom, and Saudi Arabia, supporting clients in 23+ countries."
  },
  {
    date: "2025",
    label: "Expansion · Scaling without limits",
    title: "1,200+ experts, one delivery model",
    desc: "A global team spanning digital transformation, business applications, emerging tech, cloud, and gaming, serving clients across five continents."
  },
]

const CompanyStory = () => {
  return (
    <section className="company-story" aria-label='company story'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Our Story</span>
          <h2 className="section-heading">A decade building, not just growing</h2>
        </div>

        <ul className="list">
          {data.map((item, index) => (
            <li className="item" key={index}>
              <span className="date">{item.date}</span>
              <div className="straight-line-ball">
                <div className="ball">
                  <div className="outer-ball"></div>
                  <div className="inner-ball"></div>
                </div>
                <div className="line"></div>
              </div>
              <span className="label">{item.label}</span>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default CompanyStory