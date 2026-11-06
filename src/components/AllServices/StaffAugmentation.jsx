import React from "react";
import heroImg from "../../assets/staff-augmentation-hero-bg.webp";
import industry1 from "../../assets/industry1.webp";
import industry2 from "../../assets/industry6.webp";
import industry3 from "../../assets/industry3.webp";
import industry4 from "../../assets/industry5.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import FAQ from "../FAQ.jsx";
import { staffAugmentationFaqs } from "../../hooks/FaqData.js";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import Process from "../Process.jsx";
import EngagementModel3 from "../EngagementModel3.jsx";
import OurClients from "../OurClients.jsx";
import CreationSteps from "../CreationSteps.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import IndustriesServed from "../IndustriesServed.jsx";
import CaseStudy from "../CaseStudy.jsx";
import PreFooter from "../PreFooter.jsx";
import TrustedByClients from "../TrustedByClients.jsx";

const StaffAugmentation = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Staff Augmentation"}
        title={"Your Engineering and AI Team, Embedded."}
        desc={
          "We embed vetted engineers and AI specialists inside your team from day one, so architectural decisions and production learning stay in your organization."
        }
        primaryBtn={{ text: "Scope Your Team", to: "/" }}
        secondaryBtn={{ text: "See engagement models", to: "/" }}
      />
      <OurClients
        client1heading={"1,200+"}
        client1phrase={"Global Experts"}
        client2heading={"450+"}
        client2phrase={"Engineering experts"}
        client3heading={"3,000+"}
        client3phrase={"Projects delivered"}
        client4heading={"15+"}
        client4phrase={"Years of excellence"}
        client5heading={"23+"}
        client5phrase={"Countries Served"}
      />
      <TrustedByClients />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"Where Hiring Slows Down Delivery"}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Hiring Timeline",
            title: "Months to fill one seat",
            desc: "A full time hiring cycle runs 8 to 12 weeks before anyone writes a line of code.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Skill Gap",
            title: "The specialist you cannot find",
            desc: "One niche platform or AI and ML hire can stall a roadmap, and that talent is scarce.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "IP Ownership",
            title: "Unclear who owns the work",
            desc: "Loose vendor terms leave code, models, and pipelines without a clean ownership claim.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Bench Risk",
            title: "Capacity you carry year round",
            desc: "Scaling a team for one project means paying for that headcount long after it ships.",
          },
        ]}
      />
      <CreationSteps
        subtitle={"Our Approach"}
        title={"Your Team, Not a Separate One."}
        description1={
          "Devsinc engineers and AI specialists report into your existing team structure, use your tools, and follow your process, not a detached vendor team working in parallel."
        }
        description2={
          "Production learning, architectural decisions, and model and data context stay inside your organization instead of leaving with an external team. You keep full control of the roadmap, the code, and the IP; we handle sourcing, vetting, and the employment relationship."
        }
        label={"What stays with you"}
        steps={[
          "The roadmap",
          "The code and the IP",
          "Production learning",
          "Architectural decisions",
          "Model and data context",
          "Day to day management",
          "Release cadence",
          "Team structure",
        ]}
      />
      <EngagementModel3
        subtitle={"Engagement Models"}
        title={"Choose where your team is built"}
        items={[
          {
            subtitle: "Nearshore",
            number: "01",
            title: "Nearshore Delivery",
            desc: "Engineers in aligned time zones for near real time overlap with your team working hours.",
            lastSpan: "Best for close collaboration without full onshore cost",
          },
          {
            subtitle: "Onshore",
            number: "02",
            title: "Onshore Delivery",
            desc: "Engineers based in your own region for direct, same time zone collaboration and on site availability.",
            lastSpan: "Best for regulated or client facing engagements",
          },
          {
            subtitle: "Offshore",
            number: "03",
            title: "Offshore Delivery",
            desc: "Engineers operating from our global delivery centers as a dedicated, cost efficient extension of your team.",
            lastSpan: "Best for scaling capacity cost effectively",
          },
        ]}
      />
      <Process
        subtitle={"Process"}
        title={"From open seat to shipping engineer"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Scope the Gap",
            cardDesc:
              "Define the exact skill, seniority, and time commitment needed.",
          },
          {
            cardNum: "02",
            cardTitle: "Match and Vet",
            cardDesc:
              "Candidates matched from our engineer pool, vetted for the role, shared with you for final approval.",
          },
          {
            cardNum: "03",
            cardTitle: "Onboard and Integrate",
            cardDesc:
              "Engineer joins your tools, sprints, and stand ups directly.",
          },
          {
            cardNum: "04",
            cardTitle: "Scale as Needed",
            cardDesc: "Add, reduce, or swap capacity as your roadmap changes.",
          },
        ]}
      />
      <IndustriesServed
        subtitle={"Industries we serve"}
        title={"Helping every industry put AI to work"}
        btnText={"Explore More"}
        btnUrl={"#"}
        industries={[
          {
            image: industry1,
            text: "Banking & Finance",
            desc: "Fraud detection and document intelligence grounded in regulated, auditable data.",
          },
          {
            image: industry2,
            text: "Oil, Gas, and Energy",
            desc: "Predictive maintenance and operational data pipelines for safety critical, asset heavy environments.",
          },
          {
            image: industry3,
            text: "Retail & CPG",
            desc: "Demand forecasting and personalization agents that turn transaction and inventory data into action.",
          },
          {
            image: industry4,
            text: "Travel & Hospitality",
            desc: "Booking, OTA reconciliation and support automation for platforms handling high transaction volume.",
          },
        ]}
      />
      <CaseStudy />
      <FAQ {...staffAugmentationFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Tell us the seat you need filled"}
        description={"One conversation is enough to scope the role. You get matched profiles to review, not a generic bench list."}
        queryList={[
          "Bring the skill gap or headcount you need filled",
          "One conversation to scope seniority, stack, and timeline",
          "Matched candidates within days, not weeks",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default StaffAugmentation;
