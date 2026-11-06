import React from 'react';
import heroImg from '../../assets/digital-transformation-hero-bg.webp';
import ServiceSection from '../../snippits/ServiceSection.jsx';
import OurClients from '../OurClients.jsx';
import Services from '../Services.jsx';
import Idea from '../Idea.jsx';
import Footer from '../Footer.jsx';
import TechnologyPartener from '../TechnologyPartener.jsx';
import EngagementModel from '../EngagementModel.jsx';
import Enterprise from "../Enterprise.jsx";
import PreFooter from '../PreFooter.jsx';
import TrustedByClients from '../TrustedByClients.jsx';
import DigitalInsights from '../DigitalInsights.jsx';
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';
import blog3 from '../../assets/blog3.webp';

const DigitalTransformation = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Digital Transformation"}
        title={"Enterprise Services That Turn Roadmaps Into Growth and ROI."}
        desc={"One partner for every stage of your technology roadmap, from strategy to build to the systems that keep running after launch."}
        primaryBtn={{ text: "Discuss Your Transformation", to: '/' }}
        secondaryBtn={{ text: "See all services", to: '/' }}
      />
      <OurClients
        client1heading={"3,000+"}
        client1phrase={"Successful Projects"}
        client2heading={"1,200+"}
        client2phrase={"Global Experts"}
        client3heading={"15+"}
        client3phrase={"Years of Excellence"}
        client4heading={"250+"}
        client4phrase={"Happy Clients"}
        client5heading={"23+"}
        client5phrase={"Countries Served"}
      />
      <Services />
      <TechnologyPartener />
      <TrustedByClients />
      <EngagementModel />
      <DigitalInsights
        subtitle={"Insights"}
        title={"Insights on technology, AI and innovation"}
        btnText={"Explore More"}
        items={[
          {
            image: blog1,
            label: "Blog",
            labelText: "6 min read",
            title: "Where AI belongs in enterprise applications",
            desc: "The workflows where AI creates measurable leverage, and the ones where it only adds noise.",
            linkText: "Read the article",
          },
          {
            image: blog2,
            label: "Guide",
            labelText: "6 pages",
            title: "The Salesforce Maturity Model",
            desc: "Find out which of the 5 maturity stages your organization is actually in, and what staying there is quietly costing you every quarter.",
            linkText: "Read the guide",
          },
          {
            image: blog3,
            label: "News",
            labelText: "Augest 2026",
            title: "IGI Insurance Partners with Devsinc to Build a Digital-First Future for Insurance",
            desc: "Devsinc and IGI General Insurance launch Phase 1 of the IGI Insurance Mobile App, delivering a seamless digital insurance experience across Pakistan.",
            linkText: "Read the release",
          },
        ]}
      />
      <Enterprise />
      <PreFooter
        subtitle={"Get Started"}
        title={"Not sure which service you need first?"}
        description={"Tell us where you are today and where it needs to go. You will hear back from a Devsinc lead with a scoped starting point, not a generic sales sequence."}
        queryList={[
          "Bring your current roadmap, systems, and the outcome you are after",
          "One free scoping call mapping the right entry point and sequence",
          "A named Devsinc lead, not a rotating sales queue"
        ]}
      />
      <Idea />
      <Footer />
    </>
  )
}

export default DigitalTransformation