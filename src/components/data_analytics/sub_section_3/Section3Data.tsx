import React from "react";
import ButtonSection from "./ButtonSection";

type ButtonSectionProps = {
  button1Name: string;
  button2Name: string;
  button3Name: string;
  button4Name: string;
  button5Name: string;
  title: string;
  content: string;
};
function Section3Data({
  button1Name,
  button2Name,
  button3Name,
  button4Name,
  button5Name,
  title,
  content,
}: ButtonSectionProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* First div - Top */}
      <div className="flex-shrink-0 text-[40px] leading-[47.73px] font-[600px] text-black">
        {title}
      </div>

      {/* Second div - Middle */}
      <div className="flex-grow flex items-center justify-center text-[18px] leading-[32px] font-[400px] text-[#31323E]">
        {content}
      </div>

      {/* Third div - Bottom */}
      <div className="flex-shrink-0">
        <ButtonSection
          button1Name={button1Name}
          button2Name={button2Name}
          button3Name={button3Name}
          button4Name={button4Name}
          button5Name={button5Name}
        />
      </div>
    </div>
  );
}

export default Section3Data;
