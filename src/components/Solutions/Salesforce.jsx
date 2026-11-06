import React from 'react'
import heroImg from '../../assets/salesforce-hero-bg.webp';
import industry1 from "../../assets/industry1.webp";
import industry2 from "../../assets/industry3.webp";
import industry3 from "../../assets/industry4.webp";
import industry4 from "../../assets/industry9.webp";
import ServiceSection from '../../snippits/ServiceSection.jsx';
import OurClients from '../OurClients.jsx';
import Footer from '../Footer.jsx';
import Idea from '../Idea.jsx';
import PreFooter from '../PreFooter.jsx';
import FAQ from '../FAQ.jsx';
import { microsoftPowerPlatform } from '../../hooks/FaqData.js';
import Process from '../Process.jsx';
import IndustriesServed from '../IndustriesServed.jsx';
import ClientReviews from '../ClientReviews.jsx';
import MicrosoftPowerTransformation from './SolutionSnippits/MicrosoftPowerTransformation.jsx';
import SoftwareChallanges from '../SoftwareChallanges.jsx';
import SalesforceSpotlight from './SolutionSnippits/SalesforceSpotlight.jsx';
import SalesforceCapabilities from './SolutionSnippits/SalesforceCapabilities.jsx';
import SalesforceDifference from './SolutionSnippits/SalesforceDifference.jsx';
import { Box, RotateCcwClock, Sparkles } from 'lucide-react';
import TrustedByClients from '../TrustedByClients.jsx';

const Salesforce = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Salesforce Implementation Partners"}
        title={"Make Salesforce the System Your Revenue Runs On."}
        desc={
          "Certified experts turning Sales, Service, Marketing, and Commerce into one connected platform, with Einstein and Agentforce built in."
        }
        primaryBtn={{ text: "Get a Salesforce Assessment", to: "/" }}
        secondaryBtn={{ text: "Explore the clouds", to: "/" }}
      />
      <OurClients
        client1heading={"20+"}
        client1phrase={"Countries served"}
        client2heading={"50+"}
        client2phrase={"Salesforce projects delivered"}
        client3heading={"30+"}
        client3phrase={"Certified Salesforce experts"}
        client4heading={"15+"}
        client4phrase={"Countries served"}
        client5heading={"4.8★"}
        client5phrase={"Average Salesforce AppExchange rating"}
      />
      <MicrosoftPowerTransformation />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"What stops Salesforce from paying for itself."}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Org sprawl",
            title: "No one owns it",
            desc: "Overlapping automations, dead fields and conflicting validation rules pile up until every release is a risk and admins avoid touching anything.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Low adoption",
            title: "Reps avoid the CRM",
            desc: "When the org mirrors an org chart instead of the sales motion, teams keep their real pipeline in spreadsheets and the forecast stops matching reality.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "Siloed clouds",
            title: "Three truths",
            desc: "The same customer exists three times with three histories, so handoffs drop context and AI has nothing reliable to ground itself in.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Unused licenses",
            title: "Licenses sit dormant",
            desc: "Einstein, CPQ and Data Cloud entitlements go unused while teams do the work by hand, value already bought but never realised.",
          },
        ]}
      />
      <SalesforceSpotlight />
      <SalesforceCapabilities />
      <TrustedByClients />
      <SalesforceDifference
        subtitle={"The difference"}
        title={"Why teams pick us over another Salesforce partner"}
        items={[
          {
            icon: <Box />,
            title: "Every cloud, one team.",
            desc: "Most partners are deep in one cloud and subcontract the rest. We staff Sales, Service, Marketing, Experience, OMS, Non Profit, Data Cloud, and Agentforce in house, so the joins between them are designed rather than negotiated between vendors."
          },
          {
            icon: <Sparkles />,
            title: "AI in the architecture.",
            desc: "Einstein scoring and Agentforce agents are scoped in discovery and grounded in your data model from the first sprint, with guardrails and escalation rules written down. No second engagement six months later to bolt AI on at extra cost."
          },
          {
            icon: <RotateCcwClock />,
            title: "Working software in weeks.",
            desc: "Phased delivery puts a usable slice of the org in front of real sales and service users inside the first weeks, then extends it. Adoption is measured in usage and forecast accuracy, not in signed-off documents nobody reopens."
          },
        ]}
      />
      <ClientReviews />
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
        subtitle={"Process"}
        title={"Our Salesforce Delivery Steps"}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Discovery",
            cardDesc: "We map how leads become revenue today, current systems, workflows, and gaps.",
          },
          {
            cardNum: "02",
            cardTitle: "Architecture & Roadmap",
            cardDesc: "An org blueprint with data model, automation strategy, and a phased rollout.",
          },
          {
            cardNum: "03",
            cardTitle: "Build & Validate",
            cardDesc: "Sprint based configuration and development with users validating every increment.",
          },
          {
            cardNum: "04",
            cardTitle: "Rollout & Adoption",
            cardDesc: "Role based enablement, adoption dashboards, and a hypercare period.",
          },
        ]}
      />
      <FAQ {...microsoftPowerPlatform} />
      <PreFooter
        subtitle={"Get Started"}
        title={
          "Tell us what Salesforce needs to do for you."
        }
        description={
          "Send us your current setup and the outcome you are after. You get a certified architect's read on scope, sequence, and risk, not a discovery call that turns into a sales sequence."
        }
        queryList={[
          "Certified architects across all eight clouds, no subcontracting",
          "A phased plan with the first working slice scoped to weeks",
          "Einstein and Agentforce assessed against your actual data model",
          "A written scope and sequence you can take to another partner if you want",
        ]}
      />
      <Idea />
      <Footer />
    </>
  )
}

export default Salesforce