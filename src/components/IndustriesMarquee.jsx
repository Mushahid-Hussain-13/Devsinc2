import React from 'react'
import './IndustriesMarquee.css';
import { Send, Landmark, ShoppingCart, RefreshCw, Share2, Globe } from 'lucide-react'

// Saara data yahan hai. Naya card chahiye to bas yahan ek object add kar do.
const INDUSTRIES = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce and Marketplaces',
    desc: 'Multi provider checkout and routing for stores expanding across regions.',
  },
  {
    icon: Landmark,
    title: 'Fintech and Neobanks',
    desc: 'Payment rails and orchestration for teams modernizing financial products.',
  },
  {
    icon: Send,
    title: 'Travel and Ticketing',
    desc: 'Redundant gateways and failover for high volume booking platforms.',
  },
  {
    icon: RefreshCw,
    title: 'Subscription and SaaS Billing',
    desc: 'Recurring billing, retries and dunning tuned to protect revenue.',
  },
  {
    icon: Share2,
    title: 'On Demand and Gig Economy',
    desc: 'Split payments, payouts and wallets for many party marketplaces.',
  },
  {
    icon: Globe,
    title: 'Remittance and Cross Border',
    desc: 'Compliant, multi currency flows for money moving across borders.',
  },
]

const IndustriesMarquee = () => {
  return (
    <section className="industries-marquee">
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Industries</span>
          <h2 className="section-heading">Built for businesses that move money.</h2>
        </div>

        {/* marquee: overflow hide karta hai aur kinaron par fade deta hai */}
        <div className="marquee">
          <ul className="card-list">
            {/* Cards 2 baar render hote hain taake loop beech mein na toote.
                Dusri copy (index 1) screen reader se chupi hui hai. */}
            {[0, 1].map((copy) =>
              INDUSTRIES.map(({ icon: Icon, title, desc }) => (
                <li
                  className="card-item"
                  key={`${copy}-${title}`}
                  aria-hidden={copy === 1 ? 'true' : undefined}
                >
                  <span className="card-icon">
                    <Icon size={18} />
                  </span>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-desc">{desc}</p>
                </li>
              ))
            )}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default IndustriesMarquee