import React from "react";
import heroImg from "../../assets/website-development-hero-bg.webp";
import ServiceSection from "../../snippits/ServiceSection.jsx";
import Process from "../Process.jsx";
import SoftwareChallanges from "../SoftwareChallanges.jsx";
import EngineeringDiscipline from "../EngineeringDiscipline.jsx";
import Idea from "../Idea";
import Footer from "../Footer";
import EngagementModel3 from "../EngagementModel3.jsx";
import FAQ from "../FAQ.jsx";
import { webdevelopmentFaqs } from "../../hooks/FaqData.js";
import Processing from "../Processing.jsx";
import OurClients from "../OurClients.jsx";
import PreFooter from "../PreFooter.jsx";
import WhereThisFit from "../WhereThisFit.jsx";
import WhyChooseDevsinc from "../WhyChooseDevsinc.jsx";
import WhatWeBuild from "../WhatWeBuild.jsx";
import { ArrowRightLeft, Code, Database, Gauge, PenLine, PersonStanding, Search, Star } from "lucide-react";

const WebsiteDevelopment = () => {
  return (
    <>
      <ServiceSection
        image={heroImg}
        subtitle={"Website Development"}
        title={"A website is judged by Google, by people, and now by machines."}
        desc={
          "We design and build marketing and corporate websites on Astro, React, WordPress, and headless CMSs. Fast by architecture, accessible by default, and structured so search engines and AI answer engines can read, rank, and quote you."
        }
        primaryBtn={{ text: "Get a Free Audit", to: "/" }}
        secondaryBtn={{ text: "See the work", to: "/" }}
      />
      <OurClients
        client1heading={"15+ yrs"}
        client1phrase={"Building websites for brands and enterprises"}
        client2heading={"4"}
        client2phrase={"Stacks in production: Astro, React, WordPress, headless"}
        client3heading={"450+"}
        client3phrase={"Projects delivered"}
        client4heading={"6"}
        client4phrase={"Platforms shipped to, console to XR"}
        client5heading={"100+"}
        client5phrase={"Sites shipped across marketing, ecommerce, web apps"}
      />
      <WhereThisFit
        subtitle={"Where this fits"}
        title={"Websites, web applications, and storefronts are different jobs."}
        desc={"If you are not sure which one you need, that is a five-minute conversation, not a proposal."}
        items={[
          {
            className: "active",
            subtitle: "You are here",
            title: "Website Development",
            desc: "Marketing, corporate, and content sites. Anonymous visitors, editorial workflow, search and AI discoverability, conversion.",
            lastSpan: "Astro · React · WordPress · headless CMS",
          },
          {
            subtitle: "Different page",
            title: "Web Application Development",
            desc: "Logged-in products: dashboards, portals, workflow tools. Authentication, roles, state, and platform load.",
            lastSpan: "Go to web applications →",
          },
          {
            subtitle: "Different page",
            title: "Ecommerce",
            desc: "Selling online at volume: catalogue, checkout, payments, fulfilment integrations on Shopify and Shopify Plus.",
            lastSpan: "Go to ecommerce →",
          },
        ]}
      />
      <SoftwareChallanges
        subtitle={"Key Challenges"}
        title={"What quietly costs you traffic and trust."}
        problems={[
          {
            className: "item1",
            subtitleClass: "subtitle1",
            subtitle: "Slow pages",
            title: "Speed you only notice in the analytics",
            desc: "Heavy themes, unoptimised media, and third-party scripts push you outside Google's Core Web Vitals thresholds. Failing field vitals costs ranking and conversion at the same time.",
          },
          {
            className: "item2",
            subtitleClass: "subtitle2",
            subtitle: "Invisible to AI",
            title: "AI answers about you, without you",
            desc: "Answer engines summarise your market from pages they can parse. Thin markup and missing schema leave you out of the citation. The referral you never see is the one you cannot optimise.",
          },
          {
            className: "item3",
            subtitleClass: "subtitle3",
            subtitle: "CMS friction",
            title: "Every page change needs a developer",
            desc: "Rigid templates and unmodelled content turn a copy tweak into a ticket, so campaigns wait on release cycles. Marketing velocity drops to the speed of your deploy queue.",
          },
          {
            className: "item4",
            subtitleClass: "subtitle4",
            subtitle: "Compliance risk",
            title: "Accessibility found in a legal letter",
            desc: "Contrast failures, keyboard traps, and unlabelled controls are cheap to prevent and expensive to discover late. Remediation after launch costs multiples of doing it in design.",
          },
        ]}
      />
      <WhatWeBuild
        subtitle={"What we build"}
        title={"Eight things we are asked for most."}
        items={[
          {
            icon: <PenLine />,
            title: "Website design",
            desc: "Research, information architecture, wireframes, and a design system your brand can extend without us.",
          },
          {
            icon: <Code />,
            title: "Website development",
            desc: "Production builds on Astro, React, WordPress, or headless, to a performance and accessibility budget.",
          },
          {
            icon: <Database />,
            title: "Headless CMS builds",
            desc: "Sanity and comparable CMSs modelled as reusable blocks, with preview, scheduling, and role-based approvals.",
          },
          {
            icon: <ArrowRightLeft />,
            title: "Replatform & migration",
            desc: "Move off a legacy stack with URL mapping, content migration, and a rehearsed cutover that protects rankings.",
          },
          {
            icon: <Search />,
            title: "Technical SEO engineering",
            desc: "Crawlability, canonicals, sitemaps, internal linking, and complete structured data, built into the templates.",
          },
          {
            icon: <Star />,
            title: "AEO & GEO readiness",
            desc: "Machine-readable summaries, entity clarity, and citable page structure so answer engines and AI models quote you correctly.",
          },
          {
            icon: <Gauge />,
            title: "Core Web Vitals remediation",
            desc: "Diagnose and fix field vitals on the site you already have, without a full rebuild where one is not warranted.",
          },
          {
            icon: <PersonStanding />,
            title: "Accessibility audit & fixes",
            desc: "WCAG 2.2 AA review with an annotated report, prioritised fixes, and regression checks in the pipeline.",
          },
        ]}
      />
      <WhyChooseDevsinc
        subtitle={"Why Devsinc"}
        title={"Built to a standard you can measure, not a template you have to defend."}
        items={[
          {
            title: "Performance budgets, not promises",
            desc: "LCP, INP, and CLS targets are set at architecture stage, enforced in CI, and monitored on field data after launch. A regression fails the build, not the quarterly review.",
          },
          {
            title: "Accessibility inside design",
            desc: "Contrast, focus order, and semantics are reviewed in Figma before build. WCAG 2.2 AA is a design constraint here, not a retrofit.",
          },
          {
            title: "The stack matches the brief",
            desc: "Astro, React, WordPress, or headless. We write the recommendation with trade-offs and tell you when the boring choice wins.",
          },
          {
            title: "Migrations that keep your rankings",
            desc: "Full crawl, URL map, 301s, preserved metadata and schema, then ninety days of redirect and Search Console monitoring against a pre-launch baseline.",
          },
          {
            title: "Editors get real autonomy",
            desc: "Content modelled as guarded blocks with preview, scheduling, and approvals, so marketing composes pages without breaking layout or vitals.",
          },
          {
            title: "One team, design through support",
            desc: "The engineers who ship sat in the design reviews, and the same pod stays on for iteration after launch.",
          },
        ]}
      />
      <Process
        subtitle={"Process"}
        title={"From audit to launch, then after."}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Audit",
            cardDesc:
              "Two weeks on your site, analytics, and content. We benchmark field vitals, accessibility, structured data, and AEO and GEO readiness, then rank fixes by traffic and revenue impact.",
          },
          {
            cardNum: "02",
            cardTitle: "Architecture & design",
            cardDesc:
              "Information architecture, URL map, content model, and the platform decision, alongside the design system. Signed off before anyone writes production code.",
          },
          {
            cardNum: "03",
            cardTitle: "Build & migrate",
            cardDesc:
              "Components built to budget in sprints, content migrated with reconciliation, then a rehearsed cutover with 301s verified and rollback points agreed.",
          },
          {
            cardNum: "04",
            cardTitle: "Monitor & iterate",
            cardDesc:
              "Field vitals, Search Console, and AI citation checks after launch, with an iteration backlog and monthly reporting on traffic, rankings, and conversion.",
          },
        ]}
      />
      <EngagementModel3
        subtitle={"Engagement Models"}
        title={"Three ways to start."}
        items={[
          {
            subtitle: "Fixed scope",
            title: "Audit & roadmap",
            number: "01",
            desc: "A short engagement that benchmarks the site you have and returns a costed, sequenced plan across performance, SEO, AEO, GEO, and accessibility.",
            lastSpan: "Best when you need evidence before you fund a rebuild.",
          },
          {
            subtitle: "Project based",
            title: "Design & build",
            number: "02",
            desc: "End-to-end ownership from research and design system through build, migration, launch, and handover on the platform your brief calls for.",
            lastSpan: "Best for a new site, a rebrand, or a replatform.",
          },
          {
            subtitle: "Ongoing",
            title: "Growth retainer",
            number: "03",
            desc: "A standing pod for template work, campaign pages, CRO experiments, vitals monitoring, security patching, and content operations.",
            lastSpan: "Best when the site is a channel you keep investing in.",
          },
        ]}
      />
      <Processing
        subtitle={"UI/UX process"}
        title={"Design and engineering share one backlog."}
        items={[
          {
            number: "01",
            title: "Research & content inventory",
            desc: "Analytics, Search Console, and a full crawl of what you have, plus interviews with the people who publish and the people who buy.",
            lastSpan: "Output: audit, page-level keep/merge/kill list",
          },
          {
            number: "02",
            title: "Information architecture",
            desc: "Navigation, URL structure, and templates mapped to search intent and the journeys that actually convert.",
            lastSpan: "Output: sitemap, URL map, template inventory",
          },
          {
            number: "03",
            title: "Wireframes & content design",
            desc: "Layout and copy structure resolved together at low fidelity, so hierarchy is argued about before anything looks finished.",
            lastSpan: "Output: annotated wireframes, content model draft",
          },
          {
            number: "04",
            title: "Design system",
            desc: "Type scale, colour with contrast checked, spacing, components, and states in Figma. Accessibility reviewed here, not later.",
            lastSpan: "Output: Figma library, tokens, component specs",
          },
          {
            number: "05",
            title: "Build & CMS modelling",
            desc: "Components built to the spec, content modelled as guarded blocks, performance budgets enforced on every pull request.",
            lastSpan: "Output: production build, editor guardrails, CI checks",
          },
          {
            number: "06",
            title: "QA, launch & iterate",
            desc: "Cross-browser and assistive-tech testing, redirect verification, then a post-launch backlog driven by field data.",
            lastSpan: "Output: launch checklist, field monitoring, iteration plan",
          },
        ]}
      />
      <FAQ {...webdevelopmentFaqs} />
      <PreFooter
        subtitle={"Free website audit"}
        title={"Find out what your site is losing to speed, search, and AI."}
        description={"Send us your URL. Within five business days you get a recorded audit covering field Core Web Vitals, accessibility against WCAG 2.2 AA, structured data and AEO readiness, GEO citability, and the three changes we would make first. No cost, no pitch deck."}
        queryList={[
          "Reviewed by an engineer and a designer, not a sales rep",
          "Ten to fifteen minutes of recorded screen, yours to keep",
          "No obligation to work with us afterwards",
        ]}
      />
      <Idea />
      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
