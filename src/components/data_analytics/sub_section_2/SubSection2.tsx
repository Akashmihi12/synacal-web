import React from "react";
import SectionDataStructure from "../sub_section_1/SectionDataStructure";

function SubSection2() {
  return (
    <div className="w-full  h-[778px] flex items-center justify-center">
      <div className="h-full w-[74%] rounded-[32px] bg-[#F9F6FD] flex justify-center items-center ">
        <div className="w-[90%] h-[90%] grid grid-cols-2 justify-center items-center ">
          <div className="w-full h-full rounded-[16px] bg-sub-section-gradient"></div>
          <div className="w-full h-full flex  ml-[5%] ">
            <SectionDataStructure
              title="Transform Your Data Into Actionable Intelligence: Advanced Analytics Made Simple"
              text1="At Synacal, we help you stay ahead of the game with our predictive analytics solutions. Our team of experts uses advanced algorithms and machine learning techniques to identify patterns in your data, predict future trends, and recommend data-driven strategies that can help maximize your ROI. Whether you need to forecast sales, optimize pricing, or reduce risk, our predictive analytics solutions can help you achieve your goals and drive business growth. "
              text2="With Synacal, you can leverage the power of predictive analytics to gain a competitive edge in today’s fast-paced business environment."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubSection2;
