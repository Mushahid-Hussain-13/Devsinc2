import React from 'react';
import './MicrosoftEcosystem.css';
import { ArrowUpRight, LayoutGrid, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';
import ecosystem1 from '../../../assets/ecosystem1.svg';
import ecosystem2 from '../../../assets/ecosystem2.svg';
import ecosystem3 from '../../../assets/ecosystem3.svg';
import ecosystem4 from '../../../assets/ecosystem4.svg';
import ecosystem5 from '../../../assets/ecosystem5.svg';

const data = [
  {
    img: ecosystem1,
    className: 'item1',
    title: "Business Central",
    desc: "An all in one ERP built for growing and mid market businesses, covering finance, sales, inventory, and operations in one system.",
  },
  {
    img: ecosystem2,
    className: 'item2',
    title: "Finance",
    desc: "Automate financial operations, strengthen compliance, and gain real time visibility into cash flow, budgeting, and forecasting.",
  },
  {
    img: ecosystem3,
    className: 'item3',
    title: "Supply Chain Management",
    desc: "Improve demand planning, inventory accuracy, and supplier collaboration with predictive, AI powered supply chain intelligence.",
  },
  {
    img: ecosystem4,
    className: 'item4',
    title: "Human Resources",
    desc: "Streamline HR operations, from hiring to payroll to performance management, with a connected, employee centric platform.",
  },
  {
    img: ecosystem5,
    className: 'item5',
    title: "Commerce",
    desc: "Deliver seamless, unified commerce experiences across in store, online, and call center channels.",
  },
]

const MicrosoftEcosystem = () => {
  return (
    <section className="microsoft-ecosystem" aria-label='microsoft ecosystem'>
      <div className="container">

        <div className="wrapper1">
          <span className="section-tag">The ecosystem</span>
          <h2 className="section-heading">ERP and CRM applications, explained</h2>
          <p className="section-desc">Dynamics 365 is not built to fit only one way of working, it is a modular ecosystem you can deploy individually or together. Explore each module to see how it fits your business.</p>
        </div>

        <div className="wrapper2">
          <div>
            <Link to="#" className='chaha-btn chaha1-btn'>
              <span className="icon">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="shrink-0" data-astro-cid-ngs7dpg5=""><rect x="0" y="0" width="7" height="7" rx="1" data-astro-cid-ngs7dpg5=""></rect><rect x="9" y="0" width="7" height="7" rx="1" data-astro-cid-ngs7dpg5=""></rect><rect x="0" y="9" width="7" height="7" rx="1" data-astro-cid-ngs7dpg5=""></rect><rect x="9" y="9" width="7" height="7" rx="1" data-astro-cid-ngs7dpg5=""></rect></svg>
              </span>
              <span className="text">ERP applications</span>
            </Link>
            <Link to="#" className='chaha-btn chaha2-btn'>
              <span className="icon">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="shrink-0" data-astro-cid-ngs7dpg5=""><rect x="0" y="0" width="16" height="7" rx="1" data-astro-cid-ngs7dpg5=""></rect><rect x="0" y="9" width="7" height="7" rx="1" data-astro-cid-ngs7dpg5=""></rect><rect x="9" y="9" width="7" height="7" rx="1" data-astro-cid-ngs7dpg5=""></rect></svg>
              </span>
              <span className="text">ERP applications</span>
            </Link>
          </div>

          <Link to="#" className='thirdly-btn'>
            <span className="text">Explore Dynamics 365 ERP</span>
            <span className="icon"><ArrowUpRight size={17} /></span>
          </Link>
        </div>

        <ul className="list">
          {data.map((item, index) => (
            <li className={`item ${item.className}`} key={index}>
              <span className="item-img">
                <img src={item.img} alt="microsoft ecosystem" width={30} height={30}/>
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default MicrosoftEcosystem