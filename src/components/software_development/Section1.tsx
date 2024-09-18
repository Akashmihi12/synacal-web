import React from "react";
import Section3Block from "../data_analytics/sub_section_3/Section3Block";

function Section1() {
  return (
    <div className="w-full h-[1936px]  flex justify-center">
      <div className="w-[74%] h-full  grid grid-rows-4 gap-[80px]">
        <div className="w-full h-full ">
          <Section3Block
            reverse={true}
            button1Name="Insightful"
            button2Name="Strategic"
            button3Name="Actionable"
            button4Name="Clarity"
            button5Name="Discernment"
            tittle="Requirements Gathering"
            content="Our team will work with you to gather all necessary information about your business model and users, ensuring compatibility with the software we build for you."
          />
        </div>
        <div className="w-full h-full ">
          <Section3Block
            button1Name="Efficiency"
            button2Name="Productivity"
            button3Name="Enhanced"
            button4Name="Optimize"
            button5Name="Effective"
            tittle="Feature Prioritization"
            content="After defining requirements, we will work with you to prioritize the key features you need. We’ll collaborate to ensure the feature list meets your requirements and specifications."
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
            tittle="Task Breakdown and Backlog Grooming"
            content="Our team will create clear guidelines and allocate tasks to each team member. We’ll regularly monitor progress and conduct sprint planning to ensure the project stays on track."
            reverse={true}
          />
        </div>
        <div className="w-full h-full ">
          <Section3Block
            button1Name="Efficiency"
            button2Name="Productivity"
            button3Name="Enhanced"
            button4Name="Optimize"
            button5Name="Effective"
            tittle="Deployment and Maintenance"
            content="Final software is released & checked for deployment issues, if any. Our team will also provide ongoing maintenance and support to keep your software running smoothly."
            reverse={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
