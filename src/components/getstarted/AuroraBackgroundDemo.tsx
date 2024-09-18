"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./Aurora_background";

export function AuroraBackgroundDemo({ navigateToClientPage }: { navigateToClientPage: () => void }) {
  return (
    <AuroraBackground className="h-[400px] md:h-[500px]">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="w-full md:w-[50%]">
          {/* Responsive heading with dynamic font size */}
          <div className="text-[28px] md:text-[40px] font-medium leading-[32px] md:leading-[48px] dark:text-white text-center">
            <div className="flex items-center justify-center">
              <motion.div
                className="cursor-pointer"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                whileHover={{
                  scale: 1.5,
                  rotate: 20,
                  y: -15,
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  y: 10,
                  transition: { type: "spring", stiffness: 400 },
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ fontSize: "1.5rem" }} // Adjusted for mobile
              >
                ✌️
              </motion.div>
              <div className="ml-2 md:ml-4">Ready to Get Started?</div>
            </div>
          </div>

          {/* Responsive paragraph text */}
          <div className="text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[32px] dark:text-white text-center">
            <span>
              Whether you need an MVP or extra bandwidth, every engagement starts
              with a discovery call. Connect with one of our specialists at a
              time that&apos;s convenient to you.
            </span>
          </div>
        </div>

        {/* Responsive button */}
        <motion.button
          onClick={navigateToClientPage}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints={{
            top: -5,
            left: -5,
            right: 5,
            bottom: 5,
          }}
          className="bg-transparent rounded-full border-white text-white border-[1px] w-fit px-4 py-2 md:px-6 md:py-3
          cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] hover:border-gradient"
        >
          <span>Let`s Innovate Together</span>
        </motion.button>
      </motion.div>
    </AuroraBackground>
  );
}
