import React from 'react'
import img from '../../assets/unumpay-hero-bg.webp';
import Footer from '../Footer.jsx';
import FAQ from '../FAQ.jsx';
import { UnumPayFaQs } from '../../hooks/FaqData.js';
import UnumPayHeroSection from './ProductsSnippits/UnumPayHeroSection.jsx';
import SoftwareChallanges from '../SoftwareChallanges.jsx';
import UnumPayTwoPaths from './ProductsSnippits/UnumPayTwoPaths.jsx';
import UnumPayKeyFeatures from './ProductsSnippits/UnumPayKeyFeatures.jsx';
import UnumpayIdea from './ProductsSnippits/UnumpayIdea.jsx';

const UnumPay = () => {
  return (
    <>
      <UnumPayHeroSection
        heroImg={img}
        subtitle1={"Shopify Approved App"}
        subtitle2={"A Devsinc Product"}
        title={"Simplify your Shopify payments."}
        desc={"UnumPay connects your store to 40+ local and international gateways in a single install. Customers pay the way they already trust, one provider outage never takes checkout down, and every transaction lands in one dashboard."}
        btnText1={"Visit unumpay.com"}
        btnText2={"Install on Shopify"}
      />
      <SoftwareChallanges
        subtitle={"The Problem"}
        title={"What breaks when no payment platform serves your market."}
        problems={[
          {
            className: "item7",
            subtitleClass: "subtitle7",
            subtitle: "Availability",
            title: "No Shopify Payments",
            desc: "Shopify Payments is not available in many markets, leaving stores without a default way to accept online payments.",
          },
          {
            className: "item7",
            subtitleClass: "subtitle7",
            subtitle: "Reliability",
            title: "No backup gateway",
            desc: "Leaning on a single gateway means one outage can stop every customer using that method from paying.",
          },
          {
            className: "item7",
            subtitleClass: "subtitle7",
            subtitle: "Localization",
            title: "No localized checkout",
            desc: "International-only checkouts shut out shoppers who only trust local payment options like cards and wallets.",
          },
          {
            className: "item7",
            subtitleClass: "subtitle7",
            subtitle: "Visibility",
            title: "No unified view",
            desc: "Reporting revenue and transactions across separate gateway dashboards eats hours every week.",
          },
          {
            className: "item7",
            subtitleClass: "subtitle7",
            subtitle: "Speed",
            title: "Slow to go live",
            desc: "Merchants want a quick, smooth setup without the delays of adding or switching a gateway.",
          },
        ]}
      />
      <UnumPayKeyFeatures />
      <UnumPayTwoPaths />
      <UnumpayIdea />
      <FAQ {...UnumPayFaQs}/>
      <Footer />
    </>
  )
}

export default UnumPay