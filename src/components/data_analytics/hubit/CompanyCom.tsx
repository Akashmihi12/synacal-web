import React from "react";
import CompanyList from "./CompanyList";

function CompanyCom() {
  return (
    <div
      className="flex flex-col "
      style={{ width: "100%", aspectRatio: "1728 / 269.75" }}
    >
      <div className="text-black w-full h-[27%] flex items-start justify-center text-[12px] md:text-[24px] font-medium leading-[24px] md:leading-[32px]">
        Thousands of businesses use Hubit to improve daily work
      </div>
      <div className="w-full h-[73%] bg-[#080917] flex items-center mt-1 md:mt-0">
        <CompanyList />
      </div>
    </div>
  );
}

export default CompanyCom;
