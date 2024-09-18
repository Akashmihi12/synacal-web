import React from "react";

type TableDataProps = {
  head: string;
  content: string;
};

function Table({ head, content }: TableDataProps) {
  return (
    <div className=" w-full h-full ml-[1.7%] border-[1px] border-[#ECECEC] rounded-[12px]">
      <div
        className="w-full h-[25%] bg-[#F8F8F8] text-[20px] font-medium leading-[32px] text-black p-1"
        style={{ borderRadius: "12px 12px 0px 0px" }}
      >
        {head}
      </div>
      <div
        className=" w-full h-[75%] bg-[#ECECEC] text-[18px] font-normal leading-[28px] text-black p-1"
        style={{ borderRadius: "0px 0px 12px 12px" }}
      >
        {content}
      </div>
    </div>
  );
}

export default Table;
