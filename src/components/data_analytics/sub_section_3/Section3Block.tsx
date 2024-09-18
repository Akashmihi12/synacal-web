import React from "react";
import Section3Data from "./Section3Data";
import { title } from "process";

type Section3BlockProps = {
  reverse: boolean;
  button1Name: string;
  button2Name: string;
  button3Name: string;
  button4Name: string;
  button5Name: string;
  tittle: string;
  content: string;
};
function Section3Block({
  reverse,
  button1Name,
  button2Name,
  button3Name,
  button4Name,
  button5Name,
  tittle,
  content,
}: Section3BlockProps) {
  return (
    <div
      className={`w-full h-full flex ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="w-[55%] h-full  flex justify-end items-center py-[3.77%] ">
        <div
          className={`w-full h-full    ${reverse ? "ml-[7.54%]" : "mr-[7.54%]"} `}
        >
          <Section3Data
            button1Name={button1Name}
            button2Name={button2Name}
            button3Name={button3Name}
            button4Name={button4Name}
            button5Name={button5Name}
            title={tittle}
            content={content}
          />
        </div>
      </div>
      <div className="w-[45%] h-full bg-sub-section-gradient rounded-[16px]"></div>
    </div>
  );
}

export default Section3Block;
