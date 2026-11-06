import React from "react";
import heroImg from "../../assets/game-development-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import FAQ from "../FAQ.jsx";
import { gameStudioFaqs } from "../../hooks/FaqData.js";
import Idea from "../Idea.jsx";
import Footer from "../Footer.jsx";
import CreationSteps from "../CreationSteps.jsx";
import OurClients from "../OurClients.jsx";
import Process from "../Process.jsx";
import KeyDifference from "../KeyDifference.jsx";
import PenIcon from "../../snippits/PenIcon.jsx";
import ShieldIcon from "../../snippits/ShieldIcon.jsx";
import DocsIcon from "../../snippits/DocsIcon.jsx";
import EngagementModel2 from "../EngagementModel2.jsx";
import IndustriesServed2 from "../IndustriesServed2.jsx";
import HeartIcon from "../../snippits/HeartIcon.jsx";
import EducationIcon from "../../snippits/EducationIcon.jsx";
import RealEstateIcon from "../../snippits/RealEstateIcon.jsx";
import AdvertisingIcon from "../../snippits/AdvertisingIcon.jsx";
import FitnessIcon from "../../snippits/FitnessIcon.jsx";
import MediaIcon from "../../snippits/MediaIcon.jsx";
import PreFooter from "../PreFooter.jsx";

const GameStudio = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Game Development"}
        title={"Game development that ships and scales."}
        desc={
          "Unlock boundless potential with enterprise grade game development across Unity, Unreal Engine, VR and XR, UEFN and the metaverse, from first concept to launch and live ops."
        }
        primaryBtn={{ text: "Visit tenseigames.com", to: "/" }}
        secondaryBtn={{ text: "Discuss Your Game Project", to: "/" }}
      />
      <OurClients
        client1heading={"10+"}
        client1phrase={"Global titles shipped"}
        client2heading={"10 yrs"}
        client2phrase={"Unreal and Unity experience"}
        client3heading={"50+"}
        client3phrase={"Projects delivered"}
        client4heading={"6"}
        client4phrase={"Platforms shipped to, console to XR"}
        client5heading={"Clutch"}
        client5phrase={"Top Developer and Clutch Global leader"}
      />
      <CreationSteps
        subtitle={"Overview"}
        title={"From concept to live ops, one studio."}
        description1={
          "Tensei Games is a full cycle game development studio building across Unity, Unreal, VR and XR, UEFN and the metaverse. We have shipped MMOs, VR platforms, metaverse experiences, UEFN islands and architectural visualization projects."
        }
        description2={
          "Twelve titles shipped so far, built by a team that is ISO 9001 and ISO 27001 certified, rated a Clutch Top Developer, and a partner on both Unity and Unreal. Art, engineering and platform work sit together, so a title moves from concept through launch and into live ops without being handed between vendors."
        }
        label={"The stack we build on"}
        steps={[
          "Unity3D",
          "Unreal Engine",
          "UEFN and Verse",
          "Blender",
          "3DS Max",
          "Mobile",
          "PC",
          "Console",
          "VR and XR headsets",
          "Web",
        ]}
      />
      <KeyDifference
        subtitle={"The difference"}
        title={"Why studios pick Tensei over a dev shop"}
        differences={[
          {
            icon: <PenIcon />,
            heading: "A decade of Unreal and Unity experience.",
            description:
              "A decade building production titles in Unreal and Unity. The team works to current engine roadmaps and shipping pipelines on every build, never to workarounds.",
          },
          {
            icon: <ShieldIcon />,
            heading: "ISO 9001 and ISO 27001 certified.",
            description:
              "10+ global titles delivered against audited quality management and information security standards, so player data and live builds are handled the same rigorous way on every project.",
          },
          {
            icon: <DocsIcon />,
            heading: "Clutch Top Game Development Company.",
            description:
              "Named a Clutch Top Developer and a Clutch Global leader, with recognition earned on delivered client outcomes rather than engine badges or self declared specialisms.",
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
            desc: "Game developers, artists and engineers embedded directly into your team and pipeline.",
            lastSpan: "Best for delivery power without hiring overhead",
          },
          {
            subtitle: "Project based",
            number: "02",
            title: "Full Studio Build",
            desc: "The studio behind your player facing title, owning the build end to end from concept through launch and live ops.",
            lastSpan: "Best for a defined title",
          },
        ]}
      />
      <Process
        subtitle={"Process"}
        title={"From first call to live ops."}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Discovery",
            cardDesc:
              "Scope concept, audience, platform and budget in a free call.",
          },
          {
            cardNum: "02",
            cardTitle: "Prototype",
            cardDesc: "A playable MVP proves the core loop before full spend.",
          },
          {
            cardNum: "03",
            cardTitle: "Production",
            cardDesc:
              "Art, engineering and design in agile sprints, build every milestone.",
          },
          {
            cardNum: "04",
            cardTitle: "QA and Optimization",
            cardDesc:
              "Functional and performance testing keeps it launch ready.",
          },
          {
            cardNum: "05",
            cardTitle: "Launch and Live Ops",
            cardDesc:
              "Cross platform ship, then updates, content and analytics.",
          },
        ]}
      />
      <IndustriesServed2
        subtitle={"Industries"}
        title={"Where our worlds go to work."}
        items={[
          {
            icon: <HeartIcon />,
            title: "Healthcare and Pharma",
            desc: "Therapeutic and training simulations with 3D modeling and motion tracking, like our MG Holistic VR build."
          },
          {
            icon: <EducationIcon />,
            title: "Education and Edutainment",
            desc: "Virtual campuses and live classes that make learning interactive, see Riverside Metaversity."
          },
          {
            icon: <RealEstateIcon />,
            title: "Real Estate and Architecture",
            desc: "Real time property tours and architectural walkthroughs, our ArchViz suite."
          },
          {
            icon: <AdvertisingIcon />,
            title: "Marketing and Advertising",
            desc: "Advergames and branded worlds that earn attention across devices."
          },
          {
            icon: <FitnessIcon />,
            title: "Sports and Fitness",
            desc: "Motion tracked fitness apps and VR sports training with interactive 3D avatars."
          },
          {
            icon: <MediaIcon />,
            title: "Entertainment and Media",
            desc: "Original IP across MMO and naval combat formats for mobile, PC and console."
          }
        ]}
      />
      <FAQ {...gameStudioFaqs} />
      <PreFooter
        subtitle={"Get Started"}
        title={"Tell us about the title you want to build."}
        description={""}
        queryList={[
          "Bring a concept, a stalled build, or a live title",
          "One call to map scope, platform and art fidelity",
          "A route to a vertical slice, not a vague estimate",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default GameStudio;
