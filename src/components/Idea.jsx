import React from 'react';
import './Idea.css';
import PrimaryBtn from '../snippits/PrimaryBtn';
import { Link } from 'react-router-dom';

const Idea = () => {
  return (
    <section className="idea" aria-label='ideas discuss with us'>
      <div className="container">
        <div>
          <h1 className='section-heading'>Have an idea? We're here to co create.</h1>
          <p className='section-desc'>Our product studio parteners with founders from validation to launch.</p>
        </div>

        <PrimaryBtn url={"/product-studio"} text={"Explore the Product Studio"}/>

        <div className="bg-overlay"></div>
      </div>
      <Link to={"/product-studio"} className="anchor"></Link>
    </section>
  )
}

export default Idea