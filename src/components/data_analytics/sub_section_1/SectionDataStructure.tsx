import React from "react";

type SectionDataStructureProps = {
  title: string;
  text1: string;
  text2: string;
};

function SectionDataStructure({
  title,
  text1,
  text2,
}: SectionDataStructureProps) {
  return (
    <div className="w-full h-full flex items-center justify-start">
      <div className="w-[95%] h-[95%] flex flex-col">
        <div className="w-full text-[40px] font-[600px] leading-[47.73px] text-black">
          {title}
        </div>
        <div className="w-full text-[18px] font-[400px] leading-[32px] text-[#31323E] mt-2">
          {text1}
        </div>
        <div className="w-full text-[18px] font-[400px] leading-[32px] text-[#31323E] mt-4">
          {text2}
        </div>
      </div>
    </div>
  );
}

export default SectionDataStructure;
