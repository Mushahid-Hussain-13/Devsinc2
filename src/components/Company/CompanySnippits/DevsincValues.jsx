import React from 'react';
import './DevsincValues.css';
import { ArrowDownToLine, Heart, Lightbulb, Scale, ShieldCheck, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';


const data = [
  {
    icon: <Heart size={20} strokeWidth={2}/>,
    title: "Customer Centricity",
    desc: "We take responsibility for how our work is experienced, not just that it is completed, by delivering value for both internal and external customers.",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={2}/>,
    title: "Ownership",
    desc: "We take full responsibility for outcomes, not just tasks, and remain accountable until results are delivered.",
  },
  {
    icon: <Scale size={20} strokeWidth={2}/>,
    title: "Integrity",
    desc: "We act with honesty, transparency, and integrity, especially when situations are complex, challenging, or under pressure.",
  },
  {
    icon: <Lightbulb size={20} strokeWidth={2}/>,
    title: "Innovation",
    desc: "We continuously seek better ways to solve problems, improve outcomes, and prepare for the future by thinking beyond execution.",
  },
  {
    icon: <UsersRound size={20} strokeWidth={2}/>,
    title: "Inclusivity by Design",
    desc: "We intentionally build inclusive teams and practices so everyone feels respected, supported, heard, and empowered to thrive.",
  },
]

const DevsincValues = () => {
  return (
    <section className="devsinc-values" aria-label='devsinc values'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Our values</span>
          <h2 className="section-heading">The standards behind every decision we make</h2>
          <p className="section-desc">Five principles that guide every partnership, every decision, and every interaction across Devsinc.</p>
        </div>

        <div className="wrapper-1">
          {data.map((item, index) => (
            <div className="item" key={index}>
              <span className="icon">{item.icon}</span>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="wrapper-2">
          <div className="content">
            <span className="section-tag text-teal">Code of conduct</span>
            <h2 className="section-heading">Our Code of Business Principles</h2>
            <p className="section-desc">
              Devsinc prioritises legal and ethical conduct, holding everyone to the same standard of honesty, fairness, and accountability.
            </p>
          </div>

          <Link to="#" className='btn'>
            <span className="icon"><ArrowDownToLine size={16}/></span>
            <span className="text">Access our Code</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default DevsincValues