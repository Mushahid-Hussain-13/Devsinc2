import React from "react";
import heroImg from "../../assets/advisory-strategy-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import CreationSteps from "../CreationSteps.jsx";
import EngineeringDiscipline from "../EngineeringDiscipline.jsx";
import Process from "../Process.jsx";
import FAQ from "../FAQ.jsx";
import { advisoryStrategyFaqs } from '../../hooks/FaqData.js';
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import PreFooter from "../PreFooter.jsx";
import EngagementModel2 from "../EngagementModel2.jsx";


const AdvisoryStrategy = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Advisory & Strategy"}
        title={"The Decisions Made Before the First Line of Code."}
        desc={
          "Roadmaps, architecture, and readiness assessments to plan your next move, delivered as a concrete deliverable, not a workshop summary."
        }
        primaryBtn={{ text: "Book a Strategy Session", to: "/" }}
        secondaryBtn={{ text: "See capabilities", to: "/" }}
      />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"Where Strategy Falls Apart Before It Reaches Delivery"}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Unclear Priorities",
            title: "Everything Is Urgent",
            desc: "Competing initiatives with no agreed sequence or owner.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Legacy Weight",
            title: "Architecture Sets the Ceiling",
            desc: "The current stack quietly limits what the roadmap can promise.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "AI Uncertainty",
            title: "Hype Beats Evidence",
            desc: "Pressure to adopt AI with no read on data readiness or payback.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Investment Risk",
            title: "Committing Blind",
            desc: "Budget approved before anyone stress tested feasibility.",
          },
        ]}
      />
      <CreationSteps
        subtitle={"Our Approach"}
        title={"Strategy from the team that also has to build it."}
        description1={"Advisory at Devsinc covers digital strategy, technology roadmapping, enterprise architecture, product strategy, technical due diligence, and AI readiness, the thinking that happens before a project is scoped."}
        description2={"Recommendations come from people who are also accountable for delivery, not a deck handed off and walked away from. You get a plan pressure tested against what is buildable, not only what is fundable."}
        label={"Frameworks & methods"}
        steps={[
          "Technology roadmaps",
          "Enterprise architecture",
          "Product discovery",
          "Technical due diligence",
          "AI readiness scoring",
          "Cost of delay analysis",
          "Capability mapping",
          "Target operating model",
        ]}
      />
      <EngineeringDiscipline />
      <Process
        subtitle={"Process"}
        title={"How We Advise"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Discovery",
            cardDesc:
              "Understanding the business context, technical landscape, and the actual decision the client needs to make.",
          },
          {
            cardNum: "02",
            cardTitle: "Assessment",
            cardDesc:
              "Evaluating architecture, data, team, or market evidence against the specific question at hand.",
          },
          {
            cardNum: "03",
            cardTitle: "Recommendation",
            cardDesc:
              "Delivering a roadmap, architecture, or go or no go recommendation with the reasoning shown.",
          },
          {
            cardNum: "04",
            cardTitle: "Handoff to Delivery",
            cardDesc:
              "Connecting the recommendation directly to the Devsinc team that would execute it.",
          },
        ]}
      />
      <EngagementModel2
        subtitle={"Engagement Models"}
        title={"Two ways to bring us in"}
        items={[
          {
            subtitle: "Time boxed",
            number: "01",
            title: "Advisory Sprint",
            desc: "A focused two to four week assessment, roadmap, or diligence review that ends in a concrete deliverable.",
            lastSpan: "Best for a defined question",
          },
          {
            subtitle: "Ongoing",
            number: "02",
            title: "Ongoing Advisory",
            desc: "Continued strategic input alongside an active build, so the plan keeps adjusting as delivery reveals what is actually true.",
            lastSpan: "Best for continuous alignment",
          },
        ]}
      />
      <FAQ {...advisoryStrategyFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Ready for a plan you can actually build against?"}
        description={"Bring your current strategy, roadmap, or the decision you are trying to make."}
        queryList={[
          "Bring your current strategy, roadmap, or the decision you are trying to make",
          "One focused conversation mapping where advisory work moves you forward fastest",
          "A concrete deliverable, not just a workshop"
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default AdvisoryStrategy;
