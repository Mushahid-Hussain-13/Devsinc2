import React from 'react';
import './Footer.css';
import { ChevronUp } from 'lucide-react';
import microsoft from '../assets/billGates.svg';
import salesforce from '../assets/salesforce.webp';
import shopify from '../assets/shopify.svg';
import amazon from '../assets/amazon.webp';
import accaLogo from '../assets/AccaLogo.webp';
import clutchLogo from '../assets/ClutchLogo.webp';
import certISO from '../assets/cert-iso.webp';
import certISO2 from '../assets/cert-iso2.webp';
import certISO3 from '../assets/cert-iso3.webp';
import usa from '../assets/usa.png';
import uae from '../assets/uae.png';
import ksa from '../assets/ksa.png';
import pak from '../assets/pak.png';
import FooterCard from '../snippits/FooterCard';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" aria-label='footer'>
      <div className="container">

        <div className="footer-elem1">
          <details open>
            <summary>
              <span className='text'>Services</span>
              <span className='icon'><ChevronUp size={14}/></span>
            </summary>

            <div className="all-links">
              <Link to={"/digital-transformation"} className='footer-link'>Digital Transformation</Link>
              <Link to={"/ai-data-systems"} className='footer-link'>AI & Data Systems</Link>
              <Link to={"/application-engineering"} className='footer-link'>Application Engineering</Link>
              <Link to={"/website-development"} className='footer-link'>Website Development</Link>
              <Link to={"/cloud-infrastructure"} className='footer-link'>Cloud & Infrastructure</Link>
              <Link to={"/payment-service"} className='footer-link'>Payment as a Service</Link>
              <Link to={"/advisory-strategy"} className='footer-link'>Advisory & Strategy</Link>
              <Link to={"/product-studio"} className='footer-link'>Product Studio for Startups</Link>
              <Link to={"/game-studio"} className='footer-link'>Game Studio</Link>
              <Link to={"/staff-augmentation"} className='footer-link'>Staff Augmentation</Link>
              <Link to={"/blockchain-cryptography"} className='footer-link'>Blockchain & Cryptography</Link>
              <Link to={"/architectural-visualization"} className='footer-link'>Architectural Visualization</Link>
            </div>
          </details>
          <details open>
            <summary>
              <span className='text'>Solutions</span>
              <span className='icon'><ChevronUp size={14} /></span>
            </summary>

            <div className="all-links">
              <Link to={"/ecommerce-shopify"} className='footer-link'>Ecommerce (Shopify)</Link>
              <Link to={"/microsoft-dynamics-365"} className='footer-link'>Microsoft Dynamics 365</Link>
              <Link to={"/microsoft-power-platform"} className='footer-link'>Microsoft Power Platform</Link>
              <Link to={"/salesforce"} className='footer-link'>Salesforce</Link>
              <Link to={""} className='footer-link'>All Solutions</Link>
            </div>
          </details>
          <details open>
            <summary>
              <span className='text'>Products</span>
              <span className='icon'><ChevronUp size={14} /></span>
            </summary>

            <div className="all-links">
              <Link to={"/shopify-apps"} className='footer-link'>Shopify Apps</Link>
              <Link to={"/unumpay"} className='footer-link'>UnumPay</Link>
              <Link to={""} className='footer-link'>Voosha</Link>
              <Link to={""} className='footer-link'>PulseNotify</Link>
              <Link to={""} className='footer-link'>Enterprise HRM</Link>
              <Link to={""} className='footer-link'>Retail Management System (POS)</Link>
              <Link to={""} className='footer-link'>All Products</Link>
            </div>
          </details>
          <details open>
            <summary>
              <span className='text'>Resources</span>
              <span className='icon'><ChevronUp size={14} /></span>
            </summary>

            <div className="all-links">
              <Link to={""} className='footer-link'>Blogs</Link>
              <Link to={""} className='footer-link'>Devsinc Journal</Link>
              <Link to={""} className='footer-link'>Podcasts</Link>
              <Link to={""} className='footer-link'>Research & Guides</Link>
              <Link to={""} className='footer-link'>Case Studies</Link>
              <Link to={""} className='footer-link'>News & Media</Link>
            </div>
          </details>
          <details open>
            <summary>
              <span className='text'>Company</span>
              <span className='icon'><ChevronUp size={14} /></span>
            </summary>

            <div className="all-links">
              <Link to={""} className='footer-link'>About</Link>
              <Link to={""} className='footer-link'>Careers</Link>
              <Link to={""} className='footer-link'>Life at Devsinc</Link>
              <Link to={""} className='footer-link'>Campus Ambassador</Link>
              <Link to={""} className='footer-link'>Partner Program</Link>
              <Link to={""} className='footer-link'>Contact Us</Link>
            </div>
          </details>
        </div>

        <div className="footer-elem2">
          <div className="child1">
            <span className='section-tag'>Partners</span>
            <span className='logo'>
              <img src={microsoft} alt="microsoft certified" width={60}/>
            </span>
            <span className='logo'>
              <img src={salesforce} alt="salesforce certified" width={60}/>
            </span>
            <span className='logo'>
              <img src={shopify} alt="shopify certified" width={60}/>
            </span>
            <span className='logo'>
              <img src={amazon} alt="amazon certified" width={40}/>
            </span>
          </div>
          <div className="child2 line"></div>
          <div className="child3">
            <span className='section-tag'>Recognitions</span>
            <span className='logo'>
              <img src={clutchLogo} alt="clutch global 2026" width={70}/>
            </span>
            <span className='logo'>
              <img src={certISO} alt="ISO Certified" width={60}/>
            </span>
            <span className='logo'>
              <img src={certISO2} alt="ISO Certified" width={90}/>
            </span>
            <span className='logo'>
              <img src={certISO3} alt="ISO Certified" width={55}/>
            </span>
            <span className='logo'>
              <img src={accaLogo} alt="acca approved employer" width={110}/>
            </span>
          </div>
        </div>

        <div className="footer-elem3">
          <FooterCard
            img={usa}
            countryName={"USA"}
            address={"18 S 2nd Street #120, San Jose, CA, 95113, United States"}
          />
          <FooterCard
            img={uae}
            countryName={"UAE"}
            address={"Unit No. RET-R6-032, Detached Retail R6, Plot No: JLT-PH2-RET-R6, Jumeirah Lakes Towers, Dubai, United Arab Emirates"}
          />
          <FooterCard
            img={ksa}
            countryName={"KSA"}
            address={"Building No. 7500, Prince Bader Ibn Abdulaziz Street, Al Khubar Ash Shamaliyah District, 34428, Al Khobar, Kingdom of Saudi Arabia"}
          />
          <FooterCard
            img={pak}
            countryName={"PAK"}
            address={"D Tower, Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab"}
          />
        </div>

        <div className="footer-elem4">
          <div className="child1">
            <p>© 2026 Devsinc | All Rights Reserved.</p>
            <Link to={""} className='footer-link'>Privary Policy</Link>
            <Link to={""} className='footer-link'>Cookie Policy</Link>
            <Link to={""} className='footer-link'>Security</Link>
            <Link to={""} className='footer-link'>Terms & Conditions</Link>
            <Link to={""} className='footer-link'>Cookie Settings</Link>
          </div>
          <div className="child2">
            <Link to={""} className='footer-link'>LinkedIn</Link>
            <Link to={""} className='footer-link'>Instagram</Link>
            <Link to={""} className='footer-link'>Facebook</Link>
            <Link to={""} className='footer-link'>X</Link>
            <Link to={""} className='footer-link'>TikTok</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer