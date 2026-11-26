import React from 'react'
import './DevsincDiversity.css';

const DevsincDiversity = () => {
  return (
    <section className="devsinc-diversity" aria-label='devsinc diversity'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag text-teal">Diversity of our workforce</span>
          <h2 className="section-heading">Who makes up the floor</h2>
          <p className="section-desc">A snapshot of who we are today, updated annually alongside our DEI commitments.</p>
        </div>

        <ul className="list">
          <li className="elem">
            <h3>1,200+</h3>
            <p className="desc">Diverse tech team across regions & cultures</p>
          </li>
          <li className="elem">
            <h3>5+</h3>
            <p className="desc">Nationalities represented</p>
          </li>
          <li className="elem">
            <h3>100+</h3>
            <p className="desc">Women representation in engineering</p>
          </li>
          <li className="elem">
            <h3>100%</h3>
            <p className="desc">Pay equity across genders</p>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default DevsincDiversity