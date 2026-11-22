import React from 'react';
import './CareerStartHere.css';
import { Link } from 'react-router-dom';

const CareerStartHere = () => {
  return (
    <section className="career-start-here" aria-label='career start here'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Start Here</span>
          <h2 className="section-heading">Wherever you are, there's a path in</h2>
          <p className="section-desc">Every open role is tagged to a career stage, so the roles you see match where you actually are.</p>
        </div>

        <ul className="list">
          <li className="item">
            <span className="number">01</span>
            <h3 className="title">Graduate & Early Career</h3>
            <p className="section-desc">Internships, associate programs, and your first two years as a professional engineer.</p>
            <Link to="#" className='tu-hero-hai'>
              See graduate roles →
            </Link>
          </li>
          <li className="item">
            <span className="number">02</span>
            <h3 className="title">Experienced Hires</h3>
            <p className="section-desc">Mid to senior roles across engineering, delivery, sales, and corporate functions.</p>
            <Link to="#" className='tu-hero-hai'>
              See experienced roles →
            </Link>
          </li>
          <li className="item">
            <span className="number">03</span>
            <h3 className="title">Leadership</h3>
            <p className="section-desc">Team leads and above, own delivery, grow a practice, shape how we build.</p>
            <Link to="#" className='tu-hero-hai'>
              See Leadership roles →
            </Link>
          </li>
        </ul>
        
      </div>
    </section>
  )
}

export default CareerStartHere