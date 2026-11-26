import React from 'react';
import './DevsincNextChapter.css';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const DevsincNextChapter = () => {
  return (
    <section className="devsinc-next-chapter" aria-label='devsinc next chapter'>
      <div className="container">

        <h2 className="section-heading">Your next chapter starts here.</h2>
        <p className="section-desc">Life at Devsinc is about more than the work we do. It's about the people, opportunities, and experiences that help you grow along the way. Join our global team where ambitious ideas become real-world impact.</p>
        <Link to="#" className='btn'>
          Explore Careers
          <ArrowUpRight size={20}/>
        </Link>

      </div>
    </section>
  )
}

export default DevsincNextChapter