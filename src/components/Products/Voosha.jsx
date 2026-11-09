import React from 'react';
import img from '../../assets/voosha-hero-bg.webp';
import VooshaHeroSection from './ProductsSnippits/VooshaHeroSection.jsx';
import Footer from '../Footer.jsx';
import FAQ from '../FAQ.jsx';
import { VooshaFaQs } from '../../hooks/FaqData.js';
import HowVooshaWork from './ProductsSnippits/HowVooshaWork.jsx';
import VooshaTwoPaths from './ProductsSnippits/VooshaTwoPaths.jsx';
import VooshaKeyFeatures from './ProductsSnippits/VooshaKeyFeatures.jsx';
import WhoBuildVoosha from './ProductsSnippits/WhoBuildVoosha.jsx';

const Voosha = () => {
  return (
    <>
      <VooshaHeroSection
        heroImg={img}
        subtitle1={"Now in Beta"}
        subtitle2={"A Devsinc Product"}
        title={"Collabs that actually work."}
        desc={"Voosha connects brands with creators and tracks the analytics. Every click and every sale linked to the creator who drove it, with secure payments released only once the content is approved. Live in beta, free to join."}
        btnText1={"Visit voosha.io"}
        btnText2={"Open the platform"}
      />
      <HowVooshaWork />
      <VooshaTwoPaths />
      <WhoBuildVoosha />
      <VooshaKeyFeatures />
      <div className="voosha-faq">
        <FAQ { ...VooshaFaQs } />
      </div>
      <Footer />
    </>
  )
}

export default Voosha