import React from "react";
import SectionDataStructure from "../data_analytics/sub_section_1/SectionDataStructure";

function Section3Data() {
  return (
    <div className="w-full  h-[778px] flex items-center justify-center">
      <div className="h-full w-[74%] rounded-[32px] bg-[#F9F6FD] flex justify-center items-center ">
        <div className="w-[90%] h-[90%] grid grid-cols-2 justify-center items-center ">
          <div className="w-full h-full rounded-[16px] bg-sub-section-gradient"></div>
          <div className="w-full h-full flex  ml-[5%] ">
            <SectionDataStructure
              title="Seamless and User-Friendly Mobile Apps that Drive Engagement and Loyalty"
              text1="At Synacal, we believe that the key to a successful mobile app is its ability to engage and retain users. That’s why we prioritize the development of mobile apps that are not only visually appealing but also user-friendly and intuitive to navigate.  "
              text2="By creating seamless and user-friendly mobile apps, we aim to drive user engagement and build loyalty towards your brand, leading to increased customer retention and business growth. ."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3Data;
