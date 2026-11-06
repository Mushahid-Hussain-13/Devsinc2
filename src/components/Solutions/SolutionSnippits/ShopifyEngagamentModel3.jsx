import React from 'react';
import './ShopifyEngagementModel3.css';
import EngagementModel3 from '../../EngagementModel3.jsx';
import { Code, CreditCard ,Plug } from 'lucide-react';
import PrimaryBtn from '../../../snippits/PrimaryBtn.jsx';

const ShopifyEngagamentModel3 = () => {
  return (
    <section className="shopify-engagement3">
      <div className="container">

        <EngagementModel3
          subtitle={"Headless & Custom Commerce"}
          title={"Headless Shopify and Custom Ecommerce Development"}
          desc={"Some brands outgrow standard ecommerce templates. Complex pricing, regional expansion, B2B workflows, or the need for a fully custom storefront can call for custom logic or a different architecture. For many stores, though, a customized Shopify theme costs less to build and run, and your team can update it in the theme editor. We help you choose the right architecture for your requirements, not the most complex one by default."}
          items={[
            {
              subtitle: <Code />,
              number: "01",
              title: "Headless Shopify Storefronts",
              desc: "Build a custom storefront on Shopify's Storefront API with Hydrogen and the React Router or Next.js starters, while Shopify continues to run checkout, inventory, and orders.",
              lastSpan: "Technologies: Hydrogen · Storefront API · React Router · Next.js"
            },
            {
              subtitle: <CreditCard />,
              number: "02",
              title: "Custom Commerce Logic & B2B Workflows",
              desc: "Extend Shopify beyond its standard features with custom apps and API services for pricing rules, order and quantity logic, and wholesale workflows specific to how you sell.",
              lastSpan: "Capabilities: Custom apps · Shopify Functions · API services"
            },
            {
              subtitle: <Plug />,
              number: "03",
              title: "Integration-Led Commerce",
              desc: "Connect Shopify and other commerce platforms through an API-driven integration layer that handles webhooks, data mapping, and business rules, so orders, inventory, and customer data stay consistent.",
              lastSpan: "Capabilities: Multi-platform architecture · Webhooks · Data mapping"
            },
          ]}
        />

        <PrimaryBtn text={"Talk About a Headless or Custom Build"} url={"#"}/>

      </div>
    </section>
  )
}

export default ShopifyEngagamentModel3