import React from "react";
import LeftPart from "./LeftPart";
import MiddlePart from "./MiddlePart";
import Right from "./Right";

function Header() {
  return (
    <div className="w-full h-[90px]  bg-background-color ">
      <div className="flex items-center justify-between h-full">
        <div className="w-[148px] h-[20px] ml-[210px]">
          <LeftPart />
        </div>
        <div>
          <MiddlePart />
        </div>
        <div className="mr-[70px]">
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Header;
