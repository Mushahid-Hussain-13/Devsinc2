import React from 'react';
import './AboutHeroSection.css';
import Navbar from '../../Navbar';
import heroImg from '../../../assets/about-us-hero-bg.webp';
import client1 from '../../../assets/business-insider.webp';
import client2 from '../../../assets/mashable.webp';
import client3 from '../../../assets/khaleej-times.webp';
import client4 from '../../../assets/yahoo-finance.webp';
import client5 from '../../../assets/new-york-weekly.webp';


const experienceData = [
  {
    title: "1,200+",
    desc: "Global experts",
  },
  {
    title: "23+",
    desc: "Countries supported",
  },
  {
    title: "5",
    desc: "Continents, one delivery model",
  },
  {
    title: "15+",
    desc: "Years of technical excellence",
  },
]

const AboutHeroSection = () => {
  return (
    <section
      className="about-hero-section"
      aria-label='about hero section'  
    >
      <Navbar />

      <div className="about-container">

        <div className="hero-header">
          <span className="section-tag">About us</span>
          <h2 className="title">Where Vision Meets Execution</h2>
          <p className="section-desc">We turn bold ideas into real world outcomes by combining strategic thinking, technical expertise, and flawless execution.</p>
        </div>

        <div className="experience">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="elem text-center"
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="trusted-wrapper">
          <h3>Trusted by</h3>

          <div className="trusted-by">
            <div className="client">
              <img src={client1} alt="trusted by clients" width={60} height={60} />
            </div>
            <div className="client">
              <img src={client2} alt="trusted by clients" width={100} height={100} />
            </div>
            <div className="client">
              <img src={client3} alt="trusted by clients" width={100} height={100} />
            </div>
            <div className="client">
              <img src={client4} alt="trusted by clients" width={50} height={50} />
            </div>
            <div className="client">
              <img src={client5} alt="trusted by clients" width={100} height={100} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutHeroSection