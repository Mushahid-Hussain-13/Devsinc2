import React from 'react';
import './DevsincSpace.css';
import maze1 from '../../../assets/maze1.webp';
import maze2 from '../../../assets/maze2.webp';
import maze3 from '../../../assets/maze3.webp';
import maze4 from '../../../assets/maze4.webp';
import maze5 from '../../../assets/maze5.webp';
import maze6 from '../../../assets/maze6.webp';

const data = [
  {
    id: 1,
    image: maze1,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B3A56" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-77e6fhvx=""><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>,
    title: "Nap Rooms",
    desc: "Quiet recharge pods, every floor",
  },
  {
    id: 2,
    image: maze2,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B3A56" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-77e6fhvx=""><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>,
    title: "Rooftop Restaurant",
    desc: "Open-air dining, top floor",
  },
  {
    id: 3,
    image: maze3,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B3A56" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-77e6fhvx=""><path d="M20 13c0 5-3.5 7.5-7.35 8.95a1 1 0 0 1-.6-.01C8.1 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>,
    title: "Day Care",
    desc: "On-site, for working parents",
  },
  {
    id: 4,
    image: maze4,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B3A56" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-77e6fhvx=""><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="2"></rect></svg>,
    title: "Gaming Zone",
    desc: "Console + PC setups",
  },
  {
    id: 5,
    image: maze5,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B3A56" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-77e6fhvx=""><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>,
    title: "Salon",
    desc: "On-campus grooming",
  },
  {
    id: 6,
    image: maze6,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B3A56" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-77e6fhvx=""><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path></svg>,
    title: "Gym",
    desc: "Fully equipped, open all day",
  },
]

const DevsincSpace = () => {
  return (
    <section className="devsinc-space" aria-label='devsinc space'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Spaces & amenities</span>
          <h2 className="section-heading">Built for more than just desks</h2>
          <p className="section-desc">The physical spaces that back up the culture claims, open to everyone, every day.</p>
        </div>

        <ul className="list">
          {data.map((item) => (
            <li className="item" key={item.id}>
              <figure className="img-holder" style={{ '--width': 600, '--height': 400 }}>
                <img src={item.image} alt="maze kro" width={600} height={400} className='img-cover' />
              </figure>
              <div className="content">
                <span className="icon">{item.icon}</span>

                <div>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default DevsincSpace