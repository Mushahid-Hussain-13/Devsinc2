import React from 'react'
import './SalesforceCapabilities.css';
import { Cloud, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import capability1 from '../../../assets/capability1.webp';
import capability2 from '../../../assets/capability2.webp';
import capability3 from '../../../assets/capability3.webp';
import capability4 from '../../../assets/capability4.webp';

const SalesforceCapabilities = () => {
  return (
    <section className="salesforce-capabilities" aria-label='salesforce capabilities'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-heading">The Salesforce Capabilities We Deliver</h2>
          <p className="section-desc">
            As certified Salesforce partners, we implement, integrate, and optimize the Salesforce platform, engineered around your revenue process, adopted by your teams.
          </p>
          <div className="btn-wrapper">
            <button className="sales-btn sales-btn1">
              <span className="icon"><Cloud size={16}/></span>
              <span className="text">Core Clouds</span>
            </button>
            <button className="sales-btn sales-btn2">
              <span className="icon"><Zap size={16}/></span>
              <span className="text">Platform & AI</span>
            </button>
          </div>
        </div>

        <ul className="list">
          <li className="item">
            <span className="item-img">
              <img src={capability1} alt="capability" width={30} height={30} />
            </span>
            <h3 className="item-title">Sales Cloud</h3>
            <p className="item-desc">Sales Cloud, now also branded Agentforce Sales, configured around your sales motion with Einstein AI built in from day one.</p>

            <Link to={"#"} className='item-link'>
              <span className="text">Learn more</span>
              <span className="icon"><ArrowUpRight size={16} /></span>
            </Link>
          </li>
          <li className="item">
            <span className="item-img">
              <img src={capability2} alt="capability" width={30} height={30} />
            </span>
            <h3 className="item-title">Service Cloud</h3>
            <p className="item-desc">Service Cloud, now also branded Agentforce Service, unifies every channel into one workspace with Einstein and Agentforce built in.</p>

            <Link to={"#"} className='item-link'>
              <span className="text">Learn more</span>
              <span className="icon"><ArrowUpRight size={16} /></span>
            </Link>
          </li>
          <li className="item">
            <span className="item-img">
              <img src={capability3} alt="capability" width={30} height={30} />
            </span>
            <h3 className="item-title">Marketing Cloud</h3>
            <p className="item-desc">Marketing Cloud, now also branded Agentforce Marketing, unifies every channel into one journey with Einstein driven personalization built in.</p>

            <Link to={"#"} className='item-link'>
              <span className="text">Learn more</span>
              <span className="icon"><ArrowUpRight size={16} /></span>
            </Link>
          </li>
          <li className="item">
            <span className="item-img">
              <img src={capability4} alt="capability" width={40} height={40} />
            </span>
            <h3 className="item-title">Experience Cloud</h3>
            <p className="item-desc">Experience Cloud builds branded, self service communities that reduce support load and deepen engagement.</p>

            <Link to={"#"} className='item-link'>
              <span className="text">Learn more</span>
              <span className="icon"><ArrowUpRight size={16} /></span>
            </Link>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default SalesforceCapabilities