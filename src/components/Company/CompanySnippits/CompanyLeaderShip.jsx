import React from 'react';
import './CompanyLeaderShip.css';
import leader1 from '../../../assets/leader-1.webp';
import leader2 from '../../../assets/leader-2.webp';
import leader3 from '../../../assets/leader-3.webp';
import leader4 from '../../../assets/leader-4.webp';
import leader5 from '../../../assets/leader-5.webp';
import leader6 from '../../../assets/leader-6.webp';
import leader7 from '../../../assets/leader-7.webp';
import leader8 from '../../../assets/leader-8.webp';
import leader9 from '../../../assets/leader-9.webp';
import leader10 from '../../../assets/leader-10.webp';
import { Link } from 'react-router-dom';

const data = [
  {
    img: leader1,
    name: "Usman Asif",
    desc: "Founder & CEO",
  },
  {
    img: leader2,
    name: "Badar Shafiq",
    desc: "Chief Delivery Officer",
  },
  {
    img: leader3,
    name: "Atta Ur Rahman",
    desc: "Chief Business Officer",
  },
  {
    img: leader4,
    name: "Qamar Abbas Sipra",
    desc: "Chief Finance Officer",
  },
  {
    img: leader5,
    name: "Maria Sadaf",
    desc: "Chief of Staff",
  },
  {
    img: leader6,
    name: "Umar Rana",
    desc: "Sr. Vice President",
  },
  {
    img: leader7,
    name: "Ahmed Waqas",
    desc: "VP Human Assets",
  },
  {
    img: leader8,
    name: "Yasir Barkat",
    desc: "VP Professional Services",
  },
  {
    img: leader9,
    name: "Arsalan Khalid",
    desc: "Director of Professional Services",
  },
  {
    img: leader10,
    name: "Ashar Ali",
    desc: "Head of Pre-Sales",
  },
]

const CompanyLeaderShip = () => {
  return (
    <section className="company-leadership" aria-label='company leadership'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Our global leadership</span>
          <h2 className="section-heading">The leaders behind Devsinc's global rise</h2>
          <p className="section-desc">The difference is not just our technology, it is the people behind it.</p>
        </div>

        <ul className="list">
          {data.map((item, index) => (
            <li className="item" key={index}>
              <figure className='image-card'>
                <img src={item.img} alt="leader img" />
              </figure>
              <div className="content">
                <div>
                  <h3 className='title'>{item.name}</h3>
                  <p className="desc">{item.desc}</p>
                </div>
                <Link to="#">
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="none" data-astro-cid-4ci6lnej=""><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.7" data-astro-cid-4ci6lnej=""></rect><path d="M7.6 10.4V17M7.6 7.3v.1M11.6 17v-3.6a2 2 0 0 1 4 0V17" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-astro-cid-4ci6lnej=""></path></svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default CompanyLeaderShip