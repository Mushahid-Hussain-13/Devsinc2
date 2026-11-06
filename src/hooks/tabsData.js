import ecosystem1 from "../assets/ecosystem10.webp";
import ecosystem2 from "../assets/ecosystem6.webp";
import ecosystem3 from "../assets/ecosystem7.webp";
import ecosystem4 from "../assets/ecosystem8.webp";
import ecosystem5 from "../assets/ecosystem11.webp";
import ecosystem6 from "../assets/ecosystem12.svg";
import unumpayFeature1 from '../assets/unumpay-feature1.webp';
import unumpayFeature2 from '../assets/unumpay-feature2.webp';
import unumpayFeature3 from '../assets/unumpay-feature3.webp';
import unumpayFeature4 from '../assets/unumpay-feature4.webp';
import unumpayFeature5 from '../assets/unumpay-feature5.webp';
import unumpayFeature6 from '../assets/unumpay-feature6.webp';

export const tabsData = [
  {
    id: "copilot-studio",
    label: "Copilot Studio",
    icon: ecosystem1,
    title: "Deploy Intelligent Agents",
    description:
      "We build autonomous agents that trigger and act on their own, not just answer questions, taking real actions through connectors. Once an agent understands intent, it hands the work to a Power Automate flow that executes against Dataverse, the handoff that actually gets things done.",
    deliverables: [
      "Custom Copilot and agent design and deployment",
      "Autonomous, connector driven actions",
      "Agent to Power Automate handoff into Dataverse",
      "Multi channel deployment across Teams, web and voice",
    ],
    status: "Live",
    stats: [
      { label: "Requests resolved by agent", value: "90%", width: 90 },
      { label: "Agents in production", value: "5", width: 50 },
      { label: "Escalation rate", value: "8%", width: 10 },
    ],
    footerText: "Every agent grounded in governed business data, with guardrails.",
  },
  {
    id: "power-apps",
    label: "Power Apps",
    icon: ecosystem2,
    title: "Build Custom Apps, Faster",
    description:
      "Canvas apps give frontline teams pixel level control over custom experiences. Model driven apps, built on the same framework that powers Dynamics 365 CE, generate their interfaces directly from Dataverse tables, relationships, and business rules, making them ideal for record centric processes such as case management and inspections. For more complex requirements, apps can be extended with custom connectors, PCF components, plug ins, and Azure integrations, while ALM is managed through solutions.",
    deliverables: [
      "Canvas and model driven app development",
      "Mobile ready business apps",
      "Legacy app modernization",
    ],
    status: "Live",
    stats: [
      { label: "Apps in production", value: "22", width: 75 },
      { label: "Frontline adoption", value: "91%", width: 90 },
      { label: "Legacy apps replaced", value: "9", width: 55 },
    ],
    footerText: "Canvas and model driven apps on one Dataverse backbone.",
  },
  {
    id: "power-automate",
    label: "Power Automate",
    icon: ecosystem3,
    title: "Eliminate Manual Work",
    description:
      "Power Automate is the execution layer behind every agent, the flow that does the real transactional work once an agent hands off a task. RPA and desktop flows extend that to legacy systems with no API, and AI Builder plugs prebuilt or custom AI models directly into flows and apps.",
    deliverables: [
      "Cloud and desktop flow (RPA) for legacy systems",
      "Execution layer for agent handoffs into Dataverse",
      "AI Builder models in flows and apps",
      "Third party system connectors",
    ],
    status: "Live",
    stats: [
      { label: "Manual steps automated", value: "124", width: 80 },
      { label: "Approval flows live", value: "31", width: 60 },
      { label: "Error rate", value: "0.4%", width: 8 },
    ],
    footerText: "Flows monitored with automatic failure alerts.",
  },
  {
    id: "power-pages",
    label: "Power Pages",
    icon: ecosystem4,
    title: "Extend Beyond Your Four Walls",
    description:
      "Secure, Dataverse backed portals give customers, partners and field teams a self service window into your processes, under the same governance and security model as your internal apps, so exposing data externally never means a separate, weaker security story.",
    deliverables: [
      "Customer and partner portals",
      "Authenticated self service experiences",
      "Dataverse backed forms and workflows",
      "Brand aligned design systems",
    ],
    status: "Live",
    stats: [
      { label: "Portal sessions authenticated", value: "98%", width: 98 },
      { label: "Self service forms live", value: "16", width: 60 },
      { label: "Partner accounts onboarded", value: "340", width: 65 },
    ],
    footerText: "Every portal reads and writes through governed Dataverse tables.",
  },
  {
    id: "dataverse",
    label: "Dataverse",
    icon: ecosystem5,
    title: "One Governed Data Foundation",
    description:
      "The shared foundation everything else sits on, what lets agents act with awareness and makes automation reliable. A 1,500+ connector ecosystem reaches Salesforce, SAP, on prem systems and custom APIs, with virtual tables pulling in data that never leaves its source. Microsoft now ships a Dataverse MCP server too, letting external AI coding agents work against this same data and schema, securely and governed.",
    deliverables: [
      "Environment strategy and DLP policies",
      "CoE Starter Kit and managed environments",
      "Tenant admin and capacity monitoring",
      "Migration from legacy stores",
    ],
    status: "Live",
    stats: [
      { label: "Systems unified into one model", value: "7", width: 60 },
      { label: "Data quality score", value: "94%", width: 94 },
      { label: "Duplicate records eliminated", value: "12K", width: 65 },
    ],
    footerText: "Every portal reads and writes through governed Dataverse tables.",
  },
  {
    id: "power-bi",
    label: "Power BI",
    icon: ecosystem6,
    title: "Turn Data Into Decisions",
    description:
      "Power BI turns data into decisions. It closes the gap between reporting and action with a trusted single source of truth and self service analytics that business users can actually rely on, not another dashboard that goes unopened. Behind the scenes, we handle the data modeling, DAX, and analytics architecture to ensure the insights are accurate, scalable, and actionable. The payoff is faster, more confident decision making across the business.",
    deliverables: [
      "Data modeling and warehousing",
      "Custom dashboards and reports",
      "Embedded analytics",
      "Power BI to Microsoft Fabric modernization",
      "Row level security and governance",
    ],
    status: "Live",
    stats: [
      { label: "Reports adopted org wide", value: "86%", width: 86 },
      { label: "Dashboards migrated to Fabric", value: "42 / 60", width: 60 },
      { label: "Data sources governed", value: "16", width: 50 },
    ],
    footerText: "Row level security applied across every governed model.",
  },
]




export const unumPayData = [
  {
    id: "intuitive-payment-integrations",
    label: "Intuitive Payment Integrations",
    img: unumpayFeature1,
    title: "Intuitive Payment Integrations",
    description: "Choose the best payment provider for your business from a range of top notch local and global options.",
    queryList: [
      "40+ local and global gateways to pick from",
      "Enable multiple gateways side by side",
      "No provider lock-in, switch anytime",
    ],
  },
  {
    id: "unified-dashboard",
    label: "Unified Dashboard",
    img: unumpayFeature2,
    title: "Unified Dashboard",
    description: "See every gateway, order, and payment in one place. Track revenue, transactions, and success rates across all your connected providers without switching between separate dashboards.",
    queryList: [
      "Gateway and transaction ID on every order",
      "Filter by date range, gateway, or status",
      "Export-ready reports for reconciliation",
    ],
  },
  {
    id: "easy-quick-setup",
    label: "Easy & Quick Setup",
    img: unumpayFeature3,
    title: "Easy & Quick Setup",
    description: "Configure and connect your payment gateways yourself, no developer needed.",
    queryList: [
      "Guided setup inside the UnumPay dashboard",
      "No code and no developer ticket",
      "Go live in minutes, not sprints",
    ],
  },
  {
    id: "multi-currency-support",
    label: "Multi-Currency Support",
    img: unumpayFeature4,
    title: "Multi-Currency Support",
    description: "Add and switch currencies to serve customers all around the globe in their local currency.",
    queryList: [
      "Support for multiple storefront currencies",
      "Currency conversion based on buyer location",
      "Consistent currency display in admin dashboard",
    ],
  },
  {
    id: "multi-language-support",
    label: "Multi-Language Support",
    img: unumpayFeature5,
    title: "Multi-Language Support",
    description: "Run your UnumPay admin portal in the language your team works in. The dashboard is available in English, Arabic, and French, so managing gateways, orders, and reports feels natural across different markets.",
    queryList: [
      "Admin portal available in English, Arabic, and French",
      "Switch dashboard language anytime from settings",
      "Built for teams operating across multiple markets",
    ],
  },
  {
    id: "advance-payments",
    label: "Advance Payments",
    img: unumpayFeature6,
    title: "Advance Payments",
    description: "Take advance payments for pre orders and made to order products delivered at later dates.",
    queryList: [
      "Collect deposits ahead of fulfillment",
      "Works across pre order and made-to-order flows",
      "Balance due tracked against the original order",
    ],
  },
]