import React from 'react'
import './CareerDevsincVedio.css';
import { Link } from 'react-router-dom'
import image from '../../../assets/global-delivery-center.webp';
import { Play } from 'lucide-react';

const CareerDevsincVedio = () => {
  return (
    <section className="career-devsinc-vedio" aria-label='career devsinc vedio'>
      <div className="container">

        <Link to="https://www.youtube.com/watch?v=kqvslkEuIaA" target='_blank' className='image'>
          <img src={image} alt="global delivery center" className='img-cover'/>

          <span className="icon">
            <svg width="26" height="30" viewBox="0 0 14 16" aria-hidden="true" data-astro-cid-p2ag22c2=""><path d="M1 1.6v12.8a1 1 0 0 0 1.53.85l10.1-6.4a1 1 0 0 0 0-1.7L2.53.75A1 1 0 0 0 1 1.6Z" fill="#051824" data-astro-cid-p2ag22c2=""></path></svg>
          </span>
        </Link>

      </div>
    </section>
  )
}

export default CareerDevsincVedio