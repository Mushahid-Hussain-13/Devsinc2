import React from "react";
import industry1 from "../../assets/industry1.webp";
import industry2 from "../../assets/industry3.webp";
import industry3 from "../../assets/industry4.webp";
import industry4 from "../../assets/industry9.webp";
import heroImg from "../../assets/power-platform-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import { microsoftPowerPlatform } from "../../hooks/FaqData.js";
import FAQ from "../FAQ.jsx";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import PreFooter from "../PreFooter.jsx";
import OurClients from "../OurClients.jsx";
import MicrosoftPowerTransformation from "./SolutionSnippits/MicrosoftPowerTransformation.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import MicrosoftServiceOffering from "./SolutionSnippits/MicrosoftServiceOffering.jsx";
import {
  BookCheck,
  CodeXml,
  Scaling,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import IndustriesServed from "../IndustriesServed.jsx";
import Process from "../Process.jsx";
import MicrosoftPowerSolutions from "./SolutionSnippits/MicrosoftPowerSolutions.jsx";

const MicrosoftPowerPlatform = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"MICROSOFT PARTNER"}
        title={"Agentic Dynamics 365, engineered for growth."}
        desc={
          "Unlock smarter selling, faster service, and profitable growth with an agentic ERP and CRM suite built to deliver results."
        }
        primaryBtn={{ text: "Discuss Your Dynamics 365 Project", to: "/" }}
        secondaryBtn={{ text: "See the modules", to: "/" }}
      />
      <OurClients
        client1heading={"120+"}
        client1phrase={"Power Platform projects delivered"}
        client2heading={"50+"}
        client2phrase={"Certified Power Platform Consultants"}
        client3heading={"6"}
        client3phrase={"Global offices (US, EU, MENA, APAC)"}
        client4heading={"60%"}
        client4phrase={"Reduction in Manual Process Time"}
        client5heading={"23+"}
        client5phrase={"Countries Served"}
      />
      <MicrosoftPowerTransformation />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"What slows enterprise delivery down."}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Manual work",
            title: "Repetitive tasks absorb skilled capacity",
            desc: "Approvals, data entry and handoffs still run on spreadsheets and email, so teams maintain process instead of improving it.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Disconnected data",
            title: "Reporting arrives too late to act on",
            desc: "Numbers live in separate systems and are reconciled by hand, so leadership decides on data that's already stale.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "Delivery backlog",
            title: "Business requests wait behind IT capacity",
            desc: "Tools that would take weeks to build sit in a queue for months, and teams work around the gap with shadow systems.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Governance gaps",
            title: "Low code adoption grows without controls",
            desc: "Apps and flows multiply across departments with no shared standards for security or maintainability.",
          },
        ]}
      />
      <MicrosoftPowerSolutions />
      <div className="microsoft-power-platform-service">
        <MicrosoftServiceOffering
          subtitle={"Services across the platform"}
          title={"Our support across the full Power Platform lifecycle."}
          items={[
            {
              icon: <BookCheck />,
              title: "Strategy and Assessment",
              desc: "We audit your current platform, uncover high value use cases, and build a roadmap that aligns investment with priorities.",
            },
            {
              icon: <CodeXml />,
              title: "Implementation and Custom Development",
              desc: "Our team takes you from proof of concept to full scale deployment, with AI Builder and Copilot built in where it calls for it.",
            },
            {
              icon: <ShieldCheck />,
              title: "Center of Excellence Setup",
              desc: "We help you stand up the frameworks, policies, and tooling an AI agent needs before it goes live.",
            },
            {
              icon: <Scaling />,
              title: "Integration Services",
              desc: "We connect your Power Platform solutions with Dynamics 365, Azure AI, Microsoft 365, and your other critical systems.",
            },
            {
              icon: <UserCog />,
              title: "Managed Support and Adoption",
              desc: "Our team stays on to provide ongoing support, training, and change management.",
            },
          ]}
        />
      </div>
      <IndustriesServed
        subtitle={"Industries we serve"}
        title={"Where verifiable ownership matters most"}
        btnText={"Explore More"}
        btnUrl={"#"}
        industries={[
          {
            image: industry1,
            text: "Healthcare and Life Sciences",
            desc: "Patient and clinical workflows automated inside compliance boundaries, with access controlled at the record level.",
          },
          {
            image: industry2,
            text: "Retail and E commerce",
            desc: "Store, inventory and customer data unified so frontline teams act on one live view.",
          },
          {
            image: industry3,
            text: "Manufacturing and Supply Chain",
            desc: "Field ready apps and offline capture connected to planning, quality and supplier processes.",
          },
          {
            image: industry4,
            text: "Public Sector and Government",
            desc: "Dealer, parts and service operations connected end to end.",
          },
        ]}
      />
      <Process
        subtitle={"How We Work"}
        title={"From quick win to scaled rollout."}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Discovery Workshop",
            cardDesc: "We sit down with your team in a short, focused session to identify quick win use cases worth pursuing first.",
          },
          {
            cardNum: "02",
            cardTitle: "Proof of Concept",
            cardDesc: "We build you a working prototype in weeks, not months, so you see real value before committing further.",
          },
          {
            cardNum: "03",
            cardTitle: "Full Implementation",
            cardDesc: "Whether you need a dedicated team or extra hands alongside your own, we deliver full implementations that are built to scale.",
          },
          {
            cardNum: "04",
            cardTitle: "Copilot & AI Enablement",
            cardDesc: "We layer Copilot Studio and AI Builder onto the rollout once the core workflow is proven, with guardrails and escalation rules defined before any agent goes live.",
          },
          {
            cardNum: "05",
            cardTitle: "Ongoing Support",
            cardDesc: "Our managed support keeps your solutions running, evolving, and improving long after go live.",
          },
        ]}
      />
      <FAQ {...microsoftPowerPlatform} />
      <PreFooter
        subtitle={"Get Started"}
        title={
          "Ready to modernize how your business builds, automates, and analyzes?"
        }
        description={
          "Let's design a Power Platform solution built around your goals. Send us your current setup and the outcome you are after."
        }
        queryList={[
          "Certified Power Platform consultants, no subcontracting",
          "A phased plan with a working proof of concept in weeks",
          "Copilot Studio and AI Builder assessed against your own data",
          "A written scope and sequence, no lock in required to get it",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default MicrosoftPowerPlatform;
