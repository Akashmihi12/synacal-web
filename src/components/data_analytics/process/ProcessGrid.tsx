import React from "react";
import GridSection from "./GridSection";

const gridData = {
  grid1: {
    title: "Uncover Insights Hidden in Your Data",
    description:
      "We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage.",
    image: "/process/Icon1.webp",
  },
  grid2: {
    title: "Transform Data into Quality Insights",
    description:
      "We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage.",
    image: "/process/Icon2.webp",
  },
  grid3: {
    title: "Extracting Value from Data",
    description:
      "We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage.",
    image: "/process/Icon3.webp",
  },
  grid4: {
    title: "Anticipate Future Trends",
    description:
      "We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage.",
    image: "/process/Icon4.webp",
  },
  grid5: {
    title: "Continuously Enhance Your Analytics",
    description:
      "We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage.",
    image: "/process/Icon5.webp",
  },
};

function ProcessGrid() {
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="h-full w-[74%] rounded-[32px] bg-[#F9F6FD] flex justify-center ">
        <div className="h-full w-[92%] flex justify-center flex-col ">
          <div className="text-[40px] font-[600] leading-[47.73px] text-black  mb-12 mt-10">
            Understanding the Process
          </div>
          <GridSection />
        </div>
      </div>
    </div>
  );
}

export default ProcessGrid;
