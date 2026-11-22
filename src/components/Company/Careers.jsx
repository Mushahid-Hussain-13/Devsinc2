import React from 'react';
import CareersHeroSection from './CompanySnippits/CareersHeroSection.jsx';
import PreFooter from '../PreFooter.jsx';
import Footer from '../Footer.jsx';
import CareerStartHere from './CompanySnippits/CareerStartHere.jsx';
import CareerFuture from './CompanySnippits/CareerFuture.jsx';
import CareerBenefits from './CompanySnippits/CareerBenefits.jsx';
import Process from '../Process.jsx';
import CareerEquity from './CompanySnippits/CareerEquity.jsx';

const Careers = () => {
  return (
    <>
      <CareersHeroSection />
      <CareerStartHere />
      <CareerFuture />
      <CareerBenefits />
      <CareerEquity />
      <Process
        subtitle={"Process"}
        title={"Hiring process"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Take the first step",
            cardDesc: "Submit your application through our careers page. Our recruitment team will review your profile and reach out if your experience aligns with the role."
          },
          {
            cardNum: "02",
            cardTitle: "HR Screening",
            cardDesc: "Have a conversation with our HR team to discuss your experience, skills, career goals, and expectations, and learn more about the role and Devsinc."
          },
          {
            cardNum: "03",
            cardTitle: "Technical Evaluation",
            cardDesc: "Depending on the role, you'll go through a technical assessment or interview designed to evaluate your technical expertise, problem-solving skills, and practical knowledge."
          },
          {
            cardNum: "04",
            cardTitle: "Offer & Onboarding",
            cardDesc: "If selected, we'll extend an offer and guide you through the onboarding process so you can start your journey with us smoothly."
          },
        ]}
      />
      <PreFooter
        subtitle={"Apply Now"}
        title={"Don't see the exact role? Tell us anyway."}
        description={"Share your background and what you're looking for. Our talent team reviews every application and reaches out when there's a real fit, open role or not."}
        queryList={[
          "Every application reviewed by a real person, not a filter",
          "A response either way within two weeks",
          "Remote-friendly and hybrid roles across our global offices",
          "Referred straight to the right hiring manager for your field",
        ]}
      />
      <Footer />
    </>
  )
}

export default Careers