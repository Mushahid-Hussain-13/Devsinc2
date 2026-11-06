import React from "react";
import ServiceSection from "../../snippits/ServiceSection";
import heroImg from "../../assets/cloud-infrastructure-hero-bg.webp";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import FAQ from "../FAQ.jsx";
import { cloudinfrastructureFaqs } from "../../hooks/FaqData.js";
import EngineeringDiscipline from "../EngineeringDiscipline.jsx";
import Process from "../Process.jsx";
import IndustriesServed from "../IndustriesServed.jsx";
import industry1 from "../../assets/industry1.webp";
import industry2 from "../../assets/industry2.webp";
import industry3 from "../../assets/industry3.webp";
import industry4 from "../../assets/industry4.webp";
import CreationSteps from "../CreationSteps.jsx";
import PreFooter from "../PreFooter.jsx";
import EngagementModel2 from "../EngagementModel2.jsx";

const CloudInfrastructure = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Cloud & Infrastructure"}
        title={"Infrastructure that runs reliably, securely, predictably."}
        desc={
          "We migrate, modernize, and run systems on AWS, Azure, and GCP, architected for security, observability, and cost control from day one, not bolted on after an incident."
        }
        primaryBtn={{ text: "Get a Cloud Assessment", to: "/" }}
      />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"Where Cloud Environments Break Down Before They Scale"}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Migration Risk",
            title: "Downtime nobody signed up for",
            desc: "Moving systems to the cloud without a staged plan risks the business mid move.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Runaway Spend",
            title: "Cost nobody's tracking",
            desc: "Without right sizing and reserved capacity, cloud bills grow faster than usage does.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "Security Gaps",
            title: "Compliance bolted on too late",
            desc: "Security folded in after deployment is an audit finding waiting to happen.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "No One's On Call",
            title: "Outages with no clear owner",
            desc: "Infrastructure without SRE ownership means outages become someone's emergency.",
          },
        ]}
      />
      <CreationSteps
        subtitle={"How We Run Cloud & Infrastructure"}
        title={"One team for migration, security, and uptime."}
        description1={
          "Cloud & Infrastructure at Devsinc covers moving systems to the cloud, engineering the platforms they run on, securing them, and keeping cost and uptime under control, across AWS, Azure, and GCP."
        }
        description2={
          "When we say cloud infrastructure, we mean the team that stays accountable after migration day, not a consultancy that hands you an architecture diagram and disappears. You keep the accounts and the ownership; we handle the engineering, the security posture, and the incident response."
        }
        label={"What we run"}
        steps={[
          "Cloud Migration",
          "Platform Engineering",
          "Kubernetes & Containers",
          "CI/CD Automation",
          "Cloud Security & Compliance",
          "FinOps & Cost Control",
          "Observability & Monitoring",
          "SRE & On-call Support",
        ]}
      />
      <EngineeringDiscipline />
      <Process
        subtitle={"Process"}
        title={"How an engagement runs"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Assessment & Architecture",
            cardDesc:
              "Auditing current infrastructure, cost, and security posture, then designing the target architecture.",
          },
          {
            cardNum: "02",
            cardTitle: "Migration / Build",
            cardDesc:
              "Executing the move or the build in staged, reversible increments.",
          },
          {
            cardNum: "03",
            cardTitle: "Security & Optimization Hardening",
            cardDesc:
              "Locking down security posture and eliminating unnecessary cost.",
          },
          {
            cardNum: "04",
            cardTitle: "Operate & Improve",
            cardDesc:
              "Ongoing SRE support, monitoring, and continuous cost and performance tuning.",
          },
        ]}
      />
      <IndustriesServed
        subtitle={"Industries we serve"}
        title={"Infrastructure for the industries that can’t go down"}
        btnText={"Explore More"}
        btnUrl={"#"}
        industries={[
          {
            image: industry1,
            text: "Financial Services",
            desc: "Infrastructure built to regulated uptime and audit requirements.",
          },
          {
            image: industry2,
            text: "Healthcare",
            desc: "Cloud environments architected around compliance from the start.",
          },
          {
            image: industry3,
            text: "E-Commerce & Retail",
            desc: "Infrastructure that survives peak traffic events without falling over.",
          },
          {
            image: industry4,
            text: "SaaS & B2B Software",
            desc: "Multi tenant infrastructure engineered to scale with customer growth.",
          }
        ]}
      />
      <EngagementModel2
        subtitle={"Engagement Models"}
        title={"Two ways to bring us in"}
        items={[
          {
            subtitle: "Ongoing",
            number: "01",
            title: "Embedded Team",
            desc: "Cloud and SRE engineers embedded in your team for ongoing infrastructure work.",
            lastSpan: "Best for continuous operations",
          },
          {
            subtitle: "Project based",
            number: "02",
            title: "Full Migration / Build",
            desc: "End to end ownership of a migration or a new cloud platform build.",
            lastSpan: "Best for a defined outcome",
          },
        ]}
      />
      <FAQ {...cloudinfrastructureFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Ready for infrastructure that just runs?"}
        description={"Bring your current environment and your cost concerns, we'll map priorities on the first call."}
        queryList={[
          "Bring your current environment and your cost concerns",
          "One free infrastructure assessment mapping migration, security, or optimization priorities",
          "Clear next steps within the first call",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default CloudInfrastructure;
