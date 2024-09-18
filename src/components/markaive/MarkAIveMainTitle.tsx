// src/components/markaive/MarkAIveMainTitle.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";

const MarkAIveMainTitle = () => {
  return (
    <div className="w-full flex justify-center py-8 md:py-12">
      <div className="w-full max-w-7xl px-4 flex flex-col items-center">
        {/* Animated Title */}
        <motion.div
          className="flex flex-col items-center font-semibold text-center text-3xl leading-tight md:text-5xl md:leading-snug"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
            Elevate Your Business with
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
            Intelligent Solutions
          </motion.div>
        </motion.div>

        {/* Animated Description */}
        <motion.div
          className="text-gray-600 mt-4 text-base md:text-lg text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
        >
          At Synacal, we are committed to delivering exceptional products that drive value for our clients.
          Our team of experts combines technical prowess with deep industry knowledge to develop solutions 
          that address your unique challenges and propel your business forward.
        </motion.div>

        {/* Animated Explore Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.3, type: "spring", stiffness: 300 }}
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-white font-semibold text-md border-[1px] border-black text-black hover:border-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#CF71ED] to-[#3335E2]"
          >
            Explore Product
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MarkAIveMainTitle;
