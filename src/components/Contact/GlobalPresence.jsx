import React from 'react';
import './GlobalPresence.css';
import GlobalPresenceCardItem from './GlobalPresenceCardItem';
import globalPresence1 from '../../assets/global-presence-1.webp';
import globalPresence2 from '../../assets/global-presence-2.webp';
import globalPresence3 from '../../assets/global-presence-3.webp';

const GlobalPresence = () => {
  return (
    <section className="global-presence" aria-label='our global presence'>
      <div className="container">

        <div className='hero-header'>
          <span className="section-tag">Our global presence</span>

          <h2 className="section-heading">
            Driving global growth through innovation.
          </h2>
        </div>

        <ul className="global-presence-list">
          <GlobalPresenceCardItem
            img={globalPresence1}
            alt={"dubai"}
            text={"Dubai, United Arab Emirates"}
          />
          <GlobalPresenceCardItem
            img={globalPresence2}
            alt={"Saudi Arabia"}
            text={"Al Khobar, Saudi Arabia"}
          />
          <GlobalPresenceCardItem
            img={globalPresence3}
            alt={"Lahore Pakistan"}
            text={"Lahore, Pakistan"}
          />
        </ul>

      </div>
    </section>
  )
}

export default GlobalPresence