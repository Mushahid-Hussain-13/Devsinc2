import React from 'react';
import './WhyPulseNotify.css';
import { Bell, Box, ShoppingCart, Tag } from 'lucide-react';

const WhyPulseNotify = () => {
  return (
  <section class="why-pulse-notify">
    <div className="container">

      <div className="content-left">
        <div className="notification">
          <span className="bell-icon">
            <Bell size={16} strokeWidth={2.5}/>
          </span>
          <div>
            <span className="title">1 click</span>
            <span className="para">shopper opt-in, no email or phone</span>
          </div>
        </div>

        <div className="elem">
          <span className="bell-icon">
            <Bell size={14}/>
          </span>
          <span className="para">PulseNotify</span>
        </div>

        <div className="progress-wrapper">
          <div className="progress-elem">
            <span className="icon">
              <Box size={18}/>
            </span>
            <div className="child">
              <h3>Back in Stock Alerts</h3>
              <div className="progress-bar"></div>
            </div>
            <span className="circle"></span>
          </div>
          <div className="progress-elem">
            <span className="icon">
              <Tag size={18}/>
            </span>
            <div className="child">
              <h3>Price Drops</h3>
              <div className="progress-bar"></div>
            </div>
            <span className="circle"></span>
          </div>
          <div className="progress-elem">
            <span className="icon">
              <ShoppingCart size={18}/>
            </span>
            <div className="child">
              <h3>Abandoned Cart Push Notifications</h3>
              <div className="progress-bar"></div>
            </div>
            <span className="circle"></span>
          </div>
        </div>
      </div>
      <div className="content-right">
        <span className="section-tag">Why PulseNotify</span>
        <h2 className="section-heading">The Shopper Left. The Opportunity Didn't.</h2>
        <span className="line" aria-hidden='true'></span>
        <h3 className='title'>The sale isn't gone. The timing just isn't right.</h3>
        <p className="section-desc">
          A shopper finds exactly what they're looking for, then discovers it's out of stock. Another fills a cart and walks away. Someone else loves the product but is waiting for the price to drop.
          <br />
          <br />
          The problem? Once shoppers leave, you often have no direct way to bring them back when they're ready to buy. PulseNotify keeps shopper intent from going cold.
        </p>
      </div>

      <div className="bg-wrapper-color"></div>
    </div>
  </section>
  )
}

export default WhyPulseNotify