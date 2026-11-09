import React from 'react';
import { Link } from 'react-router-dom';
import './VooshaTwoPaths.css';

const VooshaTwoPaths = () => {
  return (
    <section className="voosha-two-paths" aria-label='voosha-two-paths'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Two sides</span>
          <h2 className="section-heading">Pick your side and start where you are.</h2>
        </div>

        <div className="wrapper">
          <div className="content">
            <span className="section-tag">For brands</span>
            <h3 className="title">See which creator drove real revenue.</h3>
            <p className="section-desc">Post a campaign, pick creators, approve content before it publishes, and watch which creator drove real revenue. Set your budget and deal type: commission, fixed, barter, or hybrid.</p>
            <Link to={"#"} className='btn'>
              Voosha for brands →
            </Link>
          </div>
          <div className="content selected">
            <span className="section-tag">For creators</span>
            <h3 className="title">Get paid for what you actually sell.</h3>
            <p className="section-desc">Browse real briefs with real budgets, pitch your own rate, and get paid through secure digital payments or bank transfer. Build a reputation and conversion record that lets you charge more.</p>
            <Link to={"#"} className='btn'>
              Voosha for creators →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VooshaTwoPaths