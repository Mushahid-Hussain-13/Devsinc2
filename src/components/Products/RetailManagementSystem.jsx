import React from 'react'
import img from '../../assets/retail-pos-hero-bg.webp';
import Footer from '../Footer.jsx';
import PreFooter from '../PreFooter.jsx';
import FAQ from '../FAQ.jsx';
import { PulseNotifyFaQs } from '../../hooks/FaqData.js'
import RetailManagementPricing from './ProductsSnippits/RetailManagementPricing.jsx';
import RetailManagementIntegration from './RetailManagementIntegration.jsx';
import RetailManagementFeatures from './ProductsSnippits/RetailManagementFeatures.jsx';
import RetailManagementProblem from './ProductsSnippits/RetailManagementProblem.jsx';
import RetailManagementHeroSection from './ProductsSnippits/RetailManagementHeroSection.jsx';

const RetailManagementSystem = () => {
  return (
    <>
      <RetailManagementHeroSection
        heroImg={img}
        subtitle1={"Retail Management System (POS)"}
        subtitle2={"A Devsinc Product"}
        title={"A POS built for the digital world, not retrofitted into it."}
        desc={"Bilto is a cloud-native POS where Shopify, omnichannel stock, and loyalty are built in, not bolted on. Runs offline, goes live in hours."}
        btnText1={"Book a demo"}
        btnText2={"See pricing"}
      />
      <RetailManagementProblem />
      <RetailManagementFeatures />
      <RetailManagementIntegration />
      <RetailManagementPricing />
      <FAQ {...PulseNotifyFaQs} />
      <PreFooter
        subtitle={"Start With the Free Plan"}
        title={"See Your First Alert Go Out Today"}
        description={"Install PulseNotify, switch on the alerts you want, and let your store start reaching the shoppers who left."}
        queryList={[
          "Free plan, no email or phone capture",
          "Supported directly by the Devsinc team",
          "Need custom flows or integrations? Book a consultation",
        ]}
      />
      <Footer />
    </>
  )
}

export default RetailManagementSystem