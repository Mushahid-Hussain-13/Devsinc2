import React from 'react';
import './CareerEquity.css';

const CareerEquity = () => {
  return (
    <section className="career-equity" aria-label='career equity'>
      <div className="container">

        <div className="content-left">
          <span className="section-tag text-teal">Diversity, equity & inclusion</span>
          <h2 className="section-heading">A page of its own, not a single line of copy</h2>
          <p className="section-desc">We are building an environment where every engineer, regardless of background, has an equal shot at the ladder above. Here is where we stand today, and what we are doing next.</p>
        </div>
        <div className="content-right">
          <div className="elem">
            <h3>100+</h3>
            <p>Women in technical roles</p>
          </div>
          <div className="elem">
            <h3>5+</h3>
            <p>Nationalities represented</p>
          </div>
          <div className="elem">
            <h3>120+</h3>
            <p>Female participants in L&D sessions</p>
          </div>
          <div className="elem">
            <h3>100%</h3>
            <p>Pay equity across genders</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CareerEquity