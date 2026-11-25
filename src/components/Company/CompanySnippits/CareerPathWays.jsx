import React from 'react';
import './CareerPathWays.css';

const CareerPathWays = () => {
  return (
    <section className="career-pathways" aria-label='career pathways'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Career Pathways</span>
          <h2 className="section-heading">Your growth, our priority</h2>
        </div>

        <ul className="list">
          <div className="line"></div>
          <li className="elem">
            <span className="number">1</span>
            <h3>Associate Software Engineer</h3>
            <span className="text">0-1 yrs</span>
          </li>
          <li className="elem">
            <span className="number">2</span>
            <h3>Software Engineer</h3>
            <span className="text">1-3 yrs</span>
          </li>
          <li className="elem">
            <span className="number">3</span>
            <h3>Senior Software Engineer</h3>
            <span className="text">3-5 yrs</span>
          </li>
          <li className="elem">
            <span className="number">4</span>
            <h3>Associate Team Lead</h3>
            <span className="text">5-7 yrs</span>
          </li>
          <li className="elem main-elem">
            <span className="number">5</span>
            <h3>Team Lead</h3>
            <span className="text">7+ yrs</span>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default CareerPathWays