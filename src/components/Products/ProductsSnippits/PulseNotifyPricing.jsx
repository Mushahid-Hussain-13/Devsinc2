import React from 'react';
import './PulseNotifyPricing.css';
import PrimaryBtn from '../../../snippits/PrimaryBtn';
import { Calendar, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingData = [
  {
    label: "Free",
    cardTag: "Start here",
    price: "0",
    desc: "Everything you need to start reaching shoppers and keep customers informed.",
    queryList: [
      "Welcome message",
      "Order confirmation, fulfillment and cancellation alerts",
      "One campaign send per month",
    ]
  },
  {
    label: "Basic",
    cardTag: "",
    price: "9.99",
    desc: "Add more automated alerts as your store grows.",
    queryList: [
      "Everything in Free",
      "Additional automated alerts",
    ]
  },
  {
    classname: "main-elem",
    label: "Pro",
    cardTag: "Full suite",
    price: "19.99",
    desc: "The full set of alerts for stores leaning into web push.",
    queryList: [
      "Everything in Basic",
      "Full alert suite",
    ]
  },
]

const PulseNotifyPricing = () => {
  return (
    <section className="pulse-notify-pricing" aria-label='pulse notify pricing'>
      <div className="container">

        <div className="hero-header">
          <div>
            <span className="section-tag">Pick the Plan That Fits Your Store</span>
            <h2 className="section-heading">Start Free, Add Alerts as You Grow</h2>
            <p className="desc">
              <Calendar size={18}/>
              All charges are in USD, billed every 30 days.
            </p>
          </div>
          <PrimaryBtn text={"Install on shopify"} url={"#"}/>
        </div>

        <div className="wrapper">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`elem ${item.classname || ""}`}
            >
              <div className="child-1">
                <span className="label">{item.label}</span>
                {item.cardTag && <span className="card-tag">{item.cardTag}</span>}
              </div>
              <div className="child-2">
                <h3>${item.price}</h3>
                <span className="price-chela">USD / month</span>
              </div>
              <p className="section-desc">{item.desc}</p>

              <ul className="query-list">
                {item.queryList.map((query) => (
                  <li className="query">
                    <span className="icon"><Check size={12} strokeWidth={3}/></span>
                    <span className="text">{query}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="footer-text">
          Current plan inclusions for Basic and Pro are listed on the <Link to={"#"}>Shopify App Store.</Link>
        </p>

      </div>
    </section>
  )
}

export default PulseNotifyPricing