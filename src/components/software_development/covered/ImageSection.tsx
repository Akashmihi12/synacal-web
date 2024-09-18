import React from "react";
import ImageTemplate from "./ImageTemplate";

function ImageSection() {
  return (
    <div className="w-full h-full grid grid-rows-2 gap-[20px]">
      {/* First Row: Divided into 12 columns */}
      <div className="w-full h-full  grid grid-cols-12 gap-1">
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
      </div>
      {/* Second Row */}
      <div className="w-full h-full  grid grid-cols-12 gap-1">
        <div className="h-full w-full "></div>
        <div className="h-full w-full "></div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full ">
          <ImageTemplate />
        </div>
        <div className="h-full w-full "></div>
        <div className="h-full w-full "></div>
      </div>
    </div>
  );
}

export default ImageSection;
