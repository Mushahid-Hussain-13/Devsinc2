import React, { useState } from 'react';
import './CommerceShift.css';
import { Check, Plug, DatabaseSearch, Timer, MoveRight, MoveLeft } from 'lucide-react';

const CommerceShift = () => {
  const [activeTab, setActiveTab] = useState('template-era');

  return (
    <section className="commerce-shift" aria-label='shift in global ecommerece'>
      <div className="container">

        <div className="content-left">
          <span className="section-tag">The shift in global ecommerce</span>
          <h2 className="section-heading">Beyond Basic Templates: Building AI‑Ready Shopify Stores</h2>
          <p className="section-desc">Shoppers discover products through Google, marketplaces and AI shopping assistants, and expect a smooth experience from discovery to checkout. But outdated product details, disconnected inventory and slow checkouts can cost sales. Devsinc builds Shopify and Shopify Plus storefronts with structured product catalogs, reliable shopping feeds and ERP/CRM integrations. We recommend a customized Shopify theme or headless build based on business needs, then continue improving storefront performance after launch.</p>
        </div>

        <div className="content-right">
          <div className={`card template-era ${activeTab === 'template-era' ? 'show-mobile' : 'hide-mobile'}`}>
            <div className="card-header">
              <h3 className="card-label">The Template-Era Store</h3>

              <button
                className='mobile-arrow-btn'
                aria-label='Next Card'
                onClick={() => setActiveTab("ai-commerce")}
              >
                <span className="teer"><MoveRight /></span>
              </button>
            </div>
            <ul className="list">
              <li className="item">
                <span className="icon"><Plug size={18}/></span>
                <span className="text">Too many apps with no clear integration plan.</span>
              </li>
              <li className="item">
                <span className="icon"><DatabaseSearch size={18}/></span>
                <span className="text">Product details and inventory out of sync.</span>
              </li>
              <li className="item">
                <span className="icon"><Timer size={18}/></span>
                <span className="text">Slow pages and a frustrating checkout.</span>
              </li>
            </ul>
          </div>

          <div className="arrow">
            <span className="teer"><MoveRight /></span>
          </div>

          <div className={`card ai-commerce ${activeTab === 'ai-commerce' ? 'show-mobile' : 'hide-mobile'}`}>
            <div className="card-header">
              <h3 className="card-label">AI-Ready Commerce</h3>

              <button
                className='mobile-arrow-btn'
                aria-label='Previous Card'
                onClick={() => setActiveTab("template-era")}
              >
                <span className="teer"><MoveLeft /></span>
              </button>
            </div>
            <ul className="list">
              <li className="item">
                <span className="icon"><Check size={18} color='#7ebc0b'/></span>
                <span className="text">Structured product catalogs and accurate feeds</span>
              </li>
              <li className="item">
                <span className="icon"><Check size={18} color='#7ebc0b'/></span>
                <span className="text">Connected ERP/CRM, inventory and B2B workflows.</span>
              </li>
              <li className="item">
                <span className="icon"><Check size={18}  color='#7ebc0b'/></span>
                <span className="text">Performance and checkout continuously improved.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CommerceShift