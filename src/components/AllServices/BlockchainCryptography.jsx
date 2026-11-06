import React from "react";
import heroImg from "../../assets/blockchain-development-hero-bg.webp";
import industry1 from "../../assets/industry1.webp";
import industry2 from "../../assets/industry2.webp";
import industry3 from "../../assets/industry5.webp";
import industry4 from "../../assets/industry6.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import OurClients from "../OurClients.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import CreationSteps from "../CreationSteps.jsx";
import EngagementModel3 from "../EngagementModel3.jsx";
import Process from "../Process.jsx";
import IndustriesServed from "../IndustriesServed.jsx";
import FAQ from "../FAQ.jsx";
import { blockchainFaqs } from "../../hooks/FaqData.js";
import PreFooter from "../PreFooter.jsx";

const BlockchainCryptography = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Blockchain and Cryptography"}
        title={"Blockchain Infrastructure Built to Verify."}
        desc={
          "Smart contracts, Web3 applications, and AI powered chain intelligence, audited for security and built for real transactions."
        }
        primaryBtn={{ text: "Discuss Your Blockchain Project", to: "/" }}
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
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"Where Blockchain Projects Break Down"}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Security Risk",
            title: "One Bug Away From Exploit",
            desc: "Smart contract vulnerabilities are permanent once deployed, and a single exploit can drain funds instantly.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Regulatory Uncertainty",
            title: "Compliance Rules Keep Shifting",
            desc: "Token and custody rules vary by jurisdiction and shift faster than legal teams can track.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "Scalability Limits",
            title: "Networks That Cannot Handle Volume",
            desc: "Public chains slow down and grow expensive exactly when transaction volume starts to increase.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Integration Gap",
            title: "Legacy Systems Do Not Speak Chain",
            desc: "Connecting enterprise systems to a blockchain layer takes specialized engineering most teams do not have.",
          },
        ]}
      />
      <CreationSteps
        subtitle={"Our Approach"}
        title={"Built for Production, Not Pitch Decks."}
        description1={
          "Devsinc engineers blockchain systems the same way we engineer any production software, with security review, load testing, and a real deployment plan, not a proof of concept that never leaves the whitepaper. Smart contracts are audited before they touch real funds, and infrastructure is built to handle actual transaction volume from day one."
        }
        description2={
          "We work across public and permissioned chains, choosing the right architecture for the actual use case rather than defaulting to whatever is trending. Web3 front ends, wallet connected applications, and AI models that monitor chain activity for fraud and anomalies are engineered with the same security discipline as the contracts underneath them."
        }
        label={"What we build"}
        steps={[
          "Smart Contract Audits",
          "Web3 Product Engineering",
          "DeFi Protocol Engineering",
          "AI Powered Chain Intelligence",
          "Wallet Integration",
          "Layer 2 Scaling",
          "Custody Architecture",
          "Cross Chain Bridges",
        ]}
      />
      <EngagementModel3
        subtitle={"Engagement Models"}
        title={"Choose how we work with you"}
        items={[
          {
            subtitle: "Fixed Scope",
            title: "Smart Contract Audit",
            number: "01",
            desc: "An independent security review of existing smart contracts before mainnet launch, delivered as a scored report with concrete remediation steps.",
            lastSpan: "Best for pre launch security review"
          },
          {
            subtitle: "Ongoing",
            title: "Embedded Blockchain Team",
            number: "02",
            desc: "A dedicated blockchain engineering team embedded in your roadmap for continuous protocol development and security review.",
            lastSpan: "Best for continuous protocol development"
          },
          {
            subtitle: "Project Based",
            title: "Full Protocol Build",
            number: "03",
            desc: "End to end delivery of a blockchain protocol or tokenization platform, from architecture through mainnet launch.",
            lastSpan: "Best for a defined platform launch"
          },
        ]}
      />
      <Process
        subtitle={"Process"}
        title={"From architecture to audited mainnet"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Discovery and Architecture",
            cardDesc:
              "Defining the right chain, token model, and security requirements before writing code.",
          },
          {
            cardNum: "02",
            cardTitle: "Build and Test",
            cardDesc:
              "Smart contracts and infrastructure built with continuous testing against real transaction scenarios.",
          },
          {
            cardNum: "03",
            cardTitle: "Security Audit",
            cardDesc:
              "Independent review of every contract and system before it ever touches mainnet.",
          },
          {
            cardNum: "04",
            cardTitle: "Launch and Monitor",
            cardDesc:
              "Mainnet deployment followed by ongoing monitoring, incident response, and protocol upgrades.",
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
            text: "Gaming",
            desc: "In game asset ownership and marketplace infrastructure built on chain.",
          },
          {
            image: industry4,
            text: "Supply Chain",
            desc: "Provenance tracking and verification systems for goods moving across borders.",
          },
        ]}
      />
      <FAQ {...blockchainFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Build Blockchain That Ships."}
        description={"Bring your idea, your chain, or your existing contracts to review."}
        queryList={[
          "Bring your protocol idea or existing smart contracts",
          "One conversation to scope chain, security, and timeline",
          "A concrete recommendation, not just a sales pitch",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default BlockchainCryptography;
