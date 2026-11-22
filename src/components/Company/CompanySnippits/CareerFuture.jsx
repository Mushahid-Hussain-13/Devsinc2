import React from 'react';
import './CareerFuture.css';
import employee1 from '../../../assets/employee1.webp';
import employee2 from '../../../assets/employee2.webp';
import employee3 from '../../../assets/employee3.webp';
import employee4 from '../../../assets/employee4.webp';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const employeesReview = [
  {
    id: 1,
    image: employee1,
    review: "Devsinc has been more than just a workplace; it has been a launchpad for my career and personal growth. From joining as a fresher to becoming a senior software engineer, every step has been shaped by mentorship, hands-on exposure to cutting-edge projects, and a culture that invests in its people.",
    name: "Ismail Sajid",
    role: "Senior Engineering Manager, Devsinc",
  },
  {
    id: 2,
    image: employee2,
    review: "Working at Devsinc has been an incredibly rewarding journey. It has given me the opportunity to lead talented teams, solve complex challenges, and contribute to initiatives that deliver real business value, while continuously growing as a leader through new responsibilities, cross-functional exposure, and the trust to make decisions.",
    name: "Javeria Tariq",
    role: "SQA Engineer, Devsinc",
  },
  {
    id: 3,
    image: employee3,
    review: "At Devsinc, growth comes with the freedom to take ownership and turn ideas into impact. My journey has given me opportunities to tackle challenging projects, collaborate across teams, and continuously expand my skills.",
    name: "Saad Ikram",
    role: "Associate Director Admin",
  },
  {
    id: 4,
    image: employee4,
    review: "Devsinc has been more than a workplace; it has been an environment where I've been encouraged to learn, grow, and take on new challenges. From mentorship and hands-on exposure to opportunities to lead, every stage of my journey has been shaped by a culture that invests in its people.",
    name: "Qurat-Ul-Ain",
    role: "Recruitment Team Lead, Devsinc",
  }
]

const CareerFuture = () => {
  return (
    <section className="career-future" aria-label='career future'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag text-teal">Your Future</span>
          <h2 className="section-heading">Build a career that keeps moving forward</h2>
          <p className="section-desc">
            At Devsinc, you will find the opportunity to learn, take ownership, work on meaningful challenges, and grow alongside people who push you further.
          </p>
        </div>

        <div className="wrapper">
          {employeesReview.map((item) => (
            <li className="item" key={item.id}>
              <figure className="image" >
                <img src={item.image} alt="employee img" className='img-cover' />
              </figure>
              <div className="content">
                <p className="desc">{item.review}</p>
                <div className="child">
                  <h3 className='title'>{item.name}</h3>
                  <p className="role">{item.role}</p>
                </div>
              </div>
            </li>
          ))}
        </div>

        <Link to="#" className='btn'>
          <span className="text">Explore Life at Devsinc</span>
          <span className="icon"><ArrowUpRight size={16}/></span>
        </Link>

      </div>
    </section>
  )
}

export default CareerFuture