import CompanyCom from "@/components/data_analytics/hubit/CompanyCom";
import Top_Section from "@/components/data_analytics/top_section/Top_Section";
import Started_bar from "@/components/getstarted/Started_bar";
import HeadNotice from "@/components/HeadNotice";
import QandABlock from "@/components/q_and_a/QandABlock";
import CoveredSectionStructure from "@/components/software_development/covered/CoveredSectionStructure";
import Section1 from "@/components/software_development/Section1";
import Section2 from "@/components/software_development/Section2";
import Section3 from "@/components/software_development/Section3";
import React from "react";

function page() {
  return (
    <div>
      <div className=" mt-[106px] w-full bg-background-color">
        <HeadNotice
          text1="Augmenting Your Resources,"
          specialText="Enhancing "
          text2="Your Capabilities"
          description="Our team of seasoned professionals will work alongside your staff, bringing a wealth of knowledge and experience to your organization to help you achieve your objectives. With our extensive network of skilled professionals, we ensure that every individual we provide is carefully matched to your project requirements, guaranteeing that you receive the right expertise for the job."
          button_text="Let’s Innovate Together"
        />
      </div>
      <div className="mt-[82px]">
        <Top_Section />
      </div>
      <div className="mt-[82px]">
        <CompanyCom />
      </div>
      <div className="mt-[82px]">
        <Section1 />
      </div>
      <div className="mt-[82px]">
        <Section2 />
      </div>
      <div className="mt-[82px]">
        <Section3 />
      </div>
      <div className="mt-[82px]">
        <CoveredSectionStructure />
      </div>
      <div className="mt-[154px]">
        <Started_bar />
      </div>
      <div className="mt-[134px]">
        <QandABlock />
      </div>
    </div>
  );
}

export default page;
