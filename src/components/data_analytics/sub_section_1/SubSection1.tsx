import React from "react";
import SectionDataStructure from "./SectionDataStructure";

function SubSection1() {
  return (
    <div className="w-full  h-[778px] flex items-center justify-center">
      <div className="h-full w-[74%] rounded-[32px] bg-[#F9F6FD] flex justify-center items-center ">
        <div className="w-[90%] h-[90%] grid grid-cols-2 justify-center items-center">
          <div className="w-full h-full">
            <SectionDataStructure
              title="Data-Backed Strategies for Future-Proofing Your Business: Unlock Your Full Potential"
              text1="Unlock the full potential of your data with our expert analytics solutions. Our team of data scientists and analysts will help you make informed decisions and uncover hidden insights to drive growth and optimize performance."
              text2="From data integration and analysis to visualization and reporting, we offer end-to-end data solutions tailored to your business needs."
            />
          </div>
          <div className="w-full h-full rounded-[16px] bg-sub-section-gradient"></div>
        </div>
      </div>
    </div>
  );
}

export default SubSection1;
