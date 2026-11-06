import React from "react";
import './Podcast.css';
import PrimaryBtn from '../snippits/PrimaryBtn.jsx';
import podcast1 from '../assets/podcast-1.webp';
import podcast2 from '../assets/podcast-2.webp';
import podcast3 from '../assets/podcast-3.webp';
import podcast4 from '../assets/podcast-4.webp';
import artGradient from '../assets/art-gradient.webp';
import PodcastItemCard from "../snippits/PodcastItemCard.jsx";

const Podcast = () => {
  return (
    <section className="podcast" aria-label="our featured podcast">
      <div className="container">
        <img
          src={artGradient}
          alt="art gradient for background"
          loading="lazy"
          className="bg-img-star"
        />

        <div class="podcast-header">
          <div>
            <span class="section-tag">Featured Podcasts</span>
            <h2 class="section-heading">Conversations that go beyond the code</h2>
          </div>

          <PrimaryBtn text={"All podcasts"} url={"#"}/>
        </div>

        <ul className="podcast-list">
          <PodcastItemCard
            cardImg={podcast1}
            cardImgAlt={"podcast 1"}
            cardTitle={"Beyond the code"}
            cardHeading={"The Autonomous E-commerce Era"}
            cardInfo1={"Umar Rana"}
            cardInfo2={"Sr. VP"}
          />
          <PodcastItemCard
            cardImg={podcast2}
            cardImgAlt={"podcast 2"}
            cardTitle={"The technologist"}
            cardHeading={"Modernizing Apps With AI"}
            cardInfo1={"Junaid Rehmat"}
            cardInfo2={"Regional Director at Devsinc"}
          />
          <PodcastItemCard
            cardImg={podcast3}
            cardImgAlt={"podcast 3"}
            cardTitle={"Out of sync"}
            cardHeading={"Earning $2 Million through Freelancing"}
            cardInfo1={"Irfan Malik"}
            cardInfo2={"Tech Entrepreneur & AI expert"}
          />
          <PodcastItemCard
            cardImg={podcast4}
            cardImgAlt={"podcast 4"}
            cardTitle={"The technologist"}
            cardHeading={"Rescuing Poor Dynamics 365 ERP Implementations"}
            cardInfo1={"Yasir Barkat"}
            cardInfo2={"VP of Professional Services"}
          />
        </ul>

      </div>
    </section>
  );
};

export default Podcast;
