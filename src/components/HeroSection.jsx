import React, { useState, useEffect } from 'react'
import ArrowLeft from '../snippits/ArrowLeft.jsx';
import ArrowRight from '../snippits/ArrowRight.jsx';
import Navbar from './Navbar.jsx';
import './HeroSection.css';
import { motion } from 'framer-motion';
import hero1 from '../assets/hero-slide1-bg.webp';
import hero2 from '../assets/microsoft-dynamics-365-hero-bg.webp';
import hero3 from '../assets/salesforce-hero-bg.webp';
import hero4 from '../assets/podcasts-hero-bg.webp';
import hero5 from '../assets/hero-igi-bg.webp';
import PrimaryBtn from '../snippits/PrimaryBtn.jsx';

const slidesData = [
  {
    category: "The world has changed, and we're built for it",
    title: "AI native teams. Enterprise outcomes, shipped today.",
    description: "We pair AI-native engineering with enterprise delivery discipline to ship outcomes, not just software.",
    buttonText: "Talk to an Expert",
    image: `${hero1}`,
  },
  {
    category: "AI-Powered Business Transformation",
    title: "Accelerate growth with Agentic Dynamics 365",
    description: "Turn intelligence into action with AI-powered business applications that streamline operations, accelerate decisions, and unlock new opportunities for growth.",
    buttonText: "Explore Now",
    image: `${hero2}`,
  },
  {
    category: "Salesforce Guide",
    title: "The Salesforce Maturity Model",
    description: "A practical guide to getting more out of your Salesforce investment, find out which of the 5 AI maturity stages is quietly costing you the most.",
    buttonText: "Get the Guide",
    image: `${hero3}`,
  },
  {
    category: "PODCAST",
    title: "Scaling E-Commerce in the AI Era",
    description: "Umar Rana on AI personalization, Shopify's limits, and composable commerce.",
    buttonText: "Watch Now",
    image: `${hero4}`,
  },
  {
    category: "NEWS / MEDIA",
    title: "IGI Insurance Partners with Devsinc",
    description: "The partnership marks a step toward a digital-first future for insurance, creating simpler, faster, and more seamless customer journeys.",
    buttonText: "Read the release",
    image: `${hero5}`,
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10s

    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentSlide]);

  const handleNext = function () {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  }

  const handlePrev = function () {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  }

  const slide = slidesData[currentSlide];

  return (
    <motion.section
      className="hero-section"
      aria-label='hero-section'
      style={{
        '--hero-bg-image': `url('${slide.image}')`
      }}
      initial ={{
        y: -5,
        opacity: 0,
        transition: '0.5s'
      }}
      animate = {{
        y: 0,
        opacity: 1,
        transition: '0.5s'
      }}
    >
      <Navbar />

      <div className="hero-container">

        <div className="hero-wrapper">
          <p className="category">{slide.category}</p>

          <h1 className="title">{slide.title}</h1>

          <p className="desc">{slide.description}</p>

          <PrimaryBtn url={"#"} text={slide.buttonText}/>
        </div>

        <div className="arrows-container">
          <button
            className="arrow-left"
            onClick={handlePrev}
          >
            <ArrowLeft />
          </button>

          <button
            className="arrow-right"
            onClick={handleNext}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="bg-color-overlay"></div>
    </motion.section>
  )
}

export default HeroSection