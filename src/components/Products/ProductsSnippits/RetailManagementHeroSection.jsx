import React from 'react'
import './RetailManagementHeroSection.css';
import Navbar from '../../Navbar.jsx';
import { Link } from 'react-router-dom';

const RetailManagementHeroSection = ({ heroImg, subtitle1, subtitle2, title, desc, btnText1, btnText2 }) => {
  return (
    <section
      className="retail-management-service-section"
      aria-label='service section'
      style={{ "--hero-image": `url(${heroImg})` }}
    >
      <Navbar />

      <div className="retail-management-service-section-container">
        <div className="subtitle-wrapper">
          <span className='subtitle'>{subtitle1}</span>
          <span className='subtitle'>{subtitle2}</span>
        </div>
        <h1 className="title">{title}</h1>
        <p className='desc'>{desc}</p>

        <div className="btn-wrapper">
          <Link to="/contact" className='btn-primary'>
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-dc5y4d4d=""><path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dc5y4d4d=""></path></svg>
            </span>

            {btnText1}
          </Link>
          <a href="#pricing" className='btn-secondary'>
            {btnText2}
          </a>
        </div>
      </div>

      <div className="work-details">
        <div className="elem">
          <h3>Shopify-native</h3>
          <p>Catalogue, stock, and orders in one loop</p>
        </div>
        <div className="elem">
          <h3>Omnichannel</h3>
          <p>One stock position serves every channel</p>
        </div>
        <div className="elem">
          <h3>Loyalty in</h3>
          <p>Points and coupons at the till, no add-on</p>
        </div>
        <div className="elem">
          <h3>Offline</h3>
          <p>Keeps selling when the line drops</p>
        </div>
      </div>
      
      <div className="bg-overlay"></div>
    </section>
  )
}

export default RetailManagementHeroSection