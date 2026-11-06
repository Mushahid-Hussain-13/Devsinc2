import React from 'react'
import img from '../../assets/shopify-apps-hero-bg.webp';
import ShopifyAppsHeroSection from './ProductsSnippits/ShopifyAppsHeroSection'
import ShopifyClientsDone from './ProductsSnippits/ShopifyClientsDone';
import ShopifyAppCapabilities from './ProductsSnippits/ShopifyAppCapabilities';
import ShopifyAppTwoPaths from './ProductsSnippits/ShopifyAppTwoPaths';
import ShopifyAppEngagement from './ProductsSnippits/ShopifyAppEngagement';
import ShopifyAppPortfolio from './ProductsSnippits/ShopifyAppPortfolio';
import Prefooter from '../PreFooter.jsx';
import Footer from '../Footer.jsx';
import FAQ from '../FAQ.jsx';
import { shopifyAppsFaqs } from '../../hooks/FaqData.js';
import Process from '../Process.jsx';

const ShopifyApps = () => {
  return (
    <>
      <ShopifyAppsHeroSection
        heroImg={img}
        subtitle1={"Shopify App Developer"}
        subtitle2={"100+ Apps Shipped"}
        title={"We have built more than 100 Shopify apps. Twelve are still ours."}
        desc={"The rest were sold, or handed to the companies that commissioned them. Private apps, public App Store products, backend automation, and the integrations that connect Shopify to whatever else your business runs on."}
        btnText1={"Talk to us about an app"}
        btnText2={"See the twelve"}
      />
      <ShopifyClientsDone
        clientsData={[
          {
            text: "100+",
            desc: "Shopify apps built"
          },
          {
            text: "12",
            desc: "still ours, live on the App Store"
          },
          {
            text: "10 yrs",
            desc: "building on the Shopify platform"
          },
          {
            text: "100+",
            desc: "App Store review submissions passed"
          },
        ]}
      />
      <ShopifyAppCapabilities
        subtitle={"Capabilities"}
        title={"Five kinds of Shopify build. We do all five."}
        items={[
          {
            title: "Private apps",
            desc: "Built for one merchant, installed on one store, solving a workflow no public app addresses. No App Store listing, no compromises.",
            className: ""
          },
          {
            title: "Public App Store products",
            desc: "Multi-tenant architecture, Shopify billing, GDPR webhooks, and the App Store review process. Shipped over a hundred times.",
            className: ""
          },
          {
            title: "Backend automation",
            desc: "Order routing, inventory sync, fulfilment logic, and pricing rules that run without anyone opening the admin.",
            className: ""
          },
          {
            title: "AI-enabled apps",
            desc: "Product recommendations, size and fit guidance, demand forecasting, and support agents grounded in your catalogue data.",
            className: "wide"
          },
          {
            title: "Multi-system integration",
            desc: "Shopify connected to Salesforce, your ERP, your WMS, and your carriers, with the data model designed rather than improvised.",
            className: "wide"
          },
        ]}
      />
      <ShopifyAppTwoPaths />
      <ShopifyAppEngagement />
      <ShopifyAppPortfolio />
      <Process
        subtitle={"Process"}
        title={"Four steps, and the fourth is the one that matters later."}
        processes={[
          {
            cardNum: "01",
            cardTitle: "Scope",
            cardDesc: "We map the workflow, the systems, and the data model before anyone writes code. Fixed-scope proposal at the end."
          },
          {
            cardNum: "02",
            cardTitle: "Build",
            cardDesc: "Two-week increments with a working install in your store from the first one."
          },
          {
            cardNum: "03",
            cardTitle: "Ship",
            cardDesc: "Private app deployed to your store, or public app taken through App Store review by people who have done it a hundred times."
          },
          {
            cardNum: "04",
            cardTitle: "Run",
            cardDesc: "Monitoring and Shopify API version upgrades handled before the deadline, not after the outage."
          },
        ]}
      />
      <FAQ {...shopifyAppsFaqs}/>
      <Prefooter
        subtitle={"Engineering assessment"}
        title={"Tell us what you need built."}
        description={"Send us the workflow, the systems it has to touch, and what it needs to do. You get an engineering assessment and a scoped proposal, not a discovery call that turns into a sales sequence."}
        queryList={[
          "Read by an engineer who has shipped App Store products",
          "We will say if a public app already solves it and you do not need us",
          "Fixed-scope proposal, and the app is yours",
        ]}
      />
      <Footer />
    </>
  )
}

export default ShopifyApps