import React from 'react'
import './Procss.css';
import ProcessCard from '../snippits/ProcessCard.jsx';

const Process = ({ subtitle, title, processes = [] }) => {
  return (
    <section className="process" aria-label='process section'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">{subtitle}</span>

          <h2 className="section-heading">
            {title}
          </h2>
        </div>

        <ul className="process-list">
          {processes.map((process) => (
            <ProcessCard
              key={process.cardNum}
              number={process.cardNum}
              title={process.cardTitle}
              desc={process.cardDesc}
            />
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Process