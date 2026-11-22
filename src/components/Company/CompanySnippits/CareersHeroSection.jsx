import React from 'react'
import Navbar from '../../Navbar'
import { Link } from 'react-router-dom'
import './CareersHeroSection.css';

const CareersHeroSection = () => {
  return (
    <section className='career-hero-section' aria-label='career hero section'>
      <Navbar />

      <div className="career-container">

        <div className="hero-header">
          <span className="section-tag">Careers</span>
          <h2 className="title">Build what's next with 1,200+ innovative minds.</h2>
          <p className="section-desc">Join a global team turning ambitious ideas into shipped products for startups, enterprises, and public sector clients worldwide.</p>

          <div className="btn-wrapper">
            <Link to="#" className='btn'>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-p2ag22c2=""><path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="#051824" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-p2ag22c2=""></path></svg>
              </span>
              <span className="text">Apply at Devsinc</span>
            </Link>
            <Link to="#" className='btn'>
              <span className="icon">
                <svg width="8" height="9" viewBox="0 0 14 16" aria-hidden="true" data-astro-cid-p2ag22c2=""><path d="M1 1.6v12.8a1 1 0 0 0 1.53.85l10.1-6.4a1 1 0 0 0 0-1.7L2.53.75A1 1 0 0 0 1 1.6Z" fill="#051824" data-astro-cid-p2ag22c2=""></path></svg>
              </span>
              <span className="text">Watch our story</span>
            </Link>
          </div>
        </div>

        <div className="experience">
          <div className="elem">
            <h3 className="haah">1,200+</h3>
            <p className="desc">Global experts</p>
          </div>
          <div className="elem">
            <h3 className="haah">50+</h3>
            <p className="desc">Technologies</p>
          </div>
          <div className="elem">
            <h3 className="haah">5</h3>
            <p className="desc">Continents</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CareersHeroSection