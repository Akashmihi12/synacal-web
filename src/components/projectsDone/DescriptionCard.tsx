"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type DescriptionCardProps = {
  text1: string;
  text2: string;
  text3: string;
};

function DescriptionCard({ text1, text2, text3 }: DescriptionCardProps) {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });

  return (
    <motion.div
      ref={ref1}
      initial={{ opacity: 0 }}
      animate={inView1 ? { opacity: 1 } : {}}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full h-full rounded-[26px]"
      style={{
        backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
      }}
    >
      <div className="w-full h-full grid grid-rows-[65%,35%] rounded-[26px]">
        <div className="relative rounded-[26px] overflow-hidden flex justify-end items-center">
          <div className="w-[65%] h-full flex justify-center items-center">
            <Image
              src="/logo/main_logo.webp"
              alt="main logo"
              layout="intrinsic"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
        <div className="rounded-[26px] flex items-center justify-center">
          <div className="w-[90%]">
            <div className="flex justify-between">
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: -250 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 2.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 7,
                }}
                className="text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] font-[600px] text-[#000000] inline-block"
              >
                {text1}
              </motion.div>
              <motion.div
                ref={ref3}
                initial={{ opacity: 0 }}
                animate={inView3 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 3.5 }}
                className="text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] font-[600px] inline-block pr-3"
                style={{
                  backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {text2}
              </motion.div>
            </div>
            <motion.div
              ref={ref4}
              initial={{ opacity: 0 }}
              animate={inView4 ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 4.5 }}
            >
              <span className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-[500px] text-[#000000]">
                {text3}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DescriptionCard;
