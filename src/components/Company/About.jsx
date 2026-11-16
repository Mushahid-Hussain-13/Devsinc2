import React from "react";
import AboutHeroSection from "./CompanySnippits/AboutHeroSection.jsx";
import OurMission from "./CompanySnippits/OurMission.jsx";
import Idea from '../Idea.jsx';
import Footer from "../Footer.jsx";
import ClientReviews from "../ClientReviews.jsx";
import Blogs from "../Blogs.jsx";
import DigitalInsights from "../DigitalInsights.jsx";
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';
import blog3 from '../../assets/blog3.webp';
import DevsincValues from "./CompanySnippits/DevsincValues.jsx";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <OurMission />
      <DevsincValues />
      <ClientReviews />
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
      <Blogs />
      <Footer />
    </>
  );
};

export default About;
