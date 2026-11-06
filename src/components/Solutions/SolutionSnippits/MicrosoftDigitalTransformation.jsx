import React from 'react'
import './MicrosoftDigitalTransformation.css';
import ecosystem1 from '../../../assets/ecosystem1.svg';
import ecosystem2 from '../../../assets/ecosystem2.svg';
import ecosystem3 from '../../../assets/ecosystem3.svg';
import ecosystem4 from '../../../assets/ecosystem4.svg';

const MicrosoftDigitalTransformation = () => {
  return (
    <section className="micro-trasnformation" aria-label='microsoft digital transformation'>
      <div className="container">

        <div className="content-left">
          <span className="section-tag">Digital transformation, unified</span>
          <h2 className="section-heading">Decoding Microsoft Dynamics 365</h2>
          <p className="section-desc">
            In today's AI powered economy, competitive advantage comes from how effectively organizations connect their data, people, and processes. Microsoft Dynamics 365 serves as the foundation for this transformation, enabling enterprises to unify operations, harness AI, and build a connected ecosystem that drives smarter decisions, greater efficiency, and sustainable growth.
          </p>

          <ul className="list">
            <li className="item">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#0F5BA8"></circle><path d="M6 10.5 L9 13 L14 7" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span className="text">One platform for ERP and CRM, deployed module by module as you need them</span>
            </li>
            <li className="item">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#0F5BA8"></circle><path d="M6 10.5 L9 13 L14 7" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span className="text">Copilot embedded across every app, grounded in one shared data layer</span>
            </li>
            <li className="item">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#0F5BA8"></circle><path d="M6 10.5 L9 13 L14 7" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span className="text">Implementation, upgrade, and managed support from a single partner</span>
            </li>
          </ul>
        </div>
        <div className="content-right">
          <div className="wrapper1">
            <div className="elem">
              <img src={ecosystem1} width={20} height={20} alt="Supply Chain Management" />
              <span className="text">Supply Chain Management</span>
            </div>
            <div className="elem">
              <img src={ecosystem2} width={20} height={20} alt="Finance" />
              <span className="text">Finance</span>
            </div>
            <div className="elem">
              <img src={ecosystem3} width={20} height={20} alt="Sales" />
              <span className="text">Sales</span>
            </div>
            <div className="elem">
              <img src={ecosystem4} width={20} height={20} alt="Customer Service" />
              <span className="text">Customer Service</span>
            </div>
          </div>

          <div className="wrapper2">
            <span className="haha1">
              <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true" class="shrink-0"><rect x="0" y="0" width="7" height="7" fill="#F25022"></rect><rect x="9" y="0" width="7" height="7" fill="#7FBA00"></rect><rect x="0" y="9" width="7" height="7" fill="#00A4EF"></rect><rect x="9" y="9" width="7" height="7" fill="#FFB900"></rect></svg>
              DATAVERSE · ONE DATA LAYER
            </span>
            <span className="haha2">Copilot across every app</span>
            <span className="haha3">One record model, so agents act with full context.</span>
          </div>

          <div className="wrapper3">
            <div className="elem">
              <svg width="16" height="16" viewBox="0 0 16 16"><rect width="7" height="7" fill="#F25022"></rect><rect x="9" width="7" height="7" fill="#7FBA00"></rect><rect y="9" width="7" height="7" fill="#00A4EF"></rect><rect x="9" y="9" width="7" height="7" fill="#FFB900"></rect></svg>
              <span className="text">Power Platform</span>
            </div>
            <div className="elem">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1-.5 9H7Z" stroke="#7FA9E6" stroke-width="1.6"></path></svg>
              <span className="text">Azure APIs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default MicrosoftDigitalTransformation