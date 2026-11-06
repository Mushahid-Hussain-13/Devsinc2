import React from 'react';
import img from '../../../assets/shopify-ecommerce-hero-bg.webp';
import shopifyPlus from '../../../assets/shopifyPlus.svg';
import './ShopifyHeroSection.css';
import Navbar from '../../Navbar.jsx';
import { Link } from 'react-router-dom';

const ShopifyHeroSection = () => {
    return (
    <section
      className="shopify-service-section"
      aria-label='service section'
      style={{ "--hero-image": `url(${img})` }}
    >
      <Navbar />

      <div className="shopify-service-section-container">
        <span className='subtitle'>Shopify Plus Partner | Headless & Custom Commerce</span>

        <h1 className="title">Shopify Development Services for Growing & Enterprise Brands</h1>

        <p className='desc'>
          Devsinc is a Shopify development company specializing in custom Shopify and Shopify Plus storefronts, redesigns, migrations, ERP and CRM integrations, and ongoing optimization for ecommerce brands in the US and around the world that can't afford slow checkouts or peak-season disruptions.
        </p>

        <div className="btn-wrapper">
          <Link to="/" className='btn-primary'>
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-dc5y4d4d=""><path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dc5y4d4d=""></path></svg>
            </span>

            Request a Free Store Audit
          </Link>
          <Link to="/" className='btn-secondary'>
            See Case Studies
          </Link>
        </div>
      </div>

      <div className="work-details">
        <div className="elem">
          <h3>10 yrs</h3>
          <p>Building on Shopify</p>
        </div>
        <div className="elem">
          <h3>350+</h3>
          <p>Stores delivered</p>
        </div>
        <div className="elem">
          <h3>100K</h3>
          <p>Peak monthly transactions</p>
        </div>
        <div className="elem">
          <h3>14</h3>
          <p>Apps on the Shopify App Store</p>
        </div>
        <div className="elem elem-img">
          <img src={shopifyPlus} alt='image' width={150} height={150} className='image' />
        </div>
      </div>

      <div className="bg-overlay"></div>
    </section>
  )
}

export default ShopifyHeroSection