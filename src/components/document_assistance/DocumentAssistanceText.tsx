"use client";
import React from "react";
import DataBar from "./DataBar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useInView } from "react-intersection-observer";

type DocumentAssistanceTextProps = {
  title?: string;
  content?: string;
  dataContent: string[];
};

function DocumentAssistanceText({
  title,
  content,
  dataContent,
}: DocumentAssistanceTextProps) {
  const router = useRouter(); // Initialize useRouter

  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });

  // Function to handle the navigation when the Explore button is clicked
  const handleExploreClick = () => {
    router.push("/markaive"); // Navigate to markaive page
  };

  return (
    <div className="w-full h-full flex flex-col">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={inView1 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-[144px] w-full"
      >
        <span className="text-[32px] md:text-[40px] font-semibold leading-[36px] md:leading-[48px] text-black break-words">
          {title}
        </span>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView2 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.8 }}
        className="h-[96px] w-full mt-2"
      >
        <span className="text-[16px] md:text-[18px] font-normal leading-[28px] md:leading-[32px] text-[#31323E]">
          {content}
        </span>
      </motion.div>
      <div className="h-[168px] w-full mt-3 flex flex-col gap-3">
        <motion.div
          whileHover={{ scale: 1.3 }}
          ref={ref3}
          initial={{ opacity: 0, y: -10 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 4.5 }}
          className="w-full h-full cursor-pointer"
        >
          <DataBar content={dataContent[0]} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          ref={ref3}
          initial={{ opacity: 0, y: -40 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="w-full h-full cursor-pointer"
        >
          <DataBar content={dataContent[1]} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          ref={ref3}
          initial={{ opacity: 0, y: -60 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 3 }}
          className="w-full h-full cursor-pointer"
        >
          <DataBar content={dataContent[2]} />
        </motion.div>
      </div>
      <div className="h-[42px] w-full mt-[68px]">
        <div className="w-full h-[42px] flex items-end gap-[4px]">
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              duration: 6,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="h-[42px] w-[27.85%]"
          >
            <div
              className="h-[42px] rounded-[57px] gap-[4px] border-[1px] border-black text-center flex items-center justify-center text-black font-semibold text-[14px]
            text-main-gradient hover:text-transparent hover:bg-clip-text 
                hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] cursor-pointer"
              onClick={handleExploreClick}
            >
              Explore
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              duration: 6,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="h-[42px] w-[27.85%] flex items-center justify-center"
          >
            <span
              className="text-[14px] font-semibold leading-[16.71px] text-black text-main-gradient hover:text-transparent hover:bg-clip-text 
                hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] cursor-pointer"
            >
              Get a demo
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DocumentAssistanceText;
