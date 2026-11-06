import React from "react";
import "./MicrosoftPowerTransformation.css";
import ecosystem1 from '../../../assets/ecosystem6.webp';
import ecosystem2 from '../../../assets/ecosystem7.webp';
import ecosystem3 from '../../../assets/ecosystem8.webp';
import ecosystem4 from '../../../assets/ecosystem9.webp';


const MicrosoftPowerTransformation = () => {
  return (
    <section
      className="micro-power-trasnformation"
      aria-label="microsoft digital transformation"
    >
      <div className="container">
        <div className="content-left">
          <span className="section-tag">The Platform</span>
          <h2 className="section-heading">A foundation built for business agility</h2>
          <p className="section-desc">
            Legacy processes, disconnected data, and manual workflows create more than friction, they make it harder to scale and respond to change.
            <br />
            Microsoft Power Platform offers a different path. Instead of more point solutions, it brings apps, AI agents, automation, and data together on a governed Dataverse foundation, a composable ecosystem where teams modernize incrementally, automate at scale, and add AI where it delivers the most value.
            <br />
            The result: a connected, adaptable enterprise built to evolve without adding to technology complexity.
          </p>

          <ul className="list">
            <li className="item">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#0F6CBD"></circle><path d="M6 10.5 L9 13 L14 7" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span className="text">
                One low code foundation for apps, automation, and analytics
              </span>
            </li>
            <li className="item">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#0F6CBD"></circle><path d="M6 10.5 L9 13 L14 7" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span className="text">
                Copilot Studio and AI Builder grounded in your own governed data
              </span>
            </li>
            <li className="item">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#0F6CBD"></circle><path d="M6 10.5 L9 13 L14 7" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span className="text">
                Enterprise security and governance built in from day one
              </span>
            </li>
          </ul>
        </div>
        <div className="content-right">
          <div className="wrapper1">
            <div className="elem">
              <img
                src={ecosystem1}
                width={20}
                height={20}
                alt="Supply Chain Management"
              />
              <span className="text">Power Apps</span>
            </div>
            <div className="elem">
              <img src={ecosystem2} width={20} height={20} alt="Finance" />
              <span className="text">Power Automate</span>
            </div>
            <div className="elem">
              <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="9" width="3" height="5" fill="#F2C811"></rect><rect x="6.5" y="5" width="3" height="9" fill="#F2C811"></rect><rect x="11" y="2" width="3" height="12" fill="#F2C811"></rect></svg>
              <span className="text">Power BI</span>
            </div>
          </div>

          <div className="wrapper2">
            <span className="haha1">
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                aria-hidden="true"
                class="shrink-0"
              >
                <rect x="0" y="0" width="7" height="7" fill="#F25022"></rect>
                <rect x="9" y="0" width="7" height="7" fill="#7FBA00"></rect>
                <rect x="0" y="9" width="7" height="7" fill="#00A4EF"></rect>
                <rect x="9" y="9" width="7" height="7" fill="#FFB900"></rect>
              </svg>
              DATAVERSE · ONE DATA LAYER
            </span>
            <span className="haha2">One governed data foundation</span>
            <span className="haha3">
              Every app, flow, and agent reads from the same source.
            </span>
          </div>

          <div className="wrapper3">
            <div className="elem">
              <img src={ecosystem3} width={20} height={20} alt="Power Pages" />
              <span className="text">Power Pages</span>
            </div>
            <div className="elem">
              <img src={ecosystem4} width={20} height={20} alt="Power Pages" />
              <span className="text">Copilot Studio</span>
            </div>
            <div className="elem">
              <svg width="18" height="18" viewBox="0 0 40 26" fill="none" aria-hidden="true"><path d="M7 13c0-3.6 2.8-6.1 6.1-6.1 3.9 0 6.1 3.9 7.8 6.1 1.7 2.2 3.9 6.1 7.8 6.1 3.3 0 6.1-2.5 6.1-6.1s-2.8-6.1-6.1-6.1c-3.9 0-6.1 3.9-7.8 6.1-1.7 2.2-3.9 6.1-7.8 6.1C9.8 19.1 7 16.6 7 13Z" stroke="#7FA9E6" stroke-width="2.4"></path></svg>
              <span className="text">Dynamics 365</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrosoftPowerTransformation;
