import React from "react";
import industry1 from "../../assets/industry3.webp";
import industry2 from "../../assets/industry7.webp";
import industry3 from "../../assets/industry4.webp";
import industry4 from "../../assets/industry8.webp";
import heroImg from "../../assets/application-engineering-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import Footer from "../Footer.jsx";
import Idea from "../Idea.jsx";
import CaseStudy from "../CaseStudy.jsx";
import OurClients from "../OurClients.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import EngineeringDiscipline from "../EngineeringDiscipline.jsx";
import Process from "../Process.jsx";
import FAQ from "../FAQ.jsx";
import { applicationEngineeringFaqs } from "../../hooks/FaqData.js";
import CreationSteps from '../CreationSteps.jsx';
import PreFooter from "../PreFooter.jsx";
import TrustedByClients from "../TrustedByClients.jsx";
import EngagementModel3 from "../EngagementModel3.jsx";
import IndustriesServed from "../IndustriesServed.jsx";

const ApplicationEngineering = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Application Engineering"}
        title={"The Foundation Behind Every Successful Software Solution."}
        desc={
          "Software engineered around how your business actually works, with AI built into the workflows where it earns its place, not bolted on afterwards."
        }
        primaryBtn={{ text: "Scope your build", to: "/" }}
        secondaryBtn={{ text: "See what we build", to: "/" }}
      />
      <OurClients
        client1heading={"90+"}
        client1phrase={"Clients served"}
        client2heading={"450+"}
        client2phrase={"Engineering experts"}
        client3heading={"50+"}
        client3phrase={"Projects delivered"}
        client4heading={"10+"}
        client4phrase={"Years in custom software"}
        client5heading={"23+"}
        client5phrase={"Countries Served"}
      />
      <TrustedByClients />
      <CreationSteps
        subtitle={"Our Approach"}
        title={"One engineering team, from architecture to release."}
        description1={"We design, build, and modernize the software that runs your business: custom platforms, web and mobile applications, and the interfaces your people use every day. One accountable team owns delivery end to end, so nothing is lost between handoffs."}
        description2={"Every application sits on a shared services and data layer, so a new channel, integration, or AI-assisted workflow extends what you already run. The same team then operates and extends it, so improvements ship as part of normal delivery rather than a new project."}
        label={"What we engineer"}
        steps={[
          "Custom Platforms",
          "Website Development",
          "Web Applications",
          "Mobile Applications",
          "UI/UX Design",
          "System Integrations",
          "Legacy Modernization",
          "AI-Assisted Workflows",
          "Support & Evolution",
        ]}
      />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"What’s Actually Slowing Your Software Down?"}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Generic Software",
            title: "One-Size-Fits-None",
            desc: "Generic tools force you to work around them.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Manual Processes",
            title: "Wasted Time Daily",
            desc: "Repetitive tasks slow your team down every day.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "Disconnected Systems",
            title: "Data Silos Everywhere",
            desc: "Disconnected tools mean data never tells the full story.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Limited Flexibility",
            title: "Can't Adapt Fast",
            desc: "Rigid software can't keep up with changing needs.",
          }
        ]}
      />
      <EngineeringDiscipline />
      <EngagementModel3
        subtitle={"Engagement Models"}
        title={"Three ways to bring us in"}
        items={[
          {
            subtitle: "Project based",
            title: "Full Product Build",
            number: "01",
            desc: "End to end ownership of a platform, web app, or mobile app, from architecture through to release and handover.",
            lastSpan: "Best for a defined outcome",
          },
          {
            subtitle: "Ongoing",
            title: "Embedded AI Team",
            number: "02",
            desc: "AI engineers and ML specialists working inside your team and your sprints, for production velocity.",
            lastSpan: "Best for continuous delivery",
          },
          {
            subtitle: "Fixed scope",
            title: "Discovery & Modernization Plan",
            number: "03",
            desc: "A short engagement scoring your data, infrastructure, and use cases, returning a costed plan.",
            lastSpan: "Best for deciding what to do",
          },
        ]}
      />
      <Process
        subtitle={"Process"}
        title={"Our Custom Software Development Steps"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Requirements & Planning",
            cardDesc: "We start by understanding your business goals, current workflows, and software requirements, defining a clear roadmap before development begins.",
          },
          {
            cardNum: "02",
            cardTitle: "Architecture & Prototype",
            cardDesc: "Our team designs the system architecture and creates prototypes that validate the approach before a single production line of code is written.",
          },
          {
            cardNum: "03",
            cardTitle: "Development & Testing",
            cardDesc: "Senior engineers build in short, reviewable increments, with automated testing, code review, and continuous integration throughout.",
          },
          {
            cardNum: "04",
            cardTitle: "Deployment & Support",
            cardDesc: "We ship to production with zero downtime deployment strategies, then stay on, monitoring, maintaining, and evolving the product.",
          },
        ]}
      />
      <CaseStudy />
      <IndustriesServed
        subtitle={"Industries we serve"}
        title={"Where verifiable ownership matters most"}
        btnText={"Explore More"}
        btnUrl={"#"}
        industries={[
          {
            image: industry1,
            text: "Retail & CPG",
            desc: "Unified commerce, inventory and store operations.",
          },
          {
            image: industry2,
            text: "Hospitality",
            desc: "Property, guest and revenue data in one ledger.",
          },
          {
            image: industry3,
            text: "Automotive",
            desc: "Dealer, parts and service operations connected end to end.",
          },
          {
            image: industry4,
            text: "Conglomerates",
            desc: "Multi-entity finance and consolidated reporting.",
          },
        ]}
      />
      <FAQ {...applicationEngineeringFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Scope your build with a senior engineer"}
        description={"Tell us what you run today and where it breaks. You will get an engineering read on scope, sequence, and effort, not a sales pitch."}
        queryList={[
          "A senior engineer on the first call, not an account manager",
          "Scope, sequence, and effort mapped against your existing stack",
          "Full IP ownership of everything we design and ship",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default ApplicationEngineering;
