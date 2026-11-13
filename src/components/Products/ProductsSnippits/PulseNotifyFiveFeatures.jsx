import React, { useState } from 'react';
import './PulseNotifyFiveFeatures.css';
import { Check, Plus } from 'lucide-react';

const FEATURES = [
  {
    title: 'Back in Stock Alerts',
    desc: 'A sold-out product is demand you’ve already earned. Shoppers opt in to watch an item, and Shopify back-in-stock alerts tell them the moment it returns, so they come back to buy it instead of drifting to a competitor.',
  },
  {
    title: 'Price Drops',
    desc: 'A markdown nobody sees moves no inventory. When you cut a price, shoppers watching that item are told automatically, so your discount reaches the people most likely to act on it, with no email blast to build.',
  },
  {
    title: 'Abandoned Cart Push Notifications',
    desc: 'A full cart is the warmest lead in your store. A timely abandoned cart push notification brings the shopper back to finish checking out, picking up the sale right where it stalled, with no email address needed.',
  },
  {
    title: 'Order Updates',
    desc: '“Where is my order?” is a support ticket you wrote yourself. Confirmation, shipping, and cancellation alerts keep customers informed at every step, so fewer of them have to ask, and all three are included on the free plan.',
  },
  {
    title: 'Campaign Broadcasts',
    desc: 'Sales and launches shouldn’t depend on an inbox. Send one-off pushes to your subscribers with your own message, images, and buttons, then review delivery history to see exactly what went out.',
  },
];

// sirf mouse wale devices (desktop) par true
const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const PulseNotifyFiveFeatures = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pulse-notify-features" aria-label="pulse-notify-features">
      <div className="container">

        <div className="wrapper-1">
          <span className="section-tag">Five Alerts That Turn Intent Into Action</span>
          <h2 className="section-heading">Stay Relevant at the Moments That Drive Conversion</h2>
          <p className="section-desc">PulseNotify covers the moments that decide a sale, from a sold-out product coming back to a cart left at checkout. Shoppers opt in with one click, with no email or phone number, and your alerts reach them when it still matters.</p>
        </div>

        <div className="wrapper-2">
          {FEATURES.map((item, i) => (
            <details
              key={item.title}
              open={openIndex === i}
              onMouseEnter={() => {
                if (canHover()) setOpenIndex(i);
              }}
            >
              <summary
                className="elem"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(i);
                }}
              >
                <span className="check"><Check size={16} /></span>
                <h3>{item.title}</h3>
                <span className="cross"><Plus size={16} strokeWidth={2.5} /></span>
              </summary>
              <p className="section-desc">{item.desc}</p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PulseNotifyFiveFeatures;