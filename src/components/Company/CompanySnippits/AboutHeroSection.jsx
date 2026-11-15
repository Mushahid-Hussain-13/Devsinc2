import React from 'react';
import './AboutHeroSection.css';
import Navbar from '../../Navbar';
import heroImg from '../../../assets/about-us-hero-bg.webp';


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

      <div className="container">

        <div className="hero-header">
          <span className="section-tag">About us</span>
          <h2 className="section-heading">Where Vision Meets Execution</h2>
          <p className="section-desc">We turn bold ideas into real world outcomes by combining strategic thinking, technical expertise, and flawless execution.</p>
        </div>

        <div className="experience">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="elem"
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="trusted-by">
          <div className="client">
            <img src="" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutHeroSection