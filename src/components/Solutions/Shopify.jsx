import React from "react";
import ShopifyHeroSection from "./SolutionSnippits/ShopifyHeroSection.jsx";
import { shopifyEcommerceFaqs } from "../../hooks/FaqData.js";
import FAQ from "../FAQ.jsx";
import Footer from "../Footer.jsx";
import Ways2Work from "./SolutionSnippits/Ways2Work.jsx";
import CommerceShift from "./SolutionSnippits/CommerceShift.jsx";
import WhatWeDo from "./SolutionSnippits/WhatWeDo.jsx";
import {
  Store,
  CreditCard,
  Smartphone,
  RefreshCw,
  CodeXml,
  Gauge,
  Landmark,
  Plug,
  Wrench,
  Clock,
  Layers,
  Boxes,
  Zap,
  EyeOff,
  Sparkles,
  ClipboardCheck,
  ShieldCheck,
  ArrowRightLeft,
  TrendingUp,
  Search,
  Pencil,
  Code,
  Rocket,
} from "lucide-react";
import ShopifyTheme from "./SolutionSnippits/ShopifyTheme.jsx";
import ShopifyMarket from "./SolutionSnippits/ShopifyMarket.jsx";
import ShopifyEngagamentModel3 from "./SolutionSnippits/ShopifyEngagamentModel3.jsx";
import ShopifyKeyChallanges from "./SolutionSnippits/ShopifyKeyChallanges.jsx";
import ShopifyCaseStudies from "./SolutionSnippits/ShopifyCaseStudies.jsx";
import greenHillImg from "../../assets/green-hill-cover.webp";
import custard from "../../assets/custard.webp";
import recurateCover from "../../assets/recurate-cover.webp";
import beautyCream from "../../assets/beauty-cream.webp";
import ShopifyWhyDevsinc from "./SolutionSnippits/ShopifyWhyDevsinc.jsx";
import ShopifyProcessSteps from "./SolutionSnippits/ShopifyProcessSteps.jsx";
import PreFooter from "../PreFooter.jsx";

const Shopify = () => {
  return (
    <>
      <ShopifyHeroSection />
      <CommerceShift />
      <WhatWeDo
        subtitle={"What we do"}
        title={"What We Build, Connect, and Optimize on Shopify"}
        description={
          "As a Shopify development agency, Devsinc helps brands worldwide build, migrate, and improve Shopify stores around operational needs. Our team develops custom storefronts, configures checkout and POS workflows, connects ERP/CRM systems, and supports performance after launch."
        }
        items={[
          {
            icon: <Store />,
            title: "Shopify Website Development",
            description:
              "Build or redesign Shopify stores with custom themes, responsive layouts, and functionality tailored to your catalog, customers, and day-to-day operations.",
          },
          {
            icon: <CreditCard />,
            title: "Shopify Checkout Customization",
            description:
              "Customize eligible Shopify checkouts with supported extensions and Shopify Functions for discounts, delivery rules, and purchase flows suited to your business.",
          },
          {
            icon: <Smartphone />,
            title: "Shopify POS & Retail Integrations",
            description:
              "Implement Shopify POS or integrate Bilto with Shopify to connect retail sales, inventory, and customer records across in-store and online channels.",
          },
          {
            icon: <RefreshCw />,
            title: "Automations & Apps",
            description:
              "Reduce repetitive work with Shopify Flow, app integrations, and connected order workflows that help your team manage growing store operations.",
          },
          {
            icon: <CodeXml />,
            title: "Headless Commerce",
            description:
              "Build custom Shopify storefronts with Hydrogen and the Storefront API when design, integration, or customer experience needs justify headless architecture.",
          },
          {
            icon: <ArrowRightLeft />,
            title: "Shopify Migration",
            description:
              "Move from Magento or WooCommerce to Shopify with mapped product and customer data, 301 redirects, testing, and a planned launch.",
          },
          {
            icon: <Gauge />,
            title: "Performance, Speed & CRO",
            description:
              "Improve Core Web Vitals, reduce heavy app scripts, and optimize product pages and buying journeys using store performance and conversion data.",
          },
          {
            icon: <Landmark />,
            title: "B2B & Wholesale",
            description:
              "Configure Shopify B2B company accounts, custom catalogs, quantity rules, and payment terms to simplify wholesale ordering for buyers and sales teams.",
          },
          {
            icon: <Plug />,
            title: "ERP & Integrations",
            description:
              "Connect Shopify with ERP, CRM, and inventory systems to synchronize orders, stock, and customer records while reducing manual updates and mismatched data.",
          },
          {
            icon: <Wrench />,
            title: "Shopify Support & Maintenance",
            description:
              "Keep your Shopify store reliable with ongoing monitoring, app compatibility checks, troubleshooting, and planned performance improvements.",
          },
        ]}
      />
      <ShopifyTheme
        subtitle={"Design & Themes"}
        title={"Shopify Website Design and Theme Development"}
        description={
          "Shopify storefront design starts with decisions about how customers shop, not just how a page looks. Devsinc customizes existing themes and develops custom ones around your brand and product catalog. We focus on mobile layouts, reusable sections and blocks, accessibility, and storefront performance."
        }
        items={[
          "Custom theme development",
          "Full Shopify store redesigns",
          "Design systems built for Shopify's sections and blocks",
          "Accessibility guided by WCAG from the design stage",
        ]}
      />
      <ShopifyKeyChallanges
        subtitle={"Key Challenges"}
        title={"Where Ecommerce Stores Lose Revenue"}
        items={[
          {
            icon: <Clock />,
            title: "Slow Checkout",
            description:
              "Every extra second and unnecessary checkout step can increase friction and cause customers to abandon their purchases.",
          },
          {
            icon: <Layers />,
            title: "Platform Limitations",
            description:
              "Standard themes and disconnected apps can limit custom pricing, product bundling, and complex fulfillment workflows as your business grows.",
          },
          {
            icon: <Boxes />,
            title: "Fragmented Data",
            description:
              "When inventory, orders, and CRM systems are disconnected, teams face inconsistent data, overselling risks, and unreliable reporting.",
          },
          {
            icon: <Zap />,
            title: "Peak-Season Performance",
            description:
              "During Black Friday and other high-traffic campaigns, heavy apps and overloaded integrations can slow pages, delay orders, and put sales at risk.",
          },
          {
            icon: <EyeOff />,
            title: "Limited AI & Search Visibility",
            description:
              "Incomplete product information and poorly structured catalog data can make it harder for search engines and AI-powered shopping tools to understand your products.",
          },
        ]}
      />
      <ShopifyCaseStudies
        subtitle={"Case Studies"}
        title={"Shopify and Custom Ecommerce Projects"}
        description={
          "Real work across Shopify Plus, headless platforms, and commerce integrations."
        }
        btnText={"Read all case studies"}
        items={[
          {
            blockImage: greenHillImg,
            blockOverlayText: "Sports & Outdoor",
            blockSubtitle: "Green Hill (Italy)",
            blockTitle: "B2B and B2C Commerce on Shopify Plus",
            blockDesc: "Ecommerce (Shopify)",
            percentage1: "40%",
            percentage2: "30%",
            businessText1: "faster B2B orders",
            businessText2: "wholesale growth",
            caseStudyBtnText: "Read the case study →",
          },
          {
            blockImage: custard,
            blockOverlayText: "Food & Beverage",
            blockSubtitle: "Abbott Frozen Custard (USA)",
            blockTitle:
              "A 120 Year USA Brand Goes Headless for Regional Expansion",
            blockDesc: "Application Engineering",
            percentage1: "30%",
            percentage2: "35%",
            businessText1: "faster page loads",
            businessText2: "faster API response times",
            caseStudyBtnText: "Read the case study →",
          },
          {
            blockImage: recurateCover,
            blockOverlayText: "Retail & CPG",
            blockSubtitle: "Recurate (USA)",
            blockTitle:
              "Digital Resale Revolution: Engineering Speed, Scale and Seamless Integration",
            blockDesc: "Application Engineering",
            percentage1: "60%",
            percentage2: "40%",
            businessText1: "faster page loads",
            businessText2: "faster API response times",
            caseStudyBtnText: "Read the case study →",
          },
          {
            blockImage: beautyCream,
            blockOverlayText: "Retail & CPG",
            blockSubtitle: "H&BCL (UK)",
            blockTitle:
              "B2B Beauty Breakthrough: Unified Commerce on Shopify Plus",
            blockDesc: "Ecommerce (Shopify)",
            percentage1: "40%",
            percentage2: "35%",
            businessText1: "faster B2B checkouts",
            businessText2: "wholesale growth",
            caseStudyBtnText: "Read the case study →",
          },
        ]}
      />
      <ShopifyProcessSteps
        subtitle={"Our process"}
        title={"Four stages from first audit to launch and ongoing improvement"}
        steps={[
          {
            icon: <Search size={20}/>,
            title: "Store audit",
            desc: "You send your store URL and request a free store audit, then tell us your goals.",
          },
          {
            icon: <Pencil size={20}/>,
            title: "Design and plan",
            desc: "We agree scope, key milestones, and a target launch date before development begins. For migrations, every indexed URL is mapped to a 301 redirect.",
          },
          {
            icon: <Code size={20}/>,
            title: "Build and QA",
            desc: "Built on Shopify, headless or a custom stack, with your integrations connected as scoped. We can work in your repository if you prefer.",
          },
          {
            icon: <Rocket size={20}/>,
            title: "Launch and optimize",
            desc: "We plan the cutover with a rollback option, then monitor redirects, search performance, and integrations after launch and keep improving through ongoing support.",
          },
        ]}
      />
      <ShopifyWhyDevsinc
        subtitle={"Why Devsinc"}
        title={"Why Work with Devsinc for Shopify Development?"}
        items={[
          {
            icon: <Sparkles />,
            title: "AI-Ready Commerce",
            desc: "We structure product data, connect catalogs, and build storefront experiences that support product discovery across search and shopping channels.",
          },
          {
            icon: <ClipboardCheck />,
            title: "Scope Agreed Upfront",
            desc: "We work with you to define project scope, key milestones, and a target launch date before development begins, with changes reviewed as requirements evolve.",
          },
          {
            icon: <RefreshCw />,
            title: "Continuous Improvement Post-Launch",
            desc: "Our ongoing support can include performance monitoring, app and integration maintenance, conversion rate optimization, and a roadmap for continued store improvements.",
          },
          {
            icon: <ShieldCheck />,
            title: "Shopify Plus Partner & Security Focus",
            desc: "Devsinc is listed as a Plus Partner in Shopify's official directory. We build with customer data protection, reliable integrations, and operational stability in mind.",
          },
        ]}
      />
      <ShopifyMarket
        subtitle={"Shopify Markets"}
        title={"Selling in multiple countries from one Shopify store"}
        description={
          "Expanding beyond your local market doesn't have to mean a second store. Using Shopify Markets, we set up localized pricing, currencies, languages, and domains from a single admin so you can launch new regions without duplicating catalog, inventory, or checkout processes. For eligible merchants, Managed Markets uses Global-e as merchant of record to handle cross-border duties and import taxes."
        }
        items={[
          "Shopify Markets setup, plus Managed Markets where eligible",
          "Multi-currency and local payment methods, where supported",
          "Language and content localization",
          "Duties, import taxes, and customs data setup",
        ]}
      />
      <ShopifyEngagamentModel3 />
      <Ways2Work
        subtitle={"Ways to work"}
        title={"Three ways to work with us"}
        desc={
          "Start with a free store audit, or go straight to a build or a retainer."
        }
        items={[
          {
            icon: (
              <ClipboardCheck size={30} color="#7eb82b" strokeWidth={1.8} />
            ),
            className: "active",
            title: "Free Store Audit",
            desc: "A free audit of your store to find where it can improve.",
            btnText: "Request a Free Store Audit",
            btnUrl: "#",
          },
          {
            icon: (
              <ArrowRightLeft size={30} color="#7eb82b" strokeWidth={1.8} />
            ),
            title: "Migration or Build",
            desc: "A new store, migration, redesign, or custom build, with scope and milestones agreed before development begins.",
            btnText: "Scope a Migration or Build",
            btnUrl: "#",
          },
          {
            icon: <TrendingUp size={30} color="#7eb82b" strokeWidth={1.8} />,
            title: "Growth Retainer",
            desc: "Ongoing conversion optimization, app and integration upkeep, performance work, and a roadmap for continued store improvements.",
            btnText: "Talk About a Growth Retainer",
            btnUrl: "#",
          },
        ]}
      />
      <FAQ {...shopifyEcommerceFaqs} />
      <PreFooter
        subtitle={"Free store audit"}
        title={"Request Your Free Store Audit"}
        description={"Tell us about your store and what you'd like to improve. Our team will follow up about your audit request."}
        queryList={[
          "Request a free store audit from Devsinc",
          "Share your store details and what you'd like to improve",
          "Our team follows up about your request",
        ]}
      />
      <Footer />
    </>
  );
};

export default Shopify;
