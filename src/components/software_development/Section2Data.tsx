import React from "react";
import SectionDataStructure from "../data_analytics/sub_section_1/SectionDataStructure";

function Section2Data() {
  return (
    <div className="w-full  h-[778px] flex items-center justify-center">
      <div className="h-full w-[74%] rounded-[32px] bg-[#F9F6FD] flex justify-center items-center ">
        <div className="w-[90%] h-[90%] grid grid-cols-2 justify-center items-center">
          <div className="w-full h-full">
            <SectionDataStructure
              title="Transform Your Digital Landscape with Our Innovative Web Development Strategies"
              text1="At Synacal, we specialize in web development strategies that go beyond just building a website. We take a holistic approach to create websites that not only look great but also perform exceptionally well, providing an optimal user experience for your customers. "
              text2="Our innovative web development strategies are designed to transform your digital landscape, drive traffic, and boost conversions, ensuring that your website is an asset to your business."
            />
          </div>
          <div className="w-full h-full rounded-[16px] bg-sub-section-gradient"></div>
        </div>
      </div>
    </div>
  );
}

export default Section2Data;
