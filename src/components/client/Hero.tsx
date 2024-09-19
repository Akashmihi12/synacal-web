// src/components/client_page/Hero.tsx

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Dummy project data
const projects = [
  { id: 1, title: "Project 1", bgColor: "bg-gray-200" },
  { id: 2, title: "Project 2", bgColor: "bg-gray-300" },
  { id: 3, title: "Project 3", bgColor: "bg-gray-400" },
  { id: 4, title: "Project 4", bgColor: "bg-gray-500" },
  { id: 5, title: "Project 5", bgColor: "bg-gray-600" },
  { id: 6, title: "Project 6", bgColor: "bg-gray-700" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next button click
  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle previous button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto py-8 md:py-16 px-4">
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-0 md:w-[50%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF71ED] to-[#3335E2]">
          Projects
        </span>
      </motion.h1>

      {/* Cards and Navigation */}
      <div className="w-full md:w-[45%] md:order-2">
        {/* Cards */}
        <motion.div
          className="relative w-full flex overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`w-full flex-none h-[200px] md:h-[300px] rounded-lg mr-4 ${project.bgColor} flex items-center justify-center`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center text-black p-6">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons (Mobile View) */}
          <motion.div
            className="flex md:hidden items-center justify-center space-x-4 absolute bottom-2 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="p-2 border border-black rounded-full bg-white text-black transition-all hover:bg-black hover:text-white hover:border-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
            >
              {/* Left Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              className="p-2 border border-black rounded-full bg-white text-black transition-all hover:bg-black hover:text-white hover:border-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              {/* Right Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Navigation Buttons (Desktop View) */}
        <motion.div
          className="hidden md:flex items-center space-x-4 md:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="p-2 border border-black rounded-full bg-white text-black transition-all hover:bg-black hover:text-white hover:border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
          >
            {/* Left Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            className="p-2 border border-black rounded-full bg-white text-black transition-all hover:bg-black hover:text-white hover:border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
          >
            {/* Right Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Paragraph Text */}
      <motion.p
        className="text-gray-600 text-base md:text-lg md:w-[50%] md:ml-8 md:order-1 mt-4 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        We are honored to partner with a diverse range of clients, from startups
        to industry leaders. With a commitment to excellence, each collaboration
        brings their vision to life, delivering results that push the boundaries
        of innovation and growth.
      </motion.p>
    </div>
  );
};

export default Hero;
