import React from "react";
import { Routes, Route } from "react-router-dom";
import { Code, Pencil, Rocket, Search } from "lucide-react";

import HeroSection from "./components/HeroSection.jsx";
import Shift from "./components/Shift.jsx";
import Services from "./components/Services.jsx";
import Enterprise from "./components/Enterprise.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import ClientReviews from "./components/ClientReviews.jsx";
import Podcast from "./components/Podcast.jsx";
import WhyDevsinc from "./components/WhyDevsinc.jsx";
import Blogs from "./components/Blogs.jsx";
import Idea from "./components/Idea.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import DigitalTransformation from "./components/AllServices/DigitalTransformation.jsx";
import ApplicationEngineering from "./components/AllServices/ApplicationEngineering.jsx";
import CloudInfrastructure from "./components/AllServices/CloudInfrastructure.jsx";
import AdvisoryStrategy from "./components/AllServices/AdvisoryStrategy.jsx";
import GameStudio from "./components/AllServices/GameStudio.jsx";
import BlockchainCryptography from "./components/AllServices/BlockchainCryptography.jsx";
import AiDataSystems from "./components/AllServices/AiDataSystems.jsx";
import WebsiteDevelopment from "./components/AllServices/WebsiteDevelopment.jsx";
import PaymentService from './components/AllServices/PaymentService.jsx';
import ProductStudio from "./components/AllServices/ProductStudio.jsx";
import StaffAugmentation from "./components/AllServices/StaffAugmentation.jsx";
import ArchitecturalVisualization from "./components/AllServices/ArchitecturalVisualization.jsx";
import Shopify from "./components/Solutions/Shopify.jsx";
import MicrosoftDynamics365 from "./components/Solutions/MicrosoftDynamics365.jsx";
import MicrosoftPowerPlatform from "./components/Solutions/MicrosoftPowerPlatform.jsx";
import Salesforce from "./components/Solutions/Salesforce.jsx";
import IndustriesMarquee from "./components/IndustriesMarquee.jsx";
import ShopifyProcessSteps from "./components/Solutions/SolutionSnippits/ShopifyProcessSteps.jsx";
import ShopifyApps from "./components/Products/ShopifyApps.jsx";
import UnumPay from "./components/Products/UnumPay.jsx";
import Voosha from "./components/Products/Voosha.jsx";
import PulseNotify from "./components/Products/PulseNotify.jsx";
import RetailManagementSystem from "./components/Products/RetailManagementSystem.jsx";
import About from "./components/Company/About.jsx";
import Careers from "./components/Company/Careers.jsx";
import LifeAtDevsinc from "./components/Company/LifeAtDevsinc.jsx";
import CampusAmbassador from "./components/Company/CampusAmbassador.jsx";
import PartnerProgram from "./components/Company/PartnerProgram.jsx";


const Home = () => {
  return (
    <>
      <HeroSection />
      <Shift />
      <Services />
      <IndustriesMarquee />
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
      <Enterprise />
      <CaseStudy />
      <ClientReviews />
      <WhyDevsinc />
      <Podcast />
      <Blogs />
      <Idea />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/digital-transformation" element={<DigitalTransformation />}/>
      <Route path="/application-engineering" element={<ApplicationEngineering />}/>
      <Route path="/cloud-infrastructure" element={<CloudInfrastructure />}/>
      <Route path="/advisory-strategy" element={<AdvisoryStrategy />}/>
      <Route path="/game-studio" element={<GameStudio />}/>
      <Route path="/blockchain-cryptography" element={<BlockchainCryptography />}/>
      <Route path="/ai-data-systems" element={<AiDataSystems />}/>
      <Route path="/website-development" element={<WebsiteDevelopment />}/>
      <Route path="/payment-service" element={<PaymentService />}/>
      <Route path="/product-studio" element={<ProductStudio />}/>
      <Route path="/staff-augmentation" element={<StaffAugmentation />}/>
      <Route path="/architectural-visualization" element={<ArchitecturalVisualization />}/>
      <Route path="/ecommerce-shopify" element={<Shopify />}/>
      <Route path="/microsoft-dynamics-365" element={<MicrosoftDynamics365 />}/>
      <Route path="/microsoft-power-platform" element={<MicrosoftPowerPlatform />}/>
      <Route path="/salesforce" element={<Salesforce />}/>
      <Route path="/shopify-apps" element={<ShopifyApps />}/>
      <Route path="/unumpay" element={<UnumPay />}/>
      <Route path="/voosha" element={<Voosha />}/>
      <Route path="/pulse-notify" element={<PulseNotify />}/>
      <Route path="/retail-management-system" element={<RetailManagementSystem />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/careers" element={<Careers />}/>
      <Route path="/life-at-devsinc" element={<LifeAtDevsinc />}/>
      <Route path="/campus-ambassador" element={<CampusAmbassador />}/>
      <Route path="/partner-program" element={<PartnerProgram />}/>
    </Routes>
  );
};

export default App;