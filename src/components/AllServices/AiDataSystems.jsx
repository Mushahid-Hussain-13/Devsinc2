import React from "react";
import heroImg from "../../assets/ai-data-solutions-hero-bg.webp";
import industry1 from "../../assets/industry1.webp";
import industry2 from "../../assets/industry6.webp";
import industry3 from "../../assets/industry3.webp";
import industry4 from "../../assets/industry5.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import Process from "../Process.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import EngineeringDiscipline from "../EngineeringDiscipline.jsx";
import Idea from "../Idea";
import Footer from "../Footer";
import IndustriesServed from "../IndustriesServed.jsx";
import EngagementModel3 from "../EngagementModel3.jsx";
import FAQ from "../FAQ.jsx";
import { AidataSystems } from "../../hooks/FaqData.js";
import PreFooter from "../PreFooter.jsx";


const AiDataSystems = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Artificial Intelligence"}
        title={"AI That Ships to Production, Not Just to Slides."}
        desc={
          "Data foundations solid enough to trust, with agentic workflows, grounded LLM applications and production ML engineered on top."
        }
        primaryBtn={{ text: "Explore AI Transformation", to: "/" }}
      />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"Where AI & Data Initiatives Stall Before They Scale"}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Data Not Ready",
            title: "Models starved by messy data",
            desc: "Without pipelines and governance, every AI initiative starts from zero.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Endless POCs",
            title: "Demos that never reach users",
            desc: "Impressive prototypes die without the engineering to productionize them.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "Hallucination Risk",
            title: "Outputs you can't put in front of customers",
            desc: "Ungrounded LLMs are a liability in regulated, customer facing workflows.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Unclear ROI",
            title: "Spend without measurable outcomes",
            desc: "AI budgets evaporate when use cases aren't tied to business metrics.",
          },
        ]}
      />
      <EngineeringDiscipline />
      <Process
        subtitle={"Process"}
        title={"Our AI Delivery Steps"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Use Case & Readiness Assessment",
            cardDesc:
              "We score candidate use cases by value and feasibility, and audit the data that will feed them, in weeks, not quarters.",
          },
          {
            cardNum: "02",
            cardTitle: "Grounded Prototype",
            cardDesc:
              "A working prototype on your real data with evaluation baselines, accuracy measured before anything is promised.",
          },
          {
            cardNum: "03",
            cardTitle: "Productionize",
            cardDesc:
              "Guardrails, observability, cost controls, and CI for prompts and models, AI engineered like software, because it is.",
          },
          {
            cardNum: "04",
            cardTitle: "Operate & Improve",
            cardDesc:
              "Continuous evaluation, drift monitoring, and a metrics dashboard tying model performance to business outcomes.",
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
      <EngagementModel3
        subtitle={"Engagement Models"}
        title={"Three ways to bring us in"}
        items={[
          {
            subtitle: "Project based",
            title: "Full AI Build",
            number: "01",
            desc: "The team behind your AI system end to end: discovery, architecture, model development and MLOps.",
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
            title: "AI Readiness Assessment",
            number: "03",
            desc: "A short engagement scoring your data, infrastructure, and use cases, returning a costed plan.",
            lastSpan: "Best for deciding what to do",
          },
        ]}
      />
      <FAQ {...AidataSystems}/>
      <PreFooter
        subtitle={"Get Started"}
        title={"Ready to get your AI out of pilot purgatory?"}
        description={"Tell us your use case and your data, we'll map the fastest route to production."}
        queryList={[
          "Bring your use cases, your data and your compliance requirements",
          "One free readiness assessment mapping the fastest route to production",
          "Your business metric instrumented from day one",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default AiDataSystems;
