// src/components/contactus/ContactMainTitle.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactMainTitle = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-[90%] flex flex-col items-center">
        {/* Animated Title in one line */}
        <motion.div
          className="flex items-center justify-center font-semibold text-center text-3xl md:text-5xl lg:text-6xl leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            style={{
              backgroundImage: "linear-gradient(90deg, #272727, #191919)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginRight: "8px",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get in
          </motion.span>

          <motion.span
            className="cursor-pointer"
            whileTap={{ scale: 1.2, x: 30 }}
            whileHover={{ scale: 1.2, x: 30 }}
            style={{
              marginRight: "8px",
              backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            touch
          </motion.span>

          <motion.span
            style={{
              backgroundImage: "linear-gradient(90deg, #272727, #191919)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginLeft: "8px",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            with us!
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMainTitle;
