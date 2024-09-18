import React from "react";

type ButtonSectionProps = {
  button1Name: string;
  button2Name: string;
  button3Name: string;
  button4Name: string;
  button5Name: string;
};
function ButtonSection({
  button1Name,
  button2Name,
  button3Name,
  button4Name,
  button5Name,
}: ButtonSectionProps) {
  return (
    <div className="w-[80%] h-full  flex justify-start">
      <div className="w-full h-full flex flex-col  justify-start gap-2">
        <div className="flex gap-2">
          <div
            className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
            text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
          >
            <span className="cursor-pointer">{button1Name}</span>
          </div>
          <div
            className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
          >
            <span className="cursor-pointer">{button2Name}</span>
          </div>
          <div
            className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
          >
            <span className="cursor-pointer">{button3Name}</span>
          </div>
        </div>

        {/* Bottom 2 Buttons */}
        <div className="flex gap-2">
          <div
            className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
          >
            <span className="cursor-pointer">{button4Name}</span>
          </div>
          <div
            className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
          >
            <span className="cursor-pointer">{button5Name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonSection;
