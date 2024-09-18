import React from "react";
import SponsorList from "./SponserList";

function SponsorGrid() {
  return (
    <div className="h-[276px] w-full">
      <div className="w-full h-full bg-[#080917] flex items-center">
        <SponsorList />
      </div>
    </div>
  );
}

export default SponsorGrid;
