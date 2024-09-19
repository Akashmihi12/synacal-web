import React from "react";
import Hero from "@/components/client/Hero";
import Explore from "@/components/client/Explore";
import OurProject from "@/components/client/OurProject";
import SponsorGrid from "@/components/sponsers/SponsorGrid";
import ProjectGrid from "@/components/projectsDone/ProjectGrid";
import Started_bar from "@/components/getstarted/Started_bar";
import QandABlock from "@/components/q_and_a/QandABlock"; // Import the QandABlock component

const ClientPage = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <OurProject />
      
      {/* Add spacing between sections */}
      <div className="my-16">
        <SponsorGrid />
      </div>
      
      <div className="my-16">
        <ProjectGrid />
      </div>
      
      <div className="my-16">
        <Started_bar />
      </div>
      
      <div className="my-16">
        <QandABlock />
      </div>
    </div>
  );
};

export default ClientPage;
