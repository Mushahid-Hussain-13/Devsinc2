import React from 'react';
import './EngagementModel.css';
import PrimaryBtn from '../snippits/PrimaryBtn';
import EngagementCard from '../snippits/EngagementCard';

const EngagementModel = () => {
  return (
    <section className="engagement" aria-label='engagement model'>
      <div className="container">

        <div className="hero-header">
          <div>
            <span className="section-tag">Engagement Models</span>

            <h2 className="section-heading">Ways to work with us.</h2>
          </div>

          <PrimaryBtn url={"#"} text={"Let's Talk"}/>
        </div>

        <ul className="service-list">
          <EngagementCard
            subtitle={"Ongoing"}
            number={"01"}
            title={"Dedicated Development Teams"}
            desc={"A team embedded in your roadmap, working to your sprint cadence."}
            lastSpan={"For teams shipping on a continuous cadence"}
          />
          <EngagementCard
            subtitle={"Flexible"}
            number={"02"}
            title={"Staff Augmentation"}
            desc={"Senior engineers added directly to your existing team."}
            lastSpan={"When you just need to close a skill gap"}
          />
          <EngagementCard
            subtitle={"Fixed Scope"}
            number={"03"}
            title={"Project Based Delivery"}
            desc={"A defined outcome, scoped and delivered end to end."}
            lastSpan={"Ideal for a one-time, defined build"}
          />
          <EngagementCard
            subtitle={"Transfer"}
            number={"04"}
            title={"Build-Operate-Transfer"}
            desc={"We build and run it, then hand over the team and the codebase."}
            lastSpan={"A path toward owning your own team"}
          />
          <EngagementCard
            subtitle={"Ongoing"}
            number={"05"}
            title={"Managed Services"}
            desc={"Ongoing operation and support of a system already in production."}
            lastSpan={"Built for long-term operational ownership"}
          />
          <EngagementCard
            subtitle={"Distributed"}
            number={"06"}
            title={"Offshore Development Centers"}
            desc={"A dedicated offshore team operating as your own extension."}
            lastSpan={"The efficient way to scale headcount"}
          />
        </ul>

      </div>
    </section>
  )
}

export default EngagementModel