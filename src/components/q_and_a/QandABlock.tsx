import React from "react";
import QandASet from "./QandASet";

function QandABlock() {
  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <div className="w-full md:w-[60%] h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <div className="mb-4 md:mb-0">
            <span className="text-[32px] md:text-[48px] font-medium leading-[36px] md:leading-[56px] text-[#0A0A0A]">
              Frequently Asked Questions
            </span>
          </div>
        </div>
        <div className="w-full">
          <QandASet />
        </div>
      </div>
    </div>
  );
}

export default QandABlock;
