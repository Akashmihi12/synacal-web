import React from "react";
type ResearchDataBlockProps = {
  backgroundText?: string;
  date: string;
  content: string;
  imageUrl: string;
};
function ResearchDataBlock({
  backgroundText,
  date,
  content,
  imageUrl,
}: ResearchDataBlockProps) {
  return (
    <div className="w-full h-full flex flex-col gap-4 relative rounded-2xl">
      <div
        className="w-full h-[180px] sm:h-[220px] md:h-[260px] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="w-full h-full flex justify-end p-3 items-end bg-black bg-opacity-20 rounded-2xl">
          <span className="text-white text-xl font-semibold leading-tight">{backgroundText}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-normal text-gray-500">{date}</span>
        <span className="text-base font-medium text-black leading-tight">{content}</span>
      </div>
    </div>
  );
}

export default ResearchDataBlock;
