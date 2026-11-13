import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../snippits/Logo.jsx";
import { TextAlignJustify, ChevronDown, ArrowUpRight, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navbarToggler = function () {
    setIsNavOpen((prev) => !prev);
  };

  const closeNavbar = function () {
    setIsNavOpen(false);
  };

  const toggleSubMenu = function (menu) {
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo-white">
          <Logo />
        </Link>

        {/* Navbar */}
        <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
          <div className="navbar-top">
            <Link to="/" className="logo-black" onClick={closeNavbar}>
              <Logo />
            </Link>

            <button className="close-menu-btn" onClick={closeNavbar}>
              <X size={20} />
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-link navbar-first-link">
              <div
                className="elem"
                onClick={() => toggleSubMenu("services")}
              >
                Services
                <span className={`chevron-icon ${activeMenu === 'services' ? 'active' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </div>

              <ul className={`sub-list ${activeMenu === 'services' ? 'active' : ''}`}>
                <li className="sub-link">
                  <Link to="/digital-transformation">
                    Digital Transformation
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/application-engineering">
                    Application Engineering
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/cloud-infrastructure">
                    Cloud & Infrastructure
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/advisory-strategy">
                    Advisory & Strategy
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/game-studio">
                    Game Studio
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/blockchain-cryptography">
                    Blockchain & Cryptography
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/ai-data-systems">
                    AI & Data Systems
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/website-development">
                    Website Development
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/payment-service">
                    Payment as a Service
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/product-studio">
                    Product Studio for Startups
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/staff-augmentation">
                    Staff Augmentation
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/architectural-visualization">
                    Architectural Visualization
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-link">
              <div className="elem" onClick={() => toggleSubMenu('solutions')}>
                Solutions
                <span className={`chevron-icon ${activeMenu === "solutions" ? 'active' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </div>

              <ul className={`sub-list ${activeMenu === "solutions" ? "active" : ""}`}>
                <li className="sub-link">
                  <Link to="/ecommerce-shopify">
                    Ecommerce (Shopify)
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/microsoft-dynamics-365">
                    Microsoft Dynamics 365
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/microsoft-power-platform">
                    Microsoft Power Platform
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/salesforce">
                    Salesforce
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-link">
              <div className="elem" onClick={() => toggleSubMenu("products")}>
                Products
                <span className={`chevron-icon ${activeMenu === 'products' ? 'active' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </div>

              <ul className={`sub-list ${activeMenu === 'products' ? 'active' : ''}`}>
                <li className="sub-link">
                  <Link to="/shopify-apps">
                    Shopify Apps
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/unumpay">
                    UnumPay
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/voosha">
                    Voosha
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="/pulse-notify">
                    Pulse Notify
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="retail-management-system">
                    Retail Management System (PSO)
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-link">
              <div className="elem" onClick={() => toggleSubMenu("resources")}>
                Resources
                <span className={`chevron-icon ${activeMenu === 'resources' ? 'active' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </div>

              <ul className={`sub-list ${activeMenu === 'resources' ? 'active' : ''}`}>
                <li className="sub-link">
                  <Link to="#">
                    Blogs
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Devsinc Journal
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Podcasts
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Research & Guides
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Case Studies
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    News & Media
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-link">
              <div className="elem" onClick={() => toggleSubMenu("company")}>
                Company
                <span className={`chevron-icon ${activeMenu === 'company' ? 'active' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </div>

              <ul className={`sub-list ${activeMenu === 'company' ? 'active' : ''}`}>
                <li className="sub-link">
                  <Link to="#">
                    About
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Careers
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Life at Devsinc
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Campus Ambassabor
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
                <li className="sub-link">
                  <Link to="#">
                    Partner Program
                    <span className="arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <Link to="/contact" className="navbar-btn">
            <ArrowUpRight size={18} />

            <span className="span">Contact Us </span>
          </Link>
        </nav>

        <div className="wrapper">
          <Link to="/contact" className="header-btn btn">
            <ArrowUpRight size={17} />
            <span className="span">Contact Us </span>
          </Link>
          <button className="menu-btn" onClick={navbarToggler}>
            <TextAlignJustify size={27} />
          </button>
        </div>

        {/* Overlay for mobile menu */}
        <div
          className={`overlay ${isNavOpen ? "active" : ""}`}
          onClick={closeNavbar}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
