import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TopServicesBlockProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function TopServicesBlock({
  imageUrl,
  title,
  description,
}: TopServicesBlockProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-[19.2%] h-[19.2%]">
        <Image src={imageUrl} alt="Service Image" width={192} height={192} />
      </div>
      <div className="w-full h-[9.63%] mt-[13.55%] flex items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[24px] leading-[32px] font-medium text-black"
        >
          {title}
        </motion.span>
      </div>
      <div className="h-[28.9%] mt-[2.52%] w-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[20px] leading-[32px] font-normal text-black"
        >
          {description}
        </motion.span>
      </div>
      <div className="h-[12.65%] mt-[13.55%] w-full">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="h-[42px] rounded-[57px] w-[128px] gap-[4px] border-[1px] border-black text-center 
        flex items-center justify-center text-black font-semibold text-[14px] cursor-pointer  text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
        >
          <span className="">Read More</span>
        </motion.div>
      </div>
    </div>
  );
}

export default TopServicesBlock;
