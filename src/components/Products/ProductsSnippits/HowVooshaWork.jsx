import React from 'react';
import './HowVooshaWork.css';
import vooshaImg from '../../../assets/voosha-office-wall-img.webp';

const HowVooshaWork = () => {
  return (
    <section className="how-voosha-work" aria-label='how voosha work'>
      <div className="container">

        <div className="wrapper-1">
          <div className="content">
            <span className="section-tag">How it works</span>
            <h2 className="section-heading">One platform, every step of a creator campaign.</h2>
            <p className="section-desc">Brands post campaigns with a budget and a deal type, creators pitch for them, and every click and sale is tied back to the creator who drove it through trackable links and unique discount codes. Content is reviewed and approved before it goes live, and payment is held securely until the brand signs off, so neither side is exposed while the work is in flight.</p>
          </div>
          <figure className='img-holder' style={{ '--width': 400, '--height': 250 }}>
            <img src={vooshaImg} width={400} height={250} alt="voosha wall logo" className='img-cover' />
          </figure>
        </div>

        <div className="wrapper-2">
          <div className="elem">
            <span className="number">01</span>
            <h3 className="title">Post or pitch</h3>
            <p className="desc">Brands post a campaign with budget and deal type; creators pitch for it.</p>
          </div>
          <div className="elem">
            <span className="number">02</span>
            <h3 className="title">Track</h3>
            <p className="desc">Every click and sale is credited via trackable links and unique codes.</p>
          </div>
          <div className="elem">
            <span className="number">03</span>
            <h3 className="title">Approve</h3>
            <p className="desc">Content is reviewed and approved before it goes live.</p>
          </div>
          <div className="elem">
            <span className="number">04</span>
            <h3 className="title">Get paid</h3>
            <p className="desc">Secured payment releases to the creator on approval.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowVooshaWork