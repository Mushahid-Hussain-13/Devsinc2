import React from 'react';
import './ShopifyCaseStudies.css';
import PrimaryBtn from '../../../snippits/PrimaryBtn';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const ShopifyCaseStudies = ({ subtitle, title, description, btnText, items = [] }) => {
  return (
    <section className="shopify-case-studies" aria-label='case studies'>
      <div className="container">

        <div className="hero-header">
          <div>
            <span className="section-tag">{subtitle}</span>
            <h2 className="section-heading">{title}</h2>
            <p className="section-desc">{description}</p>
          </div>
          <PrimaryBtn text={btnText} url={"#"}/>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
            <Link to={"#"} key={index}>
              <figure className="block-card img-holder" style={{ '--width': "500", '--height': "300" }}>
                <img src={item.blockImage} alt="green hill" width={500} height={300} className='img-cover'/>

                <span className="overlay-text">{item.blockOverlayText}</span>
              </figure>

              <div className="block-content">
                <div className="child1">
                  <span className="block-subtitle">{item.blockSubtitle}</span>
                  <h3 className="block-title">{item.blockTitle}</h3>
                  <p className="block-desc">{item.blockDesc}</p>
                </div>
                <div className="child2">
                  <div className="sub-child">
                    <div className="tree">
                      <span className='icon'>
                        <TrendingUp size={16}/>
                        {item.percentage1}
                      </span>
                      <span className="text">{item.businessText1}</span>
                    </div>
                    <div className="tree">
                      <span className='icon'>
                        <TrendingUp size={16}/>
                        {item.percentage2}
                      </span>
                      <span className="text">{item.businessText2}</span>
                    </div>
                  </div>

                  <p className="btn-case-study">
                    {item.caseStudyBtnText}
                  </p>
                </div>
              </div>
            </Link>
          </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default ShopifyCaseStudies