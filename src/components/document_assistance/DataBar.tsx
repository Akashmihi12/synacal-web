import React from "react";
import { FcFile } from "react-icons/fc";
type DataBarProps = {
  content: string;
};

function DataBar({ content }: DataBarProps) {
  return (
    <div className="w-full h-full bg-[#F2F2F7] rounded-[10px] flex">
      <div className="w-[7%] h-full flex items-center justify-center">
        <FcFile />
      </div>
      <div className="w-[93%] h-full flex items-center">
        <span className="text-[14px] font-normal leading-[32px] text-[#31323E]">
          {content}
        </span>
      </div>
    </div>
  );
}

export default DataBar;
