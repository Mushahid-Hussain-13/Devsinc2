import React from 'react'
import './Enterprise.css';

const Enterprise = () => {
  return (
    <section className='enterprise'>
      <div className="container">

        <h1 className="heading">
          Partnering in Your <span className="text-teal">AI-First Enterprise Transformation</span>
        </h1>

        <p className="section-desc">
          AI isn't just another technology initiative. It's a new way of operating. Devsinc helps organizations modernize applications, unify data, automate workflows, and accelerate innovation with AI at the core of every transformation.
        </p>

        <ul className="wrapper">
          <li className="list-item">
            <h2>15<span className="text-teal">+</span></h2>
            <p>Years on market</p>
          </li>
          <li className="list-item">
            <h2>1,200<span className="text-teal">+</span></h2>
            <p>Professionals on board</p>
          </li>
          <li className="list-item">
            <h2>800<span className="text-teal">+</span></h2>
            <p>Engineers</p>
          </li>
          <li className="list-item">
            <h2>250<span className="text-teal">+</span></h2>
            <p>Active clients</p>
          </li>
        </ul>

        <div className="bg-color-overlay"></div>
      </div>
    </section>
  )
}

export default Enterprise