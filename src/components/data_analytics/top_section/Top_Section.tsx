import React from "react";

function Top_Section() {
  return (
    <div
      className="w flex justify-center"
      style={{ width: "100%", aspectRatio: "1269 / 752" }}
    >
      <div className="w-[74%] h-full grid grid-rows-2 gap-1 md:gap-4">
        <div className="w-full h-full  flex  gap-1 md:gap-4">
          <div className="w-[29%] h-full bg-[#DFE3E633] rounded-2xl"></div>
          <div className="w-[29%] h-full bg-[#DFE3E633] rounded-2xl"></div>
          <div className="w-[42%] h-full bg-[#DFE3E633] rounded-2xl"></div>
        </div>
        <div className="w-full h-full  flex  gap-1 md:gap-4">
          <div className="w-[19%] h-full bg-[#DFE3E633] rounded-2xl"></div>
          <div className="w-[50%] h-full bg-[#DFE3E633] rounded-2xl"></div>
          <div className="w-[31%] h-full bg-[#DFE3E633] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Top_Section;
