"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MarkAIverighttextwithimage = () => {
  // Using useInView hook to trigger animation on scroll
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });

  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        
        {/* Right Image Section with animation from right to left */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: 100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/markaive/MarkAIve_righttext_with_image.webp"
            alt="MarkAIve Right Side Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>

        {/* Left Text Section with animation from left to right */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: -100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-semibold text-black mb-4">
            A tool that scales with your business
          </h2>
          <p className="text-gray-600 mb-4">
            MarkAIve is designed to grow alongside your business needs, offering
            scalable solutions that adapt to your operational changes.
          </p>
          <p className="text-gray-600 mb-6">
            At its core, MarkAIve empowers businesses to optimize workflows,
            improve decision-making, and scale rapidly in response to market
            demands.
          </p>

          {/* Tag buttons with hover and animation */}
          <div className="flex flex-wrap gap-2">
            <motion.button
              ref={ref3}
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
            >
              Flexible
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.1,
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
            >
              Scalable
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                scale: 1.1,
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
            >
              Powerful
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                scale: 1.1,
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
            >
              Customizable
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                scale: 1.1,
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
            >
              Agile
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarkAIverighttextwithimage;
