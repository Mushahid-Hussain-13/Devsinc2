import React from 'react';
import img from '../../assets/pulsenotify-hero-bg.webp';
import PulseNotifyHeroSection from './ProductsSnippits/PulseNotifyHeroSection.jsx';
import PreFooter from '../PreFooter.jsx';
import Footer from '../Footer.jsx';
import FAQ from '../FAQ.jsx';
import { PulseNotifyFaQs } from '../../hooks/FaqData.js'
import WhyPulseNotify from './ProductsSnippits/WhyPulseNotify.jsx';
import PulseNotifyFiveFeatures from './ProductsSnippits/PulseNotifyFiveFeatures.jsx';
import PulseNotifyHidden from './ProductsSnippits/PulseNotifyHidden.jsx';
import SalesforceDifference from '../Solutions/SolutionSnippits/SalesforceDifference.jsx';
import PulseNotifyPricing from './ProductsSnippits/PulseNotifyPricing.jsx';

const PulseNotify = () => {
  return (
    <>
      <PulseNotifyHeroSection
        heroImg={img}
        subtitle1={"PulseNotify"}
        subtitle2={"Shopify Web Push Notifications App"}
        title={"Re-Engage Shoppers and Turn Every Opportunity Into a Sale"}
        desc={"Send automated Shopify web push notifications for back-in-stock alerts, price drops, abandoned carts, and order updates, all without collecting emails or phone numbers."}
        btnText1={"Install on Shopify"}
        btnText2={"Book a Consultation"}
      />
      <WhyPulseNotify />
      <PulseNotifyFiveFeatures />
      <SalesforceDifference
        subtitle={"From Install to Your First Recovered Sale"}
        title={"Get PulseNotify Running. Let Automation Do the Rest."}
        items={[
          {
            icon: "01",
            title: "Install in Minutes",
            desc: "Add PulseNotify from the Shopify App Store, choose your plan including the free option, and get your store ready to start capturing shopper intent."
          },
          {
            icon: "02",
            title: "Let Shoppers Opt In",
            desc: "Visitors subscribe to web push notifications directly from your storefront with one click. No email address. No phone number. No marketing list required."
          },
          {
            icon: "03",
            title: "Reach Shoppers Automatically",
            desc: "Turn on the alerts that matter to your store. PulseNotify automatically sends timely notifications for back-in-stock products, price drops, abandoned carts, and order updates, so you can stay connected without manually chasing every shopper."
          },
        ]}
      />
      <PulseNotifyPricing />
      <PulseNotifyHidden />
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

export default PulseNotify