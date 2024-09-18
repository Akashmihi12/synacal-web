// src/components/research_page/Hero.tsx

"use client";
import React from "react";
import Image from "next/image"; // Import Image from next for optimization
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // Using useInView hook to trigger animation on scroll
  const [ref1, inView1] = useInView({ triggerOnce: false });

  return (
    <div className="relative w-full mt-6 md:mt-10 mb-6 flex flex-col items-center">
      {/* Blog Title */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-black text-left w-[90%] max-w-7xl"
        initial={{ opacity: 0, y: -50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Blog
      </motion.h1>

      {/* Hero Image with content overlay */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={inView1 ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }} // Add zoom effect on hover
        className="relative w-[90%] max-w-7xl"
      >
        <Image
          src="/research_page/hero_image.webp" // Replace with correct hero image path
          alt="Research Hero Image"
          width={1600} // Adjusted width
          height={900} // Adjusted height
          className="rounded-lg shadow-lg"
        />

        {/* Text Overlay */}
        <div className="md:absolute md:inset-0 md:flex md:flex-col md:justify-end p-4 md:p-8 bg-black bg-opacity-50 rounded-lg text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-4 leading-tight">
            Actionable Insights for{" "}
            <br className="hidden md:block" /> Informed Decision Making
          </h2>
          <p className="text-sm md:text-base text-white mb-4 md:mb-6 leading-relaxed">
            Our data analytics service provides you with{" "}
            <br className="hidden md:block" />
            actionable insights that help you make informed{" "}
            <br className="hidden md:block" />
            decisions, optimize operations, and drive business growth.
          </p>

          {/* Read More Button */}
          <motion.div
            className="mt-4 flex justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "white" }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 rounded-full bg-transparent font-semibold text-md border-[1px] border-white text-white hover:border-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] transition-all duration-300"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
