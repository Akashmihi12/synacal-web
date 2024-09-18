"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ImageSection() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  return (
    <div className=" w-full h-full flex items-center justify-end">
      <div className="h-[504px] w-[88.5%]  flex gap-[8.89px]">
        <div className="w-[33.9%] h-full  flex flex-col gap-[8.89px] ">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: -10 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 2.5 }}
            className="w-full h-[66.64px]  rounded-[13.88px] overflow-hidden relative"
          >
            <Image
              src="/price.webp"
              alt="Price Tag"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: -40 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="w-full h-[213.24px]  rounded-[13.88px] overflow-hidden relative"
          >
            <Image
              src="/Calender.webp"
              alt="Calender Tag"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </motion.div>
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: -60 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-[204.35px]  rounded-[13.88px] overflow-hidden relative"
          >
            <Image
              src="/Shedule.webp"
              alt="Shedule Tag"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
        <motion.div
          ref={ref4}
          initial={{ opacity: 0 }}
          animate={inView4 ? { opacity: 1 } : {}}
          transition={{ duration: 3, delay: 0.5 }}
          className="w-[66.1%] h-full  rounded-[13.88px] overflow-x-hidden relative"
        >
          <Image
            src="/dashboard.webp"
            alt="dashboard Tag"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ImageSection;
