import React, { useState } from 'react';
import './PulseNotifyHidden.css';
import { Link } from 'react-router-dom';


const data = [
  { title: "Device and activity data", desc: "Customer device and activity data, such as IP address, browser, and operating system." },
  { title: "Store owner details", desc: "Your own contact details as the store owner." },
  { title: "Products and inventory", desc: "Your products and inventory." },
  { title: "Recent orders", desc: "Your orders from the last 60 days.", className: "wide" },
  { title: "Store theme", desc: "Your online store theme.", className: "wide" },
];


const PulseNotifyHidden = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pulse-notify-hidden" aria-label='pulse notify hidden'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Nothing Hidden</span>
          <h2 className="section-heading">What PulseNotify Collects, and What It Doesn't</h2>
          <p className="section-desc">Your shoppers are never asked for an email address or phone number. To work on your store, the app does request access to a few things. The full details are in our <Link to={"#"}>privacy policy.</Link></p>
        </div>

        <div className="wrapper">
          {data.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className={`elem ${item.className || ''} ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <span className="number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className='title'>{item.title}</h3>
                <p className="section-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PulseNotifyHidden