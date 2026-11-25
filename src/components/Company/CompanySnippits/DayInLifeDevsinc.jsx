import React from 'react'
import './DayInLifeDevsinc.css';
import life1 from '../../../assets/life-1.webp';
import life2 from '../../../assets/life-2.webp';
import life3 from '../../../assets/life-3.webp';
import life4 from '../../../assets/life-4.webp';
import life5 from '../../../assets/life-5.webp';
import life6 from '../../../assets/life-6.webp';
import life7 from '../../../assets/life-7.webp';

const data = [
  {
    id: 1,
    timing: "4:00 PM",
    image: life1,
    title: "Check-in & coffee",
    desc: "Badge in, GCR coffee run",
  },
  {
    id: 2,
    timing: "4:30 PM",
    image: life2,
    title: "Stand-up",
    desc: "15-min team sync",
  },
  {
    id: 3,
    timing: "5:00 PM",
    image: life3,
    title: "Pairing session",
    desc: "Two devs, one problem",
  },
  {
    id: 4,
    timing: "6:00 PM",
    image: life4,
    title: "Deep focus block",
    desc: "Heads down, headphones on",
  },
  {
    id: 5,
    timing: "8:00 PM",
    image: life5,
    title: "Dinner & relax",
    desc: "Good food, good company",
  },
  {
    id: 6,
    timing: "11:00 PM",
    image: life6,
    title: "Gym or nap room",
    desc: "Recharge, either way",
  },
  {
    id: 7,
    timing: "12:00 AM",
    image: life7,
    title: "Wrap & wind down",
    desc: "PR merged, day done",
  },
];

const DayInLifeDevsinc = () => {
  return (
    <section className="day-in-life" aria-label='day in life'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">A day in the life</span>
          <h2 className="section-heading">How a Devsinc developer spends their day</h2>
          <p className="section-desc">A normal working day here, so you know exactly what you're signing up for.</p>
        </div>

        <ul className="list">
          {data.map((item) => (
            <li className="item" key={item.id}>
              <span className="timing">{item.timing}</span>
              <figure className="img-holder" style={{ '--width': 400, '--height': 500 }}>
                <img src={item.image} alt="image" width={400} height={500} className='img-cover'/>
              </figure>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default DayInLifeDevsinc