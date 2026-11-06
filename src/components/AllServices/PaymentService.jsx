import React from "react";
import heroImg from "../../assets/payment-as-a-service-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import OurClients from "../OurClients.jsx";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import CreationSteps from "../CreationSteps.jsx";
import KeyDifference from "../KeyDifference.jsx";
import EngagementModel2 from "../EngagementModel2.jsx";
import Process from "../Process.jsx";
import FAQ from "../FAQ.jsx";
import { paymentServiceFaqs } from "../../hooks/FaqData.js";
import IndustriesMarquee from "../IndustriesMarquee.jsx";
import PreFooter from "../PreFooter.jsx";

const PaymentService = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Payment as a Service"}
        title={"Payment infrastructure engineered for scale and compliance."}
        desc={
          "Gateway integration, orchestration, and PCI DSS compliant payment APIs, engineered end to end by one team, not stitched together across vendors."
        }
        primaryBtn={{ text: "Discuss Your Payment Stack", to: "/" }}
      />
      <OurClients
        client1heading={"15+ yrs"}
        client1phrase={"Building websites for brands and enterprises"}
        client2heading={"5+"}
        client2phrase={"Payment platforms delivered"}
        client3heading={"16M+"}
        client3phrase={"Transactions processed monthly"}
        client4heading={"2+"}
        client4phrase={"PCI DSS compliances handled"}
        client5heading={"40+"}
        client5phrase={"Payment integrations delivered"}
      />
      <CreationSteps
        subtitle={"How We Engineer Payments"}
        title={"One team for gateways, integrations and compliance."}
        description1={
          "We design, build and integrate payment systems for platforms handling real transaction volume, connecting you to the providers your business already relies on, then layer in the orchestration, reporting and compliance work that keeps those payments reliable and auditable."
        }
        description2={
          "Payment as a Service means a dedicated engineering team building your payment stack, not infrastructure you rent. You keep ownership and control; we take on the engineering and compliance behind it."
        }
        label={"What we deliver"}
        steps={[
          "Premier PayFast",
          "PayPro",
          "P2M",
          "BaadMay",
          "Bkyea",
          "UnumPay",
        ]}
      />
      <KeyDifference
        subtitle={"The difference"}
        title={"Why teams pick us over a payments vendor"}
        differences={[
          {
            heading: "We ship our own payment products.",
            description:
              "PayFast, PayPro, P2M, BaadMay and UnumPay were built by this team. We hit provider and compliance limits before your roadmap does.",
          },
          {
            heading: "Compliance is in scope, not an add on.",
            description:
              "PCI DSS alignment, tokenization and fraud monitoring are designed in from architecture, so audits do not stall your launch.",
          },
          {
            heading: "You own the system we build.",
            description:
              "No rented rails or locked processor. Orchestration routes across providers, and the codebase and data stay yours.",
          },
        ]}
      />
      <IndustriesMarquee />
      <Process
        subtitle={"Process"}
        title={"How we deliver payment systems."}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Discovery",
            cardDesc:
              "Scope your providers, platforms, volumes and compliance requirements in a free call.",
          },
          {
            cardNum: "02",
            cardTitle: "Architecture and Design",
            cardDesc:
              "Define the gateway, orchestration and data flow before writing code.",
          },
          {
            cardNum: "03",
            cardTitle: "Development and Integration",
            cardDesc:
              "Build and connect gateways, plugins, SDKs and APIs in agile sprints.",
          },
          {
            cardNum: "04",
            cardTitle: "Testing and Compliance Audit",
            cardDesc:
              "Functional testing, security review and PCI DSS alignment before launch.",
          },
          {
            cardNum: "05",
            cardTitle: "Launch and Support",
            cardDesc:
              "Go live, then ongoing monitoring, reconciliation and maintenance.",
          },
        ]}
      />
      <EngagementModel2
        subtitle={"Engagement Models"}
        title={"Two ways to bring us in"}
        items={[
          {
            subtitle: "Ongoing",
            number: "01",
            title: "Dedicated Team Extension",
            desc: "Payment engineers embedded directly into your team, working in your pipeline, for when you need delivery power without hiring overhead.",
            lastSpan: "Best for continuous delivery",
          },
          {
            subtitle: "Project based",
            number: "02",
            title: "Full Studio Build",
            desc: "The team behind your payment stack end to end, owning gateway development, orchestration and compliance from design through launch.",
            lastSpan: "Best for a defined outcome",
          },
        ]}
      />
      <FAQ {...paymentServiceFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Scope your payment stack."}
        description={
          "You will speak to a payments engineer, not a sales rep, and leave with a build sequence you can act on."
        }
        queryList={[
          "Bring your current gateways, markets, and volume",
          "One free payment architecture review mapping routing, reconciliation, and PCI scope",
          "A build sequence with effort and integration risk called out per provider",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default PaymentService;
