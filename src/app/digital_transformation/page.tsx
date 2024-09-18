import CompanyCom from "@/components/data_analytics/hubit/CompanyCom";
import ProcessGrid from "@/components/data_analytics/process/ProcessGrid";
import Top_Section from "@/components/data_analytics/top_section/Top_Section";
import HeadNotice from "@/components/HeadNotice";
import React from "react";
import Section1 from "@/components/digital_transformation/Section1";
import KeyBenefits from "@/components/digital_transformation/KeyBenifits";
import Started_bar from "@/components/getstarted/Started_bar";
import QandABlock from "@/components/q_and_a/QandABlock";

function page() {
  return (
    <>
      <div className=" mt-[106px] w-full bg-background-color">
        <HeadNotice
          text1="Embark on a Digital"
          specialText="Transformation Journey"
          text2="Tailored to Your Business, Together"
          description="Our digital transformation service is designed to help organizations accelerate their digital journey and achieve sustainable growth. We provide a comprehensive range of solutions, including digital strategy development, process re-engineering, technology implementation, and change management"
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
        <ProcessGrid />
      </div>
      <div className="mt-[82px]">
        <Section1 />
      </div>
      <div className="mt-[82px]">
        <KeyBenefits />
      </div>
      <div className="mt-[154px]">
        <Started_bar />
      </div>
      <div className="mt-[134px]">
        <QandABlock />
      </div>
    </>
  );
}

export default page;
