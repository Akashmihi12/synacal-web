import React from "react";
import SectionDataStructure from "../data_analytics/sub_section_1/SectionDataStructure";

function Section1() {
  return (
    <div className="w-full  h-[778px] flex items-center justify-center">
      <div className="h-full w-[74%] rounded-[32px] bg-[#F9F6FD] flex justify-center items-center ">
        <div className="w-[90%] h-[90%] grid grid-cols-2 justify-center items-center">
          <div className="w-full h-full">
            <SectionDataStructure
              title="Unlocking the Power of Digital Transformation: Your Path to Future Success"
              text1="Digital transformation is more than just a buzzword – it’s a critical process that can help your business thrive in today’s ever-changing landscape. By embracing new technologies and rethinking traditional business models, you can unlock a world of untapped potential and position your company for future success. "
              text2="At its core, digital transformation is about leveraging data, automation, and innovation to create a more agile, efficient, and customer-centric organization. It requires a willingness to embrace change, adapt to new realities, and continuously evolve in response to shifting market demands."
            />
          </div>
          <div className="w-full h-full rounded-[16px] bg-sub-section-gradient"></div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
