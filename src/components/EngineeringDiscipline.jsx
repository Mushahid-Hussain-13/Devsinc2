import React, { useState } from 'react';
import './EngineeringDiscipline.css';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LargeRightArrow from '../snippits/LargeRightArrow.jsx';



const tabs = ["Custom Software", "Websites", "Web Apps", "Mobile Apps", "UI/UX"];


const EngineeringDiscipline = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="engineering-discipline" aria-label='engineering discipline'>
      <div className="container">

        <div className="header-content text-center">
          <span className="section-tag">Engineering disciplines</span>

          <h2 className="section-heading">
            Every layer of your product, built by one team.
          </h2>
        </div>

        <div className="tab-btn-list">
          {tabs.map((namee, index) => (
            <button
              key={index}
              type='button'
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {namee}
            </button>
          ))}
        </div>

        <div className="tab-content-list">
          <div className={`tab-content ${activeTab === 0 ? "active" : ""}`}>
            <div className="content-left">
              <h3 className="title">Custom Software Development</h3>
              <p className="section-desc">Architecture, design, development, and deployment for enterprise systems, SaaS platforms, and the integrations connecting them.</p>

              <ul className="details">
                <li className="item">Architecture and API design signed off before build starts</li>
                <li className="item">Enterprise platforms that replace spreadsheet and email workflows</li>
                <li className="item">Legacy modernization in phases, current system running throughout</li>
                <li className="item">Integrations across ERP, CRM, and third-party services</li>
              </ul>
              <Link to='#' className='btn'>
                <span className="span">Learn more</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="content-right">
              <div className="card card-1">
                <span className="title">Architecture</span>
                <div>
                  <span className="span">
                    <em className='text-teal'>POST</em>
                    <em> /order</em>
                  </span>
                  <span className="span">
                    <em className='text-teal'>GET</em>
                    <em> /inventory</em>
                  </span>
                </div>
                <span className="subtitle">contracts signed off</span>
              </div>
              <LargeRightArrow />
              <div className="card card-2">
                <span className="title">Build</span>
                <span className="text">migration</span>
                <div className="progress-bar">
                  <div className="progress"></div> {/* Moving Line */}
                </div>
                <span className="subtitle">phase 2 of 3</span>
              </div>
              <LargeRightArrow />
              <div className="card card-3">
                <span className="title">Integrations</span>
                <span>ERP . <em>SAP</em></span>
                <span>CRM . <em>Salesforce</em></span>
                <span>Payments . <em>Stripe</em></span>

                <span className="connect">12 systems connected</span>
              </div>
            </div>
          </div>

          <div className={`tab-content tab-content-2 ${activeTab === 1 ? "active" : ""}`}>
            <div className="content-left">
              <h3 className="title">Website Design & Development</h3>
              <p className="section-desc">Marketing and corporate websites on Astro, React, WordPress, and headless CMSs, engineered to Google’s page experience standards and readable by AI answer engines.</p>

              <ul className="details">
                <li className="item">Platform chosen on the brief: Astro, React, WordPress, or headless with Sanity</li>
                <li className="item">UI/UX run as a process, from content inventory through design system</li>
                <li className="item">Core Web Vitals and WCAG 2.2 AA set as budgets, enforced in CI</li>
                <li className="item">Technical SEO, AEO, and GEO structure built into the templates</li>
              </ul>
              <Link to='#' className='btn'>
                <span className="span">Learn more</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="content-right">
              <div className="top-elem">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="line-bar"></span>
              </div>
              <div className="all-content">
                <div className="elem1">
                  <div>
                    <span className="text">Uptime</span>
                    <span className="title">99.98%</span>
                  </div>
                  <span className='pulse-span'>
                    <div className="pulse-circle"></div>
                    p95 210ms
                  </span>
                </div>
                <div className="elem2 main-elem">
                  <span className="text">Checkout service</span>
                  <span className="span">healthy</span>
                </div>
                <div className="elem2">
                  <span className="text">Search API</span>
                  <span className="span">healthy</span>
                </div>
                <div className="elem2">
                  <span className="text">Reporting worker</span>
                  <span className="span">queued</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content tab-content-3 ${activeTab === 2 ? "active" : ""}`}>
            <div className="content-left">
              <h3 className="title">Web Application Development</h3>
              <p className="section-desc">Web platforms built for real workloads: responsive front ends, resilient back ends, and performance that holds under production traffic.</p>

              <ul className="details">
                <li className="item">Component-driven front ends on a shared design system</li>
                <li className="item">Back ends built for concurrency, caching, and predictable p95 latency</li>
                <li className="item">Role-based access, audit trails, and SSO wired in from the start</li>
                <li className="item">Core Web Vitals, accessibility, and in-app AI search as release criteria</li>
              </ul>
              <Link to='#' className='btn'>
                <span className="span">Learn more</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="content-right">
              <div className="elem1">
                <span className="span">Request lifecycle</span>
                <span className="text-teal">p95 budget 300ms</span>
              </div>
              <div className="elem2">
                <span className="text-teal">Edge</span>
                <span className="arrow">→</span>
                <span className="text-teal">API</span>
                <span className="arrow">→</span>
                <span className="text-teal">Cache</span>
                <span className="arrow">→</span>
                <span className="text-teal">DB</span>
              </div>
              <div className="elem-match">
                <span className="text">Front end render</span>
                <span className="bar">
                  <span className="line" style={{ width: "40%" }}></span>
                </span>
                <span className="text-teal">82ms</span>
              </div>
              <div className="elem-match">
                <span className="text">API + auth</span>
                <span className="bar">
                  <span className="line" style={{ width: "70%" }}></span>
                </span>
                <span className="text-teal">141ms</span>
              </div>
              <div className="elem-match">
                <span className="text">Cache hit path</span>
                <span className="bar">
                  <span className="line" style={{ width: "30%" }}></span>
                </span>
                <span className="text-teal">34ms</span>
              </div>

              <div className="elem3">
                <span className="text">SSO · RBAC · audit trail</span>
                <span className="text-teal">all green</span>
              </div>
            </div>
          </div>

          <div className={`tab-content tab-content-4 ${activeTab === 3 ? "active" : ""}`}>
            <div className="content-left">
              <h3 className="title">Custom Mobile Applications</h3>
              <p className="section-desc">Mobile apps engineered to engage: smooth interactions, native performance, and experiences that turn downloads into repeat users.</p>

              <ul className="details">
                <li className="item">Native and cross-platform builds chosen on the product need, not habit</li>
                <li className="item">Offline-first data sync for field, retail, and logistics use cases</li>
                <li className="item">Push, deep links, and in-app analytics instrumented at launch</li>
                <li className="item">Store submission, release management, and post-launch monitoring</li>
              </ul>
              <Link to='#' className='btn'>
                <span className="span">Learn more</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="content-right">
              <div className="elem1">
                <span className="line"></span>
                <span className="subtitle">Day-7 retention</span>
                <span className="title">42%</span>

                <span className="content text-teal">Offline sync</span>
                <span className="content">Push enabled</span>
                <span className="content">Deep links</span>
                <span className="line"></span>
              </div>
              <div className="elem2">
                <span className="text">
                  Crash-free
                  <em className='text-teal'>99.7%</em>
                </span>
                <span className="text">
                  Cold start
                  <em className='text-teal'>1.2s</em>
                </span>
                <span className="text">
                  Store rating
                  <em className='text-teal'>4.6</em>
                </span>
              </div>
            </div>
          </div>

          <div className={`tab-content tab-content-2 ${activeTab === 4 ? "active" : ""}`}>
            <div className="content-left">
              <h3 className="title">UI/UX Design & Engineering</h3>
              <p className="section-desc">Interfaces designed around how people actually use the product, then built by the same team that ships the code.</p>

              <ul className="details">
                <li className="item">Discovery and journey mapping with the people who use the product daily</li>
                <li className="item">Prototypes tested before engineering commits to a direction</li>
                <li className="item">Design systems handed over as coded components, not static files</li>
                <li className="item">Accessibility and content structure built into every flow</li>
              </ul>
              <Link to='#' className='btn'>
                <span className="span">Learn more</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="content-right">
              <div className="top-elem">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="line-bar"></span>
              </div>
              <div className="all-content">
                <div className="elem1">
                  <div>
                    <span className="text">Uptime</span>
                    <span className="title">99.98%</span>
                  </div>
                  <span className='pulse-span'>
                    <div className="pulse-circle"></div>
                    p95 210ms
                  </span>
                </div>
                <div className="elem2 main-elem">
                  <span className="text">Checkout service</span>
                  <span className="span">healthy</span>
                </div>
                <div className="elem2">
                  <span className="text">Search API</span>
                  <span className="span">healthy</span>
                </div>
                <div className="elem2">
                  <span className="text">Reporting worker</span>
                  <span className="span">queued</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EngineeringDiscipline