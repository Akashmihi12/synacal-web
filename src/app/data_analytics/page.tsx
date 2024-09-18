import CompanyCom from "@/components/data_analytics/hubit/CompanyCom";
import ProcessGrid from "@/components/data_analytics/process/ProcessGrid";
import SubSection1 from "@/components/data_analytics/sub_section_1/SubSection1";
import SubSection2 from "@/components/data_analytics/sub_section_2/SubSection2";
import SubSection3 from "@/components/data_analytics/sub_section_3/SubSection3";
import Top_Section from "@/components/data_analytics/top_section/Top_Section";
import Started_bar from "@/components/getstarted/Started_bar";
import HeadNotice from "@/components/HeadNotice";
import QandABlock from "@/components/q_and_a/QandABlock";
import React from "react";

function page() {
  return (
    <>
      <div className=" mt-[106px] w-full bg-background-color">
        <HeadNotice
          text1="Data-Driven Insights for"
          specialText="Business Growth,"
          text2="Unleash the Power of Analytics"
          description="We offer advanced analytics solutions that can help businesses derive intelligence from raw data, thus enabling better decision-making, improving operational efficiency, and enhancing customer experiences."
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
        <SubSection1 />
      </div>
      <div className="mt-[82px]">
        <SubSection2 />
      </div>
      <div className="mt-[82px]">
        <SubSection3 />
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
