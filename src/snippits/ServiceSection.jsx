import React from 'react';
import './ServiceSection.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ServiceSection = ({
  image,
  subtitle,
  title,
  desc,
  primaryBtn,
  secondaryBtn = null
}) => {
  return (
    <section
      className="service-section"
      aria-label='service section'
      style={{ "--hero-image": `url(${image})` }}
    >
      <Navbar />

      <div className="service-section-container">
        {subtitle && <span className='subtitle text-teal'>{subtitle}</span>}

        <h1 className="title">{title}</h1>

        {desc && <p className='desc'>{desc}</p>}

        <div className="btn-wrapper">
          {primaryBtn && (
            <Link to={primaryBtn.to} className='btn-primary'>
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-dc5y4d4d=""><path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dc5y4d4d=""></path></svg>
              </span>

              {primaryBtn.text}
            </Link>
          )}
          {secondaryBtn && (
            <Link to={secondaryBtn.to} className='btn-secondary'>
              {secondaryBtn.text}
            </Link>
          )}
        </div>
      </div>

      <div className="bg-overlay"></div>
    </section>
  )
}

export default ServiceSection