import React from "react";
import ImageSection from "./ImageSection";

function CoveredSectionStructure() {
  return (
    <div className="h-[306px] w-full flex justify-center">
      <div className="w-[74%] h-full  flex flex-col justify-center">
        <div className="font-medium text-[40px] leading-[48px] text-black text-center ">
          We&#39;ve Got You&nbsp;Covered
        </div>
        <div className="font-normal text-[18px] leading-[32px] text-[#31323E] text-center mt-[2%] mb-[2%]">
          From UI design for mobile apps to creating scalable MVPs, we have the
          experience to take your business to the next level.
        </div>
        <div>
          <ImageSection />
        </div>
      </div>
    </div>
  );
}

export default CoveredSectionStructure;
