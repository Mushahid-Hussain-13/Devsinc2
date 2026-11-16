import React from 'react';
import './OurMission.css';

const data = [
  {
    label: "Our mission",
    description: "To empower businesses with cutting-edge technology solutions, unlocking their growth potential by connecting them with passionate and skilled engineers.",
  },
  {
    label: "Our vision",
    description: "At Devsinc, we envision transforming IT systems into smart, agile, and AI-driven digital assets. With a decade of expertise, we empower global clients through innovative, adaptive solutions, shaping a future where technology meets the dynamic demands of a connected world.",
  },
  {
    label: "Our philosophy",
    description: "At Devsinc, our philosophy is simple, empowering people and businesses through innovation. We believe in fostering a collaborative environment, investing in talent, and delivering meaningful solutions that drive progress for our clients and communities worldwide.",
  },
]

const OurMission = () => {
  return (
    <section className="our-mission" aria-label='our mission'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Who we are</span>
          <h2 className="section-heading">Mission, vision and philosophy</h2>
        </div>

        <div className="wrapper">
          {data.map((item, index) => (
            <div
              key={index}
              className="elem"
            >
              <span className="section-tag">{item.label}</span>
              <p className="section-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurMission