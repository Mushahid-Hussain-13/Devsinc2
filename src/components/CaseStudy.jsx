import React from 'react';
import './CaseStudy.css';
import PrimaryBtn from '../snippits/PrimaryBtn';
import caseStudy1 from '../assets/case-study-1.webp';
import caseStudy2 from '../assets/case-study-2.webp';
import caseStudy3 from '../assets/case-study-3.webp';
import CaseStudyCard from '../snippits/CaseStudyCard';

const CaseStudy = () => {
  return (
    <section className="case-study" aria-label='case study'>
      <div className="container">

        <div className="case-study-header">
          <div>
            <span className="section-tag">
              Case Studies
            </span>

            <h2 className="section-heading">
              Real Work. Measurable Impact.
            </h2>
          </div>
          <PrimaryBtn url={"#"} text={"Read all case studies"}/>
        </div>

        <ul className="case-study-list">
          <CaseStudyCard
            image={caseStudy1}
            cardText={"HR Technology / SaaS"}
            title={"Engineering Excellence Powers HR Platform to Strategic Exit"}
            subtitle={"Staff Augmentation"}
            spanText={"Read the case study →"}
          />
          <CaseStudyCard
            image={caseStudy2}
            cardText={"Retail & CPG"}
            title={"H&BCL’s B2B Beauty Breakthrough: Unified Commerce on Shopify Plus"}
            subtitle={"Ecommerce (Shopify)"}
            spanText={"Read the case study →"}
          />
          <CaseStudyCard
            image={caseStudy3}
            cardText={"Technology & Software"}
            title={"Next-Gen Predictive Analytics Engine Built for Scale"}
            subtitle={"Cloud & Infrastructure"}
            spanText={"Read the case study →"}
          />
        </ul>

      </div>
    </section>
  )
}

export default CaseStudy