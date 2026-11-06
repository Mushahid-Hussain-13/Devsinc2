import React from 'react';
import './ShopifyAppEngagement.css';
import { Link } from 'react-router-dom';

const ShopifyAppEngagement = () => {
  return (
    <section className="shopify-app-engagement" aria-label='shopify-app-engagement'>
      <div className="container">

        <div className="content-left">
          <span className="section-tag">A different kind of engagement</span>
          <h2 className="section-heading">Some apps were built to be sold.</h2>
          <p className="section-desc">Of the hundred-plus apps we have built, most are no longer ours. Some were commissioned and handed over, some were sold as products. If you have an internal tool that other merchants would pay for, or you want to build an App Store product as an asset rather than a feature, that is a path we have taken repeatedly and can take with you.</p>

          <Link to="#" className='hero-btn'>Talk to us about productising an app</Link>
        </div>

        <div className="content-right">
          <div className="elem">
            <h3>12</h3>
            <p>kept as products, live on the App Store</p>
          </div>
          <div className="elem">
            <h3>90+</h3>
            <p>sold, or transferred to the companies that commissioned them</p>
          </div>
          <div className="elem dark-elem">
            <h3>100%</h3>
            <p>of client apps owned by the client, written into the contract</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ShopifyAppEngagement