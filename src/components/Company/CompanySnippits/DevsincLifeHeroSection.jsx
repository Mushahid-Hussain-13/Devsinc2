import React from 'react'
import Navbar from '../../Navbar'
import { Link } from 'react-router-dom'
import './DevsincLifeHeroSection.css';

const DevsincLifeHeroSection = () => {
  return (
    <section className='devsinc-life-hero-section' aria-label='career hero section'>
      <Navbar />

      <div className="devsinc-life-container">

        <div className="hero-header">
          <span className="section-tag">Life at Devsinc</span>
          <h2 className="title">Where everyday becomes extraordinary.</h2>
          <p className="section-desc">Get a glimpse into the everyday at Devsinc, from the people and spaces we share to the events, experiences, and moments that bring our culture to life.</p>

          <div className="btn-wrapper">
            <Link to="#" className='btn'>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-77e6fhvx=""><path d="M3 8h10M9 4l4 4-4 4" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-77e6fhvx=""></path></svg>
              </span>
              <span className="text">Explore Our Event Highlights</span>
            </Link>
            <Link to="#" className='btn'>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-p2ag22c2=""><path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="#051824" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-p2ag22c2=""></path></svg>
              </span>
              <span className="text">Explore Open Roles</span>
            </Link>
          </div>
        </div>

        <div className="experience">
          <div className="elem">
            <h3 className="haah">40+</h3>
            <p className="desc">Events hosted a year</p>
          </div>
          <div className="elem">
            <h3 className="haah">20,000+</h3>
            <p className="desc">Cumulative attendance</p>
          </div>
          <div className="elem">
            <h3 className="haah">6</h3>
            <p className="desc">Onsite amenities</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DevsincLifeHeroSection