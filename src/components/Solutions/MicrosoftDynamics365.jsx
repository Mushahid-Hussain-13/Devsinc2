import React from 'react';
import heroImg from '../../assets/microsoft-dynamics-365-hero-bg.webp';
import industry1 from "../../assets/industry3.webp";
import industry2 from "../../assets/industry7.webp";
import industry3 from "../../assets/industry4.webp";
import industry4 from "../../assets/industry8.webp";
import ServiceSection from '../../snippits/ServiceSection.jsx';
import OurClients from '../OurClients.jsx';
import Idea from '../Idea.jsx';
import Footer from '../Footer.jsx';
import { micrsosoftDynamics365 } from '../../hooks/FaqData.js';
import FAQ from '../FAQ.jsx';
import IndustriesServed from '../IndustriesServed.jsx';
import Process from '../Process.jsx';
import SoftwareChallanges from '../SoftwareChallanges.jsx';
import MicrosoftEcosystem from './SolutionSnippits/MicrosoftEcosystem.jsx';
import MicrosoftDigitalTransformation from './SolutionSnippits/MicrosoftDigitalTransformation.jsx';
import MicrosoftServiceOffering from './SolutionSnippits/MicrosoftServiceOffering.jsx';
import { BotMessageSquare, ChartNoAxesColumn, Cloud, CloudUpload, FileText, Network, Rocket, ShoppingCart, Sun, Truck, User, UserCog, Users } from 'lucide-react';
import MicrosoftSolutions from './SolutionSnippits/MicrosoftSolutions.jsx';
import PreFooter from '../PreFooter.jsx';

const MicrosoftDynamics365 = () => {
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
        client1heading={"50+"}
        client1phrase={"Successful projects delivered"}
        client2heading={"50+"}
        client2phrase={"Microsoft Dynamics consultants"}
        client3heading={"6"}
        client3phrase={"Global offices (US, EU, MENA, APAC)"}
        client4heading={"10+"}
        client4phrase={"Industries served"}
        client5heading={"23+"}
        client5phrase={"Countries Served"}
      />
      <MicrosoftDigitalTransformation />
      <MicrosoftSolutions
        subtitle={"Our Solutions"}
        title={"Accelerate transformation with AI-led expertise"}
        description={"Intelligent solutions designed to transform how you operate and grow."}
        items={[
          {
            icon: <Sun />,
            title: "Artificial Intelligence",
            desc: "Shape a full Microsoft AI strategy across Copilot, GPT, machine learning, and autonomous agents that sharpen the customer experience, streamline operations, and cut cost.",
          },
          {
            icon: <Cloud />,
            title: "Cloud Transformation",
            desc: "Gain scale, flexibility, and security on a unified Azure, Dynamics 365, and Power Platform foundation that lifts team productivity and speeds up innovation.",
          },
          {
            icon: <ShoppingCart />,
            title: "Omnichannel Commerce",
            desc: "Bring e-commerce, in-store point of sale, and back-office workflows onto one omnichannel experience, with AI-driven engagement and streamlined inventory.",
          },
          {
            icon: <User />,
            title: "Customer Experience",
            desc: "Connect marketing, sales, and service into one intelligent customer journey, with a consolidated 360-degree view that drives real-time personalization and loyalty.",
          },
          {
            icon: <ChartNoAxesColumn />,
            title: "Data Insights",
            desc: "Bring scattered data into a single view and apply AI-powered analytics to understand customers and operations, personalize engagement, and make faster, growth-focused calls.",
          },
          {
            icon: <Network />,
            title: "Enterprise Modernization",
            desc: "Move from on-premises to Azure with a connected ERP strategy that links information and teams across every department, scaling resources as you grow.",
          },
          {
            icon: <Truck />,
            title: "Intelligent Supply Chain",
            desc: "Shift the supply chain from reactive to prescriptive, using Microsoft AI and Dynamics to optimize routing, inventory, and pricing and turn cost into revenue.",
          },
        ]}
      />
      <MicrosoftEcosystem />
      <div className="microsoft-software-challanges">
        <SoftwareChallanges
          subtitle={"For Decision Makers"}
          title={"Outcomes that matter on your roadmap, not just on a feature list"}
          problems={[
            {
              className: "item1",
              subtitleClass: "subtitle1",
              subtitle: "Unified Data",
              title: "A single source of truth",
              desc: "One consistent view to run the business by, replacing conflicting reports across teams.",
            },
            {
              className: "item1",
              subtitleClass: "subtitle1",
              subtitle: "Speed",
              title: "Decisions at the speed of the market",
              desc: "Centralized data means leadership acts on what is happening now, not last quarter.",
            },
            {
              className: "item2",
              subtitleClass: "subtitle2",
              subtitle: "AI Strategy",
              title: "AI as a strategic capability",
              desc: "Agentic AI becomes a lever on cost and capacity, not just a productivity add-on.",
            },
            {
              className: "item3",
              subtitleClass: "subtitle3",
              subtitle: "Market Position",
              title: "A sharper edge over competitors",
              desc: "A modern, AI-ready platform closes the gap with rivals still on legacy systems.",
            },
            {
              className: "item4",
              subtitleClass: "subtitle4",
              subtitle: "Revenue",
              title: "A direct line to revenue growth",
              desc: "Better pipeline visibility and service convert straight into revenue and margin, not just efficiency.",
            },
          ]}
        />
      </div>
      <MicrosoftServiceOffering
        subtitle={"Service offerings"}
        title={"Your Dynamics 365 partner for every stage of growth"}
        items={[
          {
            icon: <Rocket />,
            title: "Implementation",
            desc: "Backed by 50+ successful deployments, we design implementations that simplify workflows, cut complexity, and boost profitability, matched to your business objectives.",
          },
          {
            icon: <CloudUpload />,
            title: "Upgradation",
            desc: "Certified solution architects review current systems, assess existing ERP and D365 setups, and map forward-looking migration and upgrade strategies.",
          },
          {
            icon: <UserCog />,
            title: "Managed services & support",
            desc: "Proactive and reactive support, troubleshooting to performance tuning, keeping your systems agile, secure, and efficient.",
          },
          {
            icon: <BotMessageSquare />,
            title: "Agentic AI & Copilot enablement",
            desc: "Move beyond automation into agentic AI, where Copilot doesn't just assist but acts, handling repetitive tasks and surfacing real time insight.",
          },
          {
            icon: <Users />,
            title: "Training & Change Management",
            desc: "Build user confidence with guided enablement and a structured rollout plan, so new capabilities stick and adoption doesn't stall after go-live.",
          },
          {
            icon: <FileText />,
            title: "Licensing Advisory",
            desc: "Map the right mix of Dynamics 365 and Power Platform licenses to actual usage, avoiding overspend while keeping room to add capacity as you scale.",
          },
        ]}
      />
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
      <div className="microsoft-process">
        <Process
          subtitle={"Process"}
          title={"Our Dynamics 365 delivery steps"}
          processes={[
            {
              cardNum: "01",
              cardTitle: "Discovery",
              cardDesc: "We map how work moves through finance, sales and service today, so the module selection and data model follow your actual operation.",
            },
            {
              cardNum: "02",
              cardTitle: "Architecture & roadmap",
              cardDesc: "A licensing plan, data model and phased rollout sequence your team can maintain after we hand over.",
            },
            {
              cardNum: "03",
              cardTitle: "Build & validate",
              cardDesc: "Sprint based configuration with real users validating each increment against their own processes before it ships.",
            },
            {
              cardNum: "04",
              cardTitle: "Rollout & support",
              cardDesc: "Role based enablement, a hypercare window, then ongoing managed services, measured in adoption, not launch dates.",
            },
          ]}
        />
      </div>
      <FAQ {...micrsosoftDynamics365}/>
      <PreFooter
        subtitle={"Get Started"}
        title={"Ready to transform your business with Dynamics 365?"}
        description={"Our certified consultants guide you from strategy and deployment to ongoing support, every step of the way."}
        queryList={[
          "A free consultation to assess your business needs",
          "A personalized D365 implementation roadmap and cost estimate",
          "Answers on licensing, modules, or migration",
          "A live demo of Dynamics 365 tailored to your industry"
        ]}
      />
      <Idea />
      <Footer />
    </>
  )
}

export default MicrosoftDynamics365