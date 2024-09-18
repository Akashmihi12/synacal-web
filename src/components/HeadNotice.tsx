"use client";
import React from "react";
import { motion } from "framer-motion";

type HeadNoticeProps = {
  text1: string;
  specialText: string;
  text2: string;
  description: string;
  button_text: string;
};

function HeadNotice({
  text1,
  specialText,
  description,
  button_text,
  text2,
}: HeadNoticeProps) {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[80%] flex flex-col items-center">
        <motion.div
          className="flex flex-col items-center pb-[16px] bg-background-color font-semibold text-center text-[38px] leading-[46px] md:text-[64px] md:leading-[72px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <motion.div
              style={{
                display: "inline-block",
                backgroundImage: "linear-gradient(90deg, #272727, #191919)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: "0 5px",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {text1}
            </motion.div>
            <motion.div
              className="cursor-pointer"
              whileTap={{ scale: 1.2, x: 30 }}
              whileHover={{ scale: 1.2, x: 30 }}
              style={{
                margin: "0 5px",
                display: "inline-block",
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {specialText}
            </motion.div>
          </div>

          <motion.span
            style={{
              backgroundImage: "linear-gradient(90deg, #272727, #191919)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {" "}
            {text2}
          </motion.span>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="w-[72%] pb-[4px] mt-[10px] flex items-center justify-center mb-[10px]">
            <motion.span
              className="text-[16px] font-medium leading-[24px] text-head-notice-text-color text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {description}
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="w-full flex items-end justify-center"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 300,
          }}
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            drag
            dragConstraints={{
              top: -5,
              left: -5,
              right: 5,
              bottom: 5,
            }}
            className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
            text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
          >
            <span className="cursor-pointer">{button_text}</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeadNotice;
