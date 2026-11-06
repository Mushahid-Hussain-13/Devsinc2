import React from 'react'
import PrimaryBtn from '../snippits/PrimaryBtn';
import './WhyDevsinc.css';
import microsoft from '../assets/billGates.svg';
import salesforce from '../assets/salesforce.webp';
import shopify from '../assets/shopify.svg';
import amazon from '../assets/amazon.webp';
import accaLogo from '../assets/AccaLogo.webp';
import clutchLogo from '../assets/ClutchLogo.webp';
import certISO from '../assets/cert-iso.webp';
import CompanyItemCard from '../snippits/CompanyItemCard';

const WhyDevsinc = () => {
  return (
    <section className='why-devisnc'>
      <div className="container">

        <div className="wrapper1">
          <div className="elem">
            <p className="section-tag">Why devsinc</p>
            <h2 className="section-heading">
              Vetted by the platforms.
              <br />
              <span className="text-teal">Backed by the bench.</span>
            </h2>
            <p className='section-desc'>
              100+ certified professionals across the three platforms your enterprise already runs.
            </p>
          </div>

          <PrimaryBtn text={"Let's work Together"} url={"/contact"}/>
        </div>

        <ul className="company-list wrapper2">
          <CompanyItemCard
            img={microsoft}
            imgAlt={"microsoft certified"}
            imgWidth={100}
            certifiedNum={"50+"}
            descText={"Business Applications partner. Dynamics 365 CRM and ERP, plus Power Platform."}
          />
          <CompanyItemCard
            img={salesforce}
            imgAlt={"salesforce certified"}
            imgWidth={40}
            certifiedNum={"30+"}
            descText={"Eight clouds delivered, including Data Cloud and Agentforce."}
          />
          <CompanyItemCard
            img={shopify}
            imgAlt={"shopify certified"}
            imgWidth={90}
            certifiedNum={"20+"}
            descText={"100+ apps built and 350+ stores delivered for brands doing real volume."}
          />
          <CompanyItemCard
            img={amazon}
            imgAlt={"amazon certified"}
            imgWidth={40}
            certifiedNum={"15+"}
            descText={"100+ apps built and 350+ stores delivered for brands doing real volume."}
          />
        </ul>

        <div className="wrapper3">
          <p className="section-tag">Recognized By</p>

          <ul className="logos-list">
            <li className="item">
              <img src={clutchLogo} alt="clutch global 2026" />
              <p>Clutch Global 2026</p>
            </li>
            <li className="item">
              <img src={certISO} alt="ISO Certified" />
              <p>ISO Certified</p>
            </li>
            <li className="item">
              <img src={accaLogo} alt="acca approved employer" />
              <p>ACCA Approved Employer</p>
            </li>
          </ul>
        </div>

        <div className="bg-color-overlay"></div>

      </div>
    </section>
  )
}

export default WhyDevsinc;