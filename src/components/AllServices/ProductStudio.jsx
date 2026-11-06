import React from "react";
import heroImg from "../../assets/mvp-development-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import FAQ from "../FAQ.jsx";
import { productstudioFaqs } from "../../hooks/FaqData.js";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import Process from "../Process.jsx";
import PreFooter from "../PreFooter.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import EngineeringDiscipline from "../EngineeringDiscipline.jsx";
import DigitalInsights from "../DigitalInsights.jsx";
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';
import blog3 from '../../assets/blog3.webp';

const ProductStudio = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Product Studio"}
        title={"Have an idea? We're here to co create."}
        desc={
          "Devsinc's product studio partners with founders to take ideas from napkin to market: validation, design, engineering, and launch, with a team that has shipped products at enterprise scale."
        }
        primaryBtn={{ text: "Scope Your MVP", to: "/" }}
        secondaryBtn={{ text: "See engagement models", to: "/" }}
      />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"Where Startup Ideas Stall Before They Ship"}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Unvalidated",
            title: "Building before proving",
            desc: "Months of engineering spent on an assumption nobody tested with a real user.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "No Tech Lead",
            title: "No technical co-founder",
            desc: "Nobody accountable for architecture, so early decisions quietly cap the ceiling.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "Runway",
            title: "Burn outpacing traction",
            desc: "Scope creeps, the launch slips, and the round has to be raised on a promise.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Not Fundable",
            title: "A demo, not a platform",
            desc: "What impressed in the pitch will not survive investor technical diligence.",
          },
        ]}
      />
      <Process
        subtitle={"The Journey"}
        title={"FroFrom napkin to market."}
        processes={[
          {
            cardTitle: "Discover & Validate",
            cardDesc:
              "Founder workshops, market analysis, and user interviews converge on a sharp problem statement and success metrics.",
          },
          {
            cardTitle: "Design & Prototype",
            cardDesc: "Clickable prototypes tested with real users, iterate while changes cost hours, not sprints.",
          },
          {
            cardTitle: "Build & Launch",
            cardDesc:
              "An embedded squad ships the MVP in weekly increments, with analytics and feedback loops wired in from the start.",
          },
          {
            cardTitle: "Scale & Hand Over",
            cardDesc:
              "We grow the product with you, or recruit and onboard your in house team and hand over a clean codebase.",
          },
        ]}
      />
      <EngineeringDiscipline />
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
      <FAQ {...productstudioFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Have an idea worth building?"}
        description={"Bring your idea, however early it is."}
        queryList={[
          "Bring your idea, however early it is",
          "One conversation to find the right engagement shape for your stage",
          "A build or no build recommendation, not just encouragement",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default ProductStudio;
