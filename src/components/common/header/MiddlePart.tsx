import React from "react";
import DropDown from "../DropDown";

function MiddlePart() {
  return (
    <div className="flex gap-[7px]">
      <DropDown DropDownLabel="Services" />
      <DropDown DropDownLabel="Products" />
      <DropDown DropDownLabel="Insights" />
      <DropDown DropDownLabel="Our Story" />
    </div>
  );
}

export default MiddlePart;
