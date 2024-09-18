// src/components/markaive/Hero.tsx

"use client";
import React from "react";
import Image from "next/image"; // Import Image from Next.js for optimization
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // Using useInView hook to trigger animation on scroll
  const [ref1, inView1] = useInView({ triggerOnce: false });

  return (
    <div className="relative w-full mt-12 md:mt-24 lg:mt-36">
      {/* Background Image with ripple/wave effect */}
      <motion.div
        className="absolute inset-0 w-full h-64 md:h-full bg-no-repeat bg-center md:bg-cover"
        style={{
          backgroundImage: `url('/markaive/bg_markaive_hero.webp')`, // Path to the background image
        }}
        // Wave animation using background-position for ripple effect
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 50%",
            "0% 100%",
            "100% 50%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 10, // Time for the full animation cycle
          repeat: Infinity, // Loop the animation infinitely
          ease: "easeInOut", // Smooth transition between movements
        }}
      ></motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex justify-center py-8">
        {/* Container for the main hero image with hover zoom effect */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={inView1 ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} // Add zoom effect on hover
          className="w-full max-w-7xl px-4"
        >
          <Image
            src="/markaive/markaive_hero.webp" // Path to the hero image
            alt="MarkAIve Hero Image"
            width={1600} // Adjusted width
            height={900} // Adjusted height
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
