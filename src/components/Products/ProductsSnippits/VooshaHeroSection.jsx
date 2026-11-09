import React from 'react'
import './VooshaHeroSection.css';
import Navbar from '../../Navbar.jsx';
import { Link } from 'react-router-dom';

const VooshaHeroSection = ({ heroImg, subtitle1, subtitle2, title, desc, btnText1, btnText2 }) => {
  return (
    <section
      className="voosha-service-section"
      aria-label='service section'
      style={{ "--hero-image": `url(${heroImg})` }}
    >
      <Navbar />

      <div className="voosha-service-section-container">
        <div className="subtitle-wrapper">
          <span className='subtitle'>{subtitle1}</span>
          <span className='subtitle'>{subtitle2}</span>
        </div>
        <h1 className="title">{title}</h1>
        <p className='desc'>{desc}</p>

        <div className="btn-wrapper">
          <Link to="/" className='btn-primary'>
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-dc5y4d4d=""><path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dc5y4d4d=""></path></svg>
            </span>

            {btnText1}
          </Link>
          <Link to="/" className='btn-secondary'>
            {btnText2}
          </Link>
        </div>
      </div>

      <div className="work-details">
        <div className="elem">
          <h3>Tracked</h3>
          <p>Every click and sale tied to a creator</p>
        </div>
        <div className="elem">
          <h3>Payments</h3>
          <p>Secured and released only on approval</p>
        </div>
        <div className="elem">
          <h3>Approvals</h3>
          <p>Content reviewed before it goes live</p>
        </div>
        <div className="elem">
          <h3>Free</h3>
          <p>Full access during beta, both sides</p>
        </div>
      </div>
      
      <div className="bg-overlay"></div>
    </section>
  )
}

export default VooshaHeroSection