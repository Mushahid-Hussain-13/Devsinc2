import React from "react";
import heroImg from "../../assets/architectural-visualization-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import FAQ from "../FAQ.jsx";
import { ArchitecturalVisualizeFaqs } from "../../hooks/FaqData.js";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import Process from "../Process.jsx";
import EngagementModel3 from "../EngagementModel3.jsx";
import CreationSteps from "../CreationSteps.jsx";
import CaseStudy from "../CaseStudy.jsx";
import PreFooter from "../PreFooter.jsx";

const ArchitecturalVisualization = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Architectural Visualization"}
        title={"Sell the building before the first slab is poured."}
        desc={
          "Built for off-plan developers and master-planned communities. From concept to launch, one complete visualization platform."
        }
        primaryBtn={{ text: "Discuss Your Visualization Project", to: "/" }}
        secondaryBtn={{ text: "Explore the capabilities", to: "/" }}
      />
      <CreationSteps
        subtitle={"How We Visualize"}
        title={"One studio for renders, film, and interactive twins."}
        description1={
          "We build the visual layer that sells and manages real estate before it's built, turning architectural documentation into renders, films, interactive tours and BIM-linked digital twins that move buyers and align stakeholders."
        }
        description2={
          "One production pipeline covers the whole lifecycle: photorealistic marketing renders for launch, cinematic flythroughs for investor presentations, real-time configurators for the sales floor, and live digital twins for construction phasing."
        }
        label={"What we deliver"}
        steps={[
          "Photorealistic renders",
          "Cinematic fly throughs",
          "Interactive virtual tours",
          "BIM digital twins",
          "VR property experiences",
          "CAD/BIM integration",
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
        subtitle={"Project Intake"}
        title={"From kickoff to live deployment"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Project Intake",
            cardDesc:
              "Architectural documentation review, asset organization, brief alignment.",
          },
          {
            cardNum: "02",
            cardTitle: "Blockout Review",
            cardDesc:
              "First 3D pass for approval before final push.",
          },
          {
            cardNum: "03",
            cardTitle: "Production",
            cardDesc:
              "High-fidelity materials, lighting, interactivity, animation.",
          },
          {
            cardNum: "04",
            cardTitle: "Refinement & Deploy",
            cardDesc: "Feedback integration, performance tuning, platform deployment.",
          },
          {
            cardNum: "05",
            cardTitle: "Live & Support",
            cardDesc: "Kiosk setup, web embedding, continuous support.",
          },
        ]}
      />
      <CaseStudy />
      <FAQ {...ArchitecturalVisualizeFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Scope your pilot with a visualization lead"}
        description={"Send your drawings and your launch date. You get a scope, a timeline, and a fixed pilot price. No sales pitch."}
        queryList={[
          "One flagship unit or masterplan zone, rendered in real time",
          "A fixed pilot price you can budget the full build against",
          "A finished deliverable you own, whether or not you continue",
          "A production plan that scales straight into full delivery",
        ]}
      />
      <Idea />
      <Footer />
    </>
  )
}

export default ArchitecturalVisualization