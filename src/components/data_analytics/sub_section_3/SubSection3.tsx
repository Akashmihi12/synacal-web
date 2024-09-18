import React from "react";
import Section3Block from "./Section3Block";

function SubSection3() {
  return (
    <div className="w-full h-[1448px]  flex justify-center">
      <div className="w-[74%] h-full  grid grid-rows-3 gap-[80px]">
        <div className="w-full h-full ">
          <Section3Block
            reverse={true}
            button1Name="Insightful"
            button2Name="Strategic"
            button3Name="Actionable"
            button4Name="Clarity"
            button5Name="Discernment"
            tittle="Actionable Insights for Informed Decision Making"
            content="Our data analytics service provides you with actionable insights that help you make informed decisions, optimize operations, and drive business growth."
          />
        </div>
        <div className="w-full h-full ">
          <Section3Block
            button1Name="Efficiency"
            button2Name="Productivity"
            button3Name="Enhanced"
            button4Name="Optimize"
            button5Name="Effective"
            tittle="Enhanced Efficiency and Productivity"
            content="Our data analytics service helps you identify areas for improvement, streamline processes, and automate tasks, resulting in efficiency and productivity for your business."
            reverse={false}
          />
        </div>
        <div className="w-full h-full ">
          <Section3Block
            button1Name="Competitive"
            button2Name="Data Driven"
            button3Name="Innovation"
            button4Name="Strategies"
            button5Name="Analytic"
            tittle="Competitive Edge with Data-Driven Strategies"
            content="Our data analytics service enables you to leverage the power of data to gain a competitive edge, improve customer satisfaction, and drive revenue growth with data-driven strategies."
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SubSection3;
