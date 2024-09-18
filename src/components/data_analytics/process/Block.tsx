import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TopServicesBlockProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function Block({ imageUrl, title, description }: TopServicesBlockProps) {
  return (
    <div className="flex flex-col w-full h-full ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-[24%] h-[24%] mb-[5%]"
      >
        <Image src={imageUrl} alt="Service Image" width={192} height={192} />
      </motion.div>
      <div className="w-full h-[11.2%] mt-[4.8%] flex items-center mb-[5%]">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[20px] leading-[28px] font-medium text-black"
        >
          {title}
        </motion.span>
      </div>
      <div className="h-[58.4%] mt-[1.6%] w-full ">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-[16px] leading-[24px] font-normal text-black "
        >
          {description}
        </motion.span>
      </div>
    </div>
  );
}

export default Block;
