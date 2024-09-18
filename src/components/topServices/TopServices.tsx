"use client";
import React from "react";
import DivideLine from "../common/header/Divider";
import TopServicesGrid from "./TopServicesGrid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TopServices() {
  const [refParent, inViewParent] = useInView({ triggerOnce: false });

  return (
    <div className="h-auto w-full flex justify-center py-6 md:py-0">
      <div className="w-[90%] md:w-[65%] rounded-[28px] flex flex-col items-center bg-top-services-bg">
        <motion.div
          ref={refParent}
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={inViewParent ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 3 }}
          className="w-[90%] md:w-[80%] mt-[32px]"
        >
          <motion.span
            className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] text-[#000000]"
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            Top Services to Meet Your Needs
          </motion.span>
        </motion.div>
        <DivideLine color="#D7D7E7" thickness="1px" width="80%" margin="24px 0 48px 0" />
        <div className="w-[90%] md:w-[80%]">
          <TopServicesGrid />
        </div>
      </div>
    </div>
  );
}

export default TopServices;
